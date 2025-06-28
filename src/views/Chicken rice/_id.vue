<template>
  <div class="student-detail">
    <div v-if="$route.params.id === '1'">
      <h2>ข้าวมันไก่สุดแสนจะอร่อย</h2>
      <ul>
        <img src="@/assets/now1.png" alt="Vue logo" width="400" />
        <li>ข้าวหอมมะลิคุณภาพดี</li>
        <li>ไก่เนื้อนุ่ม สดใหม่ทุกวัน</li>
        <li>น้ำจิ้มสูตรเด็ดเฉพาะร้าน</li>
        <li>เสิร์ฟพร้อมน้ำซุปกลมกล่อม</li>
      </ul>
    </div>
    <div v-else-if="$route.params.id === '2'">
      <h2>ข้าวมันไก่แห่งสวรรค์</h2>
      <ul>
        <img src="@/assets/now.png" alt="Vue logo" width="400" />
        <li>ข้าวมันหอมกรุ่น</li>
        <li>ไก่เนื้อแน่นเต็มคำ</li>
        <li>น้ำจิ้มรสกลมกล่อม</li>
        <li>บริการด้วยใจ</li>
      </ul>
    </div>
    <div v-else-if="$route.params.id === '3'">
      <h2>ข้าวมันไก่แห่งนรก</h2>
      <ul>
         <img src="@/assets/now2.png" alt="Vue logo" width="400" />
        <li>ข้าวมันไก่รสเผ็ดไฟลุก</li>
        <li>ไก่หมักพริกสูตรพิเศษ</li>
        <li>น้ำจิ้มสุดแซ่บ</li>
        <li>ท้าทายความเผ็ด!</li>
      </ul>
    </div>
    <div v-else>
      <p>ข้าวมันไก่สุดแสนจะอร่อย</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChickenRiceDetailView'
}
</script>

<style scoped>
.student-detail {
  text-align: center;
  margin-top: 40px;
}
.student-detail ul {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}
.student-detail li {
  margin-bottom: 6px;
}
</style>
