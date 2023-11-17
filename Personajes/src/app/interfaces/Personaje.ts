export interface Personaje{
    info: {
        count: number,
        
        page: number,
        next: string,
        prev: any
        },
        results: [
        {
        id: number,
        name: string,
        status: string,
        species: string,
        type: any,
        gender: string,
        origin: {
        name: string,
        url: string
        },
        location: {
        name: string,
        url: string
        },
        image: string,
        episode: any,
        url: string,
        created: string
    }
    ]
}