export interface UserPort {
    createUser(): void;
    getUser(): void;
    updateUser(): void;
    deleteUser(): void;
}