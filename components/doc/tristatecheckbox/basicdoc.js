import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { TriStateCheckbox } from '@/components/lib/tristatecheckbox/TriStateCheckbox';
import { useState } from 'react';

export function BasicDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export default function BasicDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
            <label>{String(value)}</label>
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { TriStateCheckbox, TriStateCheckboxChangeEvent } from 'primereact/tristatecheckbox';

export default function BasicDemo() {
    const [value, setValue] = useState<boolean | undefined | null>(null);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <TriStateCheckbox value={value} onChange={(e : TriStateCheckboxChangeEvent) => setValue(e.value)} />
            <label>{String(value)}</label>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    TriStateCheckbox is used as a controlled input with <i>value</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center gap-3">
                <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
                <label>{String(value)}</label>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
