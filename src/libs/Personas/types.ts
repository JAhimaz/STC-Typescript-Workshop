export interface Persona {
  id: number
  firstname: string
  lastname: string
  email: string
  gender: Genders | "others"
  country: string
}

type Genders = "male" | "female"