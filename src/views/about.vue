<template>
    <div class="about-container">
        <section class="about-hero">
            <h1> ขายข้าวมันไก่ </h1>
            <p>เราได้คิดค้นข้าวมันไก่อัจฉริยะที่จะสามารถส่งไปถึงหน้าบ้านคุณได้</p>
        </section>
        <div style="margin: 32px auto; max-width: 400px;">
            <input v-model="message" placeholder="พิมพ์ข้อความที่นี่" style="padding:8px;width:100%;box-sizing:border-box;" />
            <p style="margin-top:16px;">คุณพิมพ์: {{ message }}</p>
        </div>
        <section class="about-content">
            <div class="about-card">
                <h2>ข้าวมันไก่มหัศจรรย์</h2>
                <p>พัฒนามาจากเทคโนโลยีบนสวรรค์และสร้างประสบการณ์ที่ดีให้กับผู้ใช้</p>
            </div>
            <div class="about-card">
                <h2>ข้าวมันไก่นรกมหัศจรรย์</h2>
                <p>ประกอบด้วยนักพัฒนามืออาชีพที่มีความเชี่ยวชาญและประสบการณ์สูง</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AboutView',
    data() {
        return {
            message: ''
        }
    }
}
</script>

<style scoped>
.about-container {
    max-width: 900px;
    margin: 40px auto;
    padding: 24px;
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}

.about-hero {
    text-align: center;
    margin-bottom: 40px;
}

.about-hero h1 {
    font-size: 2.8rem;
    color: #2c3e50;
    margin-bottom: 12px;
}

.about-hero p {
    font-size: 1.2rem;
    color: #555;
}

.about-content {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
}

.about-card {
    background: #f7f9fa;
    border-radius: 12px;
    padding: 28px 24px;
    flex: 1 1 320px;
    min-width: 280px;
    box-shadow: 0 2px 8px rgba(44,62,80,0.06);
}

.about-card h2 {
    color: #2980b9;
    margin-bottom: 10px;
    font-size: 1.4rem;
}

.about-card p {
    color: #444;
    font-size: 1rem;
}
</style>