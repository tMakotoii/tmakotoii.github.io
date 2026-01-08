export interface ProjectPlateProps {
    project: {
        id: string,
        title: string,
        description: string,
        logo: string,
    }
}

export interface ProjectListProps {
    isStatusBar?: boolean
}

export interface ProjectConfigType {
    id: string,
    name: string,
    title: string,
    description: string,
    texts: string[],
    logo: string,
    images: string[],
}