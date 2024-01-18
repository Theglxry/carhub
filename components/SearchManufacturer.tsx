'use client  '

import { SearchManuFacturerProps } from '@/types'
import { Combobox, Transition} from '@headlessui/react'
import Image from 'next/image'




const SearchManufacturer = ({manufacturer, setManuFacturer} : SearchManuFacturerProps ) => {
  return (
    <div className='search-manufacturer'> 
    <Combobox>
      <div className='relative w-full'>
      <Combobox.Button className="absolut top-[14px]">
        <Image src="/car-logo.svg" alt="car logo" 
        width={28} 
        height={28} 
        className='ml-4'
         />
      </Combobox.Button>
      </div>
    </Combobox>
    </div>
  )
}

export default SearchManufacturer