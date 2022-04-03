import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Survey, Size } from "../../models/survey.model";
import { SurveyRepository } from "../../models/survey.repository";

@Component({
    selector: "add-edit",
    templateUrl: "add_edit.component.html"
})

export class AddEditComponent {
    
    title:string = 'Add a new Item';
    editing: boolean = false;
    item: Survey = new Survey();

    constructor(private repository: SurveyRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
    { 
        if (activeRoute.snapshot.params["mode"] == "delete") {
            this.deleteItem(activeRoute.snapshot.params["id"]);
        }

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        
        if (this.editing) {
            this.item = repository.getItem(activeRoute.snapshot.params["id"]);
        } 
        else {
            this.item.size = new Size();
        }        
    }

    save(form: NgForm) {
        this.repository.saveSurvey(this.item);
        this.router.navigateByUrl("survey/list");                
    }

    private deleteItem(id: string){
        this.repository.deleteSurvey(id);
        this.router.navigateByUrl("survey/list");
    }
    
}