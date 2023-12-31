export interface Details {
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
      episode: string[],
      url: string,
      created: string
}