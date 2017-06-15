import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target);
        this.props.onChange({unit: this.props.unit, temp: event.target.value});
    }

    render() {
        return(
            <div>
                <p>{this.props.label}</p><input value={this.props.value} onChange={this.handleChange}/>
            </div>
        )
    }
}

TemperatureInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
    unit: PropTypes.oneOf(['C', 'F'])
};

class TemperatureCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.computeTemp(props.unit, props.temp);

        this.handleChange = this.handleChange.bind(this);
    }

    convertC2F = (t) => {return (t * 9 / 5 + 32)};
    convertF2C = (t) => {return (t - 32 * 5 / 9)};

    computeTemp(unit, temp) {
        if(unit === "C") {
            return({tempC: temp, tempF: this.convertC2F(temp)});
        } else {
            return({tempC: this.convertF2C(temp), tempF: temp});
        }
    }

    handleChange(values) {
        this.setState(this.computeTemp(values.unit, values.temp));
    }

    render() {
        return (
            <div>
                <form>
                    <TemperatureInput label="Temp. Celsius:" unit="C" value={this.state.tempC} onChange={this.handleChange}/>
                    <TemperatureInput label="Temp. Farenheit:" unit="F" value={this.state.tempF} onChange={this.handleChange}/>
                </form>
            </div>
            )
    }
}

TemperatureCalculator.propTypes = {
    temp: PropTypes.number,
    unit: PropTypes.oneOf(['C', 'F'])
};


ReactDOM.render(
    <TemperatureCalculator temp={20} unit="C"/>,
    document.getElementById('root')
);
