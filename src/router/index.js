import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/views/HomeComponent.vue';
import CalculatorComponent from '@/views/CalculatorComponent.vue';
import CommentsComponent from '@/views/CommentsComponent.vue';
import UsersComponent from '@/views/UsersComponent.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
    },
    {
        path: '/calculator',
        name: 'Calculator',
        component: CalculatorComponent,
    },
    {
        path: '/comments',
        name: 'Comments',
        component: CommentsComponent,
    },
    {
        path: '/users',
        name: 'Users',
        component: UsersComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;