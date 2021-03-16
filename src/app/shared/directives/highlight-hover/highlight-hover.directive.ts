import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHighlightHover]',
})
export class HighlightHoverDirective {
    @HostBinding('style.font-style') font = 'italic';

    constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

    @HostListener('mouseenter', ['$event'])
    onMouseEnter(event: MouseEvent) {
        this.highlight('wheat');
    }

    @HostListener('mouseleave', ['$event'])
    onMouseLeave(event: MouseEvent) {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', color);
    }
}
