import PropTypes from "prop-types";
import React, { useCallback, useState, useEffect, Suspense } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { andromeda } from "@uiw/codemirror-themes-all";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { LucideIcons } from "react-ui-essentials-icons";
const { Copy, Clipboard } = LucideIcons;
import styles from "./SyntaxHighLighter.module.css";
import { Spinner } from "react-ui-essentials";
const SyntaxHighLighter = ({
  code,
  language,
  lineNumbers = false,
  title,
  ...rest
}) => {
  const extensions = [loadLanguage(language)];
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code?.trim() || "");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  }, [code]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-gray-50 rounded overflow-hidden ">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1 rounded-md text-gray-500 hover:bg-gray-200 transition-colors duration-200 z-10"
        title={isCopied ? "Copied!" : "Copy code"}
      >
        {isCopied ? (
          <Clipboard className="w-5 h-5" />
        ) : (
          <Copy className="w-5 h-5" />
        )}
      </button>

      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Spinner variant="secondary" size="md" />
          </div>
        }
      >
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Spinner variant="secondary" size="md" />
          </div>
        ) : (
          <CodeMirror
            value={code}
            height="auto"
            editable={false}
            theme={andromeda}
            extensions={extensions}
            basicSetup={{
              lineNumbers: lineNumbers,
              foldGutter: false,
              highlightActiveLineGutter: false,
              highlightActiveLine: false,
              indentWithTab: false,
              tabSize: 2,
            }}
            className={`${styles.codeMirror} text-sm`}
            {...rest}
          />
        )}
      </Suspense>
    </div>
  );
};

SyntaxHighLighter.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  lineNumbers: PropTypes.bool,
  title: PropTypes.string,
};

export default SyntaxHighLighter;
