import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  NbCardModule, 
  NbButtonModule, 
  NbIconModule,
  NbSelectModule,
  NbRadioModule,
  NbCheckboxModule,
  NbTabsetModule
} from '@nebular/theme';
import { ButtonComponent } from '@angular-bits/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button-showcase',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbSelectModule,
    NbRadioModule,
    NbCheckboxModule,
    NbTabsetModule,
    ButtonComponent
  ],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonShowcaseComponent {
  status: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger' = 'primary';
  size: 'tiny' | 'small' | 'medium' | 'large' | 'giant' = 'medium';
  appearance: 'filled' | 'outline' | 'ghost' = 'filled';
  disabled = false;
} 