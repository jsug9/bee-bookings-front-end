import { Button, CardActions } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const CardActionsContainer = () => (
  <CardActions className="social-icons-container">
    <Button size="large" color="inherit">
      <FacebookRoundedIcon />
    </Button>
    <Button size="large" color="inherit">
      <TwitterIcon />
    </Button>
    <Button size="large" color="inherit">
      <InstagramIcon />
    </Button>
  </CardActions>
);

export default CardActionsContainer;
