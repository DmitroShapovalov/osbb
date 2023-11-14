import {AfterViewInit, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() abbreviation: string = '';
  @Input() size: number = 40;

  styles = {
    'min-width.px': this.size,
    'min-height.px': this.size,
    'max-width.px': this.size,
    'max-height.px': this.size,
  };
}
