import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { ProjectGridItem } from "components/Grid-Item";
import Layout from "components/layouts/Article";
import Section from "components/Section";
import JSprojects from "../../public/images/projects/50projects.png";
import devsunited from "../../public/images/projects/devsunited.png";
import gifos from "../../public/images/projects/gifos.png";
import hotels from "../../public/images/projects/hotels.png";
import weather from "../../public/images/projects/weather.png";

const Projects = () => {
	return (
		<Layout>

			<Container>
				<Heading as = "h3" fontSize = { 20 } mb = { 4 } mt={4}>
					Projects
				</Heading>
				<SimpleGrid columns = { [ 1, 1, 2 ] } gap = { 6 }>
					<Section delay = { 0.2 }>
						<ProjectGridItem id = "devsunited" title = "Devs United" thumbnail = { devsunited }>
							A twitter clone, a full stack application. Users can create their account, pick a username and a favorite
							color, make posts and like others' posts.
						</ProjectGridItem>
					</Section>
					<Section delay = { 0.4 }>
						<ProjectGridItem id = "hotels" title = "Hotel reservations" thumbnail = { hotels }>
							An application for the frontend to make reservations, you can filter out hotels by price, size, location
							and availability.
						</ProjectGridItem>
					</Section>
					<Section delay = { 0.6 }>
						<ProjectGridItem id = "JSprojects" title = "50 Projects in 50 days" thumbnail = { JSprojects }>
							50 vanilla Javascript projects in 50 days, where DOM manipulation is the king.
						</ProjectGridItem>
					</Section>
					<Section delay = { 0.8 }>
						<ProjectGridItem id = "gifos" title = "Gifos" thumbnail = { gifos }>
							Gifs search engine, connected to the Giphy API.
						</ProjectGridItem>
					</Section>
					<Section delay = { 1 }>
						<ProjectGridItem id = "weather" title = "Weather App" thumbnail = { weather }>
							Weather app by using the Open Weather Map API
						</ProjectGridItem>
					</Section>
				</SimpleGrid>
			</Container>

		</Layout>
	);
};

export default Projects;
