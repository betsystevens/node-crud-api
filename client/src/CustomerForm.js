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
      key: 1,
      label: 'Last Name:',
      name: 'lastname',
      size: 40,
      required: true,
      autoFocus: true,
    },
    { key: 2, label: 'First Name:', name: 'firstname', size: 40 },
    { key: 3, label: 'Address:', name: 'address', size: 40 },
    { key: 4, label: 'Email:', type: 'email', name: 'email', size: 40 },
    { key: 5, label: 'Telephone Number:', name: 'telephone' },
  ];
  const inputFields = inputProps.map((props) => {
    return <InputGroup {...props} />;
  });
  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <p style={{ fontSize: '2rem', marginLeft: '20px' }}>Add Customer </p>
      {inputFields}
      <Submit />
    </form>
  );
}
