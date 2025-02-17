import { InputProps } from "./Input.types";

const Input:React.FC<InputProps> = ({
    value,
    onChange,
    placeholder
}) => {
    return (
        <input 
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="border border-gray-300 p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
    )
}

export default Input;