import { Component, signal } from '@angular/core';
export type ToastType = 'success' | 'error';
@Component({
  selector: 'app-toaster',
  imports: [],
  templateUrl: './toaster.html',
  styleUrl: './toaster.css',
})

export class Toaster {
  message = signal('');
  type = signal<ToastType>('success');
  visible = signal(false);

  private timeout?: ReturnType<typeof setTimeout>;

  show(message: string, type: ToastType = 'success') {

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.message.set(message);
    this.type.set(type);
    this.visible.set(true);

    this.timeout = setTimeout(() => {
      this.visible.set(false);
    }, 5000);
  }

  close() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.visible.set(false);
  }
}
