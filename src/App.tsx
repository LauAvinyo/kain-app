import React from 'react'
import 'dracula-ui/styles/dracula-ui.css'
import { Heading, Card, Text } from 'dracula-ui'

const Gretting = () => {
  return (
    <Card color="cyanGreen" p="sm" m="lg">
      <Heading color="black">Hi there!</Heading>
      <Text color="black">
        Welcome to Kain. At somemoment this will be a very cool image analysis
        platform. But for now is just some text.
      </Text>
    </Card>
  )
}

function App() {
  return (
    <div>
      <Gretting />
    </div>
  )
}

export default App
