import { useState } from 'react';
import { Button, Flex, Select, Radio, Group, Text } from '@mantine/core';

const CalculatorForm = ({ calculateDin }) => {
    const [age, setAge] = useState('33');
    const [weight, setWeight] = useState('169');
    const [height, setHeight] = useState('69');
    const [skierType, setSkierType] = useState('1');
    const [soleLength, setSoleLength] = useState('270');

    const ageCardsData = [
        { value: '7', label: '9 and under' },
        { value: '33', label: '10 - 49' },
        { value: '55', label: '50 +' }
    ]

    const ageCards = ageCardsData.map((card) => (
        <Radio.Card 
            radius='md'
            value={card.value}
            key={card.value}
        >
            <Group 
                wrap='nowrap' 
                align='center' 
                direction='column'
            >
                <Radio.Indicator />
                <Text align='center'>{card.label}</Text>
            </Group>
        </Radio.Card>
    ));

    const skierTypeData = [
        { value: '-1', label: '-I' },
        { value: '1', label: 'I' },
        { value: '2', label: 'II' },
        { value: '3', label: 'III' },
        { value: '4', label: 'III+' }
    ]

    const skierTypeCards = skierTypeData.map((card) => (
        <Radio.Card
            radius='md'
            value={card.value}
            key={card.value}
        >
            <Group
                wrap='nowrap'
                align='center'
                direction='column'
            >
                <Radio.Indicator />
                <Text align='center'>{card.label}</Text>
            </Group>
        </Radio.Card>
    ));

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate inputs
        if (!weight || !height || !age || !skierType || !soleLength) {
            alert('Please fill in all fields');
            return;
        }

        const data = {
            weight: parseInt(weight),
            height: parseInt(height),
            age: parseInt(age, 10),
            skier_type: parseInt(skierType, 10),
            sole_length: parseInt(soleLength)
        };

        await calculateDin(data);
    };
    
    return (
        <Flex
            gap="md"
            justify="center"
            align="center"
            direction="column"
        >
            <Select
                label="Weight: "
                placeholder='Select weight'
                value={weight}
                onChange={setWeight}
                data={[
                    { value: '222', label: '210+ lbs' },
                    { value: '199', label: '175 - 209 lbs' },
                    { value: '169', label: '148 - 174 lbs' },
                    { value: '143', label: '126 - 147 lbs' },
                    { value: '111', label: '108 - 125 lbs' },
                    { value: '99', label: '92 - 107 lbs' },
                    { value: '88', label: '79 - 91 lbs' },
                    { value: '77', label: '67 - 78 lbs' },
                    { value: '66', label: '57 - 66 lbs' },
                    { value: '55', label: '48 - 56 lbs' },
                    { value: '44', label: '39 - 47 lbs' },
                    { value: '33', label: '30 - 38 lbs' },
                    { value: '22', label: '22 - 29 lbs' }
                ]}
            />
            <Select
                label="Height: "
                placeholder='Select height'
                value={height}
                onChange={setHeight}
                data={[
                    { value: '55', label: `4'10" or below` },
                    { value: '60', label: `4'11" - 5'1"` },
                    { value: '64', label: `5'2" - 5'5"` },
                    { value: '69', label: `5'6" - 5'10"` },
                    { value: '73', label: `5'11" - 6'4"` },
                    { value: '78', label: `6'5" or above` }
                ]}
            />

            <Radio.Group
                value={age}
                onChange={setAge}
                label="Age: "
                align="center"
                justify="center"
            >
                {ageCards}
            </Radio.Group>

            <Radio.Group
                value={skierType}
                onChange={setSkierType}
                label="Skier Type: "
                align="center"
                justify="center"
            >
                {skierTypeCards}
            </Radio.Group>

            <Select
                label="Boot Sole Length: "
                placeholder='Select boot sole length'
                value={soleLength}
                onChange={setSoleLength}
                data={[
                    { value: '230', label: '230 mm or below' },
                    { value: '250', label: '231 - 250 mm' },
                    { value: '270', label: '251 - 270 mm' },
                    { value: '290', label: '271 - 290 mm' },
                    { value: '310', label: '291 - 310 mm' },
                    { value: '330', label: '311 - 330 mm' },
                    { value: '350', label: '331 - 350 mm' },
                    { value: '353', label: '351 mm or above' }
                ]}
            />
            <Button onClick={handleSubmit}>Calculate DIN</Button>
        </Flex>
    )
}

export default CalculatorForm;