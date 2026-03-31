export type IBlogDT = {
  id: number;
  img: string;
  tag: string;
  title: string;
  author: string;
  author_img?: string;
  author_location?: string;
  desc?: string;
  date: string;
  postboxQuote1?: boolean;
  postboxQuote2?: boolean;
  place?: string;

  // ✅ Added for Job System (No removal)
  employmentType?: string;      // Full-Time / Part-Time / Contract
  experience?: string;          // 2-5 Years / 3+ Years
  salary?: string;              // Salary range
  deadline?: string;            // Application deadline
  responsibilities?: string[];  // Job responsibilities
  qualifications?: string[];    // Required qualifications
  skills?: string[];            // Required skills
};