import { useState } from 'react';
import { CustomSelectContainer, CustomSelectOption, CustomSelectOptions, CustomSelectValue } from './CustomSelectStyles';

interface CustomSelectProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

function CustomSelect({ options, value, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CustomSelectContainer>
      <CustomSelectValue onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Filtrar por' : value}
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="15.684" height="10.129" viewBox="0 0 15.684 10.129">
          <path id="Icon_awesome-angle-down" data-name="Icon awesome-angle-down" d="M7.01,20.524.342,13.856a1.172,1.172,0,0,1,0-1.662L1.45,11.086a1.172,1.172,0,0,1,1.662,0l4.726,4.726,4.726-4.726a1.172,1.172,0,0,1,1.662,0l1.108,1.108a1.172,1.172,0,0,1,0,1.662L8.667,20.524a1.166,1.166,0,0,1-1.657,0Z" transform="translate(0.004 -10.74)" fill="red"/>
          </svg>
        </span>
      </CustomSelectValue>
      {isOpen && (
        <CustomSelectOptions>
          {options.map((option) => (
            <CustomSelectOption
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </CustomSelectOption>
          ))}
        </CustomSelectOptions>
      )}
    </CustomSelectContainer>
  )
}

export default CustomSelect