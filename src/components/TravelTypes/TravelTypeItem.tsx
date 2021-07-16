import { ElementType } from 'react'

import { Flex, Icon, Text } from '@chakra-ui/react'

interface TravelTypeItemProps {
  title: string
  icon: ElementType
}

export function TravelTypeItem({ icon, title }: TravelTypeItemProps) {
  return (
    <Flex direction="column" justify="center" align="center">
      <Icon as={icon} />
      <Text fontSize="1.5rem" fontWeight="semibold" mt="1.5rem">
        {title}
      </Text>
    </Flex>
  )
}
