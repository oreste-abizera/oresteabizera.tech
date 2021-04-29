import React, { useState } from "react"
import Loader from "./Loader"
import { Document, Page, pdfjs } from "react-pdf"
import ControlPanel from "./ControlPanel"
import * as styles from "../../css/pdf.module.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const PDFReader = ({ file }) => {
  const [scale, setScale] = useState(1.0)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setIsLoading(false)
  }

  return (
    <div>
      <Loader isLoading={isLoading} />
      <section id="pdf-section" className={styles.pdfWrapper}>
        <ControlPanel
          scale={scale}
          setScale={setScale}
          numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          file={file}
        />
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </section>
    </div>
  )
}

export default PDFReader
