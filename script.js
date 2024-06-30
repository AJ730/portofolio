document.addEventListener('DOMContentLoaded', async function() {
    const projects = [
        {
            name: 'Malware Scraper',
            description: 'This project involves scraping malware data for analysis and research purposes. It uses various web scraping techniques to collect data from different sources.',
            url: 'https://github.com/AJ730/RansomwareScraper'
        },
        {
            name: 'Malware Embedding Generator',
            description: 'Generates downstream embeddings of malware for classification and visualization, leveraging machine learning models to improve malware detection.',
            url: 'https://github.com/AJ730/malware_embeddings_generator'
        },
        {
            name: 'SNN',
            description: 'Explores Spiking Neural Networks (SNN) with new loss functions to enhance the performance of neural networks in various applications.',
            url: 'https://github.com/AJ730/SNN'
        },
        {
            name: 'Uncertainty Classification',
            description: 'Classifies epistemic uncertainty in microscopy images using advanced machine learning techniques to improve image analysis accuracy.',
            url: 'https://github.com/AJ730/UncertaintyClassification'
        },
        {
            name: 'Heart Segmentation',
            description: 'Develops models for heart segmentation in medical images, aiding in the diagnosis and treatment of heart diseases through accurate image processing.',
            url: 'https://github.com/AJ730/ImageHeartSegmentation'
        },
        {
            name: 'Neural ODEs',
            description: 'Estimate steady states using Neural Ordinary Differential Equations.',
            url: 'https://github.com/AJ730/Neural-Ordinary-differential-Equations'
        },
        {
            name: 'Peak-a-boo GAN',
            description: 'Custom implementation of peakaboo GAN.',
            url: 'https://github.com/AJ730/peak-a-boo-GAN'
        },
        {
            name: 'Ransomware Scraper',
            description: 'Simulating Ransomware Scraping using Selenium.',
            url: 'https://github.com/AJ730/RansomwareScraper'
        },
        {
            name: 'LStar Algorithm',
            description: 'Custom implementation of LStar algorithm for Software Testing and Reverse Engineering.',
            url: 'https://github.com/AJ730/LstarAlgorithm-'
        },
        {
            name: 'Reinforcement Learning',
            description: 'Explored deep q learning.',
            url: 'https://github.com/AJ730/ReinforcementLearning'
        },
        {
            name: 'Sleep Therapist',
            description: '3D conversation Agent using transfer and reinforcement learning with furhat.',
            url: 'https://github.com/AJ730/SleepTherapist'
        },
        {
            name: 'Federated Learning GANs',
            description: 'As part of publication: https://arxiv.org/abs/1811.03850',
            url: 'https://github.com/AJ730/FederatedLearningGans'
        },
        {
            name: 'Agar-Galaxy',
            description: 'A custom implementation of Agar.io using express.js.',
            url: 'https://github.com/AJ730/Agar-Galaxy'
        },
        {
            name: 'Jpacman2',
            description: 'A small adaptation of testing framework for students using Jpacman framework.',
            url: 'https://github.com/AJ730/Jpacman2'
        },
        {
            name: 'Model Validator',
            description: 'Backend in spring boot and frontend in react, using hibernate JPA to create a custom validation process for open ML models.',
            url: 'https://github.com/AJ730/Model-builder-and-validator'
        },
             {
            name: 'Gaze Estimator',
            description: 'A reproduction study of the application of AFF Net in Appearance-based Gaze Estimation on the dataset MPII-FaceGaze',
            url: 'https://github.com/Em-R2019/DL-Reproducibility-Project'
        },
        {
            name: 'AI based: XSS',
            description: 'XSStrikeMod is an updated fork of XSStrike. XSStrike is a Cross Site Scripting detection suite equipped with four hand written parsers, an intelligent payload generator, a powerful fuzzing engine and an incredibly fast crawler.',
            url: 'https://github.com/AJ730/XSStrikeMod'
        },
        {
            name: 'Aimbot Development: A computer vision perspective',
            description: 'XSStrikeMod is an updated fork of XSStrike. XSStrike is a Cross Site Scripting detection suite equipped with four hand written parsers, an intelligent payload generator, a powerful fuzzing engine and an incredibly fast crawler.',
            url: 'https://github.com/BowMonk/valoCV'
        },

    ];

    const projectsContainer = document.getElementById('projects');

    // Simulate image URL generation
    const generateImageUrl = async (projectName) => {
        return `https://via.placeholder.com/150?text=${encodeURIComponent(projectName)}`;
    };

    for (const project of projects) {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const imageUrl = await generateImageUrl(project.name);

        projectDiv.innerHTML = `
            <img src="${imageUrl}" alt="${project.name} Image">
            <div>
                <h2>${project.name}</h2>
                <p>${project.description}</p>
                <p><a href="${project.url}" target="_blank">View on GitHub</a></p>
            </div>
        `;

        projectsContainer.appendChild(projectDiv);
    }
});
