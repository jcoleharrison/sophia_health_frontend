type FieldsNameType = {
  element: string
  description: string
}

export const fieldsName: FieldsNameType[] = [
  {
    element: 'subjective',
    description: "Patient's description of symptoms",
  },
  {
    element: 'objective',
    description: 'Measured, observed clinical data',
  },
  {
    element: 'assessment',
    description: 'Diagnosis based on S & O data',
  },
  {
    element: 'plan',
    description: 'Treatment, follow-up, patient care plan',
  },
]
