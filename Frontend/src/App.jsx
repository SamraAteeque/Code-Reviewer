import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App() {
  const [ count, setCount ] = useState(0)
  const [ code, setCode ] = useState(` function sum() {
  return 1 + 1
}`)

  const [ review, setReview ] = useState(``)
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    setIsLoading(true);
    try {
      const response = await axios.post('https://code-reviewer-flnw.onrender.com/ai/get-review'.trim(), { code });
      setReview(response.data);
    } catch (error) {
      console.error(error);
      setReview("An error occurred while fetching the review.");
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <button
            onClick={reviewCode}
            className="review"
            disabled={isLoading}
          >
            {isLoading ? 'Reviewing...' : 'Review'}
          </button>
        </div>
        <div className="right">
          <Markdown

            rehypePlugins={[ rehypeHighlight ]}

          >{review}</Markdown>
        </div>
      </main>
    </>
  )
}



export default App
