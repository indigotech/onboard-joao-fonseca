export interface PaginatedUsersType {
    nodes: string;
}
export interface LoginType {
    token: string;
}
export interface UserInputType {
    name: string
    email: string
    phone: string
    birthDate: string
    password: string
    role: string
}
export interface LoginInputType {
    email: string
    password: string
}
export interface UserType {
    id: string
    name: string
    email: string
    phone: string
    birthDate: string
    password: string
    role: string
}