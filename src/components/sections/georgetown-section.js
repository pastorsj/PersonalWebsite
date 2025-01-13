import * as React from 'react';
import { Text, Flex, Heading } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

const GeorgetownSection = () => {
  return (
    <div
      style={{
        gridArea: '2/1',
        position: 'relative',
        placeItems: 'center',
        backgroundColor: '#DDDDDF',
        display: 'grid',
        color: '#041E42',
        fontFamily: 'dosis'
      }}
    >
      <Flex maxWidth="100vw" flexDirection="column" margin="4rem 1rem">
        <Flex flexDirection="column" marginBottom="2rem">
          <Heading size="3xl">Georgetown University</Heading>
          <Text fontSize="md" fontWeight="bold">
            MS in Data Science and Analytics
          </Text>
          <Text fontStyle="italic">August 2021 - December 2022</Text>
        </Flex>
        <Flex flexDirection="row" flexWrap="wrap">
          <Flex
            flexDirection="column"
            maxWidth="60vw"
            marginRight="2rem"
            marginBottom="1rem"
            minWidth={['100%', '100%', 'initial']}
          >
            <Text>
              I attended Georgetown University for an 18-month Masters of Science in Data Science & Analytics. A Masters
              in Data Science significantly increased my technical and managerial skills. I was the head graduate
              teaching assistant for the Statistics and Probability for Data Science course this fall. My
              responsibilities include coordinating a group of 13 teaching assistants and three different professors to
              teach 150+ students. I led the discussion sessions, lab, case study, and homework grading. I was also a
              graduate teaching assistant for the data structures and algorithms course in the Analytics program. I led
              the in-class exercise portion of the class and answered any questions students had throughout the class
              time. Additionally, I was the head graduate teaching assistant for the advanced web application
              development course in my first semester as a graduate student.
            </Text>
            <br />
            <Text>
              I did research into recommendation systems, especially surrounding image similarity. Most recently, I am
              working with art collections to provide better recommendations for viewers interested in works of art
              similar to the one they are viewing. I am writing a paper now that will be submitted to WACV.
            </Text>
            <br />
            <Flex flexDirection="column">
              <Text fontSize="3xl">Experience</Text>
              <Flex flexDirection="row" flexWrap="wrap">
                <Flex flexDirection="column">
                  <Text fontSize="xl">Technologies</Text>
                  <Flex flexDirection="row" flexWrap="wrap">
                    <a href="https://www.python.org">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '60px',
                          maxHeight: '60px',
                          margin: '1rem'
                        }}
                        alt="Python Logo"
                        src={'../../images/python-logo.png'}
                      />
                    </a>
                    <a href="https://www.r-project.org">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '90px',
                          maxHeight: '70px',
                          margin: '1rem'
                        }}
                        alt="R Logo"
                        src={'../../images/r-logo.png'}
                      />
                    </a>
                    <a href="https://pytorch.org">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '60px',
                          maxHeight: '80px',
                          margin: '1rem'
                        }}
                        alt="PyTorch Logo"
                        src={'../../images/pytorch-logo.png'}
                      />
                    </a>
                    <a href="https://www.tensorflow.org">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '60px',
                          maxHeight: '80px',
                          margin: '1rem'
                        }}
                        alt="TensorFlow Logo"
                        src={'../../images/tensorflow-logo.png'}
                      />
                    </a>
                    <a href="https://scikit-learn.org/stable/">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '80px',
                          maxHeight: '60px',
                          margin: '2rem 1rem 1rem 1rem'
                        }}
                        alt="SciKit Learn Logo"
                        src={'../../images/sklearn-logo.png'}
                      />
                    </a>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex margin="auto">
            <a href="https://analytics.georgetown.edu/">
              <StaticImage
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '110px',
                  maxHeight: '110px'
                }}
                alt="Georgetown University Logo"
                src={'../../images/georgetown-logo.png'}
              />
            </a>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default GeorgetownSection;
