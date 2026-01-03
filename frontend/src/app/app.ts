import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainContent} from './core/layout/main-content/main-content';
import {Shell} from './core/layout/shell/shell';

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, MainContent, Shell],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
