import { Component } from '@angular/core';
import {UserMenu} from '../../component/user-menu/user-menu';

@Component({
  selector: 'app-header',
    imports: [
        UserMenu
    ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
