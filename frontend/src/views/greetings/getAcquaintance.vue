<template>
  <Transition name="fade" appear>
    <div class="slide container" v-cloak>
      <div class="content-container">
        <div class="background-onbording background-onbording-sixth">
          <img
            class="get-acquainted"
            src="@/assets/img/get-acquainted.svg"
            alt="Застосунок готовий познайомитись з вами"
          />
        </div>
        <div class="slide__text acquaintance__text">
          <h2 class="acquaintance__tittle">Познайомимося?</h2>
          <h3 class="acquaintance__description">
            Придумай унікальний нікнейм, <br />
            за яким тебе можуть знайти однодумці.
          </h3>
          <p class="acquaintance__caption">
            Додаткову інформацію ти завжди зможеш внести в особистому кабінеті.
          </p>
          <form>
            <app-input label="Нікнейм" v-model.trim="nikname"></app-input>
            <p class="acquaintance__explanation">
              Нікнейм може містити лише латинські літери і цифри.
              Лише латинські літери і цифри.
            </p>
            <div class="btn-container">
              <btn
                :title="buttonTitle"
                @skip-all="skipall"
                :skiptext="buttonskip"
                :first-button-disabled="isNextDisabled"
                @click="submitAlldata"
              />
            </div>
          </form>
        </div>
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
import axios from "axios";
import AppInput from "@/components/UI/AppInput.vue";
import btn from "@/components/greetings/button-table.vue";
import preload from "@/components/greetings/preload/pre-load.vue";

export default {
  data() {
    return {
      nikname: "",
      buttonTitle: "Зберегти та увійти в чат",
      buttonskip: "Скасувати",
      isLoaded: false,
      IsActive: false,
    };
  },
  components: {
    AppInput,
    btn,
    preload,
  },
  computed: {
    isNextDisabled() {
      return !this.nikname;
    },
  },
  methods: {
    skipall() {
      this.nikname = "";
    },
    submitAlldata() {
      this.isLoaded = true;
      this.IsActive = !this.IsActive;
      const headers = {
        "api-key": "6A38900C07D34C4F9839226B66FBEA24",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      };
      const body = {
        username: this.nikname,
        email: localStorage.getItem("newemail"),
      };
      console.log(body);
      axios
        .post(
          "https://klabapi.azurewebsites.net/api/authentication/sign-up",
          body,
          { headers }
        )
        .then((response) => {
          console.log(response.data);
          this.isLoaded = false;
          localStorage.setItem('nikname', `${this.nikname}`)
          this.$router.push("registcode");
        })
        .catch((error) => {
          console.error(error);
          this.isLoaded = false;
        });
    },
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
  computed: {
    isNextDisabled() {
      if (!this.nikname) {
        this.skipError();
        return true;
      } else {
        if (!/^[a-zA-Z0-9]+$/.test(this.nikname)) {
          this.setErrorMessage();
          return true;
        }
      }
      this.skipError();
      return false;
      // return !this.nikname;
    },
  },
  methods: {
    skipall() {
      this.nikname = "";
    },
    skipError() {
      this.nicknameError = "";
    },
    niknameValidate() {
      return /^[a-zA-Z0-9]+$/.test(this.nikname);
    },
    setErrorMessage() {
      this.nicknameError = "Лише латинські літери і цифри.";
    },
    submitHandler() {
      if (this.niknameValidate()) {
        localStorage.setItem("nikname", `@${this.nikname}`);
        this.$router.push("profiel");
      } else {
        this.setErrorMessage();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
