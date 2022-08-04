import { Component, OnInit } from '@angular/core';
import { data } from './data';
;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  detailsForm: any = data;
  ngOnInit(): void {}
}
