---
layout: default
title: Каталог рецептов
---

<div class="row mb-4">
  <div class="col-12">
    <h1 class="mb-3">Список рецептов</h1>
    <input type="text" id="search-box" class="form-control form-control-lg" placeholder="Поиск рецептов по названию или описанию...">
  </div>
</div>

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4" id="recipe-list">
  {% for recipe in site.recipes %}
    <div class="col recipe-item" data-title="{{ recipe.title | downcase | xml_escape }}" data-desc="{{ recipe.description | downcase | xml_escape }}">
      <div class="card h-100 shadow-sm border-0">
        {% if recipe.preview %}
          <div style="height: 180px; overflow: hidden; background: #f8f9fa;">
            <img src="{{ recipe.preview | relative_url }}" class="card-img-top w-100 h-100" style="object-fit: cover;" alt="{{ recipe.title }}">
          </div>
        {% else %}
          <div style="height: 180px; background: #e9ecef;" class="d-flex align-items-center justify-content: center text-muted">Нет фото</div>
        {% endif %}
        <div class="card-body d-flex flex-column">
          <h5 class="card-title text-dark">{{ recipe.title }}</h5>
          <p class="card-text text-muted small flex-grow-1" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">{{ recipe.description }}</p>
          <div class="d-flex justify-content-between align-items-center mt-3 pt-2 border-top text-muted small">
            <span>🕒 {{ recipe.prep_time | default: "—" }}</span>
            <span>🍽 {{ recipe.servings | default: "—" }}</span>
          </div>
          <a href="{{ recipe.url | relative_url }}" class="stretched-link"></a>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<script>
  document.getElementById('search-box').addEventListener('input', function(e) {
    let query = e.target.value.toLowerCase();
    let items = document.querySelectorAll('.recipe-item');
    items.forEach(function(item) {
      let title = item.getAttribute('data-title');
      let desc = item.getAttribute('data-desc');
      if (title.includes(query) || desc.includes(query)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
</script>
