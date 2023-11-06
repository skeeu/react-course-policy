'use client';

import Page from '@/components/Page';
import {
    AbsoluteCenter,
    Heading,
    Box,
    UnorderedList,
    ListItem,
    VStack,
} from '@chakra-ui/react';

const rules = [
    'Опоздания до 10 минут. После опоздания >= 40 минут, ставлю "отсутствует" за пару',
    'Во время занятий не кушать.',
    'Во время объяснения темы, можно задавать уточняющие вопросы - не стесняйтесь',
    'Если есть вопрос во внеурочное время - задавайте в телеграм чате',
    'Уважение друг к другу. Ваша цель - научиться, моя цель - объяснить. Не стесняйтесь задавать вопросы, тянуться к знаниям.',
    'Перед вопросом, постарайтесь решить проблему сами.',
    'За каждое занятие ставится оценка',
    'За каждые 5 дней просрочки ДЗ = -1балл',
    'За плагиат кода - автоматом самый низкий балл списывающему и автору. Касается ДЗ и экзамена',
];

export default function Home() {
    return (
        <Page>
            <Heading mb="46px">Преподаватель: Арман Муканович</Heading>
            <VStack gap="12px">
                <Heading size="lg">Политика курса:</Heading>
                <UnorderedList spacing="6px">
                    {rules.map((rule, i) => (
                        <ListItem key={i}>{rule}</ListItem>
                    ))}
                </UnorderedList>
            </VStack>
        </Page>
    );
}
