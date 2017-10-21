import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class WorkoutService{
	http: any;
	apiKey: String;
	WorkoutsUrl: String; 

	// Pour info, pas besoin d'importer le module Http dans App.module (car on utilise ionic)
	constructor(http: Http)
	{
		this.http = http;
		this.apiKey = '7PUUoyJGsogGHPBywpxH45FmbxL2J0QN';
		this.WorkoutsUrl = 'https://api.mlab.com/api/1/databases/my-workouts/collections/workouts';
	}

	getWorkouts()
	{
		return this.http.get(this.WorkoutsUrl + '?apiKey=' + this.apiKey)
			.map(res => res.json()); 
	}

	addWorkout(workout)
	{
		var headers = new Headers(); 
		headers.append('Content-Type', 'application/json'); 
		return this.http.post(this.WorkoutsUrl + '?apiKey=' + this.apiKey, JSON.stringify(workout), {headers: headers})
			.map(res => res.json()); 
	}
}