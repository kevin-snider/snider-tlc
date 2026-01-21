
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface JobPosition {
  title: string;
  description: string;
  requirements: string[];
  qualifications: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description?: string;
}