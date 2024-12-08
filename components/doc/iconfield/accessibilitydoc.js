import React from 'react';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>IconField and InputIcon does not require any roles and attributes.</p>

            <h3>Keyboard Support</h3>
            <p>Components does not include any interactive elements.</p>
        </DocSectionText>
    );
}
