import { Task } from 'src/types/task'

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
  texts?: { text: string; tasks: Task[][] }[]
  exercises?: Task[]
}
