import { useState } from "react";
import { ArrowDownIcon, CheckIcon } from "../../icons";
import {
  SelectorContainer,
  SelectorContent,
  IconWrapper,
  ItemList,
  Item,
} from "./styles";

export type SelectDataType = {
  label: string;
  value: string;
};

interface SelectPickerInterface {
  data: SelectDataType[];
  seletedIndex: number;
  onChange: (a: number) => void;
}

const SelectPicker: React.FC<SelectPickerInterface> = ({
  data,
  seletedIndex,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <SelectorContainer>
      <SelectorContent onClick={() => setOpen(!open)}>
        <div className="selector_content">
          {data[seletedIndex]?.value || "Select country"}
        </div>
        <IconWrapper>
          <ArrowDownIcon />
        </IconWrapper>
      </SelectorContent>
      {open && (
        <ItemList>
          {data.map((_data: SelectDataType, index: number) => (
            <Item
              key={index}
              isOdd={index % 2 === 1}
              isActive={index === seletedIndex}
              onClick={() => {
                onChange(index);
                setOpen(false);
              }}
            >
              {_data.label} {index === seletedIndex && <CheckIcon />}
            </Item>
          ))}
        </ItemList>
      )}
    </SelectorContainer>
  );
};

export default SelectPicker;
