import { Link } from 'react-router-dom'

type ErrorProps = {
  code: string;
  title: string;
  description: string;
}

export function Error({ code, title, description }: ErrorProps) {
  return (
    <section className="relative z-10 bg-primary py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h2 className="mb-2 text-[50px] font-bold leading-none  sm:text-[80px] md:text-[100px]">
                {code}
              </h2>
              <h4 className="mb-3 text-[22px] font-semibold leading-tight">
                {title}
              </h4>
              <p className="mb-8 text-lg">
                {description}
              </p>
              <Link to="/">
                <button type="button" className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                Go To Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
        <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
        <div className="flex h-full w-1/3">
          <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
          <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
        </div>
        <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
      </div>
    </section>
  )
}