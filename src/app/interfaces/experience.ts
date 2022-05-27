export interface Experience {
    date: string,
    location: string,
    position: string,
    projects: [
        {
            title: string,
            topics: string[]
        }
    ]
}
