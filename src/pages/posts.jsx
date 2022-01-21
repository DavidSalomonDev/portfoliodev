import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Layout from "components/layouts/Article";
import Section from 'components/Section'
import {GridItem} from 'components/Grid-Item'

import thumbUpgrade from '../../public/images/posts/upgrade.jpg'
import thumbSoft from '../../public/images/posts/soft-skills.jpg'
import thumbJS50 from '../../public/images/posts/JS50.jpg'
import thumbDocs from '../../public/images/posts/document.jpg'
import thumbLearn from '../../public/images/posts/learn-paralysis.jpg'
import thumbBooks from '../../public/images/posts/programming-books.jpg'

const Posts = () => (
	<Layout title="Posts">
		<Container>
			<Heading as='h4' fontSize={20} mb={4}>
				Popular posts
			</Heading>
			<Section delay={0.2}>
				<SimpleGrid columns={[1,2,2]} gap={6}>
					<GridItem
						title="It's time to upgrade: Moving from a non-tech job to a developer career"
						thumbnail={thumbUpgrade}
						href="https://blog.davidsalomon.dev/its-time-to-upgrade-moving-from-a-non-tech-job-to-a-developer-career">
					</GridItem>
					<GridItem
						title="50 projects in 50 days? This is what I think!"
						thumbnail={thumbJS50}
						href="https://blog.davidsalomon.dev/50-projects-in-50-days-this-is-what-i-think">
					</GridItem>
					<GridItem
						title="How to beat learning paralysis?"
						thumbnail={thumbLearn}
						href="https://blog.davidsalomon.dev/how-to-beat-learning-paralysis">
					</GridItem>
					<GridItem
						title="Are programming books still worthy in the digital era?"
						thumbnail={thumbBooks}
						href="https://blog.davidsalomon.dev/are-programming-books-still-worthy-in-the-digital-era">
					</GridItem>
					<GridItem
						title="How to document your projects and don't die trying"
						thumbnail={thumbDocs}
						href="https://blog.davidsalomon.dev/document-your-projects">
					</GridItem>
					<GridItem
						title="It's time to upgrade: Moving from a non-tech job to a developer career"
						thumbnail={thumbSoft}
						href="https://blog.davidsalomon.dev/wtf-are-soft-skills">
					</GridItem>
				</SimpleGrid>
			</Section>
		</Container>
	</Layout>
)

export default Posts
