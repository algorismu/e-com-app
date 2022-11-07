import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  animations: [
    trigger('alert', [
      state('show', style({ transform: 'translateX(-5%)' })),
      state('dismiss', style({ transform: 'translateX(105%)' })),
      transition('show <=> dismiss', [animate('1200ms ease-in-out')]),
    ]),
  ],
})
export class ToastComponent implements OnInit {
  ngOnInit(): void {}

  constructor(public toast: ToastService) {}
}
