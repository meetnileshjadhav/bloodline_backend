import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class User {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column({unique:true})
    username:string;

    @Column()
    password:string;

    @Column({unique:true})
    email:string;

    @Column()
    phoneNumber:string;

    @Column()
    role:string;
}