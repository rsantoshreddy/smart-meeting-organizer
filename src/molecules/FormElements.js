import { FormGroup, Label, Input } from 'reactstrap';

const Elements = ({ elements, onChange }) => {
  return elements.map(({ type, id, name, placeholder, label, options }) => (
    <FormGroup key={id}>
      <Label for={id}>{label}</Label>
      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      >
        {options &&
          options.map((option) => (
            <option value={option.id}>{option.label}</option>
          ))}
      </Input>
    </FormGroup>
  ));
};

export default Elements;
