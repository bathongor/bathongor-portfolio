import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Social Pay <Badge>2016-</Badge>
      </Title>
      <P>
        A landing page for one of the most popular payment apps in Mongolia.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href=" https://www.socialpay.mn/">
            https://www.socialpay.mn/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, GSAP, CSS/SCSS</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/socialpay_01.jpg" alt="Social Pay" />
      <WorkImage
        src="/images/works/socialpay_02.jpg"
        alt="Social Pay - Page 02"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
