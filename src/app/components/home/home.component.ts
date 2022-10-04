import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public arrayImagens;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.click();
  }

  click() {
    this.apiService.cobsomeApi().subscribe((item) => {
      console.log(item)
      this.arrayImagens = item;
    });
  }
}
