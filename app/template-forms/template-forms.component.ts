import { Component } from '@angular/core';

@Component({
    selector: 'template-form',
    templateUrl: 'app/template-forms/template-forms.component.html',
    styleUrls: ['app/template-forms/template-forms.component.css']
})
export class TemplateFormsComponent {
    // user: any;
        user = {
            name: '张三',
            mobile: 13800138001,
            address: {
                city: '北京',
                street: '朝阳望京...'
            }
        };
        name = '张三';

    constructor() {
    }
    logForm(value: any) {
        console.log(value);
    }
 }

