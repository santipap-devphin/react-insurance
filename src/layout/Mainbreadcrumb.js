import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Mainbreadcrumb = ({page}) => {

    const handleClick = (e) => {

        e.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

  return (<div role="presentation" onClick={handleClick}>
                
              
            </div>
  )
}

export default Mainbreadcrumb