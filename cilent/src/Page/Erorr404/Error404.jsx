import React from 'react'
import "./Error404.css"
import {Link} from 'react-router-dom'
function Error404() {
  return (
    <div className='error404'>
        <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>Oops!</h1>
			</div>
			<h2>404 - Page not found</h2>
			<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
			<Link to={"/"}>Go To Homepage</Link>
		</div>
	</div>
    </div>
  )
}

export default Error404