import { useEffect, useRef } from 'react'
import { drawCell, drawGrid, getCellCoordinates } from './helpers/shape'

const Canvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    let canvasWidth = canvas.width
    let canvasHeight = canvas.height

    if (window.devicePixelRatio > 1) {
      canvas.width = canvasWidth * window.devicePixelRatio
      canvas.height = canvasHeight * window.devicePixelRatio
      canvas.style.width = canvasWidth + 'px'
      canvas.style.height = canvasHeight + 'px'

      context.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    drawGrid(context, canvasWidth, canvasHeight)

    canvas.addEventListener('click', (event) => {
      const { x, y } = getCellCoordinates(canvas, event)
      drawCell(context, x, y)
    })
  }, [])

  return <canvas ref={canvasRef} width={2000} height={2000} />
}

const App = () => {
  return <Canvas />
}

export default App
