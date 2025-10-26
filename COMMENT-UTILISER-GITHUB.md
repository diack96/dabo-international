# 🚀 Comment publier sur GitHub

## ✅ Étape 1 : Créer le dépôt sur GitHub

1. Allez sur https://github.com/new
2. Nom du dépôt : `dabo-international`
3. Choisissez **Public** ou **Private**
4. **N'ajoutez PAS** de README, licence, ou .gitignore (ils existent déjà)
5. Cliquez sur **"Create repository"**

## ✅ Étape 2 : Copier l'URL du dépôt

Après la création, GitHub affichera une page avec des instructions. **Copiez l'URL** qui ressemble à :
```
https://github.com/VOTRE-USERNAME/dabo-international.git
```

## ✅ Étape 3 : Ajouter le remote et pousser

### Option A : Utiliser le script automatique
```powershell
.\push-to-github.ps1
```
Quand le script demande l'URL, collez-la.

### Option B : Commandes manuelles
```powershell
# Ajouter le remote GitHub
git remote add origin https://github.com/VOTRE-USERNAME/dabo-international.git

# Pousser le code
git push -u origin main
```

Remplacez `VOTRE-USERNAME` par votre vrai nom d'utilisateur GitHub !

## 🎉 C'est tout !

Votre projet sera disponible sur GitHub et vous pourrez :
- Partager le lien
- Collaborer avec d'autres développeurs
- Déployer facilement sur Vercel, Netlify, etc.

---

## 📝 Si vous avez des erreurs

### Erreur "remote origin already exists"
```powershell
git remote set-url origin https://github.com/VOTRE-USERNAME/dabo-international.git
git push -u origin main
```

### Erreur d'authentification
Assurez-vous d'être connecté à GitHub :
```powershell
gh auth login  # Si vous utilisez GitHub CLI
```

Ou configurez vos credentials Git :
```powershell
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

