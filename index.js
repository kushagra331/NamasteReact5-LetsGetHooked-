import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Body from './components/Body';


// const SearchSection = () =>{
// 	const [searchTxt,setSearchTxt]=useState("");
// 	return (
// 		<div className="search-bar">
// 			<div classname="search">
// 				<input type="text" placeholder="   Search..."
// 				value={searchTxt} 
// 				onChange={(e)=>setSearchTxt(e.target.value)} 
// 				/>
// 				<button type="button" >
// 					<img src={require("./components/images/search.png")} alt="" />
// 				</button>
// 			</div>
// 		</div>
// 	)
// }



const App = () =>{
	return (
	<>
		<Header/>
		<Body/>
		<Footer/>
	</>
	);
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

{/* <CardBox/> */}
