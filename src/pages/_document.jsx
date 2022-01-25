import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import theme from "../libs/theme";

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang = "en">
				<Head>
					<link rel = "shortcut icon" href = "images/buho-favicon.png" />

					{/* !--Primary Meta Tags -- */ }
					<title>David Salomón Martínez Valladares - Frontend Developer</title>
					<meta name = "title" content = "David Salomon - Frontend Developer" />
					<meta name = "description"
								content = "I'm a frontend developer using React and NodeJS, I have a passion for growth and help others, send me an email: me@davidsalomon.dev" />

					{ /*!-- Open Graph / Facebook -- */ }
					<meta property = "og:type" content = "website" />
					<meta property = "og:url" content = "https://davidsalomon.dev/" />
					<meta property = "og:title" content = "David Salomon - Frontend Developer" />
					<meta property = "og:description"
								content = "I'm a frontend developer using React and NodeJS, I have a passion for growth and help others, send me an email: me@davidsalomon.dev" />
					<meta property = "og:image" content = "https://david-salomon.com/assets/images/banner.png" />

					{ /*!--Twitter-- */ }
					<meta property = "twitter:card" content = "summary_large_image" />
					<meta property = "twitter:url" content = "https://davidsalomon.dev/" />
					<meta property = "twitter:title" content = "David Salomon - Frontend Developer" />
					<meta property = "twitter:description"
								content = "I'm a frontend developer using React and NodeJS, I have a passion for growth and help others, send me an email: me@davidsalomon.dev" />
					<meta property = "twitter:image"
								content = "https://david-salomon.com/assets/images/banner.png" />

					{/*<!-- Global site tag (gtag.js) - Google Analytics -->*/}
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-N12W1DV5MJ"></script>
					<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-N12W1DV5MJ');
					</script>
				</Head>
				<body>
				<ColorModeScript initialColorMode = { theme.config.initialColorMode } />
				<Main />
				<NextScript />
				</body>
			</Html>
		);
	}
}
