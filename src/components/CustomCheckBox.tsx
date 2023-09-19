import { Col, Row, Form, Stack, InputGroup } from "react-bootstrap";

type CustomCheckBoxProps = {
  label: string;
  id: string;
  value: boolean;
  onChange: any;
  errorMessage: any;
  touched: any;
};

function CustomCheckBox({
  label,
  id,
  errorMessage,
  value,
  touched,
  onChange,
}: CustomCheckBoxProps) {
  return (
    <InputGroup className="mb-3 w-50 m-auto  d-flex align-items-center justify-content-between">
      <Row>
        <Col xs={11}>
          <Form.Label htmlFor="id">{label}</Form.Label>
        </Col>
        <Col xs={1}>
          <Form.Check onChange={onChange} id={id} />
        </Col>
      </Row>
      <Form.Text className="text-danger">{touched && errorMessage}</Form.Text>
    </InputGroup>
  );
}

export default CustomCheckBox;
