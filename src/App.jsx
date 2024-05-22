
// import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
// import Home from './Home';
// import Login from './Login';

import { useState } from "react"



// // App Component
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;







function App() {
  const [outputString, setOutputString] = useState('');

  const handleClick = (letter) => {
    let newOutputString = outputString + letter;
    newOutputString = replaceConsecutiveLetters(newOutputString);
    setOutputString(newOutputString);
  };

  const replaceConsecutiveLetters = (str) => {
    return str.replace(/(.)\1{2,}/g, (match) => '_'.repeat(match.length));
  };

  return (
    <div className="App flex justify-center items-center h-screen">
      <div className="p-4">
        <div className="grid grid-cols-6 gap-2 mb-4">
          {Array.from({ length: 26 }, (_, i) => (
            <button
              key={i}
              onClick={() => handleClick(String.fromCharCode(65 + i))}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              {String.fromCharCode(65 + i)}
            </button>
          ))}
        </div>
        <div>
          <strong>Output String:</strong> <span id="outputString">{outputString}</span>
        </div>
      </div>
    </div>
  );
}

export default App;

