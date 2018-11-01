import { TranslationState } from './enums';

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
    status?: TranslationState;
}
