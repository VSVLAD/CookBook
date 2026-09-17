---
layout: default
title: Каталог рецептов
---

<div style="margin-bottom: 25px;">
  <input type="text" id="search-box" placeholder="Поиск рецептов по названию или описанию..." style="width: 100%; padding: 12px; font-size: 16px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box;">
</div>

<ul id="recipe-list" style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 15px;">
  {% for recipe in site.recipes %}
    <li class="recipe-item" data-title="{{ recipe.title | downcase | xml_escape }}" data-desc="{{ recipe.description | downcase | xml_escape }}" style="border: 1px solid #eaeaea; border-radius: 8px; background: #fff; overflow: hidden; transition: box-shadow 0.2s;">
      <a href="{{ recipe.url | relative_url }}" style="display: flex; text-decoration: none; color: inherit; align-items: stretch;">
        {% if recipe.preview %}
          <div style="width: 160px; min-width: 160px; height: 120px; overflow: hidden; background: #f0f0f0;">
            <img src="{{ recipe.preview | relative_url }}" alt="{{ recipe.title }}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
        {% else %}
          <div style="width: 160px; min-width: 160px; height: 120px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; color: #999; font-size: 12px;">Нет фото</div>
        {% endif %}
        <div style="padding: 15px; display: flex; flex-direction: column; justify-content: center; flex-grow: 1;">
          <h2 style="margin: 0 0 8px 0; font-size: 18px; color: #0366d6;">{{ recipe.title }}</h2>
          <p style="margin: 0 0 8px 0; color: #586069; font-size: 14px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">{{ recipe.description }}</p>
          <small style="color: #6a737d; font-size: 13px;">🕒 {{ recipe.prep_time | default: "Не указано" }} &nbsp;|&nbsp; 🍽 Порций: {{ recipe.servings | default: "Не указано" }}</small>
        </div>
      </a>
    </li>
  {% endfor %}
</ul>

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
