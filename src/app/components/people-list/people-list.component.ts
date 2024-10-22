import { Component } from '@angular/core';
import { Person } from '../../interfaces/people.interface';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {
  listPeople: Person[] = [];

  constructor(private  personSvc: PeopleService) {}
  ngOnInit() {
    this.personSvc.getPerson().subscribe(respuesta => {  this.listPeople = respuesta.results;
    });
  }
}
