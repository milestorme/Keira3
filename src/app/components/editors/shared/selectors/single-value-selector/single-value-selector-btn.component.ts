import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';

import { SingleValueSelectorModalComponent } from './single-value-selector-modal.component';
import { BaseSelectorBtnComponent } from '../base-selector/base-selector-btn.component';

@Component({
  selector: 'app-single-value-selector-btn',
  templateUrl: '../base-selector/base-selector-btn.component.html',
  styleUrls: ['../base-selector/base-selector-btn.component.scss']
})
export class SingleValueSelectorBtnComponent extends BaseSelectorBtnComponent {

  constructor(
    modalService: BsModalService,
  ) {
    super(
      SingleValueSelectorModalComponent,
      modalService,
    );
  }
}