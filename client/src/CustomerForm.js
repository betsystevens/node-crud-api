import './base.css';
import InputGroup from './InputGroup';

const formStyle = {
  width: '33%',
  alignItems: 'start',
  // border: '1px solid red',
};
function Submit() {
  return (
    <button type='submit' style={{ marginLeft: '20px' }}>
      Submit
    </button>
  );
}

export default function CustomerForm() {
  function handleSubmit(event) {
    event.preventDefault();
    for (let input of event.target.elements) {
      console.log(input.value);
    }
  }

  const inputProps = [
    {
      id: 1,
      name: 'lastname',
      label: 'Last Name:',
      size: 40,
      required: true,
      autoFocus: true,
    },
    { id: 2, name: 'firstname', label: 'First Name:', size: 40 },
    { id: 3, name: 'address', label: 'Address:', size: 40 },
    { id: 4, name: 'email', label: 'Email:', type: 'email', size: 40 },
    { id: 5, name: 'telephone', label: 'Telephone Number:' },
  ];
  const inputFields = inputProps.map((props) => {
    return <InputGroup key={props.id} {...props} />;
  });
  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <p style={{ fontSize: '2rem', marginLeft: '20px' }}>Add Customer </p>
      {inputFields}
      <Submit />
    </form>
  );
}
