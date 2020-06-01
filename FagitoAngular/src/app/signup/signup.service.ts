import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class SignupService{
    
    http:HttpClient;

    constructor(http:HttpClient)
    {
        this.http=http;
    }

    PostRegistration(FormInput:String)
    {
        return this.http.post('https://9b57fa3f-0f5a-4043-868e-fdc935e6d605.mock.pstmn.io/User/signup','FormInput')
    }
}