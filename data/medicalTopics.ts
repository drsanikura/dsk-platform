import { MedicalTopic } from "./medicalTypes";


export const medicalTopics: Record<string, MedicalTopic> = {

  diabetes: {

    title: "Diabetes",

    category: "Chronic Conditions",

    introduction:
      "Diabetes is a condition that affects how the body regulates blood glucose levels.",


    overview:
      "Diabetes occurs when the body cannot properly produce or use insulin, leading to elevated blood glucose levels.",


    causes: [
      "Reduced insulin production by the pancreas",
      "Insulin resistance where body cells do not respond effectively to insulin",
      "Autoimmune destruction of insulin-producing cells",
      "Genetic and lifestyle factors",
    ],


    riskFactors: [
      "Family history of diabetes",
      "Overweight or obesity",
      "Physical inactivity",
      "Unhealthy dietary patterns",
      "Increasing age",
    ],


    symptoms: [
      "Increased thirst",
      "Frequent urination",
      "Unexplained weight loss",
      "Fatigue",
      "Blurred vision",
    ],


    diagnosis: [
      "Fasting blood glucose test",
      "HbA1c test",
      "Oral glucose tolerance test",
    ],


    treatment: [
      "Healthy diet and lifestyle modification",
      "Regular physical activity",
      "Blood glucose monitoring",
      "Oral diabetes medications when prescribed",
      "Insulin therapy when required",
    ],


    prevention: [
      "Maintain a healthy weight",
      "Exercise regularly",
      "Eat a balanced diet",
      "Attend regular health screenings",
    ],


    complications: [
      "Heart disease",
      "Kidney disease",
      "Nerve damage",
      "Eye problems",
      "Foot complications",
    ],


    whenToSeekHelp: [
      "Very high blood glucose readings",
      "Signs of severe dehydration",
      "Confusion or loss of consciousness",
      "Persistent vomiting",
    ],


    faq: [
      {
        question: "Can diabetes be prevented?",
        answer:
          "Type 2 diabetes risk can often be reduced through healthy lifestyle choices including regular exercise and balanced nutrition.",
      },

      {
        question: "Is diabetes curable?",
        answer:
          "Many forms of diabetes can be effectively managed with appropriate treatment and monitoring.",
      },
    ],

  },


  hypertension: {

    title: "Hypertension",

    category: "Heart Health",

    introduction:
      "Hypertension is a condition where blood pressure remains consistently elevated.",


    overview:
      "High blood pressure can increase the risk of heart disease, stroke and kidney problems.",


    causes: [
      "Genetic factors",
      "Excess salt intake",
      "Obesity",
      "Kidney disease",
      "Certain medications",
    ],


    riskFactors: [
      "Increasing age",
      "Family history",
      "Physical inactivity",
      "Smoking",
      "Excess alcohol intake",
    ],


    symptoms: [
      "Often no symptoms",
      "Headaches in some cases",
      "Dizziness",
    ],


    diagnosis: [
      "Blood pressure measurement",
      "Repeated monitoring",
      "Additional tests to assess complications",
    ],


    treatment: [
      "Lifestyle modification",
      "Blood pressure medications when prescribed",
      "Regular medical follow-up",
    ],


    prevention: [
      "Reduce excess salt intake",
      "Exercise regularly",
      "Maintain healthy weight",
      "Monitor blood pressure",
    ],


    complications: [
      "Stroke",
      "Heart disease",
      "Kidney disease",
      "Vision problems",
    ],


    whenToSeekHelp: [
      "Very high blood pressure readings",
      "Chest pain",
      "Severe headache",
      "Neurological symptoms",
    ],


    faq: [
      {
        question: "Can hypertension be controlled?",
        answer:
          "Yes. Many people successfully control blood pressure through lifestyle changes and prescribed medication.",
      },
    ],

  },

};