import { Exercise, Word } from 'src/types'

export interface Section {
  id: string | number
  title: string
  subsections: Subsection[]
}

export interface Subsection {
  id: string | number
  title: string
  description?: string
  image: string
  texts?: { text: string; exercises: Exercise[] }[]
  listen?: Exercise[]
  dialog?: Exercise[]
  words?: Word[]
}
