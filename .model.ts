import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// 组件
import { Component } from './/.component';

// 定义常量 路由
const routes: any = [
    {
        path: '',
        component: Component
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [],
    declarations: [Component]
})
export class Module {}