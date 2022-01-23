import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "components/layouts/Article";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Paragraph from "components/Paragraph";
import { Title, ProjectImage, Meta } from "components/Work";

const Project = () => {
	return (
		<Layout title = "Gifos">
			<Container>
				<Title>Gifos <Badge>2021</Badge></Title>

				<Paragraph>
					The challenge is to create a gif search engine, communicating with the Giphy API. Applying dark mode.
				</Paragraph>
				<List ml = { 4 } my = { 4 }>
					<ListItem>
						<Meta>Website</Meta>
						<Link href = "https://sprint-3-acamica.vercel.app/"
									target = "_blank">https://sprint-3-acamica.vercel.app/ <ExternalLinkIcon mx = "2px" /></Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Windows/macOS/Linux</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>ReactJS, Pure CSS</span>
					</ListItem>
					<ListItem>
						<Meta>Repo</Meta>
						<Link href = "https://github.com/DavidSalomonDev/sprint-3"
									target = "_blank">https://github.com/DavidSalomonDev/sprint-3 <ExternalLinkIcon mx = "2px" /></Link>
					</ListItem>
				</List>
				<ProjectImage src='/images/projects/gifos.png' alt="Gifos"/>
				<ProjectImage src='/images/projects/gifos -1.png' alt="Gifos"/>
				<ProjectImage src='/images/projects/gifos -2.png' alt="Gifos"/>
				<ProjectImage src='/images/projects/gifos -3.png' alt="Gifos"/>
			</Container>
		</Layout>
	);
};

export default Project;
