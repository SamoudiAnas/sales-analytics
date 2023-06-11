import Head from "next/head";
import LoginContent from "./components/LoginContent";

const LoginScene = () => {
  return (
    <>
      <Head>
        <title>Login | Sales Analytics</title>
      </Head>

      <LoginContent />
    </>
  );
};

export default LoginScene;
