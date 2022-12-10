import { Container, Heading, Text, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Credits = () => (
  <Layout title="Credits">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Credits
      </Heading>

      <Text>
        This portfolio has been forked from craftzdog-homepage, and served as a
        personal portfolio skeleton. The original design belongs to{' '}
        <Link href="https://www.craftz.dog/" target="_blank">
          Takuya Matsuyama <ExternalLinkIcon mx="2px" />
        </Link>
      </Text>
      <br />

      <Text>
        I also would like to give a credit to this Vanilla-JavaScript matrix
        effect implementation by{' '}
        <Link href="https://codepen.io/gnsp/pen/vYBQZJm" target="_blank">
          Ganesh Prasad. <ExternalLinkIcon mx="2px" />
        </Link>
      </Text>

      <br />
    </Container>
  </Layout>
)

export default Credits
export { getServerSideProps } from '../components/chakra'
