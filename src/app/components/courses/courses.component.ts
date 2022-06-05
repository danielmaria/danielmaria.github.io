import { Course } from './../../interfaces/course';
import { Component, Input, OnChanges } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnChanges {

  @Input() courses: Course[] = [];
  @Input() certificationTitle: String | null = null;
  @Input() qualificationsTitle: String | null = null;
  
  closeResult = '';

  constructor(private modalService: NgbModal) { }

  ngOnChanges(): void {
    if (this.courses) {
      this.courses?.sort((c1, c2) => {return new Date(c2.date).getTime() - new Date(c1.date).getTime()});      
    }
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'},).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}