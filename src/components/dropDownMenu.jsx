"use client";

import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";

const expenseCategories = [
  {
    id: 1,
    name: "Housing",
    avatar: "https://img.icons8.com/emoji/48/house-emoji.png",
  },
  {
    id: 2,
    name: "Transportation",
    avatar: "https://img.icons8.com/emoji/48/bus-emoji.png",
  },
  {
    id: 3,
    name: "Food",
    avatar: "https://img.icons8.com/emoji/48/pizza-emoji.png",
  },
  {
    id: 4,
    name: "Health & Insurance",
    avatar: "https://img.icons8.com/emoji/48/ambulance-emoji.png",
  },
  {
    id: 5,
    name: "Debt Payments",
    avatar: "https://img.icons8.com/emoji/48/credit-card-emoji.png",
  },
  {
    id: 6,
    name: "Entertainment",
    avatar: "https://img.icons8.com/emoji/48/cinema-emoji.png",
  },
  {
    id: 7,
    name: "Shopping",
    avatar: "https://img.icons8.com/emoji/48/shopping-bags.png",
  },
  {
    id: 8,
    name: "Travel",
    avatar: "https://img.icons8.com/emoji/48/airplane-emoji.png",
  },
  {
    id: 9,
    name: "Education",
    avatar: "https://img.icons8.com/emoji/48/graduation-cap-emoji.png",
  },
  {
    id: 10,
    name: "Family & Childcare",
    avatar: "https://img.icons8.com/emoji/48/family-emoji.png",
  },
  {
    id: 11,
    name: "Gifts & Donations",
    avatar: "https://img.icons8.com/emoji/48/wrapped-gift.png",
  },
  {
    id: 12,
    name: "Savings & Investments",
    avatar: "https://img.icons8.com/emoji/48/bank-emoji.png",
  },
  {
    id: 13,
    name: "Miscellaneous",
    avatar: "https://img.icons8.com/emoji/48/framed-picture.png",
  },
];

export default function DropDownMenu(props) {
  const [selected, setSelected] = useState(expenseCategories[0]);
  props.setCategory(selected.name);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative w-[80%]">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-2 -outline-offset-1 outline-gray-500  focus:outline-gray-500 sm:text-sm/6">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <img
              alt=""
              src={selected.avatar}
              className="size-5 shrink-0 rounded-full"
            />
            <span className="block truncate">{selected.name}</span>
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
        >
          {expenseCategories.map((expenseCategory) => (
            <ListboxOption
              key={expenseCategory.id}
              value={expenseCategory}
              className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
            >
              <div className="flex items-center">
                <img
                  alt=""
                  src={expenseCategory.avatar}
                  className="size-5 shrink-0 rounded-full"
                />
                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
                  {expenseCategory.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
