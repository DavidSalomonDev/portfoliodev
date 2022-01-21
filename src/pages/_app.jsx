import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Fonts from "../components/Fonts";
import Layout from "../components/layouts/Main";
import theme from "../libs/theme";

const App = ({ Component, pageProps, router }) => {
	return (
		<ChakraProvider theme = { theme }>
			<Fonts />
			<Layout router = { router }>
				<AnimatePresence exitBeforeEnter initial = { true }>
					<Component { ...pageProps } key = { router.route } />
				</AnimatePresence>
			</Layout>
		</ChakraProvider>
	);
};

export default App;
