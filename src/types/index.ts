export interface Invite {
    _id: string;
    name: string;
    email: string;
    organization: IOrganization
}

export interface IOrganization {
    _id: string;
    name: string;
}
