export interface ITranslation {
    id: number;
    key: string;
    originalText: string;
    translatedText?: string;
    blockedBy?: string;
    blockedTime?: Date;
    translatedBy?: string;
    translatedTime?: Date;
    checkedBy?: string;
    checkedTime?: Date;
    editedBy?: string;
    editedTime?: Date;
    comment?: string;
    version?: string;
}

export interface ITranslationUI extends ITranslation {
    state: TranslationState;
}

export enum TranslationState {
    empty,
    selected,
    translated,
    checked
}
