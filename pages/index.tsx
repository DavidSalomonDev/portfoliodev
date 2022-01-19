import React from "react"
import {Container, Box, Heading} from "@chakra-ui/react"

const Index = () => (
	<Container>
		<Box borderRadius="lg" bg='red' mb={6} p={3} align="center">
			Hi, I'm a Frontend Developer based in El Salvador!
		</Box>
		<Box display={{md: 'flex'}}>
			<Box flexGrow={1}>
				<Heading as="h2" variant='page-title'>
					David Salomón
				</Heading>
				<p>BBA / Frontend Developer / Tech Support</p>
			</Box>

		</Box>

	</Container>
)

 export default Index
