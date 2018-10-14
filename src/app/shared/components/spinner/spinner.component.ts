import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
    @Input() public color: string;
    @Input() public size: string;

    public arrayItems(n: number) {
        return Array(n);
    }
}
