import React from 'react';

class HueCard extends React.Component {
	render(){
		const headerStyle = {
		  width: '90%',
		  margin: '20px auto',

		};

		return(
		<div className="wrapper" style={headerStyle}>
			<div className="card">
			<h1> Hi </h1>
			</div>
		</div>
		); 
	}
}

export default HueCard;