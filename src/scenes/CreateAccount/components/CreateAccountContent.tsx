import LogoIcon from "@icons/logo.svg";

import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Checkbox } from "@/components/common/Checkbox";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";

type SignUpFormInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const CreateAccountContent = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreement: false,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { name, email, password, confirmPassword } = data as SignUpFormInputs;

    console.log(password, confirmPassword);
    if (password !== confirmPassword) {
      console.log(password, confirmPassword);
      setError("confirmPassword", {
        type: "custom",
        message: "Passwords don't match",
      });
      return;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-screen w-full bg-[url('/assets/images/sign-up.png')] bg-cover">
      <div className="flex flex-col items-center gap-4 mb-4">
        <LogoIcon className="w-12 h-12" />
        <h1 className="text-blue-800 text-3xl font-semibold">
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
            label="Your Name"
            defaultValue=""
            hasError={!!errors.name}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-danger text-sm text-red-100 mt-2 pl-4">
              Name is required
            </p>
          )}
        </div>
        <div className="mb-4">
          <Input
            label="Your Email"
            defaultValue=""
            hasError={!!errors.name}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-danger text-sm text-red-100 mt-2 pl-4">
              Email is required
            </p>
          )}
        </div>

        <div className="mb-4">
          <Input
            label="Password"
            defaultValue=""
            hasError={!!errors.password}
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-danger text-sm text-red-100 mt-2 pl-4">
              Password is required
            </p>
          )}
        </div>
        <div className="mb-4">
          <Input
            label="Confirm Password"
            defaultValue=""
            hasError={!!errors.name}
            {...register("confirmPassword", {
              required: true,
              deps: "password",
            })}
          />
          {errors["confirmPassword"] && (
            <p className="text-danger text-sm text-red-100 mt-2 pl-4">
              Confirm Password required
            </p>
          )}
        </div>

        <div className="flex gap-2 mb-6">
          <Checkbox
            className="mt-1"
            hasError={!!errors.name}
            {...register("agreement", { required: true })}
          />
          <label htmlFor="agreement" className="text-grey-100">
            By creating an account, you agree to our{" "}
            <Link
              href="/terms-and-conditions"
              className="text-mainblue font-semibold"
            >
              Terms and Conditions
            </Link>
          </label>
        </div>

        <Button type="submit" rounded="inputSize" className="w-full">
          Register
        </Button>
      </form>
    </div>
  );
};

export default CreateAccountContent;
