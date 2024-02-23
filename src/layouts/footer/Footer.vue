<script setup>
import Instagram from '@/components/icons/Instagram.vue';

import Twitter from '@/components/icons/Twitter.vue';

import Facebook from '@/components/icons/Facebook.vue';

import Telegram from '@/components/icons/Telegram.vue';
</script>

<template>
    <footer class="footer">
        <div class="container">
            <Router-link class="footer__logo" to="/">Nike</Router-link>
            <p class="footer__txt">&copy All rights reserved 2024</p>
            <div class="footer__socials">
                <a href="#!" class="footer__socials-item">
                    <Telegram />
                </a>
                <a href="#!" class="footer__socials-item">
                    <Facebook />
                </a>
                <a href="#!" class="footer__socials-item">
                    <Twitter />
                </a>
                <a href="#!" class="footer__socials-item">
                    <Instagram />
                </a>
            </div>
        </div>
    </footer>
</template>