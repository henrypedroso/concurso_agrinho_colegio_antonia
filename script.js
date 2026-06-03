document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. ACESSIBILIDADE: CONTROLE DE FONTE ---
    const btnFontIncrease = document.getElementById("btn-font-increase");
    const btnFontDecrease = document.getElementById("btn-font-decrease");
    const htmlElement = document.documentElement;

    btnFontIncrease.addEventListener("click", () => {
        let currentSize = parseFloat(window.getComputedStyle(htmlElement).fontSize);
        let newSize = currentSize + 1;
        if (newSize <= 24) {
            htmlElement.style.fontSize = newSize + "px";
        }
    });

    btnFontDecrease.addEventListener("click", () => {
        let currentSize = parseFloat(window.getComputedStyle(htmlElement).fontSize);
        let newSize = currentSize - 1;
        if (newSize >= 12) {
            htmlElement.style.fontSize = newSize + "px";
        }
    });

    // --- 2. ACESSIBILIDADE: ALTO CONTRASTE ---
    const btnToggleContrast = document.getElementById("btn-toggle-contrast");
    btnToggleContrast.addEventListener("click", () => {
        document.body.classList.toggle("high-contrast");
    });

    // --- 3. CARROSSEL DINÂMICO (PILARES SUSTENTÁVEIS) ---
    const solucoesDados = [
        {
            titulo: "Agricultura de Precisão & Monitoramento Digital",
            descricao: "Utilização de imagens de satélite e sensores de umidade do solo em Reserva do Iguaçu. Evita o desperdício de água e garante aplicação de insumos apenas onde é estritamente necessário."
        },
        {
            titulo: "Preservação Consciente do Rio Iguaçu",
            descricao: "Criação de corredores ecológicos e reflorestamento com espécies nativas nas margens das bacias hidrográficas, travando o processo de assoreamento e mantendo a água limpa."
        },
        {
            titulo: "Rotação de Culturas e Crédito Verde",
            descricao: "Intercalação de plantios de soja, milho e pastagens para blindar os nutrientes do ecossistema e garantir incentivo fiscal direto para produtores focados na conservação ambiental."
        }
    ];

    const carouselTrack = document.getElementById("carousel-track");
    
    solucoesDados.forEach(item => {
        const slide = document.createElement("div");
        slide.classList.add("carousel-slide");
        slide.innerHTML = `
            <h3>${item.titulo}</h3>
            <p>${item.descricao}</p>
        `;
        carouselTrack.appendChild(slide);
    });

    let currentSlideIndex = 0;
    const btnPrev = document.getElementById("prev-slide");
    const btnNext = document.getElementById("next-slide");

    function updateCarousel() {
        carouselTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }

    btnNext.addEventListener("click", () => {
        currentSlideIndex = (currentSlideIndex + 1) % solucoesDados.length;
        updateCarousel();
    });

    btnPrev.addEventListener("click", () => {
        currentSlideIndex = (currentSlideIndex - 1 + solucoesDados.length) % solucoesDados.length;
        updateCarousel();
    });

    // --- 4. ACORDEÃO DINÂMICO (FAQ) ---
    const faqDados = [
        {
            pergunta: "Como a sustentabilidade ajuda no rendimento de Reserva do Iguaçu?",
            resposta: "Solos protegidos e manejados retêm mais água e nutrientes. A longo prazo, isso significa safras mais resilientes contra crises climáticas e menor gasto com fertilizantes químicos artificiais."
        },
        {
            pergunta: "Qual o papel da Educação Digital nesse cenário?",
            resposta: "A tecnologia conecta o conhecimento técnico aos jovens e produtores rurais. Softwares de gestão e inteligência de dados guiam decisões assertivas que evitam degradações severas na nossa biosfera."
        },
        {
            pergunta: "Como proteger as bacias hidrográficas sem perder área produtiva?",
            resposta: "O respeito às Áreas de Preservação Permanente (APPs) garante a segurança hídrica da própria propriedade. Sem água limpa e em abundância, a produção agrícola torna-se inviável."
        }
    ];

    const faqContainer = document.getElementById("faq-accordion");

    faqDados.forEach((item, index) => {
        const accordionItem = document.createElement("div");
        accordionItem.classList.add("accordion-item");
        
        accordionItem.innerHTML = `
            <button class="accordion-header" aria-expanded="false" aria-controls="faq-content-${index}">
                ${item.pergunta}
                <span class="arrow">▼</span>
            </button>
            <div id="faq-content-${index}" class="accordion-content">
                <p>${item.resposta}</p>
            </div>
        `;
        
        faqContainer.appendChild(accordionItem);
    });

    const headers = document.querySelectorAll(".accordion-header");
    headers.forEach(header => {
        header.addEventListener("click", function () {
            const item = this.parentElement;
            const content = this.nextElementSibling;
            const isOpen = item.classList.contains("active");

            // Fecha todos antes de abrir o atual
            document.querySelectorAll(".accordion-item").forEach(el => {
                el.classList.remove("active");
                el.querySelector(".accordion-content").style.maxHeight = null;
                el.querySelector(".accordion-header").setAttribute("aria-expanded", "false");
            });

            if (!isOpen) {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
                this.setAttribute("aria-expanded", "true");
            }
        });
    });

    // --- 5. FORMULÁRIO DE CONVERSÃO DO MANIFESTO ---
    const formManifesto = document.getElementById("form-manifesto");
    const formMessage = document.getElementById("form-message");

    formManifesto.addEventListener("submit", function (e) {
        e.preventDefault();
        formManifesto.style.display = "none";
        formMessage.style.display = "block";
        formMessage.style.color = "#d8f3dc";
        formMessage.textContent = "Obrigado por apoiar! Seu voto pelo futuro de Reserva do Iguaçu foi registrado com sucesso.";
    });
});