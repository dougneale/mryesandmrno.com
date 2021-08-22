import { MenuItemContent } from "../lib/menuItems";

type Props = {
  menuItem: MenuItemContent;
};
export default function PostItem({ menuItem }: Props) {
  return (
    <div className="flex flex-col md:flex-row py-10 space-y-10 md:space-y-0 md:space-x-8">
        <div className="max-w-xl md:w-1/2">
          <img className="rounded-lg" src={menuItem.thumbnail} />
        </div>
        <div className=" md:w-1/2 flex justify-center h-auto flex-col">
          <h2 className="text-xl mb-5">{menuItem.title}</h2>
          <p>{menuItem.description}</p>
        </div>
      </div>
  );
}
