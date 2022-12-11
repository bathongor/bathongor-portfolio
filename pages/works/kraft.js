import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Kraft.mn">
    <Container>
      <Title>
        Kraft.mn <Badge>2020-present</Badge>
      </Title>
      <P>
        An online learning platform that focuses on teaching programming and
        technical skills in Mongolian. In the future, we plan to expand the
        reach to more diverse types of courses.
      </P>
      <P>
        <Link href="https://github.com/zjzoloo" target="_blank">
          Zoljargal Gantumur <ExternalLinkIcon mx="2px" />
        </Link>
        , the co-founder of Kraft.mn, is my friend. I coded the design in React.
        Both of us collaborated and designed the database schemda in Firebase.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://kraft.mn/" target="_blank">
              https://kraft.mn/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React / Firebase</span>
        </ListItem>
      </List>

      <WorkImage src="/images/kraft-01.jpg" alt="Kraft" />
      <WorkImage src="/images/kraft-02.jpg" alt="Kraft" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
