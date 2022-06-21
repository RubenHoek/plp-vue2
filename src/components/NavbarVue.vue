<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/products">Products</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/Register">Register</b-nav-item>

          <!-- https://thewebdev.info/2020/07/31/bootstrapvue%E2%80%8A-%E2%80%8Aopen-and-close-modals/ -->
          <b-nav-item v-b-modal.shopping-cart>
            <!-- ToDo: make this look good -->
            <b-icon class="bi bi-cart-fill text-dark" fill="currentColor" alt="shopping cart" scale="5"></b-icon>
            <b-badge pill variant="info">{{ shoppingCartItemsCount }}</b-badge>
          </b-nav-item>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'NavbarVue',
  props: {
    shoppingCartItemsCount: {
      type: Number,
      default: 1,
      // required: true,
    }
  },
}

</script>