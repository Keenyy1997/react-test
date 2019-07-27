import React from 'react'


class RGBSelector extends React.Component {


    render() {

        return (
            <div style={{maxWidth: '200px'}} className="rgb-input">
                <input type='range' min={0} max={255} onChange={this.props.onColorChange} value={this.props.value}/>
                <center><b>{ this.props.value }</b></center>
            </div>
        )
    }

}

export default RGBSelector