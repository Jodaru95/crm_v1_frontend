import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-configuration',
    imports: [
        MatButtonModule,
        MatIconModule
    ],
    templateUrl: './configuration.html',
    styleUrl: './configuration.scss'
})
export class Configuration {}