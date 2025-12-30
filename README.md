# La Bénédiction de Dieu - Site Web de Tapisserie

## 🎨 Présentation

Site web professionnel pour **La Bénédiction de Dieu**, atelier de tapisserie d'ameublement à Lomé, Togo.
Thème blanc-vert avec toutes les fonctionnalités nécessaires pour gérer votre présence en ligne.

## ✨ Fonctionnalités

- ✅ Design professionnel blanc-vert
- ✅ Contenu 100% en français
- ✅ 4 services de tapisserie
- ✅ **Galerie d'images avec upload** - Ajoutez vos photos directement depuis le site
- ✅ Formulaire de contact fonctionnel
- ✅ **Bouton WhatsApp** pour contact direct
- ✅ Responsive (mobile, tablette, ordinateur)
- ✅ Informations modifiables facilement

## 📞 Coordonnées Configurées

- **Nom**: La Bénédiction de Dieu
- **Téléphone**: +228 99 46 85 79
- **WhatsApp**: Lien direct vers WhatsApp
- **Email**: contact@benedictiondedieu.tg
- **Adresse**: Lomé, Togo

## 🖼️ Comment Ajouter des Photos à la Galerie

### Méthode Simple (Recommandée)
1. Ouvrez le site dans votre navigateur
2. Allez à la section "Galerie de Projets"
3. Cliquez sur le bouton **"📸 Ajouter des Photos"**
4. Sélectionnez une ou plusieurs images depuis votre ordinateur
5. Les images s'affichent immédiatement !
6. Pour supprimer une image, cliquez sur le **×** rouge en haut à droite de l'image

**Note**: Les images ajoutées de cette façon sont temporaires et disparaîtront si vous rechargez la page. Pour des images permanentes, voir la méthode avancée ci-dessous.

### Méthode Avancée (Images Permanentes)
1. Créez un dossier `public/images/` dans votre projet
2. Placez vos images dans ce dossier
3. Modifiez `src/App.jsx`, section galerie (ligne ~130)
4. Remplacez le code de la galerie par vos images:

```jsx
<div className="gallery-grid">
  <div className="gallery-item">
    <img src="/images/fauteuil1.jpg" alt="Réfection fauteuil" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
  </div>
  <div className="gallery-item">
    <img src="/images/canape1.jpg" alt="Restauration canapé" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
  </div>
  {/* Ajoutez plus d'images ici */}
</div>
```

## 📝 Modifier les Informations de l'Entreprise

### Option 1: Dans App.jsx (Ligne 6-14)
```javascript
const [businessInfo, setBusinessInfo] = useState({
  nom: 'La Bénédiction de Dieu',
  telephone: '+228 99 46 85 79',
  email: 'votre@email.tg',
  adresse: 'Votre Adresse, Lomé',
  // ... etc
});
```

### Option 2: Dans config.js
Ouvrez `src/config.js` et modifiez toutes les informations centralisées.

## 🎨 Modifier les Couleurs

Dans `src/index.css` (lignes 1-20):
```css
:root {
  --color-primary: #2d6a4f;      /* Vert principal */
  --color-primary-light: #40916c; /* Vert clair */
  --color-secondary: #52b788;     /* Vert secondaire */
}
```

## 📋 Services Actuels

1. **Réfection de Sièges** 🛋️
2. **Restauration Ancienne** 🪑
3. **Confection sur Mesure** ✂️
4. **Réparation** 🔧

Pour ajouter ou modifier des services, éditez la section services dans `src/App.jsx` (ligne ~90).

## 💬 WhatsApp

Le bouton WhatsApp est configuré avec le numéro **+228 99 46 85 79**.
Quand un client clique dessus, il ouvre directement WhatsApp avec votre numéro.

Pour modifier le numéro WhatsApp, cherchez `wa.me/22899468579` dans `src/App.jsx` (ligne ~280).

## 🚀 Lancer le Site

```bash
# Démarrer le serveur de développement
npm run dev

# Le site sera accessible sur:
# http://localhost:5173
```

## 📦 Construire pour la Production

```bash
npm run build

# Les fichiers de production seront dans le dossier 'dist'
# Vous pouvez ensuite les héberger sur n'importe quel serveur web
```

## 📱 Sections du Site

1. **Accueil** - Hero avec slogan et boutons d'action
2. **Services** - 4 services de tapisserie
3. **Galerie** - Photos de vos réalisations (avec upload)
4. **À Propos** - Histoire et points forts
5. **Contact** - Formulaire + coordonnées + WhatsApp
6. **Footer** - Liens et informations

## 🎯 Conseils d'Utilisation

- **Galerie**: Utilisez le bouton "Ajouter des Photos" pour tester rapidement
- **WhatsApp**: Testez le bouton pour vérifier qu'il ouvre bien WhatsApp
- **Formulaire**: Actuellement affiche une alerte, à connecter à un service d'email
- **Responsive**: Testez sur mobile en redimensionnant votre navigateur

## 🔧 Prochaines Étapes Recommandées

1. Ajoutez vos vraies photos de réalisations
2. Connectez le formulaire à un service d'email (EmailJS, Formspree)
3. Ajoutez vos vrais liens de réseaux sociaux dans le footer
4. Hébergez le site (Netlify, Vercel, ou votre hébergeur)

## 📞 Support

Pour toute question sur l'utilisation ou la modification du site, consultez ce README ou la documentation de React.

---

**Fait avec ❤️ pour La Bénédiction de Dieu**
