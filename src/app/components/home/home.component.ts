import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  currentIndex = 0;
  slideWidth: number;
  intervalId: any;

  images = ['assets/images/1.png',
                    'assets/images/2.png',
                    'assets/images/3.png',
                    'assets/images/4.png',
                    'assets/images/5.png',
                    'assets/images/6.png',
                  ];

  constructor() {
    this.slideWidth = window.innerWidth;
  }

  ngOnInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Changez cette valeur pour ajuster la vitesse de défilement automatique
  }

  stopAutoScroll() {
    clearInterval(this.intervalId);
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
}
