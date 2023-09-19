"use client";

import { useState } from "react";
import ReactSignatureCanvas from "react-signature-canvas";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const NDA = () => {
  const [name, setName] = useState("");
  const [sign, setSign] = useState();
  const [url, setUrl] = useState();
  const [loader, setLoader] = useState(false);
  const [isDivVisible, setDivVisible] = useState(true);

  const clearSign = () => {
    sign.clear();
  };

  const generateSign = () => {
    name
      ? setUrl(sign.getTrimmedCanvas().toDataURL("image/png"))
      : alert("Adding Text Signature is mandatory");
      setDivVisible(!isDivVisible);
  };


  const downloadPDF = () => {
    const capture = document.querySelector(".main-div");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF({
        orientation: "landscape",
      });
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("receipt.pdf");
    });
  };

  return (
    <div className="main-div text-black pl-8 pr-8 pt-2 text-justify">
      <div>
        <h1 className="text-center text-2xl">NON-DISCLOSURE AGREMENT</h1>
        <p className="pt-6">
          THIS AGREEMENT (the "Agreement”) is entered into on this 18 day of
          september by and between Candidate 1 , located at Paksitan ( the”
          Disclosing Party”), and Zimo with an address at England, UK (the
          “Receiving Party”). The Receiving Party hereto desires to participate
          in discussions regarding remote work (the “Transaction”). During these
          discussions, Disclosing Party may share certain proprietary
          information with the Receiving Party. Therefore, in consideration of
          the mutual promises and covenants contained in this Agreement, and
          other good and valuable consideration, the receipt and sufficiency of
          which is hereby acknowledged, the parties hereto agree as follows:
        </p>
        <h1>Definition of Confidential Information.</h1>
      </div>
      <div className="flex justify-between pt-4">
        <div>
          <h3>Disclosing Party</h3>
          <p>Name: {name}</p>
          <p>Designation: Intrnee</p>
          <p>Signature:</p>
          <img src={url} />
        </div>
        <div>
          {isDivVisible && (
            <div>
              <h4>Add your signature below:</h4>
              <input
                type="text"
                placeholder="Type your Signature"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
      {isDivVisible && (
        <div className="pt-2">
<div className="bg-slate-200 border-2 border-black">
  <ReactSignatureCanvas
    canvasProps={{ width: 400, height: 150 }}
    ref={(data) => setSign(data)}
  />
</div>
<button
  onClick={() => clearSign()}
  className="pr-2 bg-red-300 rounded-md"
>
  Clear
</button>
<button
  onClick={() => generateSign()}
  className="pl-2 bg-lime-200 rounded-md"
>
  Save
</button>
        </div>
      )}
        </div>
      </div>
      <div className="receipt-actions-div">
        <div className="actions-right">
          <button
            className="receipt-modal-download-button"
            onClick={downloadPDF}
            disabled={!(loader === false)}
          >
            {loader ? <span>Downloading</span> : <span>Download</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NDA;
