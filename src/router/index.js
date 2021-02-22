import Vue from "vue";
import VueRouter from "vue-router";
import multiguard from 'vue-router-multiguard';
import session from "@/services/session"

const Home = () =>
    import ("@/pages/Home/Home.vue");
const Fakulteti = () =>
    import ("@/pages/Fakulteti/Fakulteti.vue");
const Partneritete = () =>
    import ("@/pages/Fakulteti/Partneritete.vue");
const Contact = () =>
    import ("@/pages/Contact/Contact.vue");
const Master = () =>
    import ("@/pages/Master/Master.vue");
const Student = () =>
    import ("@/pages/Student/Student.vue");
const Lendet = () =>
    import ("@/pages/Lendet/Lendet.vue");
const NewsArchive = () =>
    import ("@/pages/NewsArchive/NewsArchive.vue");
const JetaStudentore = () =>
    import ("@/pages/JetaStudentore/JetaStudentore.vue");
const Faqs = () =>
    import ("@/pages/Faqs/Faqs.vue");
const KerkimiShkencor = () =>
    import ("@/pages/KerkimiShkencor/KerkimiShkencor.vue");
const Bachelor = () =>
    import ("@/pages/Bachelor/Bachelor.vue");
const Stafi = () =>
    import ("@/pages/Stafi/Stafi.vue");
const SearchNews = () =>
    import ("@/pages/SearchNews/SearchNews.vue");

// Blog routes

const Login = () =>
    import ("@/components/Blog/Authentication/Login.vue");
const Register = () =>
    import ("@/components/Blog/Authentication/Register.vue");
const Blog = () =>
    import ("@/components/Blog/Blog.vue");
const PostCreate = () =>
    import ("@/components/Blog/Post/PostCreate.vue");
const PostList = () =>
    import ("@/components/Blog/Post/PostList.vue");
const SinglePost = () =>
    import ("@/components/Blog/Post/SinglePost.vue");
const PostUpdate = () =>
    import ("@/components/Blog/Post/PostUpdate.vue");
const UserPostList = () =>
    import ("@/components/Blog/Post/UserPostList.vue");

const NewRegistrations = () =>
    import ("@/components/Blog/Registrations/NewRegistrations.vue");

const isLoggedIn = (to, from, next) => {
    if (session.isAuthenticated()) {
        return next({ name: 'PostList' });
    }

    return next();
};

const notLoggedIn = (to, from, next) => {
    if (!session.isAuthenticated()) {
        return next({ name: 'Login' });
    }

    return next();
};

const isAdmin = (to, from, next) => {
    if (session.getUser().user_type_id !== 1) {
        return next({ name: 'Login' });
    }

    return next()
}

// const isDrejtues = (to, from, next) => {
//     if (session.getUser().user_type_id !== 2) {
//         return next({ name: 'Login' });
//     }

//     return next()
// }

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/student",
        name: "Studentet",
        component: Student,
    },
    {
        path: "/fakulteti",
        name: "Fakulteti",
        component: Fakulteti,
    },
    {
        path: "/fakulteti/partneritete",
        name: "Partneritete",
        component: Partneritete,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/lendet",
        name: "Lendet",
        component: Lendet,
    },
    {
        path: "/njoftime",
        name: "Njoftime",
        component: NewsArchive,
    },
    {
        path: "/master",
        name: "Master",
        component: Master,
    },
    {
        path: "/jetastudentore",
        name: "Jeta Studentore",
        component: JetaStudentore,
    },
    {
        path: "/faqs",
        name: "Faqs",
        component: Faqs,
    },
    {
        path: "/kerkimishkencor",
        name: "Kerkimi Shkencor",
        component: KerkimiShkencor,
    },
    {
        path: "/Bachelor",
        name: "Bachelor",
        component: Bachelor,
    },
    {
        path: "/stafi",
        name: "Stafi",
        component: Stafi
    },
    {
        path: "/search/:value",
        name: "SearchNews",
        component: SearchNews
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog,
        children: [{
                path: 'postime',
                name: "PostList",
                component: PostList,
                beforeEnter: notLoggedIn,
            },
            {
                path: 'postime-e-mia',
                name: "UserPostList",
                component: UserPostList,
                beforeEnter: notLoggedIn,
            },
            {
                path: 'regjistrime-te-reja',
                name: "NewRegistrations",
                component: NewRegistrations,
                beforeEnter: multiguard([notLoggedIn, isAdmin]),
            },
            {
                path: 'postime/:id',
                name: 'SinglePost',
                component: SinglePost,
                beforeEnter: notLoggedIn,
            },
            {
                path: "login",
                name: "Login",
                beforeEnter: isLoggedIn,
                component: Login,
            },
            {
                path: "register",
                name: "Register",
                beforeEnter: isLoggedIn,
                component: Register,
            },
            {
                path: "ndrysho/:id",
                name: "PostUpdate",
                component: PostUpdate,
                beforeEnter: notLoggedIn,
            },
            {
                path: "krijo",
                name: "BlogCreate",
                component: PostCreate,
                beforeEnter: notLoggedIn,
            }
        ]
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return window.scrollTo({
                top: document.querySelector(to.hash).offsetTop - 150,
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        } else {
            return { x: 0, y: 0 };
        }
    },
});

export default router;