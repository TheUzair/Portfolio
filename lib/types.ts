export interface Project {
  id: string;
  title: string;
  overview: string;
  description: string;
  imageUrl: string;
  link: string;
  technologies: string[];
  github: string;
}

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  budget: string;
  message: string;
}
