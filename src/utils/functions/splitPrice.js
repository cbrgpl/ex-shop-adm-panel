export const splitPrice = ( price ) => {
  const stringPrice = price.toString()
  const partials = []

  for(let i = stringPrice.length; i > 0; i -= 3) {
    const startIndex = i - 3

    const part = stringPrice.slice(startIndex < 0 ? 0 : startIndex, i)
    partials.unshift(part)
  }

  return partials.join(' ')
}
