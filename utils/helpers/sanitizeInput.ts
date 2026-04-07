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
        case FormInputType.SEARCH:
            return value
                .replace(/[<>()[\]\\,;:\s"]/g, '')
                .replace(/[^a-zA-Z0-9@._+-]/g, '')
                .substring(0, 100);
        case FormInputType.LOGIN:
            return value
                .replace(/[<>()[\]\\,;:\s"]/g, '')
                .replace(/[^a-zA-Z0-9@._+-]/g, '')
                .substring(0, 50);
        case FormInputType.PASSWORD:
            return value
                .replace(/<script[^>]*>.*?<\/script>/gi, '')
                .substring(0, 50);
                
        default:
            return value.replace(/[<>]/g, '');
    }
};