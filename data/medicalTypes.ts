export interface MedicalTopic {
  title: string;

  category: string;

  introduction: string;

  overview: string;

  causes: string[];

  riskFactors: string[];

  symptoms: string[];

  diagnosis: string[];

  treatment: string[];

  prevention: string[];

  complications: string[];

  whenToSeekHelp: string[];

  faq: {
    question: string;
    answer: string;
  }[];

  relatedTopics: {
    title: string;
    slug: string;
  }[];
}