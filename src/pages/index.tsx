import { useState } from 'react'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import { Avatar } from '@/components/profile'
import { Button } from '@/components/report'

const medicList = [
  {
    index: 1,
    position: 1,
    active: true,
    medic: { name: 'Pepe', lastname: 'Consulta' }
  },
  {
    index: 2,
    position: 2,
    active: true,
    medic: { name: 'sadf', lastname: 'Consulta' }
  },
  {
    index: 3,
    position: 3,
    active: true,
    medic: { name: 'htasg', lastname: 'Consulta' }
  },
  {
    index: 4,
    position: 4,
    active: true,
    medic: { name: 'htr', lastname: 'Consulta' }
  },
  {
    index: 5,
    position: 5,
    active: false,
    medic: { name: 'Pehrpe', lastname: 'Consulta' }
  },
  {
    index: 6,
    position: 6,
    active: false,
    medic: { name: 'rh', lastname: 'Consulta' }
  }
]

const MedictCard = ({ name, lastname }: any) => (
  <div className="bg-white p-16 flex flex-col items-center justify-center gap-8 rounded-md shadow-lg cursor-pointer">
    <Avatar name={name} lastname={lastname} randomColor />
    <span className="font-semibold text-lg">{`${name} ${lastname}`}</span>
  </div>
)

export default function Home() {
  const [medics, setMedics] = useState<typeof medicList>(medicList)

  const handleLeftClick = () => {
    const prevList = [...medics]

    const [{ index: cardIndex }] = prevList
      .filter(item => item.active)
      .sort((a, b) =>
        a.position > b.position ? 1 : b.position > a.position ? -1 : 0
      )

    prevList.filter(item => !item.active).map(item => (item.active = true))
    const item = prevList.find(item => item.index === cardIndex)!
    item.active = false
    item.position =
      Math.max.apply(
        null,
        prevList.map(item => item.position)
      ) + 1

    setMedics(prevList)
  }

  const handleRightClick = () => {
    const prevList = [...medics]

    const { index: cardIndex } = prevList
      .filter(item => item.active)
      .sort((a, b) =>
        a.position > b.position ? 1 : b.position > a.position ? -1 : 0
      )
      .pop()!

    prevList.find(item => item.index === cardIndex)!.active = false
    const item = prevList.find(item => !item.active)!
    item.active = true
    item.position =
      Math.min.apply(
        null,
        prevList.map(item => item.position)
      ) - 1

    setMedics(prevList)
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center gap-10">
      <h2 className="text-2xl">¿Con qué medico trabajarás hoy?</h2>

      <section
        id="default-carousel"
        data-carousel="slide"
        className="relative flex items-center justify-center gap-4"
      >
        <button
          type="button"
          onClick={handleLeftClick}
          className="flex items-center justify-center h-full mx-24 cursor-pointer group focus:outline-none p-2 bg-blue-500 rounded-3xl text-2xl text-white"
        >
          <FaAngleLeft />
        </button>

        <div className="relative h-full overflow-hidden">
          <div className="flex items-center justify-center gap-4">
            {medics
              .filter(item => item.active)
              .sort((a, b) =>
                a.position > b.position ? 1 : b.position > a.position ? -1 : 0
              )
              .map(({ medic: { name, lastname } }, index) => (
                <MedictCard key={index} name={name} lastname={lastname} />
              ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleRightClick}
          className="flex items-center justify-center h-full mx-24 cursor-pointer group focus:outline-none p-2 bg-blue-500 rounded-3xl text-2xl text-white"
        >
          <FaAngleRight />
        </button>
      </section>

      <Button>¡Empezar!</Button>
    </div>
  )
}
