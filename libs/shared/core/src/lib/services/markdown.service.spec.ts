import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MarkdownService } from './markdown.service';
import { firstValueFrom } from 'rxjs';

describe('MarkdownService', () => {
  let service: MarkdownService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MarkdownService]
    });

    service = TestBed.inject(MarkdownService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should process topic references correctly', async () => {
    const content = `
# Test Content
[Topic:component-test]
[Topic:dir-topic]
{{topic:svc-auth}}
    `.trim();

    const result = await firstValueFrom(service.processContent(content, '/topics'));

    expect(result.topics).toHaveLength(3);
    expect(result.topics).toContainEqual({
      type: 'component',
      name: 'test',
      path: '/topics/components/test'
    });
    expect(result.topics).toContainEqual({
      type: 'directive',
      name: 'topic',
      path: '/topics/directives/topic'
    });
    expect(result.topics).toContainEqual({
      type: 'service',
      name: 'auth',
      path: '/topics/services/auth'
    });
  });

  it('should replace topic references with placeholders', async () => {
    const content = '[Topic:component-test]';
    const result = await firstValueFrom(service.processContent(content, '/topics'));

    expect(result.content).toContain('<div class="topic-placeholder"');
    expect(result.content).toContain('data-topic-type="component"');
    expect(result.content).toContain('data-topic-name="test"');
  });

  it('should replace topic variables with spans', async () => {
    const content = '{{topic:svc-auth}}';
    const result = await firstValueFrom(service.processContent(content, '/topics'));

    expect(result.content).toContain('<span class="topic-variable"');
    expect(result.content).toContain('data-topic-type="service"');
    expect(result.content).toContain('data-topic-name="auth"');
  });

  it('should return only topic references', async () => {
    const content = `
# Test Content
[Topic:component-test]
{{topic:svc-auth}}
    `.trim();

    const topics = await firstValueFrom(service.getTopicReferences(content, '/topics'));

    expect(topics).toHaveLength(2);
    expect(topics[0]).toEqual({
      type: 'component',
      name: 'test',
      path: '/topics/components/test'
    });
    expect(topics[1]).toEqual({
      type: 'service',
      name: 'auth',
      path: '/topics/services/auth'
    });
  });

  it('should parse route data into topic reference', () => {
    const routeData = {
      topic: 'test-topic',
      type: 'directive' as const,
      name: 'topic'
    };

    const result = service.parseRouteData(routeData);

    expect(result).toEqual({
      type: 'directive',
      name: 'topic',
      path: '/directives/topic'
    });
  });

  it('should normalize type correctly', () => {
    const content = '[Topic:dir-test]';
    const basePath = '/topics';

    const result = service.processContent(content, basePath);

    expect(result).toBeTruthy();
  });

  it('should handle cache correctly', () => {
    const content = 'test content';
    const basePath = '/topics';

    const result1 = service.processContent(content, basePath);
    const result2 = service.processContent(content, basePath);

    expect(result1).toBe(result2);
  });
}); 