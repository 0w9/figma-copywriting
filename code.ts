figma.showUI(__html__)

figma.ui.onmessage = pluginMessage => {
  const rect = figma.createRectangle()
  rect.x = figma.viewport.bounds.x
  rect.y = figma.viewport.bounds.y

  rect.resize(100 / figma.viewport.zoom, 100 / figma.viewport.zoom)
  
  rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]
}