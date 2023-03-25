import { Component, OnInit } from '@angular/core';
import { TauriService } from '../core/services';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  value: any;

  constructor(private tauriService: TauriService) {
    if (this.tauriService.isTauri) {
      console.log('Run in Tauri');
      this.value = this.tauriService.callReadJson();
    } else {
      console.log('Run in browser');
    }
  }

  ngOnInit(): void {
    console.log('DetailComponent INIT');
  }

}
