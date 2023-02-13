import { TestResult } from 'src/types'

export function getType(
  percentCorrectAnswers: TestResult['percentCorrectAnswers']
): 'excellent' | 'good' | 'ok' | 'bad' {
  return percentCorrectAnswers >= 100
    ? 'excellent'
    : percentCorrectAnswers >= 70
    ? 'good'
    : percentCorrectAnswers >= 40
    ? 'ok'
    : 'bad'
}
