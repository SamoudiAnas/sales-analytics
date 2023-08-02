import Head from "next/head";
import HomeContent from "./components/HomeContent";

const HomeScene: React.FC = () => {
  return (
    <>
      <Head>
        <title>Overview | Sales Analytics</title>
      </Head>

      <HomeContent />
    </>
  );
};

export default HomeScene;
