import * as React from 'react';
import { Text, Flex, Heading } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

const NVIDIASection = () => {
  return (
    <div
      style={{
        gridArea: '1/1',
        position: 'relative',
        placeItems: 'center',
        backgroundColor: '#FFFFFF',
        display: 'grid',
        color: '#000000',
        fontFamily: 'dosis'
      }}
    >
      <Flex maxWidth="100vw" flexDirection="column" margin="4rem 1rem">
        <Flex flexDirection="column" marginBottom="2rem">
          <Heading size="3xl">NVIDIA</Heading>
          <Flex flexDirection="row" alignItems="center" gap="2rem" margin="1rem 0">
            <Flex flexDirection="column">
              <Text fontSize="md" fontWeight="bold">
                Solutions Architect
              </Text>
              <Text fontStyle="italic">Sept 2025 - Present</Text>
            </Flex>
          </Flex>
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
              As a Solutions Architect at NVIDIA, I leverage my expertise in AI and machine learning to design and
              implement cutting-edge solutions that harness the power of NVIDIA's NeMo technology to build agentic
              applications. I collaborate with cross-functional teams to develop scalable architectures, optimize
              performance, and ensure seamless integration of AI models into real-world applications. My role involves
              working closely with clients to understand their unique challenges and deliver tailored solutions that
              drive innovation and business value.
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
                    <a href="https://developer.nvidia.com/morpheus-cybersecurity">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '80px',
                          maxHeight: '60px',
                          margin: '1.5rem 1rem 1rem 1rem'
                        }}
                        alt="NVIDIA (Morpheus) Logo"
                        src={'../../images/nvidia-logo.png'}
                      />
                    </a>
                    <a href="https://rapids.ai">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '90px',
                          maxHeight: '60px',
                          margin: '2rem 1rem 1rem 1rem'
                        }}
                        alt="RAPIDS (NVIDIA) Logo"
                        src={'../../images/rapids-logo.png'}
                      />
                    </a>
                    <a href="https://www.langchain.com">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '60px',
                          maxHeight: '60px',
                          margin: '1.5rem 1rem 1rem 1rem'
                        }}
                        alt="LangChain Logo"
                        src={'../../images/langchain-logo.png'}
                      />
                    </a>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex margin="auto">
            <a href="https://www.nvidia.com/en-us/">
              <StaticImage
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '190px',
                  maxHeight: '170px'
                }}
                alt="NVIDIA Logo"
                src={'../../images/nvidia-logo.png'}
              />
            </a>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default NVIDIASection;
