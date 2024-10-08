'use client'
import { useRouter } from 'next-nprogress-bar';
import { usePathname } from 'next/navigation';
import IconRegistry from './IconsRegistry';

interface MenuItemType {
  iconKey: string,
  label: string,
  route: string,
}

export default function MenuItem({ iconKey, label, route }: MenuItemType) {
  const router = useRouter();
  const pathname = usePathname();
  const Icon = IconRegistry[iconKey];

  const isSelected = pathname.includes(route);

  const sendToPage = () => {
    router.push(route);
  };

  return (
    <button onClick={sendToPage} className={`${isSelected ? 'bg-gray-800 hover:bg-gray-900 text-white': ' hover:bg-gray-100'} transition-colors duration-300 ease-in-out flex gap-2 items-center p-2 rounded-md `}>
      {Icon && <Icon className="w-6 h-6" color={isSelected ? '#fff' : '6a7382'} />}
      <h2>{label}</h2>
    </button>
  );
};

