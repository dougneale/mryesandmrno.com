import { GetStaticProps } from "next";
import { listMenuContent, MenuItemContent } from "../lib/menuItems";
import MenuList from "../components/MenuList";

type Props = {
  menuItems: MenuItemContent[];
};
export default function Index({ menuItems }: Props) {
  return (
    <div className="container lg:w-2/3 flex-col divide-y-2">
      <div className="pb-6">
        <h1 className="text-3xl pb-3">Our Food</h1>
        <p>See our range of different cuisines!</p>
      </div>
      <MenuList menuItems={menuItems} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const menuItems = listMenuContent();
  return {
    props: {
      menuItems,
    },
  };
};
