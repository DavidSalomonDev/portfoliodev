import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import Layout from "components/layouts/Article";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Paragraph from "components/Paragraph";
import { Title, ProjectImage, Meta } from "components/Work";

const Project = () => {
	return (
		<Layout title = "50 projects in 50 days">
			<Container>
				<Title>50 projects in 50 days <Badge>2020</Badge></Title>

				<Paragraph>
					This is a project where I code along Brad Traversy on his course available on Udemy. There are 50 projects to be completed in 50 days.

					At the moment, I have added just a header to identify what I've done but at the end of the course, I will modify it to experiment with it.
				</Paragraph>
				<List ml = { 4 } my = { 4 }>
					<ListItem>
						<Meta>Website</Meta>
						<Link href = "https://50daysproject.vercel.app/" target="_blank">https://50daysproject.vercel.app/ <ExternalLinkIcon mx = "2px" /></Link>
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
						<Link href="https://github.com/DavidSalomonDev/50daysproject" target="_blank">https://github.com/DavidSalomonDev/50daysproject <ExternalLinkIcon mx = "2px" /></Link>
					</ListItem>
				</List>
				<ProjectImage src='/images/projects/50projects.png' alt="50 projects in 50 days"/>
				<ProjectImage src='/images/projects/50projects -1.png' alt="50 projects in 50 days"/>
				<ProjectImage src='/images/projects/50projects -2.png' alt="50 projects in 50 days"/>
				<ProjectImage src='/images/projects/50projects -3.png' alt="50 projects in 50 days"/>
			</Container>
		</Layout>
	);
};

export default Project;
