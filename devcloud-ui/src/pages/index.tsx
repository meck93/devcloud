import type { NextPage } from "next";
import FormInput from "../features/startpage/FormInput";
import GoogleSignInButton from "../features/startpage/GoogleSignInButton";

export const Home: NextPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <h1 className="text-3xl font-bold lg:text-4xl">Welcome to the Devcloud</h1>
      <div className="w-full px-4 py-6 mx-auto lg:w-4/12">
        <div className="flex flex-col w-full border-0 rounded-lg shadow-lg bg-slate-200">
          <div className="p-6">
            <div className="mb-3 text-center">
              <h6 className="text-sm font-bold text-slate-500">Sign in with</h6>
            </div>
            <GoogleSignInButton />
          </div>
          <hr className="border-b-1 border-slate-300" />
          <div className="flex-auto px-4 pt-6 pb-10 lg:px-10">
            <div className="mb-3 text-center">
              <p className="text-sm font-bold text-slate-500">Or sign in with credentials</p>
            </div>
            <form>
              <FormInput label="Email" type="email" placeholder="Email" />
              <FormInput label="Password" type="password" placeholder="Password" />
              <div className="pt-3 text-center">
                {/* TODO: maybe refactor button into separate componentr */}
                <button
                  className="w-full px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-slate-800 active:bg-slate-600 hover:shadow-lg focus:outline-none"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
