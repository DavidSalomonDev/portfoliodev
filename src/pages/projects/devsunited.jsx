import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "components/layouts/Article";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Paragraph from "components/Paragraph";
import { Title, ProjectImage, Meta } from "components/Work";

const Project = () => {
	return (
		<Layout title = "Devs United">
			<Container>
				<Title>Devs United <Badge>2021</Badge></Title>

				<Paragraph>
					The challenge is to create an entire web application, focusing on the front end and without the need to code
					the
					back end. Data visualization while incorporating graphics libraries made with React.
				</Paragraph>
				<List ml = { 4 } my = { 4 }>
					<ListItem>
						<Meta>Website</Meta>
						<Link href = "https://devs-united.vercel.app" target="_blank">https://devs-united.vercel.app <ExternalLinkIcon mx = "2px" /></Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Windows/macOS/Linux</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>ReactJS, Sass, Firebase</span>
					</ListItem>
					<ListItem>
						<Meta>Repo</Meta>
						<Link href="https://github.com/DavidSalomonDev/sprint-4_acamica" target="_blank">https://github.com/DavidSalomonDev/sprint-4_acamica <ExternalLinkIcon mx = "2px" /></Link>
					</ListItem>
				</List>
				<ProjectImage src='/images/projects/devsunited.png' alt="Devs United"/>
				<ProjectImage src='/images/projects/devsunited -1.png' alt="Devs United"/>
				<ProjectImage src='/images/projects/devsunited -2.png' alt="Devs United"/>
			</Container>
		</Layout>
	);
};

export default Project;
