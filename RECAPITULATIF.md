# 🎯 Récapitulatif - Tapisserie La Bénédiction de Dieu

## ✅ Configuration Actuelle

### Informations de l'Entreprise
- **Nom** : Tapisserie La Bénédiction de Dieu
- **Téléphone** : +228 99 46 85 79
- **Email** : rodriguehessou14@gmail.com
- **Adresse** : Lomé, Togo
- **Horaires** : Lun-Ven: 8h-20h, Sam: 9h-19h

### Services (4)
1. 🛋️ Réfection de Sièges
2. 🪑 Restauration Ancienne
3. ✂️ Confection sur Mesure
4. 🔧 Réparation

## 📁 Structure du Projet

```
business-website/
├── public/
│   └── images/
│       └── galerie/          ← Placez vos images ici !
│           └── README.md
├── src/
│   ├── App.jsx              ← Code principal (ligne 17-22 pour images)
│   ├── App.css              ← Styles des composants
│   ├── index.css            ← Design system blanc-vert
│   └── config.js            ← Configuration centralisée
├── README.md                ← Documentation complète
├── GUIDE-IMAGES.md          ← Guide rapide pour les images
└── package.json
```

## 🖼️ Ajouter vos Images de Galerie

### Option 1 : Images Permanentes (Recommandé)

1. **Copiez vos photos** dans `public/images/galerie/`
   
2. **Modifiez `src/App.jsx`** (lignes 17-22) :
   ```javascript
   const defaultGalleryImages = [
     { id: 1, url: '/images/galerie/votre-image-1.jpg', name: 'Description', isPermanent: true },
     { id: 2, url: '/images/galerie/votre-image-2.jpg', name: 'Description', isPermanent: true },
     // Ajoutez autant d'images que vous voulez
   ];
   ```

3. **Sauvegardez** - Le site se recharge automatiquement !

### Option 2 : Upload Temporaire

- Cliquez sur "📸 Ajouter des Photos (Temporaire)" sur le site
- Les images disparaissent au rechargement de la page

## 🚀 Démarrer le Site

```bash
cd business-website
npm run dev
```

Ouvrez : http://localhost:5173

## 💬 WhatsApp

Le bouton WhatsApp est configuré avec votre numéro : +228 99 46 85 79

## 🎨 Thème

- Couleurs : Blanc & Vert professionnel
- Design : Moderne et épuré
- Responsive : Mobile, tablette, desktop

## 📝 Fichiers à Consulter

- **README.md** - Documentation complète
- **GUIDE-IMAGES.md** - Guide rapide pour les images
- **public/images/galerie/README.md** - Instructions dans le dossier images

## 🔧 Prochaines Étapes

1. ✅ Ajoutez vos vraies photos dans `public/images/galerie/`
2. ✅ Modifiez `src/App.jsx` ligne 17-22 pour afficher vos images
3. ⏳ Connectez le formulaire à un service d'email (optionnel)
4. ⏳ Déployez le site en ligne (Netlify, Vercel, etc.)

## 📞 Contact

Pour toute question, consultez les fichiers README.md et GUIDE-IMAGES.md

---

**Site créé avec React + Vite**  
**Prêt à l'emploi ! 🎉**
