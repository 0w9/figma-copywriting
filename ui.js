var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function Plugin() {
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            const req = yield fetch("http://localhost:5001/generate", {
                method: "POST",
                body: JSON.stringify({
                    text: "Short-form video app, which stores the videos on the blockchain.",
                }),
            });
            const assets = yield req.json();
            parent.postMessage({
                pluginMessage: {
                    action: "fetchedAssets",
                    assets: assets,
                },
            }, "*");
        });
    }
    return (<Container space="medium">
      <VerticalSpace space="medium"/>
      <Text>{props.greeting}</Text>
      <VerticalSpace space="medium"/>
    </Container>);
}
export default render(Plugin);
