import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colores: string[] = [
    'background-green50',
    'background-green100',
    'background-green200',
    'background-green300',
    'background-green400',
    'background-green500',
    'background-green600',
    'background-green700',
    'background-green800',
    'background-green900'
  ];
}
