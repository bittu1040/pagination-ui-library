import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'pagination-ng',
    templateUrl: './pagination-ng.component.html',
    styleUrls: ['./pagination-ng.component.scss']
})
export class PaginationNgComponent {

  @Input() currentPageNumber: number = 1;
  @Input() totalPages: number = 0;        // total number of pages
  @Input() currentPageSize: number = 10;   // default page size
  @Input() pageSizes: number[] = [10, 20, 50];
  @Input() totalItems: number = 0;

  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  goToFirstPage(): void {
    if (this.currentPageNumber === 1) return;
    this.currentPageNumber = 1;
    this.pageChange.emit(this.currentPageNumber);
  }

  goToPreviousPage(): void {
    if (this.currentPageNumber <= 1) return;
    this.currentPageNumber--;
    this.pageChange.emit(this.currentPageNumber);
  }

  goToNextPage(): void {
    if (this.currentPageNumber >= this.totalPages) return;
    this.currentPageNumber++;
    this.pageChange.emit(this.currentPageNumber);
  }

  goToLastPage(): void {
    if (this.currentPageNumber === this.totalPages) return;
    this.currentPageNumber = this.totalPages;
    this.pageChange.emit(this.currentPageNumber);
  }

  onPageSizeChange(newSize: string): void {
    const size = parseInt(newSize, 10);
    if (size !== this.currentPageSize && !isNaN(size) && size > 0) {
      this.currentPageSize = size;
      this.pageSizeChange.emit(size);
    }
  }
}
