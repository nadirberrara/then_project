<template>
    <div>

        <div class="columns">
            <div class="column">
                <p>I want to : </p>
                <button class="button" @click="SignupFromLogin">Sign Up</button>
                <button class="button" @click="loginFromSignup">Log In</button>
            </div>
        </div>

        <div class="columns">
            <form class="column" v-if="loginSignup" @submit.prevent="signup">
                <h1 class="title">Sign Up :</h1>
                <div class="notification is-primary" v-if="registered">
                    <p>You are now registered</p>
                    <button class="button" @click="loginFromSignup">Please Log In</button>

                </div>

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
                <button class="button" type="submit">Signup</button>

            </form>

            <form class="column" v-else @submit.prevent="login">
                <h1 class="title">Log In :</h1>
                <div class="notification is-primary" v-if="loggedIn">You are now connected</div>

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

                <button type="submit" class="button">Login</button>

            </form>

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
            loginSignup: true,
            loggedIn: false,
            registered: false
        }
    },
    methods: {
        signup() {
            this.error = '',
                auth.loadUser(this)

            auth.signup({
                username: this.username,
                password: this.password
            }).then((response) => {
                this.response = response,
                    this.registered = true
            }).catch(err => {
                this.error = err.response.data
            })
        },
        login() {
            auth.login(this.username, this.password, this).then((response) => {
                console.log("Bien passé")
                this.response = response
                this.loggedIn = true
                this.$root.nextMsg = "You are now conected"
                this.$router.push("/")
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
div.notification.is-primary {
    margin: 20px
}

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
    margin-bottom: 10px;
    color: white
}

div.column {
    background-color: #06425c;
    border: white solid 1px;
    margin: 0 20px 30px
}

article.message.is-danger {
    margin: 10px
}
</style>