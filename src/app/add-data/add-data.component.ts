import { Component, OnInit, TemplateRef, AfterViewInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  modalRef: BsModalRef;
  loc = '';
  locArr = [];
  slotArr = [];
  selectedlocation;
  selectedslot;
  slott = '';
  constructor(private modalService: BsModalService) {
    // localStorage.setItem('locarr', JSON.stringify(this.locArr));

   }

  ngOnInit(): void {
    if(!!localStorage.getItem('locarr')){
      this.locArr = JSON.parse(localStorage.getItem('locarr'));
    }

    if(!!localStorage.getItem('slotarr')){
      this.locArr = JSON.parse(localStorage.getItem('slotarr'));
    }
  }

  onSubmit(){

  }

  openModal(template: TemplateRef<any>) {
    
    this.modalRef = this.modalService.show(template);
  }

  onSubmitlocation(f: NgForm){
// console.log(this.loc);
    this.locArr.push(this.loc);
    localStorage.setItem('locarr', JSON.stringify(this.locArr));
    this.modalRef.hide();
    f.resetForm();
  }

  onSubmitslot(f: NgForm){
    console.log(this.slott);

        this.slotArr.push(this.slott);
        localStorage.setItem('slotarr', JSON.stringify(this.slotArr));
        this.modalRef.hide();
        f.resetForm();
      }

}
