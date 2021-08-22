import React from "react";
import { MenuItemContent } from "../lib/menuItems";
import MenuItem from "./MenuItem";

type Props = {
  menuItems: MenuItemContent[];
};
export default function MenuList({ menuItems }: Props) {
  return menuItems.map((it) => (<MenuItem menuItem={it} />))
}
