'use client'

import { useState } from "react";

const NDA = () => {
    const [name, setName] = useState('')
  return (
    <div className="text-black pl-8 pr-8 pt-2 text-justify">
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
        <p>
          (a) For purposes of this Agreement, “Confidential Information” means
          any data or information that is proprietary to the Disclosing Party
          and not generally known to the public, whether in tangible or
          intangible form, in whatever medium provided, whether unmodified or
          modified by Receiving Party or its Representatives (as defined
          herein), whenever and however disclosed, including, but not limited
          to: (i) any marketing strategies, plans, financial information, or
          projections, operations, sales estimates, business plans and
          performance results relating to the past, present or future business
          activities of such party, its affiliates, subsidiaries and affiliated
          companies; (ii) plans for products or services, and customer or
          supplier lists; (iii) any scientific or technical information,
          invention, design, process, procedure, formula, improvement,
          technology or method; (iv) any concepts, reports, data, know-how,
          works-in-progress, designs, development tools, specifications,
          computer software, source code, object code, flow charts, databases,
          inventions, information and trade secrets.
        </p>
      </div>
      <div className="flex justify-between pt-4">
        <div>
        <h3>Disclosing Party</h3>
        <p>Name: {name}</p>
        <p>Designation: Intrnee</p>
        <p>Signature:</p>
        </div>
        <div>
            <div>
                <h4>Add your signature below:</h4>
                <input type="text" placeholder="Type your Signature" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NDA;
