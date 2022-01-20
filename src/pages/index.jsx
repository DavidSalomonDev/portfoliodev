import { Box, Container, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import Section from "components/Section";

const Index = () => (
	<Container>
		<Box borderRadius = "lg"
				 bg = { useColorModeValue("whiteAlpha.500", "whiteAlpha.200") }
				 mb = { 6 }
				 p = { 3 }
				 align = "center">
			Hi, I'm a Frontend Developer based in El Salvador!
		</Box>
		<Box display = { { md: "flex" } }>
			<Box flexGrow = { 1 }>
				<Heading as = "h2" variant = "page-title">
					David Salomón
				</Heading>
				<p>BBA / Frontend Developer / Tech Support</p>
			</Box>
			<Box flexShrink = { 0 } mt = { { base: 4, md: 0 } } ml = { { md: 6 } } align = "center">
				<Image borderColor = "whiteAlpha.800"
							 borderWidth = { 2 }
							 borderStyle = "solid"
							 maxWidth = "100px"
							 display = "inline-block"
							 borderRadius = "full"
							 src = "/images/david.png"
							 alt = "David Salomon Profile Pic" />
			</Box>
		</Box>
		<Section delay = { 0.1 }>
			<Heading as='h3' variant = "section-title">
				Work
			</Heading>
			<p>Paragraph</p>
		</Section>
	</Container>
);

export default Index;
