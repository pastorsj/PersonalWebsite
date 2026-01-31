import * as React from 'react';
import { Flex, Heading, Box, Text, Grid, GridItem, Link } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const InterestCard = ({ href, image, alt, title, description, delay }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <GridItem
      ref={ref}
      className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Link
        href={href}
        _hover={{ textDecoration: 'none' }}
        display="block"
        height="100%"
      >
        <Box
          height="100%"
          borderRadius="xl"
          overflow="hidden"
          background="rgba(0,0,0,0.7)"
          boxShadow="0 4px 20px rgba(0,0,0,0.3)"
          transition="transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease"
          _hover={{
            transform: 'translateY(-4px) scale(1.02)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
            background: 'rgba(0,0,0,0.55)'
          }}
        >
          <Box overflow="hidden">
            {image}
          </Box>
          <Box p="1.5rem">
            <Text
              fontWeight="bold"
              fontSize={['lg', 'xl']}
              mb="0.5rem"
              color="white"
            >
              {title}
            </Text>
            <Text
              fontSize={['sm', 'md']}
              lineHeight="1.6"
              color="rgba(255,255,255,0.9)"
            >
              {description}
            </Text>
          </Box>
        </Box>
      </Link>
    </GridItem>
  );
};

const InterestsSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation();

  const interests = [
    {
      href: "https://www.flickr.com/people/sampastorizaphotos/",
      image: <StaticImage alt="Cross Country" src={'../../images/cross-country.png'} style={{ height: '200px' }} imgStyle={{ objectFit: 'cover' }} />,
      title: "Photography",
      description: "This is one of my favorite past times. The majority of my photos are posted on Flickr. Check them out by clicking on the image above!"
    },
    {
      href: "https://firsttee.org/",
      image: <StaticImage alt="Streamsong Golf Resort" src={'../../images/golf-course.png'} style={{ height: '200px' }} imgStyle={{ objectFit: 'cover' }} />,
      title: "Golf",
      description: "I played golf starting at a young age and the love of the game has never left. The First Tee is a wonderful association that teaches young people the game of golf and life skills at the same time."
    },
    {
      href: "http://lucianocucinaitaliana.com/en/luciano-monosilio-eng/",
      image: <StaticImage alt="Pasta Carbonara by Luciano Monosilio" src={'../../images/carbonara.jpeg'} style={{ height: '200px' }} imgStyle={{ objectFit: 'cover' }} />,
      title: "Cooking",
      description: "I particularly enjoy French and Italian cuisine. Currently I follow chefs including Luciano Monosilio, Pierre Hermès, Christoph Adam and Ina Garten."
    },
    {
      href: "https://www.teatroallascala.org/en/index.html",
      image: <StaticImage alt="Teatro alla Scala" src={'../../images/teatro-alla-scala.jpeg'} style={{ height: '200px' }} imgStyle={{ objectFit: 'cover' }} />,
      title: "Music",
      description: "Music has always been a part of life, ranging from rock and the Rolling Stones to Giuseppe Verdi's opera masterworks."
    }
  ];

  return (
    <Box
      position="relative"
      overflow="hidden"
      fontFamily="dosis"
    >
      {/* Background image */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
      >
        <StaticImage
          style={{
            width: '100%',
            height: '100%'
          }}
          imgStyle={{
            objectFit: 'cover'
          }}
          layout="fullWidth"
          alt=""
          src={'../../images/golf.png'}
          formats={['auto', 'webp', 'avif']}
        />
        {/* Overlay for better contrast */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          background="linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)"
        />
      </Box>

      {/* Content */}
      <Box
        position="relative"
        zIndex="1"
        py={['3rem', '4rem', '5rem']}
        px={['1rem', '2rem', '4rem']}
        maxW="1400px"
        mx="auto"
      >
        <Heading
          ref={headerRef}
          size={['2xl', '3xl']}
          color="white"
          mb={['2rem', '3rem']}
          textAlign="center"
          textShadow="0 2px 4px rgba(0,0,0,0.3)"
          className={`animate-on-scroll ${headerVisible ? 'visible' : ''}`}
        >
          Activities and Interests
        </Heading>

        <Grid
          templateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
          gap={['1.5rem', '2rem']}
        >
          {interests.map((interest, index) => (
            <InterestCard
              key={interest.title}
              {...interest}
              delay={index * 100}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default InterestsSection;
