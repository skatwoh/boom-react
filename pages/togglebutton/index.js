import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/togglebutton/accessibilitydoc';
import { BasicDoc } from '@/components/doc/togglebutton/basicdoc';
import { CustomizedDoc } from '@/components/doc/togglebutton/customizeddoc';
import { DisabledDoc } from '@/components/doc/togglebutton/disableddoc';
import { ImportDoc } from '@/components/doc/togglebutton/importdoc';
import { InvalidDoc } from '@/components/doc/togglebutton/invaliddoc';
import { Wireframe } from '@/components/doc/togglebutton/pt/wireframe';
import { StyledDoc } from '@/components/doc/togglebutton/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/togglebutton/theming/tailwinddoc';

const ToggleButtonDemo = () => {
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
            id: 'customized',
            label: 'Customized',
            component: CustomizedDoc
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
            id: 'pt.togglebutton.options',
            label: 'ToggleButton PT Options',
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
        <DocComponent title="React ToggleButton Component" header="ToggleButton" description="ToggleButton is used to select a boolean value using a button." componentDocs={docs} apiDocs={['ToggleButton']} ptDocs={ptDocs} themingDocs={themingDocs} />
    );
};

export default ToggleButtonDemo;
