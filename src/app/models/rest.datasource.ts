import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';
import { Inventory } from "./survey.model";
import { ResponseModel } from "./response.model";
import { User } from "./user.model";

const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token: string

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getInventoryList(): Observable<Inventory[]> {
        return this.http.get<Inventory[]>(this.baseUrl + "inventory/list");
    }

    // Consumes Inventory endpoints of the Backend
    insertInventory(item: Inventory): Observable<Inventory> {
        return this.http.post<Inventory>(
            this.baseUrl + "inventory/add",
            item, 
            this.getOptions())
                .pipe(
                    map(response => {
                        return response;
                    }),
                    catchError(error => {
                        console.log(error.error);
                        return of(error.error);
                    })
                );
    }

    updateInventory(item: Inventory): Observable<ResponseModel> {
        return this.http.put<ResponseModel>(
            `${this.baseUrl}inventory/edit/${item._id}`,
            item, 
            this.getOptions())
                .pipe(
                    map(response => {
                        return response;
                    }),
                    catchError(error => {return of(error.error)})
                );
    }

    deleteInventory(id: string): Observable<ResponseModel> {
        return this.http.delete<ResponseModel>(
            `${this.baseUrl}inventory/delete/${id}`,
            this.getOptions())
                .pipe(
                    map(response => {
                        return response;
                    }),
                    catchError(error => {return of(error.error)})
                );
    }


    // Consumes Users endpoint of the Backend
    authenticate(username: string, pass: string): Observable<ResponseModel> {
        return this.http.post<any>(this.baseUrl + "users/signin", {
            username: username, password: pass
        }).pipe(
            map(response => {
                // console.log(response);
                this.auth_token = response.success ? response.token : null;
                return response;
            }),
            catchError(error => {return of(error.error)})
        );
    }

    signupUser(user: User): Observable<ResponseModel> {
        return this.http.post<ResponseModel>(this.baseUrl + "users/signup", user)
            .pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    private getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer ${this.auth_token}`
            })
        }
    }
}
