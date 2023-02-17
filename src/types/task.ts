export type Task = (
  | SelectionTask
  | MultipleSelectionTask
  | TypingTask
  | MatchingTask
  | TextInputTask
  | SortableTask
  | SelectTask
) & { interface: string; error?: boolean }

export interface SelectionTask {
  title: string
  options: string[]
  correctOptionIndex: number
  value?: number
}

export function isSelectionTask(obj: any): obj is SelectionTask {
  return obj.interface === 'SelectionTask'
}

export interface MultipleSelectionTask {
  title: string
  options: string[]
  correctOptionIndexes: number[]
  value?: number[]
}

export function isMultipleSelectionTask(obj: any): obj is MultipleSelectionTask {
  return obj.interface === 'MultipleSelectionTask'
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

export interface SelectTask {
  content: string
  selects: { [key: string]: { correctOptionIndex: number; options: string[]; selectedOptionIndex?: number } }
}

export function isSelectTask(obj: any): obj is SelectTask {
  return obj.interface === 'SelectTask'
}
