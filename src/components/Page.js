'use client'

import { Box, AbsoluteCenter } from "@chakra-ui/react"

export default function Page({ children }) {
    return (
        <Box h='100lvh' w='100lvw' bgColor='#0A1F32' color='white'>
            <AbsoluteCenter>{children}</AbsoluteCenter>
        </Box>
    )
}