import { Component } from '@angular/core';

import { AddPage } from '../add/add';
import { AboutPage } from '../about/about';
import { WorkoutsPage } from '../workouts/workouts';
// import { AddWorkoutPage } from '../add-workout/add-workout';

// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WorkoutsPage;
  tab2Root = AddPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
