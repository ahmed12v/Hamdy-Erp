import { Component, inject } from '@angular/core';
import { SpinnerService } from '../../../core/services/shared/spin';

@Component({
  selector: 'app-spinner',
  imports: [],
  templateUrl: './spinner.html',
  styleUrl: './spinner.css',
})
export class Spinner {
  spinner = inject(SpinnerService);

}
