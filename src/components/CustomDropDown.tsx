import { Col, Row, Form, Stack, InputGroup } from "react-bootstrap";

type Option = {
  value: string;
  label: string;
};

type CustomDropDownProps = {
  label: string;
  value: string;
  onChange: any;
  onBlur: any;
  touched: any;
  id: any;
  errorMessage: any;
  options: Option[];
};

function CustomDropDown({
  label,
  errorMessage,
  value,
  onBlur,
  onChange,
  options,
  touched,
  id,
}: CustomDropDownProps) {
    const isError = touched && errorMessage;

  return (
    <div className="mb-3 w-50 m-auto">
      <Form.Label htmlFor="id">{label}</Form.Label>
      <Form.Select
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        value={value}
        className={isError && "border border-danger"}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
      <Form.Text className="text-danger">{touched && errorMessage}</Form.Text>
    </div>
  );
}

export default CustomDropDown;
