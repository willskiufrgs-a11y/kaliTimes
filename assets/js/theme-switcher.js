// Obtém a preferência salva no navegador ou usa a preferência do sistema (dark/light)
const getPreferredTheme = () => {
    // 1. Verifica se há uma preferência salva (local storage)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    // 2. Se não houver, verifica a preferência do sistema (CSS media query)
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Define o tema (adicionando/removendo a classe no <body>)
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};

// 1. Define o tema inicial na primeira carga da página
setTheme(getPreferredTheme());

// 2. Adiciona o listener ao botão de alternância
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Atualiza o estado inicial do botão/ícone, se necessário
    if (getPreferredTheme() === 'dark') {
        // Você pode mudar o ícone do botão aqui se estiver usando um ícone
        themeToggle.textContent = 'Modo Claro 💡';
    } else {
        themeToggle.textContent = 'Modo Escuro 🌙';
    }

    // Adiciona o evento de clique
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        setTheme(newTheme);

        // Atualiza o texto do botão após a troca
        if (newTheme === 'dark') {
            themeToggle.textContent = 'Modo Claro 💡';
        } else {
            themeToggle.textContent = 'Modo Escuro 🌙';
        }
    });
});
// dudo copiado da GEMINI, NÃO ORIGINAL
