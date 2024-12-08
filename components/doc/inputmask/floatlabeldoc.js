import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { FloatLabel } from '@/components/lib/floatlabel/FloatLabel';
import { InputMask } from '@/components/lib/inputmask/InputMask';
import Link from 'next/link';
import { useState } from 'react';

export function FloatLabelDoc(props) {
    const [value, setValue] = useState();

    const code = {
        basic: `
<FloatLabel>
    <InputMask id="ssn_input" value={value} onChange={(e) => setValue(e.target.value)} mask="999-99-9999" />
    <label htmlFor="ssn_input">SSN</label>
</FloatLabel>
        `,
        javascript: `
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";
import { FloatLabel } from "primereact/floatlabel";

export default function FloatLabelDemo() {
    const [value, setValue] = useState();

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputMask id="ssn_input" value={value} onChange={(e) => setValue(e.target.value)} mask="999-99-9999" />
                <label htmlFor="ssn_input">SSN</label>
            </FloatLabel>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";
import { FloatLabel } from "primereact/floatlabel";

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string | undefined>();

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputMask id="ssn_input" value={value} onChange={(e: InputMaskChangeEvent) => setValue(e.target.value)} mask="999-99-9999" />
                <label htmlFor="ssn_input">SSN</label>
            </FloatLabel>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A floating label appears on top of the input field when focused. Visit <Link href="/floatlabel">FloatLabel</Link> documentation for more information.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <FloatLabel>
                    <InputMask id="ssn_input" value={value} onChange={(e) => setValue(e.target.value)} mask="999-99-9999" />
                    <label htmlFor="ssn_input">SSN</label>
                </FloatLabel>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
