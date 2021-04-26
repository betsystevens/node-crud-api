import './base.css';
import InputGroup from './InputGroup.js';

const formStyle = {
  width: '66%',
};

function Submit() {
  return <button type='submit'>Submit</button>;
}
function Form() {
  return (
    <form style={formStyle}>
      <InputGroup label='Flower' size='30' />
      <InputGroup label='Variety' size='30' />
      <InputGroup label='Container' size='30' />
      <Submit />
    </form>
  );
}

export default Form;
