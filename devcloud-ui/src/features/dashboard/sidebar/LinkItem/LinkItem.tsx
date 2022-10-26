interface Props {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function LinkItem({ href, icon, label }: Props) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group "
      >
        {icon}
        <span className="flex-1 ml-3 whitespace-nowrap">{label}</span>
      </a>
    </li>
  );
}
