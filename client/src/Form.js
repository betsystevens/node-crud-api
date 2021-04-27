import './base.css';
import InputGroup from './InputGroup.js';

const formStyle = {
  width: '66%',
};
function Submit() {
  return <button type='submit'>Submit</button>;
}
function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    const inputs = event.target.elements;
    for (let input of inputs) {
      console.log(input.value);
    }
  }
  const inputProps = [
    {
      key: 1,
      label: 'Flower',
      name: 'flower',
      size: 30,
      required: true,
      autoFocus: true,
    },
    { key: 2, label: 'Variety', name: 'variety', size: 40 },
    { key: 3, label: 'Container', name: 'container' },
  ];
  const inputsFields = inputProps.map((props) => {
    return <InputGroup {...props} />;
  });

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      {inputsFields}
      <Submit />
    </form>
  );
}

export default Form;
