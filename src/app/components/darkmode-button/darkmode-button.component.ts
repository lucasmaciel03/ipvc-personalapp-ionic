import { Component, OnInit, Input } from '@angular/core';
import { ToggleService } from '../../toggle.service';

@Component({
  selector: 'app-darkmode-button',
  templateUrl: './darkmode-button.component.html',
  styleUrls: ['./darkmode-button.component.scss'],
})
export class DarkmodeButtonComponent implements OnInit {
  @Input() toggleState: boolean = false;

  constructor(private toggleService: ToggleService) { }

  ngOnInit() {
    this.toggleState = this.toggleService.getToggleState();
  }

  toggleChanged() {
    this.toggleService.setToggleState(this.toggleState);
  }
}


