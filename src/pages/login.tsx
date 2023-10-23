import Image from 'next/image'
import { TbEye, TbEyeOff } from 'react-icons/tb'
import { AiOutlineWarning } from 'react-icons/ai'
import { useLogin } from '@/hooks/useLogin'

const SideImage = ({ src, size }: { src: string; size: number }) => (
  <picture className="hidden lg:block">
    <Image src={src} alt="login-image" width={size} height={size} />
  </picture>
)

const Login = () => {
  const {
    disabled,
    isError,
    isSecretPassword,
    handleSubmit,
    handleChange,
    handlePasswordSecret
  } = useLogin()

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-pink-light">
      <SideImage src="/images/nurse.webp" size={300} />

      <div className="flex-1 max-w-lg p-10 relative bg-white shadow-lg rounded-lg">
        <span className="relative right-4 pb-2">
          <Image src="/images/imm.webp" alt="imm" width={100} height={100} />
        </span>

        <h1 className="font-semibold text-darkgray my-2 text-4xl">
          Inicia sesión
        </h1>

        <p className="text-md pb-3.5 text-slate-500">
          Registro de examenes ginecologicos
        </p>

        {isError && (
          <div className="bg-red-200 p-3.5 rounded-lg text-darkgray text-base font-medium flex items-center gap-3">
            <span className="text-red-400 text-xl">
              <AiOutlineWarning />
            </span>
            No encontramos el usuario.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mt-4 relative">
            <input
              id="username"
              name="username"
              type="text"
              className="peer w-full border border-gray3 rounded-md px-3 pt-5 pb-3 text-md leading-6 placeholder-transparent focus:outline-none focus:border-blue-500"
              placeholder="username"
              onChange={handleChange}
            />
            <label
              htmlFor="username"
              className="absolute top-1 left-3 text-gray2 text-xs transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray2 peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500"
            >
              Usuario
            </label>
          </div>
          <div className="mt-4 relative text-base">
            <input
              id="password"
              type={isSecretPassword ? 'password' : 'text'}
              name="password"
              className="peer w-full border border-gray3 rounded-md px-3 pt-5 pb-3 text-md leading-6 placeholder-transparent focus:outline-none focus:border-blue-500"
              placeholder="password"
              onChange={handleChange}
            />
            <label
              htmlFor="password"
              className="absolute top-1 left-3 text-gray2 text-xs transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray2 peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500"
            >
              Password
            </label>
            <div className="relative" onClick={handlePasswordSecret}>
              <span className="absolute p-1 text-[27px]  text-darkgray right-3 bottom-3">
                {isSecretPassword ? <TbEyeOff /> : <TbEye />}
              </span>
            </div>
          </div>

          <label className="my-3 p-2 flex items-center gap-2">
            <input type="checkbox" />
            Recuerdame
          </label>

          <button
            type="submit"
            disabled={disabled}
            className="w-full py-4 mt-8 rounded-md border text-white font-semibold text-lg bg-blue-primary border-blue-primary text-md flex items-center justify-center disabled:bg-blue disabled:border-blue"
          >
            Ingresar
          </button>
        </form>
      </div>

      <SideImage src="/images/doctor.webp" size={350} />
    </div>
  )
}

export default Login
