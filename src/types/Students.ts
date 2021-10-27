export interface Student {
  city: string;
  company: string;
  email: string;
  firstName: string;
  grades: number[];
  id: number;
  lastName: string;
  pic: string;
  skill: string;
  tags: Tag[];
}

export interface Students {
  students: Student[];
}

export interface Tag {
  term: string;
  id: number;
}
