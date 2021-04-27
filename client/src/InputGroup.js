const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '4px',
  margin: '20px',
};

export default function InputGroup(props) {
  return (
    <div style={inputGroupStyle}>
      <label htmlFor={props.name}> {props.label} </label>
      <input {...props} onChange={(e) => console.log(e.target.value)}></input>
    </div>
  );
}
