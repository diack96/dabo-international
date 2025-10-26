# Script PowerShell pour pousser le projet sur GitHub

Write-Host "=== Configuration du dépôt GitHub ===" -ForegroundColor Cyan
Write-Host ""

# Demander l'URL du dépôt GitHub
$repoUrl = Read-Host "Entrez l'URL de votre dépôt GitHub (ex: https://github.com/votre-username/dabo-international.git)"

if ([string]::IsNullOrWhiteSpace($repoUrl)) {
    Write-Host "❌ URL invalide!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Ajout du remote origin..." -ForegroundColor Yellow
git remote add origin $repoUrl 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Remote existant détecté, mise à jour..." -ForegroundColor Yellow
    git remote set-url origin $repoUrl
}

Write-Host ""
Write-Host "Envoi du code sur GitHub..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Code poussé avec succès sur GitHub!" -ForegroundColor Green
    Write-Host "📍 Dépôt: $repoUrl" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "❌ Erreur lors du push!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Vérifiez:" -ForegroundColor Yellow
    Write-Host "  1. Que l'URL du dépôt est correcte" -ForegroundColor Yellow
    Write-Host "  2. Que le dépôt existe sur GitHub" -ForegroundColor Yellow
    Write-Host "  3. Que vous êtes authentifié (GitHub CLI ou credentials)" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Commandes manuelles:" -ForegroundColor Cyan
    Write-Host "  git push -u origin main" -ForegroundColor White
}

