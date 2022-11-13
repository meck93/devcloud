import Image from "next/image";
import GoogleSvg from "../../../public/google-48.svg";

export default function GoogleSignInButton() {
  return (
    <div className="flex justify-center">
      <button
        className="flex items-center px-4 py-2 transition-all duration-150 ease-linear bg-white rounded shadow outline-none active:bg-slate-50 text-slate-700 focus:outline-none hover:shadow-md"
        type="button"
      >
        <Image alt="Google Logo" className="w-5 mr-1" src={GoogleSvg} />
        <p className="text-xs font-semibold uppercase">Google</p>
      </button>
    </div>
  );
}
