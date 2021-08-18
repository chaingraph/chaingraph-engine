import { AnyAaaaRecord } from 'dns'

// inspired in https://github.com/sindresorhus/p-whilst
export const whilst = async (
  condition: (actionResult: boolean) => boolean,
  action: () => Promise<any>,
) => {
  const loop = async (actionResult: boolean = true): Promise<any> => {
    if (condition(actionResult)) {
      return loop(await action())
    }
    return false
  }

  return loop()
}
