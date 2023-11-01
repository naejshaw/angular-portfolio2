import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  numberOfItems: number;
  limitPerPage: number;
  totalPages!: number;
  paginationSize: number;
  currentPage: number;

  constructor() {
    this.numberOfItems = 0;
    this.limitPerPage = 3;
    this.paginationSize = 7;
    this.currentPage = 1;
  }

  ngOnInit(): void {
    this.numberOfItems = document.querySelectorAll(".card-content .card").length;
    this.totalPages = Math.ceil(this.numberOfItems / this.limitPerPage);

    this.showPage(1);
  }

  getPageList(totalPages: number, page: number, maxLength: number): number[] {
    function range(start: number, end: number): number[] {
      return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    const sideWidth = maxLength < 9 ? 1 : 2;
    const leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    const rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
      return range(1, totalPages);
    }

    if (page <= maxLength - sideWidth - 1 - rightWidth) {
      return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }

    if (page >= totalPages - sideWidth - 1 - rightWidth) {
      return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }

    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
  }

  showPage(whichPage: number): void {
    if (whichPage < 1 || whichPage > this.totalPages) return;

    this.currentPage = whichPage;

    //TODO: Atualizar a lista de páginas.
    const pages = this.getPageList(this.totalPages, this.currentPage, this.paginationSize);

    //TODO: Adicionar o código para mostrar as páginas.
  }

  onNextPageClick(): void {
    this.showPage(this.currentPage + 1);
  }

  onPreviousPageClick(): void {
    this.showPage(this.currentPage - 1);
  }
}
