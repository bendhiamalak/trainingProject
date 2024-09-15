import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  texts: string[] = ["DESIGNER", "POWERPOINT SPECIALIST"];  
  currentText: string = ""; 
  textIndex: number = 0;  // Index of the current word
  charIndex: number = 0;  // Index of the current character in the word
  typingSpeed: number = 100;  // Typing speed in milliseconds
  deletingSpeed: number = 50;  // Backspace speed in milliseconds
  delayBetweenWords: number = 1000;  // Delay before starting to delete a word

  ngOnInit(): void {
    this.startTyping()
  }

  /*var typed=new Typed("#typed", {
    strings:["Designer","PowerPoint specialist "],
    typeSpeed:80,
    backSpeed:50,
    loop:true
  })*/

    startTyping() {
      // Use an interval to simulate typing and deleting
      const typingInterval = setInterval(() => {
        const currentWord = this.texts[this.textIndex];
  
        if (this.charIndex < currentWord.length) {
          // Typing effect
          this.currentText += currentWord[this.charIndex];
          this.charIndex++;
        } else {
          // Word is fully typed, wait before deleting
          clearInterval(typingInterval);
          setTimeout(() => this.startDeleting(), this.delayBetweenWords);
        }
      }, this.typingSpeed);
    }
  
    startDeleting() {
      // Use an interval to simulate backspacing
      const deletingInterval = setInterval(() => {
        if (this.charIndex > 0) {
          // Deleting effect
          this.currentText = this.currentText.substring(0, this.currentText.length - 1);
          this.charIndex--;
        } else {
          // Word is fully deleted, move to the next word
          clearInterval(deletingInterval);
          this.textIndex = (this.textIndex + 1) % this.texts.length;  // Move to the next word
          this.startTyping();
        }
      }, this.deletingSpeed);
    }
}
