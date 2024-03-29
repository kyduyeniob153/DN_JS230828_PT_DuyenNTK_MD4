export type TaskRequest = {
    id?: number,
    name: string,
    status: boolean,
}

export type TaskResponse = {
    id: number,
    name: string,
    status: boolean,
}