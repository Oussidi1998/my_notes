import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TechnologyProvider {
	private technologies=[];
  private ArchivedTech=[];

  constructor(public http: HttpClient) {
  }

  removeTech(TechIndex){
    let techToRemove = this.technologies[TechIndex];
    this.technologies.splice(TechIndex,1);
    this.ArchivedTech.push(techToRemove);
  }
  getAllTech(){
  	return this.technologies;
  }

  getArchiveTech(){
    return this.ArchivedTech;
  }

  addTech(tech){
  	this.technologies.push(tech);
  }

  editTech(index,tech){
    this.technologies[index]=tech;
  }
}
