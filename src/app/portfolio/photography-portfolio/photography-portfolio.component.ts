import { Component } from '@angular/core';
import * as Photos from './photos.json';

@Component({
    selector: 'photography-portfolio',
    templateUrl: './photography-portfolio.component.html',
    styleUrls: ['./photography-portfolio.component.scss']
})
export class PhotographyPortfolioComponent {

    photos: Array<any>;

    constructor() {
        this.photos = Photos.photoset.photo;
    }
}
