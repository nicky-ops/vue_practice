/* eslint-disable */
<template>
    <nav
    :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']"
    >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <nav-bar-link
                        v-for="(page, index) in publishedPages"          class="nav-item" :key="index"
                        :page="page"
                        :index="index"
                    >
                    </nav-bar-link>
                    <li>
                        <router-link
                            to="/pages/create"
                            class="nav-link"
                            active-class="active"
                            aria-current="page"
                            >Create Page</router-link>
                    </li>
            </ul>
            <form class="d-flex">
                <button
                    class="btn btn-primary"
                    @click.prevent="changeTheme"
                >
                    Toggle Navbar
                </button>
            </form>
        </div>
    </nav>
</template>

<script>
// eslint-disable-next-line
import NavBarLink from './NavBarLink.vue';
export default {
    components: {
        NavBarLink
    },
    computed: {
        publishedPages() {
            return this.pages.filter(p => p.published);
        }
    },
    created() {
        this.getThemeSetting();
        this.pages = this.$pages.getAllPages();
    },
    data() {
        return {
            theme: 'light',
            data: []
        };
    },

            methods: {
                changeTheme() {
                    let theme = 'light';

                    if (this.theme == 'light') {
                        theme = 'dark';
                    }

                    this.theme = theme;
                    this.storeThemeSetting();
                },
                storeThemeSetting() {
                    localStorage.setItem('theme', this.theme);
                },
                getThemeSetting() {
                    let theme = localStorage.getItem('theme');

                    if (theme) {
                        this.them = theme;
                    }
                }

            }
        }
</script>