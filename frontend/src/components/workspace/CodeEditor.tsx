import Editor from "@monaco-editor/react";

function CodeEditor() {
  return (
    <div className="flex-1 min-w-0 flex flex-col bg-gray-900">

      {/* Editor Toolbar */}
      <div className="h-14 px-4 flex items-center justify-between border-b border-gray-700 bg-gray-900">

        <select className="bg-gray-800 text-gray-200 text-sm rounded-md px-3 py-2 border border-gray-700 outline-none">
          <option>Java</option>
          <option>JavaScript</option>
          <option>C++</option>
          <option>Python</option>
        </select>

        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500 transition">
          Run
        </button>

      </div>

      {/* Monaco */}
      <div className="flex-1 min-h-0">
        <Editor
          height="100%"
          defaultLanguage="java"
          defaultValue="// Type your code here..."
          theme="vs-dark"
          options={{
            minimap: {
              enabled: false,
            },
            fontSize: 14,
            padding: {
              top: 16,
            },
            automaticLayout: true,
          }}
        />
      </div>

      {/* Test Results */}
      <div className="h-40 border-t border-gray-700 bg-gray-950">

        <div className="px-4 py-3 border-b border-gray-800 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-300">
            Test Results
          </span>

          <span className="text-xs text-gray-500">
            No tests run
          </span>
        </div>

        <div className="p-4 text-sm text-gray-500">
          Run your code to see the results here.
        </div>

      </div>

      {/* Bottom Actions */}
      <div className="h-16 px-4 flex items-center justify-between border-t border-gray-700 bg-gray-900">

        <span className="text-xs text-gray-500">
          Ready to run
        </span>

        <button className="px-5 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-500 transition">
          Submit
        </button>

      </div>

    </div>
  );
}

export default CodeEditor;