
import React, { useRef, useState } from 'react';
import { Box, Button, Center } from '@chakra-ui/react';

import video from "../Images/video.mp4";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Box sx={styles.container}>
      <video ref={videoRef} style={styles.video}>
        <source src={video} type="video/mp4" />
      </video>
      <Center>
        <Button onClick={handlePlayPause} sx={styles.button}>
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
      </Center>
    </Box>
  );
};

const styles = {
  container: {
    marginBottom: '20px',
    justifyContent: 'center',
  },
  video: {
    width: '60%',
    marginLeft: '300px',
    display: 'flex'
  },
  button: {
    colorScheme: 'blue',
    size: 'md',
  },
};

export default VideoPlayer;
