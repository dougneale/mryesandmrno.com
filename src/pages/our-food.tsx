import { GetStaticProps } from "next";
import { listMenuContent, MenuItemContent } from "../lib/menuItems";
import MenuList from "../components/MenuList";

type Props = {
  menuItems: MenuItemContent[];
};
export default function Index({ menuItems }: Props) {
  return (
    <div className="container lg:w-2/3 flex-col divide-y-2">
      <div className="pb-6 space-y-4">
        <h1 className="text-3xl pb-3 ">Our Food</h1>
        <p>
          We make Melbourne fusion food that celebrates the tastes and diversity
          of our city. In practice this means we harness flavours from around
          the world that like us, have found a home in Melbourne.
        </p>
        <p>
          We are proud of our dynamic menu which can be adjusted according your
          requirements.
        </p>
        <p>Here are a selection of our most popular dishes.</p>
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
