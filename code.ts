figma.showUI(__html__)

async function fetchAssets() {
}


figma.ui.onmessage = async (pluginmessage) => {
  if (pluginmessage.action === 'fetchedAssets') {
    console.log(JSON.stringify(pluginmessage.assets.header))

    const header = pluginmessage.assets.header;
    const subheader = pluginmessage.assets.subheader;
    const description = pluginmessage.assets.description;


    const nodes: SceneNode[] = [];

    const frame = figma.createFrame()
    frame.resizeWithoutConstraints(
      figma.viewport.bounds.width / 2.5, figma.viewport.bounds.height / 2.5
    )

    await figma.loadFontAsync({ family: "Inter", style: "Regular" })

    let title = figma.createText();

    title.characters = pluginmessage.assets.header;
    title.textAutoResize = "WIDTH_AND_HEIGHT"
    title.textAlignHorizontal = "CENTER"

    title.fontSize = figma.viewport.bounds.width / 50
    title.resize(frame.width, title.height)

    title.x = frame.x
    title.y = frame.y + frame.height / 7.50

    let text = figma.createText();
    text.resize(0.75 * frame.width, text.height)

    text.x = 77 - 22
    text.y = frame.y + frame.height / 3

    text.characters = pluginmessage.assets.subheader;
    text.textAutoResize = "WIDTH_AND_HEIGHT"
    text.textAlignHorizontal = "CENTER"
    text.fontSize = figma.viewport.bounds.width / 75

    frame.appendChild(title);
    frame.appendChild(text);

    nodes.push(frame);

    figma.viewport.scrollAndZoomIntoView(nodes);


    figma.currentPage.selection = nodes;
  }
}