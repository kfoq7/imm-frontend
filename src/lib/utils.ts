export const formatInitials = ({
  name,
  lastname
}: {
  name: string
  lastname: string
}) => {
  return `${name.charAt(0).toUpperCase()}${lastname.charAt(0).toUpperCase()}`
}

export const getRandomColor = (): string => {
  const getRandomValue = () => Math.floor(Math.random() * (255 - 50) + 50)
  const r = getRandomValue()
  const g = getRandomValue()
  const b = getRandomValue()

  const toHex = (value: number) => {
    const hex = value.toString(16)
    return hex.length === 1 ? `0${hex}` : hex
  }

  const red = toHex(r)
  const green = toHex(g)
  const blue = toHex(b)

  return `#${red}${green}${blue}`
}
