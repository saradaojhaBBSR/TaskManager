import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Dashboard } from "./dashboard/dashboard";
import { About } from "./about/about";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Dashboard, About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('taskmanager.ui');
}
