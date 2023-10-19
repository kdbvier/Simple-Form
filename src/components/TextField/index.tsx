import { ErrorIcon } from "../../icons";
import { Error, Container } from "./styles";

interface TextFieldInterface {
  label: string;
  value: string;
  onChange: (e: string) => void;
  onError: boolean;
  errorMessage: string;
  placeholder: string;
  type?: string;
}

const TextField: React.FC<TextFieldInterface> = ({
  label,
  value,
  onChange,
  onError,
  errorMessage,
  placeholder,
  type = "text",
}) => {
  return (
    <Container>
      <label>{label}</label>
      <div className="input_group">
        <input
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          placeholder={placeholder}
          type={type}
        />
        {onError && (
          <div className="icon_wrapper">
            <ErrorIcon />
          </div>
        )}
      </div>
      <Error onError={onError}>{errorMessage}</Error>
    </Container>
  );
};

export default TextField;
