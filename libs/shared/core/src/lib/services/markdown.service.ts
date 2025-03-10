import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { marked } from 'marked';

export interface TopicMetadata {
  title: string;
  description: string;
  tags: string[];
  category: string;
}

export interface TopicReference {
  type: 'directive' | 'component' | 'service' | 'pipe';
  name: string;
  path: string;
  metadata?: TopicMetadata;
}

export interface MarkdownSection {
  content: string;
  topics: TopicReference[];
}

export interface TopicRouteData {
  topic: string;
  type: TopicReference['type'];
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  private readonly contentRoot = '/assets/docs';
  private readonly topicPattern = /\[Topic:([\w-]+)\]/g;
  private readonly variablePattern = /\{\{topic:([\w-]+)\}\}/g;
  private readonly cache = new Map<string, BehaviorSubject<MarkdownSection>>();

  constructor(private http: HttpClient) {}

  /**
   * Get topic content from assets
   * @param slug Topic slug
   */
  getTopic(slug: string): Observable<string> {
    return this.http.get(`${this.contentRoot}/${slug}.md`, { responseType: 'text' });
  }

  /**
   * Parse markdown content
   * @param content Raw markdown content
   */
  private parse(content: string): string {
    return marked.parse(content, {
      breaks: true,
      gfm: true
    }) as string;
  }

  /**
   * Process markdown content and extract topic references
   * @param content Raw markdown content
   * @param basePath Base path for topic references
   */
  processContent(content: string, basePath: string): Observable<MarkdownSection> {
    const cacheKey = `${basePath}:${content}`;
    
    if (!this.cache.has(cacheKey)) {
      const subject = new BehaviorSubject<MarkdownSection>(this.parseContent(content, basePath));
      this.cache.set(cacheKey, subject);
    }

    const cached = this.cache.get(cacheKey);
    if (!cached) {
      throw new Error(`Failed to retrieve cached content for key: ${cacheKey}`);
    }
    
    return cached.asObservable();
  }

  /**
   * Parse markdown content and extract topic references
   * @param content Raw markdown content
   * @param basePath Base path for topic references
   */
  private parseContent(content: string, basePath: string): MarkdownSection {
    const topics: TopicReference[] = [];
    const parsedContent = this.parse(content);
    
    // Process [Topic:name] syntax
    const processedContent = parsedContent.replace(this.topicPattern, (match, name) => {
      const [type, identifier] = name.split('-');
      const topic: TopicReference = {
        type: this.normalizeType(type),
        name: identifier,
        path: this.buildTopicPath(type, identifier, basePath)
      };
      topics.push(topic);
      return this.createTopicPlaceholder(topic);
    });

    // Process {{topic:name}} syntax
    const finalContent = processedContent.replace(this.variablePattern, (match, name) => {
      const [type, identifier] = name.split('-');
      const topic: TopicReference = {
        type: this.normalizeType(type),
        name: identifier,
        path: this.buildTopicPath(type, identifier, basePath)
      };
      topics.push(topic);
      return this.createTopicVariable(topic);
    });

    return {
      content: finalContent,
      topics
    };
  }

  /**
   * Get topic references from markdown content
   * @param content Raw markdown content
   * @param basePath Base path for topic references
   */
  getTopicReferences(content: string, basePath: string): Observable<TopicReference[]> {
    return this.processContent(content, basePath).pipe(
      map((section: MarkdownSection) => section.topics)
    );
  }

  /**
   * Parse route data into topic reference
   * @param data Route data containing topic information
   */
  parseRouteData(data: TopicRouteData): TopicReference {
    return {
      type: this.normalizeType(data.type),
      name: data.name,
      path: this.buildTopicPath(data.type, data.name, '')
    };
  }

  /**
   * Build topic path based on type and identifier
   * @param type Topic type
   * @param identifier Topic identifier
   * @param basePath Base path for the topic
   */
  private buildTopicPath(type: string, identifier: string, basePath: string): string {
    const normalizedType = this.normalizeType(type);
    return `${basePath}/${normalizedType}s/${identifier}`;
  }

  /**
   * Create HTML placeholder for topic
   * @param topic Topic reference
   */
  private createTopicPlaceholder(topic: TopicReference): string {
    const { type, name } = topic;
    return `<div class="topic-placeholder" data-topic-type="${type}" data-topic-name="${name}"></div>`;
  }

  /**
   * Create HTML variable placeholder for topic
   * @param topic Topic reference
   */
  private createTopicVariable(topic: TopicReference): string {
    const { type, name } = topic;
    return `<span class="topic-variable" data-topic-type="${type}" data-topic-name="${name}"></span>`;
  }

  /**
   * Normalize topic type to supported type
   * @param type Raw type from markdown
   */
  private normalizeType(type: string): TopicReference['type'] {
    const types: Record<string, TopicReference['type']> = {
      dir: 'directive',
      component: 'component',
      svc: 'service',
      pipe: 'pipe'
    };

    return types[type.toLowerCase()] || 'component';
  }

  /**
   * Clear cache for specific content or all cache if no content provided
   * @param content Optional content to clear from cache
   * @param basePath Optional base path to clear from cache
   */
  clearCache(content?: string, basePath?: string): void {
    if (content && basePath) {
      const cacheKey = `${basePath}:${content}`;
      this.cache.delete(cacheKey);
    } else {
      this.cache.clear();
    }
  }
}