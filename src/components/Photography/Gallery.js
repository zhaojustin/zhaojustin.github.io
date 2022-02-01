import React from "react";

import { Box, Stack, Container, Typography } from "@mui/material";

import Masonry from "@mui/lab/Masonry";

import { getImageList } from "./ImageLists";

function Gallery(props) {
  const imageList = getImageList(props.album);

  return (
    <Container>
      {/* Heading/Introduction */}
      <Box sx={{ py: { xs: 2, sm: 4 } }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={{ xs: 1, sm: 2 }}>
          {imageList.map((item, index) => (
            <Stack key={index}>
              <img
                src={`${item.img}?w=162&auto=format`}
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </Stack>
          ))}
        </Masonry>
      </Box>
    </Container>
  );
}

export default Gallery;
