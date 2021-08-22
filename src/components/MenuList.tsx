import React from "react";
import { MenuItemContent } from "../lib/menuItems";
import MenuItem from "./MenuItem";

type Props = {
  menuItems: MenuItemContent[];
};
export default function MenuList({ menuItems  }: Props) {
  return (
    <div className={"container"}>
      <div className={"posts"}>
        <ul className={"post-list"}>
          {menuItems.map((it, i) => (
            <li key={i}>
              <MenuItem menuItem={it} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
