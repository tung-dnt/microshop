export { Counter }

import { atom, useAtom } from 'jotai'

const atomCount = atom(0)

function Counter() {
  const [count, setCount] = useAtom(atomCount)

  return (
    <button
      type="button"
      onClick={() => setCount((count) => count + 1)}
      className="sm:w-full lg:w-auto my-2 border rounded md py-1 px-2 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
    >
      Counter {count}
    </button>
  )
}
