<template>
  <div class="hero">
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :class="{ active: isActive }"
    >
      <g id="KLab-logo 2">
        <path
          id="Vector"
          d="M99.9524 185.11C146.955 185.11 185.059 147.007 185.059 100.003C185.059 53.0004 146.955 14.8969 99.9524 14.8969C52.9492 14.8969 14.8457 53.0004 14.8457 100.003C14.8457 147.007 52.9492 185.11 99.9524 185.11Z"
          fill="#6792C1"
          class="svg-elem-1"
        ></path>
        <path
          id="Vector_2"
          d="M131.455 123.55C142.682 119.495 145.626 108.945 149.021 96.7775C151.278 88.6892 153.725 79.9243 158.829 71.6308H152.324V67.8742H165.926L163.833 70.831C157.752 79.4266 155.077 89.0117 152.631 97.7758C148.957 110.942 145.772 122.357 132.717 127.072L131.455 123.55Z"
          fill="#325F91"
          stroke="#325F91"
          stroke-width="0.755906"
          stroke-miterlimit="22.9256"
          class="svg-elem-2"
        ></path>
        <path
          id="Vector_3"
          d="M126.121 86.32C128.087 86.32 129.68 84.7267 129.68 82.7607C129.68 80.795 128.087 79.2016 126.121 79.2016C124.155 79.2016 122.562 80.795 122.562 82.7607C122.562 84.7267 124.155 86.32 126.121 86.32Z"
          fill="#325F91"
          stroke="#325F91"
          stroke-width="0.755906"
          stroke-miterlimit="22.9256"
          class="svg-elem-3"
        ></path>
        <path
          id="Vector_4"
          d="M150.289 69.4105H145.396C142.232 69.4105 138.013 69.0928 133.188 68.7296C113.892 67.2767 84.4341 65.0587 77.2371 80.1992C73.9437 87.1275 71.3398 93.005 69.1261 98.0025C61.8331 114.465 58.6718 121.597 47.1733 129.737C58.562 130.204 76.7112 130.365 92.8066 130.013C107.876 129.684 121.073 128.924 124.987 127.577C136.717 123.542 138.735 112.066 141.034 98.9808C142.729 89.3392 144.567 78.89 150.289 69.4105ZM145.396 64.7147H159.339L156.558 68.4567C149.492 77.9666 147.487 89.3717 145.657 99.7875C143.102 114.327 140.86 127.08 126.511 132.017C122.127 133.524 108.41 134.352 92.8983 134.691C72.5966 135.135 49.0991 134.774 39.7041 134.012L32.4524 133.424L38.6771 129.665C54.095 120.354 56.8454 114.146 64.8337 96.1133C67.0292 91.1575 69.6118 85.3283 73.0001 78.1999C81.5846 60.1406 112.976 62.5041 133.537 64.0522C138.232 64.4055 142.336 64.7147 145.396 64.7147Z"
          fill="#FEFEFE"
          class="svg-elem-4"
        ></path>
        <path
          id="Vector_5"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M127.676 82.3112C128.782 82.3112 129.68 83.2086 129.68 84.3158C129.68 85.4225 128.782 86.32 127.676 86.32C126.569 86.32 125.672 85.4225 125.672 84.3158C125.672 83.2086 126.569 82.3112 127.676 82.3112Z"
          fill="#E6C90F"
          stroke="#325F91"
          stroke-width="0.755906"
          stroke-miterlimit="22.9256"
          class="svg-elem-5"
        ></path>
        <path
          id="Vector_6"
          d="M56.3948 109.898C62.9237 104.628 76.8724 108.737 87.6341 109.605C100.675 110.657 105.783 110.78 108.664 108.744L108.917 108.389"
          stroke="#B9DB9A"
          stroke-width="3"
          stroke-miterlimit="22.9256"
          class="svg-elem-6"
        ></path>
        <path
          id="Vector_7"
          d="M58.2466 101.865C64.7755 96.595 78.7242 100.703 89.4857 101.572C102.527 102.624 107.636 102.747 110.516 100.711L110.769 100.356"
          stroke="#B9DB9A"
          stroke-width="3"
          stroke-miterlimit="22.9256"
          class="svg-elem-7"
        ></path>
        <path
          id="Vector_8"
          d="M58.8391 93.5025C65.3681 88.2317 79.3168 92.34 90.0784 93.2083C103.12 94.2608 108.228 94.3833 111.108 92.3475L111.362 91.9925"
          stroke="#B9DB9A"
          stroke-width="3"
          stroke-miterlimit="22.9256"
          class="svg-elem-8"
        ></path>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isActive = true;
    }, 200);
  },
};
</script>

<style lang="scss" scoped>
.hero {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
}
svg .svg-elem-1 {
  stroke-dashoffset: 536.8157958984375px;
  stroke-dasharray: 536.8157958984375px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715)
      0s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;
}

svg.active .svg-elem-1 {
  stroke-dashoffset: 0;
  fill: rgb(103, 146, 193);
}

svg .svg-elem-2 {
  stroke-dashoffset: 160.24185180664062px;
  stroke-dasharray: 160.24185180664062px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715)
      0.12s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s;
}

svg.active .svg-elem-2 {
  stroke-dashoffset: 0;
  fill: rgb(50, 95, 145);
}

svg .svg-elem-3 {
  stroke-dashoffset: 24.36625099182129px;
  stroke-dasharray: 24.36625099182129px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715)
      0.24s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s;
}

svg.active .svg-elem-3 {
  stroke-dashoffset: 0;
  fill: rgb(50, 95, 145);
}

svg .svg-elem-4 {
  stroke-dashoffset: 616.0006103515625px;
  stroke-dasharray: 616.0006103515625px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715)
      0.36s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s;
}

svg.active .svg-elem-4 {
  stroke-dashoffset: 0;
  fill: rgb(254, 254, 254);
}

svg .svg-elem-5 {
  stroke-dashoffset: 14.594295501708984px;
  stroke-dasharray: 14.594295501708984px;
  fill: transparent;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715)
      0.48s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s;
}

svg.active .svg-elem-5 {
  stroke-dashoffset: 0;
  fill: rgb(230, 201, 15);
}

svg .svg-elem-6 {
  stroke-dashoffset: 55.69803237915039px;
  stroke-dasharray: 55.69803237915039px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715)
      0.6s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s;
}

svg.active .svg-elem-6 {
  stroke-dashoffset: 0;
}

svg .svg-elem-7 {
  stroke-dashoffset: 55.69835662841797px;
  stroke-dasharray: 55.69835662841797px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715)
      0.72s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s;
}

svg.active .svg-elem-7 {
  stroke-dashoffset: 0;
}

svg .svg-elem-8 {
  stroke-dashoffset: 55.69856643676758px;
  stroke-dasharray: 55.69856643676758px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715)
      0.84s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s,
    fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s;
}

svg.active .svg-elem-8 {
  stroke-dashoffset: 0;
}

.active {
  background: none;
}
</style>
