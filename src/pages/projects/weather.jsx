import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "components/layouts/Article";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Paragraph from "components/Paragraph";
import { Title, ProjectImage, Meta } from "components/Work";

const Project = () => {
	return (
		<Layout title = "Weather App">
			<Container>
				<Title>Weather App <Badge>2020</Badge></Title>

				<Paragraph>
					Connecting with the Open Weather API to create an application that displays the weather information by city.
				</Paragraph>
				<List ml = { 4 } my = { 4 }>
					<ListItem>
						<Meta>Website</Meta>
						<Link href = "https://weather-davidsalomondev.vercel.app/" target="_blank">https://weather-davidsalomondev.vercel.app/ <ExternalLinkIcon mx = "2px" /></Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Windows/macOS/Linux</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>HTML, CSS, JavaScript</span>
					</ListItem>
					<ListItem>
						<Meta>Repo</Meta>
						<Link href="https://github.com/DavidSalomonDev/weather" target="_blank">https://github.com/DavidSalomonDev/weather <ExternalLinkIcon mx = "2px" /></Link>
					</ListItem>
				</List>
				<ProjectImage src='/images/projects/weather.png' alt="Devs United"/>
			</Container>
		</Layout>
	);
};

export default Project;
