import { Range, Selection, window } from "vscode";
import { CaseType, convertCase } from "./case-utils";

    
export function execute(caseType: CaseType)  {
  const editor = window.activeTextEditor;

  if (!editor) {
    return;
  }

  const document = editor.document;
  let notifyAboutSingleLineSelections = false;

  try {
    editor.selections.forEach((selection) => {
      if (selection.isEmpty) {
        return;
      }

      if (!selection.isSingleLine) {
        notifyAboutSingleLineSelections = true;
        return;
      }

      const range = new Range(selection.start, selection.end);
      const text = document.getText(range);
      const updatedText = convertCase(text, caseType);

      editor.edit((edit) => {
        edit.replace(range, updatedText);
      });
    });
  } catch (e) {
    const message = "Something went wrong\n  " + (e as Error).message;
    window.showErrorMessage(message);
  } finally {
    if (notifyAboutSingleLineSelections) {
      window.setStatusBarMessage(
        "Ignoring selection(s) spanning multiple lines.",
        2000
      );
    }
  }

}