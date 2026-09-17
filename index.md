---
layout: default
title: Каталог рецептов
---

<div style="margin-bottom: 20px;">
  <input type="text" id="search-box" placeholder="Поиск рецептов по названию или описанию..." style="width: 100%; padding: 12px; font-size: 16px; border: 1px solid #ddd; border-radius: 6px;">
</div>

<ul id="recipe-list" style="list-style: none; padding: 0;">
  {% for recipe in site.recipes %}
    <li class="recipe-item" data-title="{{ recipe.title | downcase }}" data-desc="{{ recipe.description | downcase }}" style="margin-bottom: 15px; padding: 15px; border: 1px solid #eaeaea; border-radius: 8px; background: #fff;">
      <a href="{{ recipe.url | relative_url }}" style="font-size: 18px; font-weight: bold; text-decoration: none; color: #0366d6;">{{ recipe.title }}</a>
      <p style="margin: 5px 0 10px 0; color: #586069;">{{ recipe.description }}</p>
      <small style="color: #6a737d;">🕒 {{ recipe.prep_time }} &nbsp;|&nbsp; 🍽 Порций: {{ recipe.servings }}</small>
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
