export type Task = (SelectionTask | TypingTask | MatchingTask | TextInputTask | SortableTask) & { interface: string }

export interface SelectionTask {
  title: string
  options: string[]
  correctOptionIndex: number
  value?: number
}

export function isSelectionTask(obj: any): obj is SelectionTask {
  return obj.interface === 'SelectionTask'
}

export interface TypingTask {
  title: string
  word: string
  value?: string
}

export function isTypingTask(obj: any): obj is TypingTask {
  return obj.interface === 'TypingTask'
}

export interface MatchingTask {
  content: string
  correct: { [key: string]: string }
  value: { [key: string]: string }
}

export function isMatchingTask(obj: any): obj is MatchingTask {
  return obj.interface === 'MatchingTask'
}

export interface TextInputTask extends MatchingTask {}

export function isTextInputTask(obj: any): obj is TextInputTask {
  return obj.interface === 'TextInputTask'
}

export interface SortableTask {
  options: { value: string; correct: string }[]
  leftCol: string[]
  rightCol: string[]
}

export function isSortableTask(obj: any): obj is SortableTask {
  return obj.interface === 'SortableTask'
}
