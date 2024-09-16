import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor,CarouselModule ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    dots: false,
    responsive: {
      0: {
        items: 1 // Show 1 slide on small screens
      },
      768: {
        items: 2 // Show 2 slides on medium screens
      },
      1024: {
        items: 3 // Show 3 slides on large screens
      }
    },
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  };

  slidesStore = [
    { id: '1', src: 'assets/images/profilePic.png', alt: 'Image 1', title: 'Slide 1' },
    { id: '2', src: 'assets/images/profilePic.png', alt: 'Image 2', title: 'Slide 2' },
    { id: '3', src: 'assets/images/profilePic.png', alt: 'Image 3', title: 'Slide 3' },
    { id: '4', src: 'assets/images/profilePic.png', alt: 'Image 4', title: 'Slide 4' },
    { id: '5', src: 'assets/images/profilePic.png', alt: 'Image 5', title: 'Slide 5' }
  ];
}
