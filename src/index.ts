export const imagePreload = (imageUrls: string[]) => {
  const fragment = document.createDocumentFragment();

  imageUrls.forEach((imageUrl) => {
    const div = document.createElement('div');
    div.style.background = `url(${imageUrl})`;
    fragment.append(div);
  });

  const root = document.createElement('div');
  root.attachShadow({ mode: 'open' });
  root.shadowRoot?.append(fragment);
  document.body.append(root);
};
