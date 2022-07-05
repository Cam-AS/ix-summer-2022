import { useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf";

import { PDF } from "./pdf";
import Button from "../buttons/Button";
import If from "../if/If";
import "./PdfInput.scss";
import Loading from "../loading/Loading";
import Alert from "../alert/Alert";

type InputProps = {
  pdf: PDF;
  onChange: (value: PDF) => void;
  label: string;
  maxKb?: number;
  // required?: boolean;
  // disabled?: boolean;
  className?: string;
  error?: string;
};

const PdfInput = ({
  pdf,
  onChange,
  label,
  maxKb,
  // required,
  // disabled,
  className,
  error,
}: InputProps) => {
  const pdfFileInput = useRef(null);
  const pdfHolder = useRef(null);

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(error || "");
  const [width, setWidth] = useState<number>(null);

  const onFileSelected = (event) => {
    event.stopPropagation();
    if (event.target.files && event.target.files.length) {
      const file: File = event.target.files[0];

      if (maxKb && file.size / 1000 > maxKb) {
        setErr("This file is too large, Max Size is " + maxKb + "Kb");
        event.target.value = "";
        return;
      }

      const reader = new FileReader();

      reader.onload = (e: any) => {
        pdf.file = file;
        pdf.fileUrl = e.target.result;
      };

      reader.onloadstart = (e: any) => {
        setLoading(true);
      };

      reader.onerror = (e: any) => {
        setErr(e.target.error);
      };

      reader.onloadend = (e: any) => {
        setLoading(false);
      };

      reader.readAsArrayBuffer(file);
      event.target.value = "";
    }
  };

  const clear = () => {
    onChange(new PDF());
  };

  useEffect(() => {
    if (pdfHolder && pdfHolder.current) {
      setWidth(pdfHolder.current.clientWidth);
    }
  }, [pdfHolder]);

  return (
    <div ref={pdfHolder} className={"app-pdf-input " + className}>
      <div className="bold">{label}</div>

      <If condition={!pdf.fileUrl && !loading}>
        <div className="d-flex justify-content-center mt-2">
          <Button
            type="button"
            className="btn btn-small"
            onClick={() => pdfFileInput.current.click()}
          >
            Choose PDF
          </Button>
        </div>
      </If>

      <If condition={pdf.fileUrl && !loading && width}>
        <div className="pdf-holder">
          <Document className="pdf" file={pdf.file ? pdf.file : pdf.fileUrl}>
            <Page width={width} pageNumber={1} />
          </Document>
        </div>

        <div className="d-flex justify-content-center mt-2">
          <Button
            type="button"
            className="btn btn-small"
            onClick={() => clear()}
          >
            Clear PDF
          </Button>
        </div>
      </If>

      <Loading show={loading} />

      <input
        ref={pdfFileInput}
        type="file"
        onChange={(e) => onFileSelected(e)}
        accept=".pdf"
      />

      <Alert className="mt-4 mb-0" message={err} onClear={() => setErr("")} />
    </div>
  );
};
export default PdfInput;
