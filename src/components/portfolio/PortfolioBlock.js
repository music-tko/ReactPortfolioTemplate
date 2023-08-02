import React from 'react';
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} margin={'30px'} bgcolor={'white'} width={'15em'} height={'15em'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
      </Box>
   );
}

export default PortfolioBlock;