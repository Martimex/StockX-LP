type inputAvailableTypes = 'text' | 'email' | 'password';

export type InputItem = {
    identifier: string,
    type: inputAvailableTypes,
    placeholder: string,
    isMarked: boolean,
    isHalfSized: boolean
}

export type FaqItem = {
    question: string,
    answer: string
}

export type HeroItem = {
    imgName: string,
    headingText: string,
    paragraphs: string[],
    markedHeadingTextParts: string[]
}