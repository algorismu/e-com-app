import { Component, Input, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  animations: [
    trigger('alert', [
      state('show', style({ transform: 'translateX(-5%)' })),
      state('dismiss', style({ transform: 'translateX(105%)' })),
      transition('show <=> dismiss', [animate('1500ms ease-in-out')]),
    ]),
  ],
})
export class ToastComponent implements OnInit {
  @Input() message = 'Message goes here!';
  showMessage: boolean = true;
  ngOnInit(): void {}
}
