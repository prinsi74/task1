import React, { useEffect, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function ToggleVisiblity() {

    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [error, setError] = useState('');

    const handleToggle = () => {
        setType((prevType) => (prevType === 'password' ? 'text' : 'password'));
    }

    useEffect(() => {
        const validatePassword = () => {
          const hasUpperCase = /[A-Z]/.test(password);
          const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
          const isLongEnough = password.length >= 8;
    
          if (!isLongEnough) {
            setError('Password must be at least 8 characters long.');
          } else if (!hasUpperCase) {  
            setError('Password must contain at least one uppercase letter.');
          } else if (!hasSpecialChar) {
            setError('Password must contain at least one special character.');
          } else {
            setError(''); 
          }
        };
    
        validatePassword();
      }, [password]);

    return (
        <div>
            <div className='container col-md-4 mt-5'>
            <h2 className='d-flex justify-content-center mt-5 mb-5' >Toggle Visibility</h2>
                <div class="mb-4 flex">
                    <input
                        type={type}
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        className="p-2 border border-gray-300 rounded"
                        pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' 
                    />
                    <span
                        className="flex justify-around items-center ml-2 cursor-pointer"
                        onClick={handleToggle}
                    >
                        {type === 'password' ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </span>
                </div>
                    {error && <span className="text-red-500 text-sm mt-1" style={{color:"red"}}>{error}</span>}
            </div>
        </div>
    )
}

export default ToggleVisiblity
