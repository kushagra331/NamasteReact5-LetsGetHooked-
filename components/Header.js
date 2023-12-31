import React from 'react'
const Title= () => {
	return (
		<div className="logo" >
			<a href="/">
				<img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="logo" />
			</a>
		</div>
	);
}
export default function Header() {
  return (
    <div className='nav-it'>
				<Title/>
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">Menu</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Cart</a></li>
				</ul>
		</div>
  )
}
