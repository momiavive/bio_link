import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, VStack } from "@chakra-ui/react"
import { getEventURL } from "/utils/state.js"
import NextLink from "next/link"
import { ArrowForwardIcon, LinkIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {
  const input_state = useContext(StateContext)
  const router = useRouter()
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
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
    const change_complete = () => addEvents(initialEvents())
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
  {getEventURL().href}
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
  <HStack sx={{"position": "sticky", "bg": "#171F26", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <Box sx={{"fontFamily": "Comfortaa-Medium", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`beni`}
</Text>
  <Text as={`span`} sx={{"color": "#087EC4"}}>
  {`js`}
</Text>
</Box>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "650px", "width": "100%", "marginY": "2em", "padding": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`} sx={{"width": "100%"}}>
  <HStack spacing={`1em`}>
  <Avatar name={`Carlos Lázaro`} size={`xl`} src={`avatar.jpg`} sx={{"color": "#C3C7CB", "bg": "#171F26", "border": "2px", "borderColor": "#14A1F0"}}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"size": "lg", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`Carlos Lázaro`}
</Heading>
  <Text sx={{"color": "#C3C7CB"}}>
  {`@momiavive`}
</Text>
  <HStack>
  <Link as={NextLink} href={`https://twitter.com/ffclmauricio`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/ffclmauricio/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https://github.com/momiavive`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontSize": "1em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+4`}
</Text>
  {` años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "1em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+4`}
</Text>
  {` años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "1em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+4`}
</Text>
  {` años de experiencia`}
</Box>
</Flex>
  <Text sx={{"color": "#C3C7CB", "fontSize": "1em"}}>
  {`
            Soy un apasionado de la tecnología y me encanta el desarrollo web.
            `}
</Text>
</VStack>
  <VStack spacing={`.8em`} sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "size": "lg", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`https://twitter.com/ffclmauricio`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em", "backgroundColor": "#171F26", "color": "#F1F2F4", "_hover": {"backgroundColor": "#087EC4"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em", "margin": ".5em"}}/>
  <VStack alignItems={`start`} spacing={`.5em`} sx={{"margin": "0"}}>
  <Text sx={{"fontFamily": "Poppins-Bold", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Twitter`}
</Text>
  <Text sx={{"fontSize": ".8em", "color": "#C3C7CB"}}>
  {`Un poco de mi espacio personal (está casi vacio 😅).`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/ffclmauricio/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em", "backgroundColor": "#171F26", "color": "#F1F2F4", "_hover": {"backgroundColor": "#087EC4"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em", "margin": ".5em"}}/>
  <VStack alignItems={`start`} spacing={`.5em`} sx={{"margin": "0"}}>
  <Text sx={{"fontFamily": "Poppins-Bold", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`LinkedIn`}
</Text>
  <Text sx={{"fontSize": ".8em", "color": "#C3C7CB"}}>
  {`Mi perfil profesional, un poco mas a detalle sobre mi trayectoria profesional.`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/momiavive`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em", "backgroundColor": "#171F26", "color": "#F1F2F4", "_hover": {"backgroundColor": "#087EC4"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em", "margin": ".5em"}}/>
  <VStack alignItems={`start`} spacing={`.5em`} sx={{"margin": "0"}}>
  <Text sx={{"fontFamily": "Poppins-Bold", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Github`}
</Text>
  <Text sx={{"fontSize": ".8em", "color": "#C3C7CB"}}>
  {`Mi repositorio personal con proyectos de diferentes tecnologias.`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "size": "lg", "color": "#F1F2F4", "fontFamily": "Poppins-Bold"}}>
  {`Contacto`}
</Heading>
  <Link as={NextLink} href={`mailto:ffclmauriciofb@gmail.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em", "backgroundColor": "#171F26", "color": "#F1F2F4", "_hover": {"backgroundColor": "#087EC4"}}}>
  <HStack>
  <ArrowForwardIcon sx={{"width": "2em", "height": "2em", "margin": ".5em"}}/>
  <VStack alignItems={`start`} spacing={`.5em`} sx={{"margin": "0"}}>
  <Text sx={{"fontFamily": "Poppins-Bold", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Email`}
</Text>
  <Text sx={{"fontSize": ".8em", "color": "#C3C7CB"}}>
  {`ffclmauriciofb@gmail.com`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack spacing={`0`} sx={{"marginBottom": "2em", "paddingBottom": "2em", "color": "#A3ABB2"}}>
  <Image src={`code.png`}/>
  <Link as={NextLink} href={`https://www.linkedin.com/in/ffclmauricio/`} isExternal={true} sx={{"fontSize": ".8em", "textDecoration": "none", "_hover": {}}}>
  {`© 2023 Beni JS by Carlos Lázaro`}
</Link>
  <Box sx={{"fontSize": ".8em"}}>
  {`Made with `}
  <Link as={NextLink} href={`https://reflex.dev/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  {`Reflex`}
</Link>
  {` and ❤️ from Trujillo - Laredo`}
</Box>
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
