import * as ReactDOM from 'react-dom'
import HomePage from 'pages/home'
import type { FC } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

const Index: FC = () => {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
