
export interface ITeam{
    fields:{
        name:string;
        role:string;
        description:string;
        image:{
            fields:{
                file:{
                    url:string
                }
            }
        }

    }
}
    