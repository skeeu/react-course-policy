'use client'

import Page from "@/components/Page";
import { Heading, ListItem, OrderedList, VStack } from "@chakra-ui/react";

const questions = [
    'Как вас зовут?',
    'Чем занимаетесь внеурочное время?',
    'Почему решили заниматься веб-разработкой?',
    'Какие есть знания о React?',
    'Какие ожидания от курса?'
]

export default function Greeting() {
    return (
        <Page>
            <VStack>
                <Heading size='md' textAlign='center'>Давайте ответим на несколько вопросов и познакомимся</Heading>
                <OrderedList>
                    {questions.map((q, i) => <ListItem key={i}>{q}</ListItem>)}
                </OrderedList>
            </VStack>

        </Page>
    )
} 