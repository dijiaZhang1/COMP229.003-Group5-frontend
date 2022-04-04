export class Survey {
    
    constructor(
        public _id?: string,
        public title?: string,
        public type?: string,
        public startdate?: Date,
        public enddate?: Date,
        public username?: string,
        public question?: string[]
    ){
    }

}

/*
export class Size {

    constructor(
        public h?: number,
        public w?: number,
        public uom?: string
    ){}

}
*/