export async function getServerSideProps({ req }) {
  const subdomain = req.headers.host.split('.')[0];
  return { 
    props: { 
      langKey: subdomain
    }, 
    revalidate: 10 
  };
};

function Home(props) {
  return (
    <div>
      Subdomain: {props.langKey}
    </div>
  );
}

export default Home