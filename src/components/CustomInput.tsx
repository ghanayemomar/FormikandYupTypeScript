import { Col, Form } from "react-bootstrap";

type CustomInputProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: any;
  onBlur: any;
  errorMessage: any;
  touched: any;
};

function CustomInput({
  label,
  id,
  errorMessage,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  touched,
}: CustomInputProps) {
  const isError = touched && errorMessage;
  return (
    <Form.Group className="mb-3 w-50 m-auto">
      <Form.Label column htmlFor={id}>
        {label}
      </Form.Label>
      <Form.Control
        className={isError && "border border-danger"}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
        <Form.Text className="text-danger">{isError && errorMessage}</Form.Text>
    </Form.Group>
  );
}

export default CustomInput;
