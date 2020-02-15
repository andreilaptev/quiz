import { Component } from '@angular/core';
import * as questions  from '../assets/questions.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quiz';

 start: boolean = false;
 currentQuestion = questions[0]
 questionsCounter: number = 0;
 numberOfQuestons: number;
 score: number = 0;
 end: boolean = false
 message: string;

  ngOnInit(){
    this.numberOfQuestons = questions['length']
  }

  onStart(){
    this.start = !this.start;
    this.questionsCounter += this.questionsCounter;
  }

  changeQuestion(e){
    if (this.currentQuestion.correctAnswer == e) {
      this.score = this.score + 1;
      sessionStorage.setItem('score', this.score.toString());
    } 
    this.questionsCounter ++;
    this.questionsCounter == this.numberOfQuestons ? this.endQuiz() : this.currentQuestion = questions[this.questionsCounter]  
  }

      endQuiz(){
        this.end = true;
        if(sessionStorage.getItem('score') == null) sessionStorage.setItem('score', '0')
        this.message = "Quiz is over. Your total score is " + sessionStorage.getItem('score') + " out of  " + this.numberOfQuestons;
        sessionStorage.clear();
    }

    retake() {
      window.location.reload();
    }
}
