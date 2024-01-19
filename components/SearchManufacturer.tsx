import { SearchManuFacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import Image from "next/image";

const SearchManufacturer = ({
  manufacturer,
  setManuFacturer,
}: SearchManuFacturerProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px] sm:pr-4">
            <Image
              src="/car-logo.svg"
              alt="car logo"
              width={28}
              height={28}
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input" // Adjust padding as needed
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <Transition 
          as={Fragment}

          >
           
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
