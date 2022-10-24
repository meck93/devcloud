interface Props {
  label: string;
  placeholder: string;
  type: "email" | "text" | "password";
}

export default function FormInput({ label, type, placeholder }: Props): JSX.Element {
  return (
    <div className="w-full mb-3">
      <label className="block mb-2 text-xs font-bold uppercase text-slate-600">{label}</label>
      <input
        type={type}
        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-slate-300 text-slate-600 focus:outline-none focus:ring"
        placeholder={placeholder}
      />
    </div>
  );
}
