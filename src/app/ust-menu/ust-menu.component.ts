import { Component, OnInit } from '@angular/core';
import {MessageService} from "../messages.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-ust-menu',
  templateUrl: './ust-menu.component.html',
  styleUrls: ['./ust-menu.component.css']
})
export class UstMenuComponent implements OnInit {

  closeResult: string;
  modalInstance;

  constructor(private _messageService:MessageService, private modalService: NgbModal) { }

  ngOnInit() {
    this._messageService.ModalPublisher
      .subscribe(_message =>{
        if(_message && _message.op =='close'){
          console.log("Message : ", _message)
          this.modalInstance.close();
        }
      })
  }

  open(content) {

  this.modalInstance =  this.modalService.open(content);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
