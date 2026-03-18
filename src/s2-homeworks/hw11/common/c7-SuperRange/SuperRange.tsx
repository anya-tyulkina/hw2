import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '150px',
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '1px solid #00CC22',
                },

                '& .MuiSlider-thumb::before': {
                    height: '6px',
                    width: '6px',
                    backgroundColor: '#00CC22',
                },

                '& .MuiSlider-track': {
                    border: 'none',
                    height: 4,
                },


                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
