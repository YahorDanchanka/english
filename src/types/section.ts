import { Task } from 'src/types/task'
import { Exercise } from 'src/types/exercise'

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
}
