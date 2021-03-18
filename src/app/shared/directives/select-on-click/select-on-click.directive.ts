import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appSelectOnClick]',
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        '(click)': 'toggleStyles()',
    },
})
export class SelectOnClickDirective {
    @Input() borderColor: string;

    private border = '';

    private fontSize = '16px';

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    toggleStyles() {
        this.border = this.border === '' ? `solid 1px ${this.borderColor}` : '';
        this.fontSize = this.fontSize === '16px' ? '20px' : '16px';

        this.setBorder();
        this.setFont();
    }

    setBorder() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'border', this.border);
    }

    setFont() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', this.fontSize);
    }
}
