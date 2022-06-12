import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
function SliderRange() {
    // Our States
    const [value, setValue] = React.useState([2, 10]);

    // Changing State when volume increases/decreases
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div
            style={{
                margin: 'auto',
                display: 'block',
                width: '100%',
            }}
        >
            <Typography id="range-slider" gutterBottom></Typography>
            <Slider value={value} onChange={rangeSelector} valueLabelDisplay="auto" />${value[0]} - ${value[1]}
        </div>
    );
}
export default SliderRange;
