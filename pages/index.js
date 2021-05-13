function Home() {
  const subdomain = window.location.host.split('.')[0]
  return (
    <div>
      Hello {subdomain}
    </div>
  );
}

export default Home