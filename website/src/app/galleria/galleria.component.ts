import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.css']
})
export class GalleriaComponent implements OnInit {
  data: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getDogList().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }

}
