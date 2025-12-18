import { FormInput, Submitbtn } from "../components";
import { Form, Link, redirect } from "react-router";
import { customFetch } from "../utils";
import { toast } from "sonner";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/auth/local/register", data);
    localStorage.setItem("user", JSON.stringify(response.data));
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900">
      <Form
        method="POST"
        className="w-96 rounded-2xl border border-slate-800 bg-slate-950 p-8 flex flex-col gap-3"
      >
        <h4 className="text-center text-3xl font-bold text-white">Register</h4>

        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />

        <div className="mt-2">
          <Submitbtn size="w-full" text="register" />
        </div>

        <p className="text-center text-slate-300">
          Already a member?
          <Link
            to="/login"
            className="ml-2 text-indigo-400 hover:underline capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
