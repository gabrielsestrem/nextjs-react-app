export async function getServerSideProps({ req }) {
  const subdomain = req.headers.host.split('.')[0];
  return { props: { langKey: subdomain} };
};

function Home(props) {
  response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  return (
    <div>
      Subdomain: {props.langKey}
    </div>
  );
}

export default Home