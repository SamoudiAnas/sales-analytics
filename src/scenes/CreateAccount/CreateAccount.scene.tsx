import Head from "next/head";
import CreateAccountContent from "./components/CreateAccountContent";

const CreateAccountScene = () => {
  return (
    <>
      <Head>
        <title>Create Account | Sales Analytics</title>
      </Head>

      <CreateAccountContent />
    </>
  );
};

export default CreateAccountScene;
