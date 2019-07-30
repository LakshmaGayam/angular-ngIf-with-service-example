import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
getEmployee()
{
  return[
    {id:"1",name:"lakshma",age:"23"},
     {id:"2",name:"venky",age:"23"},
      {id:"3",name:"mani",age:"23"},
       {id:"4",name:"sandeep",age:"23"},
        {id:"5",name:"saiteja",age:"23"},

  ];
}
  constructor() { }

}