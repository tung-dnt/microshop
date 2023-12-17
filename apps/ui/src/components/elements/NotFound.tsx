import { Link } from 'react-router-dom'
import {
  Box,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'

/* eslint-disable react/no-unescaped-entities */
export function NotFound() {
  return (
    <Box className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <Box className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <Box className="relative">
          <Box className="absolute">
            <Box>
              <Heading as="h1" className="my-2 text-gray-800 font-bold text-2xl">
                Looks like you've found the doorway to the great nothing
              </Heading>
              <Text className="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</Text>
              <Link to="/">
                <button type="button" className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                Go To Home
                </button>
              </Link>
            </Box>
          </Box>
          <Box>
            <Image src="https://i.ibb.co/G9DC8S0/404-2.png" alt="404"/>
          </Box>
        </Box>
      </Box>
      <Box>
        <Image src="https://i.ibb.co/ck1SGFJ/Group.png" alt="group" />
      </Box>
    </Box>
  )
}