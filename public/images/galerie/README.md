# Instructions pour la Galerie d'Images

## 📁 Dossier des Images

Placez vos photos de réalisations dans ce dossier : `public/images/galerie/`

## 📸 Format des Images Recommandé

- **Format** : JPG, PNG, WebP
- **Taille recommandée** : 800x600 pixels minimum
- **Poids** : Moins de 2 MB par image pour un chargement rapide

## 🖼️ Nommage des Fichiers

Nommez vos fichiers de manière descriptive :
- `fauteuil-restauration-1.jpg`
- `canape-refection-2.jpg`
- `chaise-ancienne-3.jpg`
- etc.

## ✅ Comment Ajouter vos Images

1. Copiez vos photos dans le dossier `public/images/galerie/`
2. Ouvrez le fichier `src/App.jsx`
3. Cherchez la section "Galerie" (ligne ~130)
4. Ajoutez vos images dans le tableau `galleryImages`

Exemple :
```javascript
const defaultGalleryImages = [
  { id: 1, url: '/images/galerie/fauteuil-1.jpg', name: 'Réfection fauteuil Louis XV' },
  { id: 2, url: '/images/galerie/canape-1.jpg', name: 'Restauration canapé ancien' },
  // Ajoutez vos images ici
];
```

## 📝 Note

Les images placées dans ce dossier seront permanentes et s'afficheront automatiquement sur votre site.
