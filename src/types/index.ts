export interface DBDocument {
    _id: string;
    createdAt: string;
    updatedAt: string;
}
export interface Invite {
    _id: string;
    name: string;
    email: string;
    organization: IOrganization
}

export interface IOrganization extends DBDocument {
    name: string;
}

export interface IFile extends DBDocument {
    filename: string;
}


export interface IPerson extends DBDocument {
    fulllName: string,
    email: string;
    phoneNumber: string;
    organization: IOrganization;
}

export interface IDoctor extends IPerson {
    bio: string;
    cv: IFile;
    specialization: string;
    gender: "male" | "female" | "other";
}

export interface IAdmin extends IPerson {
    address: string;
    proofOfOwnership: IFile;
}

export interface IMessage {
    yours?: boolean;
    sentAt: string;
    image?: string;
    text?: string;
    sentBy?: string;
    dm?: boolean;
}