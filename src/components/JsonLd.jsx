import Head from "next/head";

// "<" is escaped so the JSON can never close the script tag early
const JsonLd = ({ id, data }) => (
  <Head>
    <script
      key={`jsonld-${id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c")
      }}
    />
  </Head>
);

export default JsonLd;
