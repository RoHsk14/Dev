# 📸 Guide Rapide - Ajouter des Images à la Galerie

## Méthode 1 : Images Permanentes (Recommandé)

### Étape 1 : Placez vos images
Copiez vos photos dans le dossier : `public/images/galerie/`

Exemple :
```
public/
  └── images/
      └── galerie/
          ├── fauteuil-1.jpg
          ├── canape-1.jpg
          ├── chaise-restauree.jpg
          └── ...
```

### Étape 2 : Modifiez le code
Ouvrez `src/App.jsx` et trouvez les lignes 17-22 :

```javascript
const defaultGalleryImages = [
  // Décommentez et ajoutez vos images :
  { id: 1, url: '/images/galerie/fauteuil-1.jpg', name: 'Réfection fauteuil', isPermanent: true },
  { id: 2, url: '/images/galerie/canape-1.jpg', name: 'Restauration canapé', isPermanent: true },
  { id: 3, url: '/images/galerie/chaise-restauree.jpg', name: 'Chaise restaurée', isPermanent: true },
];
```

### Étape 3 : Sauvegardez
Le site se recharge automatiquement et vos images apparaissent !

## Méthode 2 : Upload Temporaire

1. Ouvrez le site dans votre navigateur
2. Allez à la section "Galerie"
3. Cliquez sur "📸 Ajouter des Photos (Temporaire)"
4. Sélectionnez vos images
5. Elles s'affichent immédiatement

⚠️ **Note** : Ces images disparaissent si vous rechargez la page.

## Exemple Complet

```javascript
// Dans src/App.jsx, ligne 17-22
const defaultGalleryImages = [
  { 
    id: 1, 
    url: '/images/galerie/projet-fauteuil-louis-xv.jpg', 
    name: 'Réfection fauteuil Louis XV', 
    isPermanent: true 
  },
  { 
    id: 2, 
    url: '/images/galerie/canape-ancien-restaure.jpg', 
    name: 'Canapé ancien restauré', 
    isPermanent: true 
  },
  { 
    id: 3, 
    url: '/images/galerie/chaise-moderne.jpg', 
    name: 'Chaise moderne refaite', 
    isPermanent: true 
  },
  { 
    id: 4, 
    url: '/images/galerie/coussin-sur-mesure.jpg', 
    name: 'Coussins sur mesure', 
    isPermanent: true 
  },
];
```

## Conseils

- **Format** : JPG, PNG ou WebP
- **Taille** : 800x600 pixels minimum
- **Poids** : Moins de 2 MB par image
- **Nommage** : Utilisez des noms descriptifs sans espaces (utilisez des tirets)

Exemple de bons noms :
- ✅ `fauteuil-restauration-2024.jpg`
- ✅ `canape-tissu-velours.jpg`
- ❌ `IMG_1234.jpg`
- ❌ `photo avec espaces.jpg`
