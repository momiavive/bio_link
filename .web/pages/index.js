import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import { ArrowForwardIcon, LinkIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {
  const input_state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents.map((e) => ({...e})))
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {`http://localhost:8000`}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Box>
  <HStack sx={{"position": "sticky", "bg": "lightgray", "paddingX": "1em", "paddingY": ".5em", "zIndex": "999", "top": "0"}}>
  <Text>
  {`benijs`}
</Text>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`} sx={{"width": "100%"}}>
  <HStack spacing={`1em`}>
  <Avatar name={`Carlos Lázaro`} size={`xl`}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`}>
  {`Carlos Lázaro`}
</Heading>
  <Text>
  {`@momiavive`}
</Text>
  <HStack>
  <Link as={NextLink} href={`https://twitter.com/ffclmauricio`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/ffclmauricio`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/ffclmauricio`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontSize": "1em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "blue"}}>
  {`+4`}
</Text>
  {` años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "1em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "blue"}}>
  {`+4`}
</Text>
  {` años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "1em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "blue"}}>
  {`+4`}
</Text>
  {` años de experiencia`}
</Box>
</Flex>
  <Text>
  {`Soy un apasionado de la tecnología y me encanta el desarrollo web.`}
</Text>
</VStack>
  <VStack spacing={`.8em`} sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://twitter.com/ffclmauricio`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Twitter`}
</Text>
  <Text sx={{"fontSize": ".8em"}}>
  {`Un poco de mi espacio personal (está casi vacio 😅).`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/ffclmauricio/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`LinkedIn`}
</Text>
  <Text sx={{"fontSize": ".8em"}}>
  {`Mi perfil profesional, un poco mas a detalle sobre mi trayectoria profesional.`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/momiavive`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Github`}
</Text>
  <Text sx={{"fontSize": ".8em"}}>
  {`Mi repositorio personal con proyectos de diferentes tecnologias.`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
  <VStack spacing={`.8em`} sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://twitter.com/ffclmauricio`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Twitter`}
</Text>
  <Text sx={{"fontSize": ".8em"}}>
  {`Un poco de mi espacio personal (está casi vacio 😅).`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/ffclmauricio/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`LinkedIn`}
</Text>
  <Text sx={{"fontSize": ".8em"}}>
  {`Mi perfil profesional, un poco mas a detalle sobre mi trayectoria profesional.`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/momiavive`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Github`}
</Text>
  <Text sx={{"fontSize": ".8em"}}>
  {`Mi repositorio personal con proyectos de diferentes tecnologias.`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack spacing={`0`} sx={{"marginBottom": "2em"}}>
  <Image src={`favicon.ico`}/>
  <Link as={NextLink} href={`https://www.linkedin.com/in/ffclmauricio/`} isExternal={true} sx={{"fontSize": ".8em", "textDecoration": "none", "_hover": {}}}>
  {`© 2023 Beni JS by Carlos Lázaro`}
</Link>
  <Text sx={{"fontSize": ".8em"}}>
  {`Made with Reflex and ❤️ from Trujillo - Laredo`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
