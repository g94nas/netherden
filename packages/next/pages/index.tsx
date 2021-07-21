import Head from "next/head";
import Header from "../components/Header/Header";
// import addToken from "../helpers/addToken";

const Home: React.FC = () => {
  // const hasProvider =
  //   typeof window !== "undefined" && typeof window.ethereum !== "undefined";

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {hasProvider && (
        <button onClick={() => addToken()}>Click here to ad token lawl</button>
      )} */}
      <Header />
    </div>
  );
};

export default Home;
