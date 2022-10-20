import { CELL_SIZE } from '../constants'

const drawLine = (ctx, begin, end, stroke = '#D3D3D3', width = 1) => {
  if (stroke) {
    ctx.strokeStyle = stroke
  }

  if (width) {
    ctx.lineWidth = width
  }

  ctx.beginPath()
  ctx.moveTo(...begin)
  ctx.lineTo(...end)
  ctx.stroke()
}

const drawCell = (ctx, cellX, cellY) => {
  ctx.beginPath()
  ctx.fillRect(cellX * CELL_SIZE, cellY * CELL_SIZE, CELL_SIZE, CELL_SIZE)
  ctx.stroke()
}

const drawGrid = (context, canvasWidth, canvasHeight) => {
  for (const i of [...Array(canvasWidth).keys()]) {
    drawLine(context, [i * CELL_SIZE, 0], [i * CELL_SIZE, canvasHeight])
    drawLine(context, [0, i * CELL_SIZE], [canvasWidth, i * CELL_SIZE])
  }
}

const getCellCoordinates = (canvas, event) => {
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  return { x: Math.trunc(x / CELL_SIZE), y: Math.trunc(y / CELL_SIZE) }
}

export { drawLine, drawCell, drawGrid, getCellCoordinates }
