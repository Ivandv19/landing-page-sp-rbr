module.exports = {
    // Configuración de las ramas para las que se realizará el release
    branches: ["develop"],
    // URL del repositorio de GitHub
    repositoryUrl: "https://github.com/Ivandv19/landing-page-sp-rbr.git",
    // Lista de plugins utilizados por semantic-release
    plugins: [
      "@semantic-release/commit-analyzer", // Analiza los commits para determinar la versión del release
      "@semantic-release/release-notes-generator", // Genera notas de la versión basadas en los commits
      "@semantic-release/changelog", // Actualiza el archivo CHANGELOG.md con las notas de la versión
      [
        "@semantic-release/npm",
        {
          npmPublish: false, // No publica el paquete en npm
        },
      ],
      [
        "@semantic-release/github",
        {
          assets: [], // Sin archivos adicionales para incluir en el release
        },
      ],
      [
        "@semantic-release/git",
        {
          // Archivos que se incluirán en el commit de release
          assets: ["CHANGELOG.md", "package.json", "pnpm-lock.yaml"],
          // Mensaje del commit de release
          message:
            "chore(release): 🔖 Versión ${nextRelease.version}\n\n${nextRelease.notes}",
        },
      ],
    ],
  };