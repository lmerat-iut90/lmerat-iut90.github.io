<template>
  <div class="projects">
      <h1>Présentation de ma mission</h1>
  </div>
</template>

<style scoped>
.projects {
    padding: 100px 20px;
    background-color: #fff;
    text-align: center;
}
.project-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 40px;
}
.project-card {
    background: #f1f1f1;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    transition: transform 0.2s;
}
.project-card:hover {
    transform: translateY(-5px);
}
</style>