import { lazy } from "react";

const Editor = lazy(() => import("@/components/Editor/Editor"));

const EditorPage: React.FC = () => {
  return <Editor />;
};

export default EditorPage;
