import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
		<Box>
			<h4>
				Throughout my freelancing and agency career,  <br />
				I've collaborated with great clients on amazing projects.  <br />
				Though I can't showcase everything publicly, I'd be happy to share tailored examples upon request. <br />
				Let's connect!
			</h4>
			<Grid container display={'flex'} justifyContent={'center'} flexWrap={'wrap'} alignContent={'center'}>
				{info.portfolio.map((project, index) => (
					<Grid item xs={6} md={3} key={index}>
						<PortfolioBlock image={project.image} />
					</Grid>
				))}
			</Grid>
		</Box>
    );
};