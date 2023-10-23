import Image from 'next/image'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Avatar } from './profile'

export default function Header() {
  const { name, lastname } = { name: 'Pepe', lastname: 'Cinder' }

  return (
    <header className="fixed w-full z-10 bg-white">
      <div className="px-10 py-3 flex items-center justify-between gap-6">
        <Image
          src="/images/logo-imm.png"
          alt="imm"
          objectFit="contain"
          width={60}
          height={60}
          className="w-auto h-auto"
        />

        <div className="relative flex items-center justify-center gap-4">
          <Avatar name={name} lastname={lastname} />

          <span className="text-3xl text-gray1">
            <RiArrowDownSLine />
          </span>
        </div>
      </div>
    </header>
  )
}
