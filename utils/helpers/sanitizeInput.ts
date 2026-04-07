import { FormInputType } from "../enums/form";

export const sanitizeInput = (value: string, inputType: FormInputType): string => {
    switch (inputType) {
        case FormInputType.EMAIL:
            return value
                    .replace(/[<>()[\]\\,;:\s"]/g, '')
                    .replace(/[^a-zA-Z0-9@._+-]/g, '');
            
        case FormInputType.NAME:
            return value
                .replace(/<script[^>]*>.*?<\/script>/gi, '')    
                .replace(/[<>{}[\]()=+*&^%$#@!~`|\\/:;"'?.,0-9]/g, '');
            
        case FormInputType.MESSAGE:
            return value
                .replace(/<script[^>]*>.*?<\/script>/gi, '')
                .replace(/[<>{}]/g, '');
        case FormInputType.TITLE:
            return value
                .replace(/<script[^>]*>.*?<\/script>/gi, '')
                .replace(/[<>{}]/g, '');
        default:
            return value.replace(/[<>]/g, '');
    }
};