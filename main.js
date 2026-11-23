const list = document.querySelector('#app-list');

for (const app of apps) {
  const card = document.createElement('article');
  card.className = 'app-card';

  const button = document.createElement('button');
  button.className = 'card-toggle';
  button.type = 'button';
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', app.id + '-links');
  button.setAttribute('aria-labelledby', app.id + '-name');
  button.setAttribute('aria-describedby', app.id + '-summary');

  const artwork = document.createElement('span');
  artwork.className = 'app-artwork';
  artwork.setAttribute('aria-hidden', 'true');

  const fallback = document.createElement('span');
  fallback.className = 'fallback';
  fallback.textContent = app.name.charAt(0);

  const icon = document.createElement('img');
  icon.className = 'app-icon';
  icon.alt = '';
  icon.loading = 'lazy';
  icon.addEventListener('load', () => {
    fallback.hidden = true;
    icon.classList.add('is-loaded');
  });
  artwork.append(fallback, icon);
  icon.src = app.icon;

  const info = document.createElement('span');
  info.className = 'app-info';
  const category = document.createElement('span');
  category.className = 'category';
  category.textContent = app.type + ' · ' + app.category;
  const title = document.createElement('strong');
  title.id = app.id + '-name';
  title.textContent = app.name;
  const description = document.createElement('span');
  description.className = 'app-description';
  description.id = app.id + '-summary';
  description.textContent = app.description;
  info.append(category, title, description);
  const plus = document.createElement('span');
  plus.className = 'plus';
  plus.setAttribute('aria-hidden', 'true');
  plus.textContent = '+';
  button.append(artwork, info, plus);

  const actions = document.createElement('div');
  actions.className = 'actions';
  actions.id = app.id + '-links';
  actions.hidden = true;

  const play = document.createElement('a');
  play.className = 'play-link';
  play.href = 'https://play.google.com/store/apps/details?id=com.myniprojects.' + app.id;
  play.textContent = 'Google Play';
  play.target = '_blank';
  play.rel = 'noopener noreferrer';

  const policy = document.createElement('a');
  policy.href = app.policy;
  policy.textContent = 'Privacy & Terms';
  actions.append(play, policy);

  button.addEventListener('click', () => {
    const expanded = actions.hidden;
    button.setAttribute('aria-expanded', String(expanded));
    actions.hidden = !expanded;
  });
  card.append(button, actions);
  list.append(card);
}
