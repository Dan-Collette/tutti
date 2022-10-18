<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col p-0 pl-sm-3">
          <img class="main-logo" src="../assets/images/tutti.png" alt="Tutti Logo"/>
        </div>
      </div>  
    </div>
  </header>
</template>

<script>

</script>

<style>
  header {
    background-color: #1D1D1D;
    padding: 16px;
    width: 100%;
    position: sticky; 
    top: 0;
    z-index: 100;
}
h1 {
    color: #f2f2f2;
    font-size: 25px;
}
.main-logo {
  width: auto;
  height: 25px;
}
@media (min-width: 576px) {
  .main-logo {
    width: auto;
    height: 35px;
  }
}
@media (min-width: 768px) {
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
}
</style>