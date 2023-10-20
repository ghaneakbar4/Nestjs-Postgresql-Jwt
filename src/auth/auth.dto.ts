import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import {readFile} from "fs";

export class LoginDTO {
    // During login
    // @ts-ignore
    @ApiProperty()
    username: string
    @ApiProperty()
    password:string
}
export class RegisterDTO {
    // During registration
    @ApiProperty()
    username:string
    @ApiProperty()
    password:string
    @ApiProperty()
    name:string

    
}
