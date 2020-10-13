import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TrainingService } from '../training.service';
import { Training } from '../traning.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit {
  trainings: Training[] = [];
  @Output() trainingStart = new EventEmitter<void>();

  constructor(private traningService: TrainingService) {}

  ngOnInit(): void {
    this.trainings = this.traningService.getTranings();
  }

  startTraining() {
    this.trainingStart.emit();
  }
}
