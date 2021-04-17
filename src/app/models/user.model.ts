export class User {
    constructor(
        public id: number = 0,
        public name: string = "",
        public firstName: string = "",
        public tel: string = "",
        public email: string = "",
        public login: string = "",
        public password: string = "",
        public role: number = 0
    ) { }
}


export enum UserRole {
    "Admin",
    "Chef de projet",
    "Comptable",
    "Directeur",
    "Ingénieur",
    "Secrétaire",
    "Technicien",
}