import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Heading, Image, Link, useColorModeValue } from "@chakra-ui/react";
import { BioSection, BioYear } from "components/Bio";
import Layout from "components/layouts/Article";
import Paragraph from "components/Paragraph";
import Section from "components/Section";
import NextLink from "next/link";

const Index = () => (
	<Layout>
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
				<Heading as = "h3" variant = "section-title">
					Who am I?
				</Heading>
				<Paragraph>I have worked as a Technical Support Representative for one of the largest internet brands since
					2018,
					I gained a lot of experience in technical matters with cloud products, so I decided to start building
					my <Link href = "/projects/">own ones.</Link>&nbsp;

					In 2020, I took advantage of the lock-down, and I reinforced my coding skills with Javascript and React.

					As of right now, I'm an Applications Support Analyst, helping customers to use Google APIs for their services,
					AppsScript, SAML/SSO.
				</Paragraph>
				<Box align = "center" my = { 4 }>
					<NextLink href = "/projects">
						<Button rightIcon = { <ChevronRightIcon /> } colorScheme = "teal">My Portfolio</Button>
					</NextLink>
				</Box>
			</Section>
			<Section delay = { 0.2 }>
				<Heading as = "h3" variant = "section-title">
					Bio
				</Heading>
				<BioSection>
					<BioYear>1993</BioYear>
					Born in San Salvador, El Salvador on Sept 7th.
				</BioSection>
				<BioSection>
					<BioYear>2018</BioYear>
					Hired at Telus International El Salvador as a Tech Support Representative, for one of the largest Internet
					brands
				</BioSection>
				<BioSection>
					<BioYear>2021</BioYear>
					Completed the Bachelor of Business Administration in ESI School of Management
				</BioSection>
				<BioSection>
					<BioYear>2021</BioYear>
					Completed the Frontend Web Development bootcamp in Acamica
				</BioSection>
			</Section>
			<Section delay = { 0.3 }>
				<Heading as = "h3" variant = "section-title">
					Things I love
				</Heading>
				<Paragraph>
					Music, Cooking, Organizing things (TDA), Playing piano, Travel.
				</Paragraph>
			</Section>
		</Container>
	</Layout>
);

export default Index;
