<template>
    <div>

        <div class="columns">
            <div class="column" v-if="loginSignup">
                <h1 class="title">Please Sign Up :</h1>
                <hr>

                <article v-if="error" class="message is-danger">
                    <div class="message-body">{{ error }}</div>
                </article>

                <div class="field">
                    <label class="label">Name :</label>
                    <div class="control">
                        <input class="input" type="text">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Email :</label>
                    <div class="control">
                        <input class="input" v-model="username" type="text">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password :</label>
                    <div class="control">
                        <input class="input" v-model="password" type="password">
                    </div>
                </div>
                <button @click="signup" class="button">Signup</button>

                <div class="already">
                    <p>Already have an account?
                    </p>
                    <button class="button" @click="loginFromSignup">Log In</button>
                </div>

            </div>

            <div class="column" v-else>
                <h1 class="title">Please Log In :</h1>
                <hr>

                <article v-if="error" class="message is-danger">
                    <div class="message-body">{{ error }}</div>
                </article>

                <div class="field">
                    <label class="label">Email :</label>
                    <div class="control">
                        <input class="input" v-model="username" type="text">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password :</label>
                    <div class="control">
                        <input class="input" v-model="password" type="password">
                    </div>
                </div>

                <button @click="login" class="button">Login</button>

                <div class="already">
                    <p>I need an account
                    </p>
                    <button class="button" @click="SignupFromLogin">Sign Up</button>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import auth from './api'

export default {
    data() {
        return {
            response: '',
            username: '',
            password: '',
            error: '',
            loginSignup: true
        }
    },
    methods: {
        signup() {
            this.error = ''
            auth.signup({
                username: this.username,
                password: this.password
            }).then((response) => {
                this.response = response
            }).catch(err => {
                this.error = err.response.data
            })
        },
        login() {
            auth.login(this.username, this.password, this).then((response) => {
                this.response = response
                this.$root.user = {
                    username: this.username,
                    token: response.token
                }
            }).catch(err => {
                this.error = err.response.data
            })
        },
        secret() {
            auth.secret().then(response => {
                this.response = response
            }).catch(err => {
                this.response = err
            })
        },
        loginFromSignup() {
            this.loginSignup = false
        },
        SignupFromLogin() {
            this.loginSignup = true
        }
    }
}
</script>

<style scoped>
label.label {
    color: #06425c
}

.field {
    margin: 10px 80px
}

h1.title {
    color: #06425c;
}

p {
    margin-top: 80px;
    color: white
}
</style>