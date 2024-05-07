import { useState } from 'react';

interface Props {
  label?: string;
  selectedItem: string;
  menuItems: string[];
  handleSelectedItem: (_v: string) => void;
}

export default function Dropdown({ label, selectedItem, handleSelectedItem, menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
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
