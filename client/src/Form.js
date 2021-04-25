/*
  basic form 
    defaults: flex-columnn, 

*/

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '12px',
  border: '2px solid white',
};

const inputStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  fontSize: '16px',
  gap: '4px',
  margin: '20px',
};

function Submit() {
  return <button type='submit'>Submit</button>;
}
function Input({ label }) {
  return (
    <div style={inputStyle}>
      <label> {label} </label>
      <input type='text'></input>
    </div>
  );
}
function Form() {
  return (
    <form style={formStyle}>
      <Input label='Flower' />
      <Input label='Variety' />
      <Input label='Container' />
      <Submit />
    </form>
  );
}

export default Form;
