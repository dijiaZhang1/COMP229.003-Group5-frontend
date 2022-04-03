import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { InventoryRepository } from "./survey.repository";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [
        InventoryRepository,
        RestDataSource,
        AuthService
    ]
})

export class ModelModule { }