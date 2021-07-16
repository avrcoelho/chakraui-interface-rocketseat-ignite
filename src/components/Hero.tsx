import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react'

export function Hero() {
  return (
    <Flex
      height="21rem"
      backgroundImage="url('/images/background.png')"
      backgroundSize="cover"
    >
      <Flex
        maxWidth="1160px"
        width="100%"
        mx="auto"
        justify="space-between"
        align="center"
      >
        <Box color="light.text">
          <Heading fontWeight="medium" lineHeight="3.375rem">
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>

          <Text fontSize="1.25rem" mt="1.25rem">
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou.
          </Text>
        </Box>

        <Image
          mb="-32"
          src="images/airplane.svg"
          alt="Avião voando entre as nuvens"
        />
      </Flex>
    </Flex>
  )
}
