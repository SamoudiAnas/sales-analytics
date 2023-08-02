import LogoIcon from "@icons/logo.svg";
import { CheckIcon } from "@radix-ui/react-icons";
import GoogleLogoIcon from "@icons/google-logo.svg";

import { Checkbox } from "@/components/common/Checkbox";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";

import { toast } from "@/hooks/useToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { createUser, signInWithGoogle } from "@/utils/auth";
import { SignUpForm, signUpFormSchema } from "@/types/account";

import Link from "next/link";
import { useState } from "react";

import { appRoutes } from "@/constants/appRoutes";
import { getErrorMessage } from "@/utils/error";

const CreateAccountContent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpFormSchema),
  });

  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    setIsLoading(true);

    await createUser(data)
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
        <h1 className="text-center text-2xl font-bold mb-2">Getting Started</h1>
        <p className="text-center text-sm text-grey-100 mb-8">
          Create an account to continue!
        </p>

        <div className="mb-4">
          <Input
            id="name"
            label="Your Name"
            defaultValue=""
            hasError={!!errors.name}
            withIconAfter={!errors.name && watch("name") != ""}
            IconAfter={<CheckIcon className="w-6 h-6 text-green-700" />}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-danger text-sm text-red-100 mt-2 pl-4">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <Input
            id="email"
            type="email"
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
        <div className="mb-4">
          <Input
            id="c_password"
            type="password"
            label="Confirm Password"
            defaultValue=""
            hasError={!!errors.confirmPassword}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-danger text-sm text-red-100 mt-2 pl-4">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <div className="flex gap-2 ">
            <Checkbox
              id="agreement"
              className="mt-1"
              hasError={!!errors.agreement}
              onCheckedChange={(checked) => {
                if (checked !== "indeterminate" && checked) {
                  setValue("agreement", checked);
                }
              }}
              {...register("agreement")}
            />
            <label htmlFor="agreement" className="text-grey-100">
              By creating an account, you agree to our{" "}
              <Link
                href={appRoutes.termsAndConditions}
                className="text-mainblue font-semibold"
              >
                Terms and Conditions
              </Link>
            </label>
          </div>
          {errors.agreement && (
            <p className="text-danger text-sm text-red-100 mt-2 pl-4">
              {errors.agreement.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          isLoading={isLoading}
          rounded="inputSize"
          className="w-full"
        >
          {!isLoading ? "Register" : ""}
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
          Already have an account?{" "}
          <Link href={appRoutes.signIn} className="text-mainblue font-semibold">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default CreateAccountContent;
