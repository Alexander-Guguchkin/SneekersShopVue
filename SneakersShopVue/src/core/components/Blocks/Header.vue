<template>
    <header>
        <div class="wrapper">
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
                            <div class="page__images"><img src="@/assets/store.svg" alt=""></div>
                            <div class="page__description">
                                <div class="cash"><span>{{ cash }}</span></div>
                                <div class="currency"><span>{{ currency }}</span></div>
                            </div>
                        </RouterLink>
                    </div>

                    <div class="page">
                        <RouterLink to="/bookmarks" class="links">
                            <div class="page__images"><img src="@/assets/bookmarks.svg" alt=""></div>
                            <div class="page__description"><span>Закладки</span></div>
                        </RouterLink>
                    </div>


                    <div class="page">
                        <RouterLink to="/profile" class="links">
                            <div class="page__images"><img src="@/assets/Union.svg" alt=""></div>
                            <div class="page__description"><span>Профиль</span></div>
                        </RouterLink>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
<style scoped>
header {
    border-bottom: 1px solid #EAEAEA;
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

.logo__title span {
    font-weight: bold;
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    line-height: 24.2px;
    text-align: left;

}

.logo__description {
    color: #5C5C5C;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;
    text-align: left;
}

.page__description {
    color: #5C5C5C;
}

.links,
.page__description,
.page,
.page__images {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;
    text-align: left;
}
</style>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
const cash: number = 1200;
const currency: string = "руб.";
</script>