export class User {
    constructor(
        public id: number = 0,
        public name: string = "",
        public firstName: string = "",
        public tel: string = "",
        public email: string = "",
        public login: string = "",
        public password: string = "",
        public role: UserRole = null
    ) { }
}


export enum UserRole {
    admin,
    chefProjet,
    comptable,
    directeur,
    ingenieur,
    secretaire,
    technicien,
}