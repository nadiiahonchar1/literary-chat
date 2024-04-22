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
            Введи 4-значний код,<br> який ми відправили на вказану адресу 
          </h3>
        </div>
        <div class="slide__code"  >
            <input 
                v-model="valueCode[0]"
                type="tel"
                maxlength = "1"
                class="slide__item"
                @input="tonext(0)"
              >
              <input 
                v-model="valueCode[1]"
                type="tel"
                maxlength = "1"
                class="slide__item"
                @input="tonext(1)"
                ref="input1"
              >
              <input
                v-model="valueCode[2]"
                type="tel"
                maxlength = "1"
                class="slide__item"
                @input="tonext(2)"
                ref="input2"
              >
              <input 
                v-model="valueCode[3]"
                type="tel"
                maxlength = "1"
                class="slide__item"
                @input="tonext(3)"
                ref="input3"
              >
        </div>
        <div v-if="erorr">
          {{ erorrMesage }}
        </div>
        <div class="slide__descript">
           <div class="regist__description regsit-descript">Код підтвердження не отримано?</div>
           <div class="regist__description regsit-descript">Відправити ще раз</div>
        </div>
        <btn 
        :title="buttonTitle"
        @click="save"
        />
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
import axios from "axios";


export default {
  data(){
    return{
      buttonTitle : 'Увійти',
      valueCode: ['','','',''],
      isLoaded: false,
      IsActive: false,
      erorr: false,
      erorrMesage: 'Код введений невірно. Будь ласка, спробуй ще раз.'
    }
  },
  components:{
    btn,
    preload
  },
  methods: {
    getkeyLocalstore(keys){
    for(let key of keys){
      let value = localStorage.getItem(key)
      if(value !== null){
        return value;
      }
    }
    return null
  },
  tonext(index) {
    if (this.valueCode[index].length >= 1) {
        const inputs = [this.$refs.input0, this.$refs.input1, this.$refs.input2, this.$refs.input3];
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
    }
  },
    save() {
    this.isLoaded = true;
    this.IsActive = !this.IsActive;
    const email = this.getkeyLocalstore(['newemail'])
    const сurrentemail = this.getkeyLocalstore(['сurrentemail'])
    const verificationCode = this.valueCode.join('');
  const headers = {
    "api-key": "6A38900C07D34C4F9839226B66FBEA24",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };

  if (сurrentemail == null) {
    const data = {
      email: email,
      verificationCode: verificationCode,
    };
    axios
      .post(
        "https://klabapi.azurewebsites.net/api/authentication/verify-email",
        data,
        { headers }
      )
      .then((response) => {
        console.log(response.data);
        this.$router.push('profiel')
        this.isLoaded = false;
      })
      .catch(() => {
        // console.error(error);
        // console.error(error.response.data)
        this.erorr = true
        this.isLoaded = false
        this.IsActive = false
        this.showError = true;
      });
  } else {
    const data = {
      email: сurrentemail,
      authenticationCode: verificationCode,
    };
    axios
      .post(
        "https://klabapi.azurewebsites.net/api/authentication/authenticate-email",
        data,
        { headers }
      )
      .then((response) => {
        this.$router.push('profiel')
        console.log(response.data);
        this.isLoaded = false;
      })
      .catch(() => {
        this.erorr = true
        this.isLoaded = false
        this.IsActive = false
        this.showError = true;
      });
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
  },
mounted() {
  this.$refs.inputs = this.$el.querySelectorAll('input');
},
}
</script>

<style>
.error-border {
  border: 1px solid red;
}
</style>