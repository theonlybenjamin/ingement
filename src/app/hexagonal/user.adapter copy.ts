import { UserPort } from "./user.interface";

export class UserAdapter implements UserPort {
    createUser(): void {
        throw new Error("Method not implemented.");
    }
    getUser(): void {
        throw new Error("Method not implemented.");
    }
    updateUser(): void {
        throw new Error("Method not implemented.");
    }
    deleteUser(): void {
        throw new Error("Method not implemented.");
    } 

}