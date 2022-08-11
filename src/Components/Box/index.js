import React, { useEffect, useState } from 'react';
import { Box, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark, Text,} from '@chakra-ui/react'

    function Boxed(){
        const [sliderValue, setSliderValue] = useState(3)
        const labelStyles = {
            mt: '2',
            ml: '-2.5',
            fontSize: 'sm',
        }
        return(
            <Box maxW='md' borderWidth='1px' overflow='hidden' shadow='lg'>
               <Box><Text>Use the slider to estimate how long the job will take</Text>
 <br></br>
                <Slider flex="1" min={1} max={5} aria-label='slider-ex-2' colorScheme='teal' onChange={(val) => setSliderValue(val)} >
                <SliderMark value={1} {...labelStyles}>
          1 hr
        </SliderMark>
        <SliderMark value={2} {...labelStyles}>
          2 hrs
        </SliderMark>
        <SliderMark value={3} {...labelStyles}>
          3 hrs
        </SliderMark>
        <SliderMark value={4} {...labelStyles}>
          4 hrs
        </SliderMark>
        <SliderMark value={5} {...labelStyles}>
          5 hrs
        </SliderMark>
              <SliderTrack height="5px"
          borderRadius="1px"
          border="1px solid #666"
          bg="teal"
              >
    <SliderFilledTrack 
    height="5px"
          borderRadius="1px"
          border="1px solid"
          bg="#666"/>
  </SliderTrack>
              <SliderThumb
                fontSize="sm"
                width="15px"
                height="15px"
                borderRadius="15px"
                border="1px solid #666"
                bg="#666"
                
                />
            </Slider></Box>
            </Box>
        );
    }
    export default Boxed;
