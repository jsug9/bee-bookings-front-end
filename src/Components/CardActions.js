import { Button, CardActions } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'next-share';

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
      <FacebookShareButton
        url="https://github.com/next-share"
        quote="Hey! Checkout this awesome bee 🐝. I'll be booking it soon!"
        hashtag="#beeTeam"
      >
        <Button size="large" color="inherit" onClick={handleFacebookClick}>
          <FacebookRoundedIcon />
        </Button>
      </FacebookShareButton>
      <TwitterShareButton
        url="https://github.com/next-share"
        title="Hey! Checkout this awesome bee 🐝. I'll be booking it soon!"
      >
        <Button size="large" color="inherit" onClick={handleTwitterClick}>
          <TwitterIcon />
        </Button>
      </TwitterShareButton>
      <WhatsappShareButton
        url="https://github.com/next-share"
        title="Hey! Checkout this awesome bee 🐝. I'll be booking it soon!"
        separator=":: "
      >
        <Button size="large" color="inherit" onClick={handleInstagramClick}>
          <WhatsAppIcon />
        </Button>
      </WhatsappShareButton>
    </CardActions>
  );
};

export default CardActionsContainer;
