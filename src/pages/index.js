import Head from "next/head";
import Home from "@/component/header";
import Countdown from "@/component/countdown";  
import Important from "@/component/important";
import Map from "@/component/map";
import Form from "@/component/form";
import Footer from "@/component/footer";
const Onepage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>One Page</title>
      </Head>
      <Home />
      <Countdown />
      <Important />
      <Map />
      <Form />
      <Footer />
    </>
  );
};

export default Onepage;