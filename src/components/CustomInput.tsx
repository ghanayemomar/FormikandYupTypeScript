import { Form, FormControlProps } from "react-bootstrap";

type CustomInputProps = {
  label: string;
  errorMessage: string | undefined | boolean;
};

const CustomInput: React.FC<FormControlProps & CustomInputProps> = ({
  label,
  errorMessage,
  ...props
}) => {
  return (
    <Form.Group className="mb-3 w-50 m-auto">
      <Form.Label column htmlFor={props.id}>
        {label}
      </Form.Label>
      <Form.Control
        className={errorMessage ? "border border-danger" : ""}
        {...props}
      />
      {errorMessage && (
        <Form.Text className="text-danger">{errorMessage}</Form.Text>
      )}
    </Form.Group>
  );
};

export default CustomInput;
