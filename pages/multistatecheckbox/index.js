import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/multistatecheckbox/accessibilitydoc';
import { BasicDoc } from '@/components/doc/multistatecheckbox/basicdoc';
import { DisabledDoc } from '@/components/doc/multistatecheckbox/disableddoc';
import { ImportDoc } from '@/components/doc/multistatecheckbox/importdoc';
import { InvalidDoc } from '@/components/doc/multistatecheckbox/invaliddoc';
import { Wireframe } from '@/components/doc/multistatecheckbox/pt/wireframe';
import { StyledDoc } from '@/components/doc/multistatecheckbox/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/multistatecheckbox/theming/tailwinddoc';

const MultiStateCheckboxDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.multistatecheckbox.options',
            label: 'MultiStateCheckbox PT Options',
            component: DocApiTable
        }
    ];

    const themingDocs = [
        {
            id: 'styled',
            label: 'Styled',
            component: StyledDoc
        },
        {
            id: 'unstyled',
            label: 'Unstyled',
            description: 'Theming is implemented with the pass through properties in unstyled mode.',
            children: [
                {
                    id: 'tailwind',
                    label: 'Tailwind',
                    component: TailwindDoc
                }
            ]
        }
    ];

    return (
        <DocComponent
            title="React MultiStateCheckbox Component"
            header="MultiStateCheckbox"
            description="MultiStateCheckbox is used to select a state from given options."
            componentDocs={docs}
            apiDocs={['MultiStateCheckbox']}
            ptDocs={ptDocs}
            themingDocs={themingDocs}
        />
    );
};

export default MultiStateCheckboxDemo;
