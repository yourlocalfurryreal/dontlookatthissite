function inject(text) {
    console.log("%cScript Injection", "color: green; font-weight: 600; background: black; padding: 0 5px; border-radius: 5px", text);
}

function toggleError(error) {
    var errorContainer = document.getElementById('error-container');

    // If the error container is not present, create it
    if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.id = 'error-container';
        document.body.appendChild(errorContainer);
    }

    // Toggle the display of the error container
    errorContainer.style.display = (errorContainer.style.display === 'none') ? 'block' : 'none';

    // Append the new error message to the existing ones
    var errorMessage = document.createElement('p');
    errorMessage.textContent = error;
    errorContainer.appendChild(errorMessage);
}

document.addEventListener("DOMContentLoaded", function () {
    const quoteText = document.querySelector(".motd");
    // var motds = Array("I wanna touch someone");
    var motds = Array("goon")
    
    var randomMOTD = motds[Math.floor(Math.random() * motds.length)];
    quoteText.innerHTML = randomMOTD;
    toggleError("Initial error message");
});

function abcloak() {
    const tab = window.open('about:blank', '_blank');
    const iframe = tab.document.createElement('iframe');
    const stl = iframe.style;
    stl.border = stl.outline = 'none';
    stl.width = '100vw';
    stl.height = '100vh';
    stl.position = 'fixed';
    stl.left = stl.right = stl.top = stl.bottom = '0';
    iframe.src = self.location;
    tab.document.body.appndChild(iframe);
}

try {
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://www.googletagmanager.com/gtag/js?id=G-5R6BKQ11BM';
    scriptElement.async = true;
    document.head.appendChild(scriptElement);

    var inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5R6BKQ11BM');
    `;
    document.head.appendChild(inlineScript);
    inject('Google Tag Manager script loaded successfully 1/2'); // Notify success
} catch (err) {
    console.error("An error occurred while loading Google Tag Manager script:", err.message);
    toggleError('Failed to load GTAG, please reload.');
}
