import { useState, useCallback, useEffect } from 'react';
import 'animate.css';


function App() {
  const [length, setLength] = useState(0);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  // Generate random color for password text
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuipasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    let strnum = "1234567890";
    let strchar = "`~!@#$%^&*()-_=+*/[{]}\|;:'/?.>,<";
    if (num === true) { str = str + strnum; }
    if (char === true) { str = str + strchar; }
    const strlength = str.length;
    for (let i = 0; i < length; i++) {
      pass = pass + str[Math.floor(Math.random() * strlength)];
    }
    setPassword(pass);
  }, [length, num, char, setPassword]);

  useEffect(() => {
    PasswordGenerator();
    return () => { };
  }, [length, num, char, setPassword]);

  // Change password text color based on length
  const passwordTextStyle = {
    color: length === 0 ? 'rgba(107, 114, 128, 1)' : generateRandomColor(),
    fontWeight: 'bold', // Make text bold
    transition: 'color 0.3s ease',
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 space-y-6">
        <h1 className="text-4xl font-semibold text-indigo-500 mb-6 animate__animated animate__fadeIn">
          Password Generator
        </h1>

        <input
          type="text"
          value={password}
          readOnly
          style={passwordTextStyle}
          className="w-full max-w-sm p-4 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 animate__animated animate__pulse"
        />

        <button
          onClick={() => {
            navigator.clipboard.writeText(password)
              .then(() => { alert("Copied to Clipboard"); })
              .catch((err) => { alert("Failed Error: " + err); });
          }}
          className="w-full max-w-sm py-2 px-4 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
        >
          Copy
        </button>

        <div className="w-full max-w-sm flex flex-col items-center mb-6 space-y-4">
          <input
            type="range"
            min="0"
            max="20"
            value={length}
            onChange={(e) => { setLength(e.target.value); }}
            className="w-full bg-gray-800 rounded-lg transition duration-300 transform hover:scale-105 focus:ring-2 focus:ring-indigo-500"
          />
          <p className="text-lg text-indigo-400">Length: {length}</p>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={num}
              onChange={() => { setNum((prev) => !prev); }}
              className="text-indigo-500 transform scale-125"
            />
            <label className="ml-2 text-lg">Include Numbers</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={char}
              onChange={() => { setChar((prev) => !prev); }}
              className="text-indigo-500 transform scale-125"
            />
            <label className="ml-2 text-lg">Include Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
