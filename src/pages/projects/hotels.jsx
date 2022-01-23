import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "components/layouts/Article";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Paragraph from "components/Paragraph";
import { Title, ProjectImage, Meta } from "components/Work";

const Project = () => {
	return (
		<Layout title = "Hotel Reservations">
			<Container>
				<Title>Hotel Resevations <Badge>2021</Badge></Title>

				<Paragraph>
					The challenge consists of creating an interactive web application, putting into practice the fundamentals of programming and the use of React as a library.
				</Paragraph>
				<List ml = { 4 } my = { 4 }>
					<ListItem>
						<Meta>Website</Meta>
						<Link href = "https://sprint-2-acamica.vercel.app/" target="_blank">https://sprint-2-acamica.vercel.app/ <ExternalLinkIcon mx = "2px" /></Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Windows/macOS/Linux</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>ReactJS, CSS Modules</span>
					</ListItem>
					<ListItem>
						<Meta>Repo</Meta>
						<Link href="https://github.com/DavidSalomonDev/sprint-2_acamica" target="_blank">https://github.com/DavidSalomonDev/sprint-2_acamica <ExternalLinkIcon mx = "2px" /></Link>
					</ListItem>
				</List>
				<ProjectImage src='/images/projects/hotels.png' alt="Hotel Reservations"/>
				<ProjectImage src='/images/projects/hotels -1.png' alt="Hotel Reservations"/>
				<ProjectImage src='/images/projects/hotels -2.png' alt="Hotel Reservations"/>
				<ProjectImage src='/images/projects/hotels -3.png' alt="Hotel Reservations"/>
				</Container>
		</Layout>
	);
};

export default Project;
