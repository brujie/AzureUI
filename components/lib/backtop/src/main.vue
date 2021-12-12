<template>
  <div class="a-backtop-container" v-if="flag" @click="handleBackTop">
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABWVJREFUWEftl2tsFFUYht9v5mwLotCdglZERImEYLFAuUSDBowmIpAACggo2J0C8RIC5fIHEiDCHytbQ7wE2NkKgpU7MXIxJoKRaJRWbpWggRBQAgidLQSk7Z6Zz+xtupTd7W7LJsRwfs2c853vfeY9lzmHcJcXusv5cA+wvSN0xxwUfrOcGa+FgIiwTXq0he2FC+e6E0mEYe4BMKpFrr1S115pb/52AwrD3Avg5SQg+6SutQTPiLldgMJfvwBsl8cpbo0+T3TqSFkoPXkfZkQVF9xmQJc/UMLM/uZctFPq7gmhd+EPfA3msbE2IvIEPe7KtkC2CVD1maOJ8E0zAM4pqnipcUbnP0N1Lv+VYcxKaF5qsRhmjLFKtd2ZQrYJ0GWYVQy87ogTploerSpeXDXMaQRsdD4C+Cqoa1OyDujyBQYy8W/NcOSzPO6ZiYTFurplUGipA8k0KFjqPpwJZMYOCqNuFUBlcSLPSV07mFC0MtBL2BwCyou0s1fq+fOzB7jhYicRzD0N8EMREdomdXfzik2gLIxABcBzo/GXpKuxN6YX3EgXMiMHXZVXh7Bt/Ro398ZaHs1ZLIlEXWsDA1gNuxj5JEUdGizpcigrgKpx5S2C4mwXUjZ0w+zuV0Jiqt+cQozxoWcp7HmY0fV8DEI1zNMEPBEeZNgllt7186wACsP8AEDkH8s4Jku1opiQ8NdtB1N4HwTxDunJf9VpMwLfAfxi9L1c6tqi7AD6zN0ghP+vTOy3PPl6M6C5H4wREUAckB5tZJyDnxDwTvTD9shSbXR2AP1xEDYvlzPzl6UDeMt20wK+NdCMFom4B3i7n/8zB426bQCFVycBW4K6NjluITj/3pZbicswNzMwKRLL26WeHz55p1MydLB+BdheHE1cK3Wtf7xI7vprfRotCsDzwOX4emGYxwEURla4slJ68pakAxc1It1QQPUF3iTiDdEetrzhvg9zqDFlhtWcKzoF/gWghP1jmm6Vur9IVzV9B3/5OF+9UbCWzrwQ2YxDxX1qlJwwdF8qMbH5xPO4XvBDLIYf/36H1eniLAx7ry4dyLQA1ZqPxjDsFSRzi6i2+Uhnd6x715765KcpAbceWYJrPd93AAurwKLxqGJbc+WQhQdag2wVMKfa298i2gdw9/Cc+H0yEOwYyUtYIj3aypSAfnMxGCvCMa6b4Kc2O+EK7MHB4gU1qfq3CqjWeNcAmOUkOTnuAjXkPRydwJuCuvZGKgGXYW5kYFp4/nWov4C+u8J9o2WtVVw2u+2AR1f3UKX8yxkem5fT8ZICYsSSHpa6Niilg4YZOn0PDAMS1lDR+pvsnA8BS4hHUTTn72Q5UjqoVq+aCKItsc4WqJ84MmMMgNCpJlQaZFPTY3i74J+EAp9dfFDk5JwF0CHavkgZsOFbC/ZRJ555kjV4fuy6elualICixutlYF6011mruKyXagTGE3hHXKakR35hmMMB/OiMAGiCpbt3imrvH0zoE50mFbK4LP4KcQtkagdrvD8BeCbaY4tVXDY5Z535tK3AcYDApUE930jkoMuo0xnki7UpNoqaZmrH1OpVX4Ioth38bBWXPZv5ENcuzVEbuzRvwoTIliBdKtVOGQ5WIh8Xq0+m4JwRbebCqoMQQSscGqsHYOVezUXh8qZEKZI6KA6Vj2BF3Z+w08lxQEP0opZqhcS3dagH992VMJpsa2SyPTH5EB+u6KXafCYh4PmhwOV+6aJF4rqdAD/i3Ldu6Wup6IEBZc4dJr6xlTlYMQ3EpQlJzg3vjetdiZryTiUlVRryWAQ74/5LLvQ8eDphHJPPKp63KfM5mJk/WYtu9U+SNeU0E9/1gP8Bq54mR2te3wQAAAAASUVORK5CYII="
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "a-backtop",
  props:{
    target:{
      type:String,
    }
  },
  data() {
    return {
      flag: false,
      TargetDom:null,
    };
  },
  mounted() {
    this.init();
    window.addEventListener("scroll", this.handleScroll, true);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    init(){
      if(this.target == ''){
        throw new Error('必须绑定一个目标元素!')
      } else { 
        this.TargetDom = document.querySelector(this.target);
        this.TargetDom.style.scrollBehavior = 'smooth';
      }
    },
    handleScroll() {
      if(this.TargetDom == null){
        throw new Error('a-backtop必须绑定target元素!')
      }
      let scrollTop = this.TargetDom.scrollTop;
      if (scrollTop >= 200) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    },
    handleBackTop() {
      this.TargetDom.scrollTop = 0;
    },
  },
};
</script>

<style>
</style>