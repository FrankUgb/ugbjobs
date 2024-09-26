<template>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currículum Vitae</title>
    <link rel="stylesheet" href="../css/MiCV.css">
</head>
<body>
    <div id="app" class="cv-container">

        <!-- Header con información personal -->
        <div class="header">
            <img src="../html/imagen.png" alt="Foto de Perfil" class="profile-pic">
            <div class="personal-info">
                <h1>{{ name }}</h1>
                <p><i class="fas fa-envelope"></i> {{ email }}</p>
            </div>
        </div>

        <!-- Información Académica -->
        <div class="academic-section">
            <h2>Información Académica</h2>
            <p>Progreso Académico: {{ academicProgress }}</p>
            <p>CUM: {{ cum }}</p>
            <h3>Asignaturas destacadas</h3>
            <ul>
                <li v-for="subject in subjects" :key="subject">{{ subject }}</li>
            </ul>
        </div>

        <!-- Objetivo Profesional -->
        <div class="objective-section">
            <h2>Objetivo Profesional</h2>
            <p>{{ objective }}</p>
        </div>

        <!-- Habilidades -->
        <div class="skills-section">
            <h2>Habilidades Técnicas</h2>
            <ul>
                <li v-for="skill in techSkills" :key="skill">{{ skill }}</li>
            </ul>

            <h2>Habilidades Blandas</h2>
            <ul>
                <li v-for="softSkill in softSkills" :key="softSkill">{{ softSkill }}</li>
            </ul>
        </div>

        <!-- Idiomas -->
        <div class="languages-section">
            <h2>Idiomas</h2>
            <ul>
                <li v-for="language in languages" :key="language">{{ language }}</li>
            </ul>
        </div>

        <!-- Proyectos y Logros -->
        <div class="projects-section">
            <h2>Proyectos y Logros</h2>
            <ul>
                <li v-for="project in projects" :key="project">{{ project }}</li>
            </ul>
        </div>

        <!-- Certificados -->
        <div class="certificates-section">
            <h2>Certificados</h2>
            <ul>
                <li v-for="certificate in certificates" :key="certificate">{{ certificate }}</li>
            </ul>
        </div>

        <!-- Extras -->
        <div class="extras-section">
            <h2>Extras</h2>
            <p>Teléfono: {{ phone }}</p>
            <p>LinkedIn: {{ linkedin }}</p>
        </div>

        <!-- Botones para guardar y descargar PDF -->
        <div class="actions">
            <button @click="saveCurriculum">Guardar Currículum</button>
            <button @click="downloadPDF">Descargar como PDF</button>
        </div>
    </div>

    <!-- Vue.js -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
    <!-- jsPDF para generar PDFs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                name: 'Juan Pérez',
                email: 'juan.perez@example.com',
                academicProgress: 'Cursando Ciclo 4 de 8',
                cum: '8.5',
                subjects: ['Matemáticas Avanzadas', 'Física Aplicada', 'Programación'],
                objective: 'Consolidar mis conocimientos y aportar en el área de desarrollo de software.',
                techSkills: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
                softSkills: ['Comunicación', 'Trabajo en equipo', 'Liderazgo'],
                languages: ['Español (Nativo)', 'Inglés (Avanzado)'],
                projects: ['Proyecto A', 'Proyecto B', 'Proyecto C'],
                certificates: ['Certificado en Vue.js por Universidad X', 'Certificación en UX/UI por Institución Y'],
                phone: '555-555-5555',
                linkedin: 'linkedin.com/in/juanperez'
            },
            methods: {
                saveCurriculum() {
                    alert('Currículum guardado');
                    // Aquí puedes agregar funcionalidad para guardar los datos, por ejemplo en localStorage o una base de datos
                },
                downloadPDF() {
                    const { jsPDF } = window.jspdf;
                    const doc = new jsPDF();
                    doc.text(`Currículum de ${this.name}`, 10, 10);
                    doc.save('Curriculum.pdf');
                }
            }
        });
    </script>
</body>
</template>