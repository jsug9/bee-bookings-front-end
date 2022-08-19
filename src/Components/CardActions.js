import { Button, CardActions } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const CardActionsContainer = () => {
  const handleFacebookClick = () => {
    console.log('facebook clicked');
    console.log(window.location.pathname);
  };

  const handleTwitterClick = () => {
    console.log('twitter clicked');
  };

  const handleInstagramClick = () => {
    console.log('instagram clicked');
  };

  return (
    <CardActions className="social-icons-container">
      <Button size="large" color="inherit" onClick={handleFacebookClick}>
        <FacebookRoundedIcon />
      </Button>
      <Button size="large" color="inherit" onClick={handleTwitterClick}>
        <TwitterIcon />
      </Button>
      <Button size="large" color="inherit" onClick={handleInstagramClick}>
        <InstagramIcon />
      </Button>
    </CardActions>
  );
};

export default CardActionsContainer;
