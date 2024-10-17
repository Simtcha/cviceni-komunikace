import './style.css';

export const InputField = ({ label, type, value, onValueChange }) => {
  return (
    <div className="input-field"
    type={type}
    value={value}
    onChange={(e) => onValueChange(e.target.value)}
    >
      <label className="input-field__label">{label}</label>
      <input
        className="input-field__input"
        type={type}
      />
    </div>
  );
};
