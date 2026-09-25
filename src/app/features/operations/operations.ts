import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';

import { Operation } from '../../core/models/operation.model';

@Component({
  selector: 'app-operations',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMenuModule
  ],
  templateUrl: './operations.html',
  styleUrl: './operations.scss'
})
export class Operations {

  operations: Operation[] = [
    {
      id: 'OP-1024',
      client: 'Juan García',
      document: '12345678A',
      type: 'Transferencia',
      amount: '1.250,00 €',
      date: '24/09/2026',
      status: 'completed'
    },
    {
      id: 'OP-1025',
      client: 'María López',
      document: '87654321B',
      type: 'Pago',
      amount: '320,50 €',
      date: '24/09/2026',
      status: 'pending'
    },
    {
      id: 'OP-1026',
      client: 'Carlos Pérez',
      document: '11223344C',
      type: 'Ingreso',
      amount: '2.000,00 €',
      date: '23/09/2026',
      status: 'completed'
    },
    {
      id: 'OP-1027',
      client: 'Ana Martín',
      document: '99887766D',
      type: 'Retirada',
      amount: '450,00 €',
      date: '23/09/2026',
      status: 'cancelled'
    },
    {
      id: 'OP-1028',
      client: 'Laura Sánchez',
      document: '44556677E',
      type: 'Transferencia',
      amount: '875,00 €',
      date: '22/09/2026',
      status: 'completed'
    }
  ];

  currentPage = 1;
  pageSize = 5;

  get totalOperations(): number {
    return this.operations.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalOperations / this.pageSize);
  }

  get paginatedOperations(): Operation[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;

    return this.operations.slice(start, end);
  }

  get pages(): number[] {
    return Array.from(
      { length: this.totalPages },
      (_, index) => index + 1
    );
  }

  get firstDisplayedOperation(): number {
    return this.totalOperations === 0
      ? 0
      : (this.currentPage - 1) * this.pageSize + 1;
  }

  get lastDisplayedOperation(): number {
    return Math.min(
      this.currentPage * this.pageSize,
      this.totalOperations
    );
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.currentPage = page;
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }
}