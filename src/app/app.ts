import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Spinner } from './shared/addtions/spinner/spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Navbar , Spinner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HamdyERP');
  isExpanded = true;
  
  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
