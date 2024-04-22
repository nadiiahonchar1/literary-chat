<template>
  <div class="preloader" id="loader-1">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<style scoped>
.preloader {
  border-radius: 100%;
  position: relative;
  margin: 0 auto;
}
#loader-1 span {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  /* margin: 35px 5px; */
}
#loader-1 span:nth-child(2) {
  margin: 0px 31px 0 31px;
}
#loader-1 span:nth-child(1) {
  animation: bounce 1s ease-in-out infinite;
  background: linear-gradient(180deg, #9db9d7 100%, #5380b1 100%);
}

#loader-1 span:nth-child(2) {
  animation: bounce 1s ease-in-out 0.33s infinite;
  background: linear-gradient(180deg, #a6cd82 100%, #63a427 100%);
}

#loader-1 span:nth-child(3) {
  animation: bounce 1s ease-in-out 0.66s infinite;
  background: linear-gradient(180deg, #fff9d7 100%, #f0e180 100%);
}

@keyframes bounce {
  0%,
  75%,
  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }

  25% {
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
</style>
