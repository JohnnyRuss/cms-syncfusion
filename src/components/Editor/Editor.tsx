import {
  Link,
  Image,
  Inject,
  Toolbar,
  HtmlEditor,
  QuickToolbar,
  RichTextEditorComponent,
} from "@syncfusion/ej2-react-richtexteditor";

// import { EditorData } from "@/data/dummy";

import { Header } from "@/components/Layouts";

const Editor: React.FC = () => {
  return (
    <div className="m-2 md:m-10 mt-6 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />

      <RichTextEditorComponent height="580px">
        {/* <EditorData /> */}
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
