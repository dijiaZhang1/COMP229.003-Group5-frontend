import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";

@Injectable()
export class SurveyRepository {

    private survey: Survey[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getSurveyList().subscribe(data => {
            this.survey = data;
        });
    }

    getSurvey(): Survey[] {
        return this.survey;
    }

    getItem(id: string): Survey {
        return (this.survey.find(item => item._id === id)!);
    }

    async saveSurvey(item: Survey) {

        // Add
        if (item._id == null || item._id == "") {
            this.dataSource.insertSurvey(item)
                .subscribe(response => {
                    if(response._id) // If API created
                    {
                        this.survey.push(response);
                    }
                    else{ // If API send error.
                        // Convert to ResponseModel to get the error message.
                        let error = response as ResponseModel;  
                        alert(`Error: ${error.message}`);
                    }
                });
        }
        // Edit 
        else {
            this.dataSource.updateSurvey(item).subscribe(response => {
                if (response.success) {
                    this.survey.splice(
                        this.survey.findIndex(i => i._id == item._id), 
                        1, 
                        item
                    );
                }
                else{
                    alert(`Error: ${response.message}`);
                }        
            });
        }
    }

    deleteSurvey(id: string) {
        this.dataSource.deleteSurvey(id).subscribe(response => {
            if (response.success) {
                this.survey.splice(
                    this.survey.findIndex(item => item._id == id), 
                    1
                );                                
            }
            else{
                alert(response.message);
            }
        })
    }

}