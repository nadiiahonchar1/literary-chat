<template>
  <Transition name="fade" appear>
    <div class="slide container">
      <div class="content-container">
        <div class="background-onbording background-onbording-seven">
          <img
            class="boy-with-laptop"
            src="@/assets/img/registform.svg"
            alt="Застосунок готовий познайомитись з вами"
          />
        </div>
        <div class="slide__text">
          <h2 class="regist__title regsit-style">Підтвердження</h2>
          <h3 class="regist__description regsit-descript">
            Введи 4-значний код,<br />
            який ми відправили на вказану адресу
          </h3>
        </div>
        <div class="slide__code">
          <input
            v-model="valueCode[0]"
            name="code[]"
            type="tel"
            maxlength="1"
            class="slide__item"
            @input="tonext(0)"
          />
          <input
            v-model="valueCode[1]"
            name="code[]"
            type="tel"
            maxlength="1"
            class="slide__item"
            @input="tonext(1)"
            ref="input1"
          />
          <input
            v-model="valueCode[2]"
            name="code[]"
            type="tel"
            maxlength="1"
            class="slide__item"
            @input="tonext(2)"
            ref="input2"
          />
          <input
            v-model="valueCode[3]"
            name="code[]"
            type="tel"
            maxlength="1"
            class="slide__item"
            @input="tonext(3)"
            ref="input3"
          />
        </div>
        <div v-show="erorr" class="slide__erorr">
          {{ erorrMesage }}
        </div>
        <!-- <div class="slide__repeat" v-show="reapeteMesag">
          {{ reapeteMesage }}
        </div> -->
        <div class="slide__descript regsit-descript">
            <div>Код підтвердження не отримано?</div>
            <button @click="repeateCode" class="slide__btn-desc">Відправити ще раз</button>
        </div>
        <div class="btn__auto">
           <fromregistfrom v-if="condition === 'showbtn2'"  />
           <fromgetAcqua  v-if ="condition === 'showbtn1'"/>
        </div>
        <!---end-->
      </div>
      <div class="prel" v-if="isLoaded">
        <div class="slide__prell">
          <preload></preload>
        </div>
      </div>
      <div class="slide__prell" v-else></div>
    </div>
  </Transition>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useUserStore } from "@/stores/UserStore";
import { useRoute } from 'vue-router'; 
import preload from "@/components/greetings/preload/pre-load.vue";
import fromregistfrom from '@/components/greetings/btns/buttonfrom-registFrom.vue';
import fromgetAcqua from '@/components/greetings/btns/buttonFrom-getAcquaintance.vue';

export default {
  components: {
    preload,
    fromregistfrom,
    fromgetAcqua,
  },
  setup() {
    const codeStore = useUserStore();
    const route = useRoute(); 

    const valueCode = ref([]);
    const isLoaded = ref(false);
    const error = ref(false);
    const errorMessage = "Код введений невірно. Будь ласка, спробуй ще раз.";

    const condition = computed(() => route.query.condition); 

    const tonext = (index) => {
  if (valueCode.value[index].length >= 1) {
    const inputs = [
      inputRefs.input0,
      inputRefs.input1,
      inputRefs.input2,
      inputRefs.input3,
    ];
    if (index < inputs.length - 1 && inputs[index + 1].value) {
      inputs[index + 1].focus();
    }
    console.log(valueCode);
    
  }
};

    const updateCode = () => {
      codeStore.setValueCode(valueCode.value);
    };

    watch(valueCode, () => {
      updateCode();
    }, { deep: true });

    const inputRefs = {
      input0: ref(null),
      input1: ref(null),
      input2: ref(null),
      input3: ref(null),
    };

    return {
      valueCode,
      isLoaded,
      error,
      errorMessage,
      condition,
      tonext,
      inputRefs,
    };
  },
};
</script>




