export interface Experience {
    date: string,
    img: string,
    location: string,
    position: string,
    projects: [
        {
            title: string,
            technologies: string[],
            description: string,
            shortDescription: string
        }
    ]
}
