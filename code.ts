figma.showUI(__html__)

figma.ui.onmessage = async (pluginmessage) => {
  const nodes: SceneNode[] = [];

  const frame = figma.createFrame()
  frame.resizeWithoutConstraints(
    figma.viewport.bounds.width / 2.5, figma.viewport.bounds.height / 2.5
  )

  await figma.loadFontAsync({ family: "Inter", style: "Regular" })

  let title = figma.createText();
  title.x = frame.x + (frame.height / 2)
  title.y = frame.y + (frame.width / 10)

  title.characters = "Title";
  title.textAutoResize = "WIDTH_AND_HEIGHT"
  title.fontSize = figma.viewport.bounds.width / 30

  frame.appendChild(title);

  nodes.push(frame);

  figma.viewport.scrollAndZoomIntoView(nodes);


  figma.currentPage.selection = nodes;

}