import React from 'react'
import { useSelect } from 'downshift'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import { useFiltersDispatch } from '../contexts/filters-context'

interface Props {
  items: Array<Item>
  label: string
  textKey: string
  idKey: string
  actionType: string
  actionKey: string
}

interface Item {
  id: string | number
  name: string
}

export default function CustomSelect({
  items = [],
  label,
  textKey,
  idKey,
  actionType,
  actionKey,
}: Props) {
  const {
    isOpen,
    selectedItem,
    selectItem,
    closeMenu,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
  } = useSelect({ items })

  const filtersDispatch = useFiltersDispatch()

  function handleItemClick(item: Item) {
    filtersDispatch({ type: actionType, [actionKey]: item.id })
  }
  return (
    <div className="relative w-full">
      <button
        className="flex justify-between items-center w-full py-2 px-4 border-2 border-gray-light font-medium rounded-md text-left"
        {...getToggleButtonProps()}
      >
        {(selectedItem && selectedItem.name) || label}{' '}
        {isOpen ? (
          <IoIosArrowUp className="text-gray font-bold" />
        ) : (
          <IoIosArrowDown className="text-gray font-bold" />
        )}
      </button>
      {isOpen && (
        <ul
          className="absolute mt-2 w-full rounded-md border-1 border-gray-light shadow-sm bg-white focus:outline-none"
          {...getMenuProps()}
        >
          {items.map((item, index) => (
            <li
              className="py-3 px-4 cursor-pointer text-base sm:text-sm text-gray-dark hover:bg-gray-light"
              style={
                (selectedItem && selectedItem.id) === item.id
                  ? { color: '#ffaacc', fontWeight: 'bold' }
                  : {}
              }
              key={`${item[idKey]}`}
              {...getItemProps({ item, index })}
              onClick={() => {
                selectItem(item)
                handleItemClick(item)
                closeMenu()
              }}
            >
              {item[textKey]}
            </li>
          ))}
        </ul>
      )}
      {/* if you Tab from menu, focus goes on button, and it shouldn't. only happens here. */}
      <div tabIndex={0} />
    </div>
  )
}
