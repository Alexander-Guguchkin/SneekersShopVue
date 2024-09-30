<template>
    <div class="header">
        <nav>

            <div class="logo">
                <RouterLink to="/" class="links">
                    <div class="logo__images"><img src="@/assets/image.svg" alt=""></div>
                    <div class="logo__text">
                        <div class="logo__title"><span>REACT SNEAKERS</span></div>
                        <div class="logo__description"><span>Магазин лучших кроссовок</span></div>
                    </div>
                </RouterLink>
            </div>

            <div class="tabs">
                <div class="page">
                    <RouterLink to="/store" class="links">
                        <div class="page__images"></div>
                        <div class="page__description">
                            <div class="cash"><span>{{ cash }}</span></div>
                            <div class="currency"><span>{{ currency }}</span></div>
                        </div>
                    </RouterLink>
                </div>

                <div class="page">
                    <RouterLink to="/bookmarks" class="links">
                        <div class="page__images"><img src="" alt=""></div>
                        <div class="text"><span>Закладки</span></div>
                    </RouterLink>
                </div>


                <div class="page">
                    <RouterLink to="/profile" class="links">
                        <div class="page__images"><img src="" alt=""></div>
                        <div class="text"><span>Профиль</span></div>
                    </RouterLink>
                </div>
            </div>

        </nav>
    </div>
</template>
<style scoped>
div {
    border: 1px solid black;
    padding: 6px;
}

nav {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.tabs {
    flex-grow: 0.4;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.links,
.page__description, .page{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
const cash: number = 1200;
const currency: string = "руб.";
</script>