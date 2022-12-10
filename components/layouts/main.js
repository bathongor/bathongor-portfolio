import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import Matrix from '../matrix'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Batkhongor's homepage" />
        <meta name="author" content="Batkhongor Chagnaa" />
        <meta name="author" content="bat" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Takuya Matsuyama" />
        <meta name="og:title" content="Takuya Matsuyama" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Batkhongor Chagnaa</title>
      </Head>

      <NavBar path={router.asPath} />
      <Matrix>
        <Container maxW="container.md" pt={14}>
          <LazyVoxelDog />

          {children}

          <Footer />
        </Container>
      </Matrix>
    </Box>
  )
}

export default Main
