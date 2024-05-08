import { useState } from 'react';

interface Props<T> {
  label?: string;
  selectedItem: T;
  menuItems: T[];
  handleSelectedItem: (_v: T) => void;
}

export default function Dropdown<T extends string>({
  label,
  selectedItem,
  handleSelectedItem,
  menuItems,
}: Props<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: T) => {
    handleSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      {label ? <div className="dropdown-label">{label}</div> : null}
      <button onClick={toggleDropdown}>{selectedItem}</button>
      {isOpen && (
        <ul className="dropdown-menu">
          {menuItems.map((item) => (
            <li role="presentation" key={item} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
