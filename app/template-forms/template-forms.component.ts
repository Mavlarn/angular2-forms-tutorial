import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'template-form',
    templateUrl: 'app/template-forms/template-forms.component.html',
    styleUrls: ['app/template-forms/template-forms.component.css']
})
export class TemplateFormsComponent {
    user: any;
    active: Boolean = true;
    errorMsg: String;
    constructor() {
        this.user = {
            name: '张三',
            mobile: 13800138001,
            address: {
                city: '北京',
                street: '朝阳望京...'
            }
        };
    }
    logForm(theForm: NgForm) {
        if (theForm.invalid) {
            this.errorMsg = 'validation errors!';
            if (theForm.controls['name'].errors) {
                this.errorMsg += JSON.stringify(theForm.controls['name'].errors);
            }
        }
        console.log(theForm.value);
    }

    create() {
        this.user = {
            address: {}
        };
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
    reset(theForm: NgForm) {
        theForm.reset();
    }
    diagnostic(model) {
        console.log(JSON.stringify(model));
    }
 }

