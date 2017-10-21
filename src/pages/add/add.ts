import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkoutService} from '../../app/services/workout.service';
import { WorkoutsPage} from '../workouts/workouts'; 
@Component({
  selector: 'add',
  templateUrl: 'add.html'
})
export class AddPage {

  public title: String; 
  public note: String;
  public type: String;
  public result: any; 

  constructor(public navCtrl: NavController, private workoutService: WorkoutService) {

  }


onSubmit()
{
	console.log('Add work'); 

  	var workout = {
  		title: this.title,
  		note: this.note, 
  		type: this.type
  	};

  	// Add workout
  	this.workoutService.addWorkout(workout)
  		.subscribe(data => {
  			this.result = data; 
  		});

  	this.navCtrl.push(WorkoutsPage); 	
}
}
