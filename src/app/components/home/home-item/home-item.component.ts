import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.scss'],
})
export class HomeItemComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  @Input() imgReceber;

  ngOnInit(): void {}

}
