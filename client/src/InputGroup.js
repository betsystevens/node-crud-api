const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '4px',
  margin: '20px',
};

export default function InputGroup({ label, size }) {
  return (
    <div style={inputGroupStyle}>
      <label> {label} </label>
      <input size={size}></input>
    </div>
  );
}
