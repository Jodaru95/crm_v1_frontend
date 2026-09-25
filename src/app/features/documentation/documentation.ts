import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-documentation',
    imports: [
        MatButtonModule,
        MatIconModule
    ],
    templateUrl: './documentation.html',
    styleUrl: './documentation.scss'
})
export class Documentation {}