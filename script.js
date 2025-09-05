document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const copyButton = document.getElementById('copyButton');
    const passwordOutput = document.getElementById('passwordOutput');
    const copyAlert = document.getElementById('copyAlert');

    const generatePassword = () => {
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const requiredChar = '@';
        const allChars = lowercaseChars + numbers;

        let password = '';
        const passwordLength = 12;

        const atIndex = Math.floor(Math.random() * (passwordLength - 1));

        for (let i = 0; i < passwordLength; i++) {
            if (i === atIndex) {
                password += requiredChar;
            } else {
                const randomIndex = Math.floor(Math.random() * allChars.length);
                password += allChars[randomIndex];
            }
        }
        return password;
    };

    const copyPassword = async () => {
        if (passwordOutput.value) {
            try {
                await navigator.clipboard.writeText(passwordOutput.value);
                // Exibe o alerta de sucesso
                copyAlert.classList.remove('opacity-0');
                copyAlert.classList.add('opacity-100');

                // Esconde o alerta após 2 segundos
                setTimeout(() => {
                    copyAlert.classList.remove('opacity-100');
                    copyAlert.classList.add('opacity-0');
                }, 2000);
            } catch (err) {
                console.error('Falha ao copiar a senha: ', err);
            }
        }
    };

    generateButton.addEventListener('click', () => {
        passwordOutput.value = generatePassword();
    });

    copyButton.addEventListener('click', copyPassword);
});
