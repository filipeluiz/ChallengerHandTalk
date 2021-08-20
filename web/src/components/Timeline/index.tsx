import React from 'react'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import { useStyles } from './styles'

interface ITimelinaProps {
  text?: string
}

const valuetext = (value: number) => {
  return `${value} Frame`;
}

const Timeline: React.FC<ITimelinaProps> = ({ text }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number[]>([0, 50])

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom align='center'>
        { text }
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}

export default Timeline
