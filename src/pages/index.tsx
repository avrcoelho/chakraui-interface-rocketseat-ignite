import { Flex, Divider, Heading } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { TravelTypes } from '../components/TravelTypes'
import { ContinentsSlide } from '../components/ContinentsSlide'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <Flex
        as="main"
        maxWidth="1160px"
        justify="center"
        mx="auto"
        direction="column"
      >
        <TravelTypes />

        <Divider
          width="90px"
          mt="20"
          mx="auto"
          mb="3.25rem"
          borderWidth="2px"
          borderColor="dark.text"
        />

        <Heading textAlign="center" fontWeight="medium" lineHeight="3.375rem">
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>

        <ContinentsSlide />
      </Flex>
    </>
  )
}
