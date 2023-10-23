import { formatInitials, getRandomColor } from '@/lib/utils'

interface AvatarProps {
  name: string
  lastname: string
  randomColor?: boolean
}

export const Avatar = ({
  name,
  lastname,
  randomColor = false
}: AvatarProps) => {
  const bgColor = randomColor ? getRandomColor() : '#fd7dbc'

  return (
    <span
      style={{ backgroundColor: bgColor }}
      className="flex items-center justify-center px-5 py-4 rounded-full text-[14px] font-semibold text-white"
    >
      {formatInitials({ name, lastname })}
    </span>
  )
}
