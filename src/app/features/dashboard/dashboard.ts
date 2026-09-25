import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface RecentClient {
  name: string;
  type: string;
  operation: string;
  status: string;
}

interface RecentActivity {
  client: string;
  action: string;
  time: string;
  icon: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  recentClients: RecentClient[] = [
    {
      name: 'Juan García',
      type: 'Particular',
      operation: 'Préstamo hipotecario',
      status: 'Activo'
    },
    {
      name: 'María López',
      type: 'Empresa',
      operation: 'Cuenta empresarial',
      status: 'Activo'
    },
    {
      name: 'Pedro Sánchez',
      type: 'Particular',
      operation: 'Préstamo personal',
      status: 'Pendiente'
    },
    {
      name: 'Ana Martínez',
      type: 'Empresa',
      operation: 'Financiación',
      status: 'Activo'
    }
  ];

  recentActivities: RecentActivity[] = [
    {
      client: 'Juan García',
      action: 'Nueva operación creada',
      time: 'Hace 10 min',
      icon: 'add_circle'
    },
    {
      client: 'María López',
      action: 'Documento recibido',
      time: 'Hace 25 min',
      icon: 'description'
    },
    {
      client: 'Pedro Sánchez',
      action: 'Operación actualizada',
      time: 'Hace 1 h',
      icon: 'edit'
    },
    {
      client: 'Ana Martínez',
      action: 'Cliente actualizado',
      time: 'Hace 2 h',
      icon: 'person'
    }
  ];
}