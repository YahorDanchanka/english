export class Template {
  static pattern = /\[(.*?)]/g

  static getKeys(str: string): string[] {
    return (str.match(Template.pattern) || []).map((key) => key.replace(/\[|]/g, ''))
  }

  static replaceKeys(str: string, replaceValue: string): string {
    return str.replace(Template.pattern, replaceValue)
  }

  static replaceKeyByIndex(str: string, index: number, replaceValue: string): string | false {
    const matches = str.match(Template.pattern) || []

    if (matches[index]) {
      return str.replace(matches[index], replaceValue)
    }

    return false
  }
}
