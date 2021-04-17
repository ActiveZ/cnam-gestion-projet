import { Organisme } from "./organisme.model";

export class Project {
    constructor(
        public id: number = 0,
        public name: string = "",
        public description: string = "",
        public startDate: Date = new Date(),
        public endDate : Date = new Date(),
        public amount: number = 0,
        public idLeader: number = null,
        public idOrganisme: number = null,
        public idDocuments: number = 0,
        ){ }

} 