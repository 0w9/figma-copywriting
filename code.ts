figma.showUI(__html__)

async function fetchAssets() {
}


figma.ui.onmessage = async (pluginmessage) => {
  if (pluginmessage.action === 'fetchedAssets') {
    console.log(JSON.stringify(pluginmessage.assets.header))

    console.log(pluginmessage.assets)
    const header = pluginmessage.assets.header;
    const subheader = pluginmessage.assets.subheader;
    const description = pluginmessage.assets.description;
    const cta = pluginmessage.assets.description;
    const colors = pluginmessage.assets.color;

    console.log(colors)

    const nodes: SceneNode[] = [];

    const frame = figma.createFrame()

    const rec = figma.createRectangle()
    rec.fills = [{ type: 'SOLID', color: {r: Number(`0.${colors[0][0]}`), g: Number(`0.${colors[0][1]}`), b: Number(`0.${colors[0][2]}`)} }]
    
    const rec2 = figma.createRectangle()
    rec2.fills = [{ type: 'SOLID', color: {r: Number(`0.${colors[1][0]}`), g: Number(`0.${colors[1][1]}`), b: Number(`0.${colors[1][2]}`)} }]
    
    const rec3 = figma.createRectangle()
    rec3.fills = [{ type: 'SOLID', color: {r: Number(`0.${colors[2][0]}`), g: Number(`0.${colors[2][1]}`), b: Number(`0.${colors[2][2]}`)} }]
   
    const rec4 = figma.createRectangle()
    rec4.fills = [{ type: 'SOLID', color: {r: Number(`0.${colors[3][0]}`), g: Number(`0.${colors[3][1]}`), b: Number(`0.${colors[3][2]}`)} }]
   
    const rec5 = figma.createRectangle()
    rec5.fills = [{ type: 'SOLID', color: {r: Number(`0.${colors[4][0]}`), g: Number(`0.${colors[4][1]}`), b: Number(`0.${colors[4][2]}`)} }]

    
    rec2.x = 100
    rec3.x = 100 + rec3.height
    rec4.x = 100 + rec3.height + rec4.height
    rec5.x = 100 + rec3.height + rec4.height + rec5.height
    

    rec.name = "Rec"
    rec2.name = "Rec2"
    rec3.name = "Rec3"
    rec4.name = "Rec4"
    rec5.name = "Rec5"

    const component = figma.createComponent()
    component.appendChild(rec)
    component.appendChild(rec2)
    component.appendChild(rec3)
    component.appendChild(rec4)
    component.appendChild(rec5)

    component.y = -150
    component.x = 0

    frame.resizeWithoutConstraints(
      1200, 800
    )

    await figma.loadFontAsync({ family: "Inter", style: "Regular" })

    let title = figma.createText();

    title.textAutoResize = "WIDTH_AND_HEIGHT"
    title.textAlignHorizontal = "CENTER"

    title.characters = header;

    title.fontSize = figma.viewport.bounds.width / 50
    title.resize(frame.width, title.height)

    title.x = frame.x
    title.y = frame.height / 7.5

    let text = figma.createText();
    /*
    text.textAutoResize = "WIDTH_AND_HEIGHT"
    text.textAlignHorizontal = "CENTER"

    text.characters = subheader;

    //text.fontSize = figma.viewport.bounds.width / 75
    text.resize(frame.width * 0.85, text.height)

    text.x = frame.x / 2
    text.y = frame.y + frame.height / 3
      */

    text.y = frame.height / 3.5
    frame.appendChild(text)

    text.textAutoResize = "WIDTH_AND_HEIGHT";
    text.layoutAlign = "STRETCH";

    text.characters = subheader
    frame.appendChild(title);

    nodes.push(frame);
    nodes.push(component)

    figma.viewport.scrollAndZoomIntoView(nodes);


    figma.currentPage.selection = nodes;
  }
}