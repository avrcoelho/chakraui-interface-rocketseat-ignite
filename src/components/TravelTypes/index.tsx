import { Flex, Icon, Text } from '@chakra-ui/react'

import { Building, Cocktail, Earth, Museum, Surf } from '../Icons'
import { TravelTypeItem } from './TravelTypeItem'

export function TravelTypes() {
  return (
    <Flex
      as="section"
      mt="7.125rem"
      flex="1"
      justify="space-between"
      align="baseline"
    >
      <TravelTypeItem title="vida noturna" icon={Cocktail} />
      <TravelTypeItem title="praia" icon={Surf} />
      <TravelTypeItem title="moderno" icon={Building} />
      <TravelTypeItem title="clássico" icon={Museum} />
      <TravelTypeItem title="e mais..." icon={Earth} />
    </Flex>
  )
}