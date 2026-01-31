import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Company logo component that renders specific logos based on the image name
// Due to Gatsby's StaticImage requirements, all image paths must be statically analyzable
const CompanyLogo = ({ logo }) => {
  const { url, image, alt, maxWidth = '170px', maxHeight = '170px' } = logo;

  const renderLogo = () => {
    const style = {
      width: 'auto',
      height: 'auto',
      maxWidth,
      maxHeight
    };

    switch (image) {
      case 'nvidia-logo.png':
        return <StaticImage style={style} alt={alt} src="../../images/nvidia-logo.png" />;
      case 'deloitte-logo.png':
        return <StaticImage style={style} alt={alt} src="../../images/deloitte-logo.png" />;
      case 'georgetown-logo.png':
        return <StaticImage style={style} alt={alt} src="../../images/georgetown-logo.png" />;
      case 'dmi-logo.png':
        return <StaticImage style={style} alt={alt} src="../../images/dmi-logo.png" />;
      case 'rose-hulman-logo.png':
        return <StaticImage style={style} alt={alt} src="../../images/rose-hulman-logo.png" />;
      default:
        console.warn(`No logo found for: ${image}`);
        return null;
    }
  };

  return <a href={url}>{renderLogo()}</a>;
};

export default CompanyLogo;
