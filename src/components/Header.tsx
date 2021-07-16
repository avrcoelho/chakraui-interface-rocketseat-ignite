import Link from 'next/link'
import { useRouter } from 'next/router'

import { Flex, Icon, Image, Button, Link as ChakraLink } from '@chakra-ui/react'

import { FiChevronLeft } from 'react-icons/fi'

export function Header() {
  const { asPath, back } = useRouter()

  const hasHistory = asPath !== '/'

  return (
    <Flex as="header" width="100%" height="6.25rem" background="white" px="6">
      <Flex
        maxWidth="1160px"
        width="100%"
        mx="auto"
        align="center"
        justify="center"
      >
        {hasHistory && (
          <Link href="/" passHref>
            <ChakraLink
              mr="auto"
              p="3"
              borderRadius={4}
              _hover={{
                background: 'light.info'
              }}
            >
              <Icon as={FiChevronLeft} fontSize={20} />
            </ChakraLink>
          </Link>
        )}
        <Image mr={hasHistory && 'auto'} src="/logo.svg" alt="World Trip" />
      </Flex>
    </Flex>
  )
}
