export interface ProjectModule {
    title: string;
    description?: string;
    imageUrl?: string;
  }
  
  export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
    modules?: ProjectModule[];
    year?: number;
  }