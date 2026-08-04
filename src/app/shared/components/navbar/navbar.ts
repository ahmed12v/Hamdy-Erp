import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  @Input() isExpanded = true;
  @Output() toggleSidebar = new EventEmitter<void>();

  toggle(): void {
    this.toggleSidebar.emit();
  }
}
