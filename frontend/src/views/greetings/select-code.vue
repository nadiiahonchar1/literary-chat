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
        <div class="slide__repeat" v-show="reapeteMesag">
          {{ reapeteMesage }}
        </div>
        <div class="slide__descript regsit-descript">
            <div>Код підтвердження не отримано?</div>
            <button @click="repeateCode" class="slide__btn-desc">Відправити ще раз</button>
        </div>
        <btn :title="buttonTitle" @click="save" />
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
import btn from "@/components/greetings/button-table.vue";
import preload from "@/components/greetings/preload/pre-load.vue";
import { getVerify } from "@/api/getVerify";
import { repeat } from "@/api/repeat";
import { useUserStore } from "@/stores/UserStore";

export default {
  data() {
    return {
      buttonTitle: "Увійти",
      valueCode: ["", "", "", ""],
      isLoaded: false,
      IsActive: false,
      erorr: false,
      erorrMesage: "Код введений невірно. Будь ласка, спробуй ще раз.",
      incorect: false,
      reapeteMesag: false,
    };
  },
  components: {
    btn,
    preload,
  },
  methods: {
    tonext(index) {
      if (this.valueCode[index].length >= 1) {
        const inputs = [
          this.$refs.input0,
          this.$refs.input1,
          this.$refs.input2,
          this.$refs.input3,
        ];
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }
    },
    async save() {
      this.isLoaded = true;
      this.IsActive = !this.IsActive;
      const verificationCode = this.valueCode.join("");
      try {
        const response = await getVerify(useUserStore().email, verificationCode);
        if(response.success) {
          this.$router.push("profile");
          this.isLoaded = false;
        } else {
          this.isLoaded = false;
          this.IsActive = false;
          this.erorr = true;
          this.incorect = true;
        }
      } catch (error) {
        console.error(error);
      }
     
    },
    async repeateCode(){
      this.isLoaded = true;
      this.IsActive = !this.IsActive;
      try {
        await repeat(useUserStore().email);
        this.isLoaded = false;
        this.IsActive = false;
      } catch (error) {
        console.error(error);
      }
      
    }
  },
  watch: {
    IsActive(value) {
      if (value) {
        document.querySelector(".slide").classList.add("active");
        document.querySelector(".content-container").classList.add("load");
      } else {
        document.querySelector(".slide").classList.remove("active");
        document.querySelector(".content-container").classList.remove("load");
      }
    },
    incorect(){
      let inp = document.querySelectorAll('.slide__item')
      for(let i = 0; i < inp.length;i++){
        inp[i].classList.add('red')
      }
    },
  },
  mounted() {
    this.$refs.inputs = this.$el.querySelectorAll("input");
  },
};
</script>

<style>
.error-border {
  border: 1px solid red;
}
</style>
