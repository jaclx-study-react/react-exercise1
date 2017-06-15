import React from 'react';
import ReactDOM from 'react-dom';

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <p>{this.props.label}</p><input/>
            </div>
        )
    }
}

class TemperatureCalculator extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <TemperatureInput label="Temp. Celsius:"/>
                    <TemperatureInput label="Temp. Farenheit:"/>
                </form>
            </div>
            )
    }
}

ReactDOM.render(
    <TemperatureCalculator />,
    document.getElementById('root')
);
