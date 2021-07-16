import { Flex, Heading } from '@chakra-ui/react'

interface SliderItemProps {
  title: string
  subtitle: string
  image: string
}

export function SliderItem({ title, subtitle, image }: SliderItemProps) {
  return (
    <Flex
      height={[250, 450]}
      justify="center"
      align="center"
      direction="column"
      position="relative"
      background="rgba(0,0,0,0.5)"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1
      }}
    >
      <Heading fontSize="3rem" color="light.text">
        {title}
      </Heading>
      
      <Heading mt="4" fontSize="1.5rem" color="light.text">
        {subtitle}
      </Heading>
    </Flex>
  )
}