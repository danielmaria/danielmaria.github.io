export interface Experience {
    date: string,
    location: string,
    position: string,
    projects: [
        {
            title: string,
            technologies: string[],
            responsibilities: string[],
            achievements: string[] | null
        }
    ]
}
