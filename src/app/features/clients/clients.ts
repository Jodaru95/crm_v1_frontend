import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-clients',
    imports: [
        MatButtonModule,
        MatIconModule
    ],
    templateUrl: './clients.html',
    styleUrl: './clients.scss'
})
export class Clients {}