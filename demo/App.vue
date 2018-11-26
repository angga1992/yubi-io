<template>
  <div id="demo" :class="{'collapsed' : collapsed}">
    <sidebar-menu :menu="menu" :collapsed="collapsed" @collapse="onCollapse" />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'YUBI - IO'
        },
        {
          href: '/',
          title: 'Button'
        },
        {
          href: '/form',
          title: 'Form'
        }
      ],
      collapsed: false
    }
  },
  methods: {
    onCollapse(val) {
      console.log(`collapsed ${val}`)
      this.collapsed = val
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
}

#demo {
  padding-left: 350px;
}
#demo.collapsed {
  padding-left: 50px;
}
</style>
