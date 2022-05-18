import React from 'react'
import logo2 from '../../assets/images/logo2.png'

function Header() {
  return (
    <div className="header-bot">
		<div className="container">
			<div className="row header-bot_inner_wthreeinfo_header_mid">
				<div className="col-md-3 logo_agile">
					<h1 className="text-center">
						<a href="index.html" className="font-weight-bold font-italic">
							<img src={logo2} alt=" " className="img-fluid"/>Electro Store
						</a>
					</h1>
				</div>
				<div className="col-md-9 header mt-4 mb-md-0 mb-4">
					<div className="row">
						<div className="col-10 agileits_search">
							<form className="form-inline" action="#" method="post">
								<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required/>
								<button className="btn my-2 my-sm-0" type="submit">Search</button>
							</form>
						</div>
						
						<div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
							<div className="wthreecartaits wthreecartaits2 cart cart box_1">
								<form action="#" method="post" className="last">
									<input type="hidden" name="cmd" value="_cart"/>
									<input type="hidden" name="display" value="1"/>
									<button className="btn w3view-cart" type="submit" name="submit" value="">
										<i className="fas fa-cart-arrow-down"></i>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Header