// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Home = () => {
//   const navigate = useNavigate();
//   const booksPerPage = 3;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleLogout = () => {
//     localStorage.removeItem('isLoggedIn');
//     navigate('/login');
//   };

//   const books = [
//     { title: 'Book 1', author: 'Author 1', coverImage: 'https://via.placeholder.com/150' },
//     { title: 'Book 2', author: 'Author 2', coverImage: 'https://via.placeholder.com/150' },
//     { title: 'Book 3', author: 'Author 3', coverImage: 'https://via.placeholder.com/150' },
//     { title: 'Book 4', author: 'Author 4', coverImage: 'https://via.placeholder.com/150' },
//     { title: 'Book 5', author: 'Author 5', coverImage: 'https://via.placeholder.com/150' },
//     { title: 'Book 6', author: 'Author 6', coverImage: 'https://via.placeholder.com/150' },
//     { title: 'Book 7', author: 'Author 7', coverImage: 'https://via.placeholder.com/150' },
//     { title: 'Book 8', author: 'Author 8', coverImage: 'https://via.placeholder.com/150' },
//     { title: 'Book 9', author: 'Author 9', coverImage: 'https://via.placeholder.com/150' },
//   ];

//   const filteredBooks = books.filter(
//     (book) =>
//       book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       book.author.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
//   const currentBooks = filteredBooks.slice((currentPage - 1) * booksPerPage, currentPage * booksPerPage);

//   const goToPage = (page) => {
//     setCurrentPage(page);
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-white shadow-md py-4 fixed top-0 left-0 w-full z-10">
//         <div className="container mx-auto flex justify-between items-center px-6">
//           <div className="text-xl font-bold">Artlit Publications</div>
//           <input
//             type="text"
//             placeholder="Search books..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="px-4 py-2 border rounded mx-4"
//           />
//           <button
//             onClick={handleLogout}
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Logout
//           </button>
//         </div>
//       </header>
//       <main className="container mx-auto flex flex-col items-center justify-center flex-grow px-6 mt-20">
//         <section className="text-center my-10 w-2/3">
//           <h2 className="text-4xl font-bold mb-4">Welcome to the Artlit Publications!</h2>
//           <Slider {...settings}>
//             <div className="hero-section mb-10">
//               <img src="https://via.placeholder.com/600x400" alt="Hero 1" className="w-full h-[200px] mb-4 rounded"/>
//               <p className="text-gray-700">Here is some artlit publication content 1.</p>
//             </div>
//             <div className="hero-section mb-10">
//               <img src="https://via.placeholder.com/600x400" alt="Hero 2" className="w-full h-[200px] mb-4 rounded"/>
//               <p className="text-gray-700">Here is some artlit publication content 2.</p>
//             </div>
//             <div className="hero-section mb-10">
//               <img src="https://via.placeholder.com/600x400" alt="Hero 3" className="w-full  h-[200px] mb-4 rounded"/>
//               <p className="text-gray-700">Here is some artlit publication content 3.</p>
//             </div>
//           </Slider>
//         </section>
//         <section className="w-full max-w-4xl mx-auto p-6 bg-white rounded shadow-md">
//           <h2 className="text-2xl font-bold mb-6">Book List</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {currentBooks.map((book, index) => (
//               <div key={index} className="bg-gray-200 p-4 rounded shadow">
//                 <img src={book.coverImage} alt={book.title} className="w-full h-48 object-cover mb-4 rounded" />
//                 <h3 className="text-xl font-bold">{book.title}</h3>
//                 <p className="text-gray-700">{book.author}</p>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-center mt-6">
//             {[...Array(totalPages).keys()].map((page) => (
//               <button
//                 key={page}
//                 onClick={() => goToPage(page + 1)}
//                 className={`mx-1 px-4 py-2 rounded ${
//                   currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
//                 }`}
//               >
//                 {page + 1}
//               </button>
//             ))}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Home;
