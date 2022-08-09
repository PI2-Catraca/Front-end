import { Grid, GridItem, HStack } from '@chakra-ui/react'
import Sidebar from 'components/Sidebar'

export default function Home() {
  return (
    <Grid
      minH="100vh"
      h="100%"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={2}
    >
      <GridItem padding="5px" rowSpan={2} colSpan={1}>
        <Sidebar
          // eslint-disable-next-line react/no-children-prop
          children={undefined}
        />
      </GridItem>
      <GridItem h="100%" colSpan={4}>
        <HStack w="100%" h="100%" bg="tomato">
          Sasdasdas
        </HStack>
      </GridItem>
    </Grid>
  )
}
