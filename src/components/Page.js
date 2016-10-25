import React, {PropTypes, Component} from 'react'
export default class Page extends Component {
	render() {
		const {year, fotos} = this.props
		return <div>
			<p>You have {photos.length} for {year} year </p>
		</div>
	}
}
Page.propTypes = {
	year : PropTypes.number.isRequired,
	photos : PropTypes.array.isRequired
}