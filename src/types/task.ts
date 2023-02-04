export type Task = SelectionTask | TypingTask | MatchingTask

export interface SelectionTask {
  title: string
  options: string[]
  correctOptionIndex: number
  value?: number
}

export function isSelectionTask(obj: any): obj is SelectionTask {
  return ['title', 'options', 'correctOptionIndex'].every((property) => obj.hasOwnProperty(property))
}

export interface TypingTask {
  title: string
  word: string
  value?: string
}

export function isTypingTask(obj: any): obj is TypingTask {
  return ['title', 'word'].every((property) => obj.hasOwnProperty(property))
}

export interface MatchingTask {
  content: string
  correct: object
  value: object
}

export function isMatchingTask(obj: any): obj is MatchingTask {
  return ['content'].every((property) => obj.hasOwnProperty(property))
}
