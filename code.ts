figma.showUI(__html__)

figma.ui.onmessage = pluginMessage => {
  console.log(pluginMessage.action)
}