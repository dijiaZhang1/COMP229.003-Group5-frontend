import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Survey } from "../../models/survey.model";
import { SurveyRepository } from "../../models/survey.repository";

@Component({
    selector: "list-survey",
    templateUrl: "list.component.html"
})

export class ListComponent {

    title = 'Survey List';

    constructor(private repository: SurveyRepository,
        private router: Router) 
    { }

    get surveyList(): Survey[] {
        return this.repository.getSurvey();        
    }
    
    deleteMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("survey/delete/"+id);
        }
    }
}


/*
import { Component,OnInit  } from "@angular/core";
import { Router } from "@angular/router";
import { Survey } from "../../models/survey.model";
import { SurveyRepository } from "../../models/survey.repository";
import {RestDataSource} from '../../models/rest.datasource';

@Component({
    selector: "list-survey",
    templateUrl: "list.component.html"
})

export class ListComponent implements OnInit {

    title = 'Survey List';
    dataSource:any = [];

    // constructor(private repository: SurveyRepository,
    //     private router: Router) 
    // { }

constructor(private restDataSource:RestDataSource) {

}

    ngOnInit():void {
        this.restDataSource.getSurveyList().subscribe((data:any) => {
            console.log(data);
            this.dataSource = data;
        });
    }

    

    // get surveyList(): Survey[] {
    //     return this.repository.getSurvey();        
    // }
    
    // deleteMethod(id: string) {
    //     if(confirm("Are you sure do you want to delete?")) {
    //         this.router.navigateByUrl("survey/delete/"+id);
    //     }
    // }
}

*/