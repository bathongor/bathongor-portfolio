import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'

const Matrix = ({ children }) => {
  useEffect(() => {
    const canvas = document.getElementById('canv')
    const ctx = canvas.getContext('2d')

    const w = (canvas.width = document.body.offsetWidth)
    const h = (canvas.height = document.body.offsetHeight)
    const cols = Math.floor(w / 30) + 1
    const ypos = Array(cols).fill(0)

    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, w, h)

    function matrix() {
      ctx.fillStyle = '#0001'
      ctx.fillRect(0, 0, w, h)

      ctx.fillStyle = '#0f0'
      ctx.font = '15pt monospace'

      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128)
        const x = ind * 30
        ctx.fillText(text, x, y)
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0
        else ypos[ind] = y + 30
      })
    }

    setInterval(matrix, 70)
  }, [])
  return (
    <Box>
      <canvas id="canv" style={{ position: 'absolute', opacity: 0.2 }}></canvas>
      <Box>{children}</Box>
    </Box>
  )
}

export default Matrix
