
// import  { useState } from 'react';
// import {useNavigate} from 'react-router-dom'
// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       if (username === "user" && password === "123456") {
//         localStorage.setItem('isLoggedIn', 'true');
//         navigate('/home');
//       } else {
//         setError('Invalid username or password');
//       }
//     };
  
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
//         <div className="bg-white p-8 rounded shadow-xl w-full max-w-md">
//           <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-700">Username:</label>
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Enter username"
//                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Password:</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter password"
//                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             {error && <div className="text-red-500 text-sm">{error}</div>}
//             <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   };
//   export default Login