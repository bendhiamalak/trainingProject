import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-numbers',
  standalone: true,
  imports: [],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.scss'
})
export class NumbersComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const counters = this.el.nativeElement.querySelectorAll('.count');
    const speed = 200; // The lower the number, the faster the count

    counters.forEach((counter: any) => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Calculate the increment
        const increment = target / speed;

        // Check if count is less than target
        if (count < target) {
          // Add the increment to the current count
          this.renderer.setProperty(counter, 'innerText', Math.ceil(count + increment));
          // Call the function again after a short delay
          setTimeout(updateCount, 30);
        } else {
          this.renderer.setProperty(counter, 'innerText', target);
        }
      };

      updateCount();
    });
  }
}
