import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css'],
})
export class PdfViewerComponent implements OnInit {
  @Input() patch: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
