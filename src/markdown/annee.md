---
title: Mois de l'année
# permalink: /annee/page-{{ pagination.pageNumber + 1 }}/
permalink: /annee/{{ pagination.items[0] | slugify }}/
layout: layouts/layout.njk
pagination:
    data: mounthList
    size: 1
---

## Page {{ pagination.pageNumber + 1 }}
{% for item in pagination.items %}
- {{ item }}
{% endfor %}
{{ pagination | log}}

<a href="{{ pagination.href.first}}">Début</a>
<a href="{{ pagination.href.previous}}">Prédédent</a>
<a href="{{ pagination.href.next}}">Suivant</a>
<a href="{{ pagination.href.last}}">Fin</a>