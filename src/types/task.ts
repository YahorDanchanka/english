export type Task = SelectionTask | TypingTask | MatchingTask | TextInputTask

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
  return (
    ['content', 'correct', 'value'].every((property) => obj.hasOwnProperty(property)) &&
    ['type'].every((property) => !obj.hasOwnProperty(property))
  )
}

export interface TextInputTask extends MatchingTask {
  type: string
}

export function isTextInputTask(obj: any): obj is TextInputTask {
  return ['type', 'content', 'correct', 'value'].every((property) => obj.hasOwnProperty(property))
}
