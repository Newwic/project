<template>
    <div class="home">
        <h1>ข้าวมันไก่</h1>
        <p>ยิ่งดูยิ่งหิวยิ่งอยากนี่แหละคือข้าวมันไก่แห่งสวรรค์</p>
        <img src="@/assets/now.png" alt="Vue logo" width="200" />
        <div style="margin-top:32px;">
            <router-link :to="'/chicken-rice/1'">ข้าวมันไก่สุดแสนจะอร่อย </router-link> |
            <router-link :to="'/chicken-rice/2'">ข้าวมันไก่แห่งสวรรค์ </router-link> |
            <router-link :to="'/chicken-rice/3'">ข้าวมันไก่แห่งนรก</router-link>
        </div>
        <div style="margin-top:32px;">
            <p>ข้าวมันไก่สูตรเด็ด น้ำจิ้มรสแซ่บ ไก่นุ่มข้าวหอม!</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeView'
}
</script>

<style scoped>
.home {
    text-align: center;
    margin-top: 40px;
}
</style>