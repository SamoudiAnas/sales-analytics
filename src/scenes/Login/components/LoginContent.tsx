import LogoIcon from "@icons/logo.svg";
import { CheckIcon } from "@radix-ui/react-icons";
import GoogleLogoIcon from "@icons/google-logo.svg";

import { Checkbox } from "@/components/common/Checkbox";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";

import { toast } from "@/hooks/useToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import Link from "next/link";
import { useState } from "react";
import { signIn, signInWithGoogle } from "@/utils/auth";

import { appRoutes } from "@/constants/appRoutes";
import { getErrorMessage } from "@/constants/firebaseErrors";
import { SignInForm, signInFormSchema } from "@/types/account";

const LoginContent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit: SubmitHandler<SignInForm> = async (data) => {
    setIsLoading(true);

    await signIn(data.email, data.password)
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        toast({
          variant: "error",
          title: getErrorMessage(err.code),
          description: "",
        });
      });
  };

  const googleSignIn = async () => {
    await signInWithGoogle().catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-screen w-full bg-[url('/assets/images/sign-up.png')] bg-cover">
      <div className="flex items-center gap-4 mb-4">
        <LogoIcon className="w-8 h-8" />
        <h1 className="text-blue-800 text-2xl font-semibold">
          Sales Analytics
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full max-w-md shadow-2xl bg-white py-12 px-4 lg:px-8 rounded-[3rem]"
      >
        <h1 className="text-center text-2xl font-bold mb-2">
          Let&apos;s Sign You In
        </h1>
        <p className="text-center text-sm text-grey-100 mb-8">
          Welcome back, you&apos;ve been missed!
        </p>

        <div className="mb-4">
          <Input
            id="email"
            label="Your Email"
            defaultValue=""
            hasError={!!errors.email}
            withIconAfter={!errors.email && watch("email") != ""}
            IconAfter={<CheckIcon className="w-6 h-6 text-green-700" />}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-danger text-sm text-red-100 mt-2 pl-4">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <Input
            id="password"
            label="Password"
            type="password"
            defaultValue=""
            hasError={!!errors.password}
            {...register("password")}
          />
          {errors.password && (
            <p className="text-danger text-sm text-red-100 mt-2 pl-4">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2 ">
            <Checkbox
              id="remember_me"
              name="remember_me"
              className="mt-1"
              onCheckedChange={(checked) => {}}
            />
            <label htmlFor="remember_me" className="text-grey-100">
              Remember Me
            </label>
          </div>

          <Link
            href={appRoutes.forgotPassword}
            className="text-mainblue font-semibold"
          >
            Forgot Password
          </Link>
        </div>

        <Button
          type="submit"
          isLoading={isLoading}
          rounded="inputSize"
          className="w-full"
        >
          {!isLoading ? "Login" : ""}
        </Button>

        <p className="text-gray-500 text-center font-bold my-6">OR</p>

        <Button
          type="button"
          onClick={googleSignIn}
          isLoading={isLoading}
          rounded="inputSize"
          className="w-full flex gap-4 py-3 bg-gray-200 hover:bg-gray-300 text-black"
        >
          <GoogleLogoIcon className="w-5 h-5" />
          <span className="font-semibold text-black">Continue with Google</span>
        </Button>

        <p className="text-grey-100 text-center mt-6">
          Don&apos;t have an account?{" "}
          <Link href={appRoutes.signUp} className="text-mainblue font-semibold">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginContent;
