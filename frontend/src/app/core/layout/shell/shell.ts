import { Component } from '@angular/core';
import {Header} from '../header/header';
import {MainContent} from '../main-content/main-content';
import {Footer} from '../footer/footer';

@Component({
  selector: 'app-shell',
    imports: [
        Header,
        MainContent,
        Footer
    ],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell {

}
