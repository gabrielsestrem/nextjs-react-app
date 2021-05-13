export async function getServerSideProps({ req }) {
  const subdomain = req.headers.host.split('.')[0];
  return { props: { langKey: subdomain} };
};

function Home(props) {
  const subdomain = props.langKey;
  return (
    <div>
      Hello {subdomain}
    </div>
  );
}

export default Home