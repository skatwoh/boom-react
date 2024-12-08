import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/inputnumber/accessibilitydoc';
import { ButtonsDoc } from '@/components/doc/inputnumber/buttonsdoc';
import { CurrencyDoc } from '@/components/doc/inputnumber/currencydoc';
import { DisabledDoc } from '@/components/doc/inputnumber/disableddoc';
import { FilledDoc } from '@/components/doc/inputnumber/filleddoc';
import { FloatLabelDoc } from '@/components/doc/inputnumber/floatlabeldoc';
import { ImportDoc } from '@/components/doc/inputnumber/importdoc';
import { InvalidDoc } from '@/components/doc/inputnumber/invaliddoc';
import { LocaleDoc } from '@/components/doc/inputnumber/localedoc';
import { NumeralsDoc } from '@/components/doc/inputnumber/numberalsdoc';
import { PrefixSuffixDoc } from '@/components/doc/inputnumber/prefixsuffixdoc';
import { Wireframe } from '@/components/doc/inputnumber/pt/wireframe';
import { StyledDoc } from '@/components/doc/inputnumber/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/inputnumber/theming/tailwinddoc';
import { VerticalDoc } from '@/components/doc/inputnumber/verticaldoc';

const InputNumberDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'numerals',
            label: 'Numerals',
            component: NumeralsDoc
        },
        {
            id: 'locale',
            label: 'Locale',
            component: LocaleDoc
        },
        {
            id: 'currency',
            label: 'Currency',
            component: CurrencyDoc
        },
        {
            id: 'prefixsuffix',
            label: 'Prefix & Suffix',
            component: PrefixSuffixDoc
        },
        {
            id: 'buttons',
            label: 'Buttons',
            component: ButtonsDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
        },
        {
            id: 'filled',
            label: 'Filled',
            component: FilledDoc
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
            id: 'pt.inputnumber.options',
            label: 'InputNumber PT Options',
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

    return <DocComponent title="React InputNumber Component" header="InputNumber" description="InputNumber is an input component to provide numerical input." componentDocs={docs} apiDocs={['InputNumber']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default InputNumberDemo;
