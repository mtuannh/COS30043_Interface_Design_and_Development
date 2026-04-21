<template>
  <section>
    <h1 class="mb-3">Welcome to Travel Explorer</h1>
    <p class="lead">
      This simple app helps you browse different destinations and find ideas for your next trip.
    </p>

    <div id="travelCarousel" class="carousel slide shadow-sm rounded overflow-hidden mt-4">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100 carousel-img"
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
            alt="Mountain destination"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 carousel-img"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
            alt="Ocean destination"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 carousel-img"
            src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80"
            alt="City destination"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#travelCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#travelCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </section>
</template>
