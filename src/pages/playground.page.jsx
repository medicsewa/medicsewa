import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";
import useLocalStorage from "../hooks/use-localstorage";
const PlaygroundPage = () => {
  const editorElementStorage = useLocalStorage("elements", null);
  const editorStateStorage = useLocalStorage("state", null);

  const [editorElements, setEditorElements] = editorElementStorage;
  const [editorState, setEditorState] = editorStateStorage;

  const onChange = (elements, appState, files) => {
    appState.collaborators = [];
    setEditorState(appState);
    setEditorElements(elements);
  };

  return (
    <div className="w-full h-full playground-styles">
      <Excalidraw
        name="Medic Sewa Editor"
        onChange={onChange}
        initialData={{ elements: editorElements, appState: editorState }}
      >
        <MainMenu>
          <MainMenu.DefaultItems.LoadScene />
          <MainMenu.DefaultItems.Export />
          <MainMenu.DefaultItems.SaveAsImage />
          <MainMenu.DefaultItems.LiveCollaborationTrigger />
          <MainMenu.DefaultItems.Help />
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.Separator />
          <MainMenu.DefaultItems.ToggleTheme />
          <MainMenu.DefaultItems.ChangeCanvasBackground />
        </MainMenu>
      </Excalidraw>
    </div>
  );
};

export default PlaygroundPage;
