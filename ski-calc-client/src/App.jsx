import { Flex, Text } from '@mantine/core'
import CalculatorForm from './components/CalculatorForm'
import Result from './components/Result'
import useCalculateDin from './hooks/useCalculateDin'

function App() {
  const { result, error, calculateDin } = useCalculateDin();

  return (
    <Flex
      h="100vh"
      gap="md"
      align="center"
      direction="column"
      wrap="nowrap"
    >
        <h1>Ski DIN Calculator</h1>
        <CalculatorForm calculateDin={calculateDin}/>
        {result && <Result skierCode={result.skier_code} din={result.din} />}
            {error && <p>Error calculating DIN: {error.message}</p>}
        <Text align="center">
        This DIN calculator is for reference purposes only. It is recommended to always have your bindings mounted, tested and adjusted by a professional ski technician with the equipment to appropriately measure the release forces.
        </Text>
    </Flex>
  )
}

export default App