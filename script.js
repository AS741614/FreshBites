document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startQuizButton').addEventListener('click', startQuiz);
});

function startQuiz() {
    const quizQuestions = [
        { question: "Spicy or Mild?", options: ["Spicy", "Mild"] },
        { question: "Vegetarian or Meat?", options: ["Vegetarian", "Meat"] },
        { question: "Dessert or Savory?", options: ["Dessert", "Savory"] }
    ];

    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    quizQuestions.forEach(q => {
        const questionDiv = document.createElement('div');
        questionDiv.innerText = q.question;
        q.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.onclick = () => selectOption(q.question, option);
            questionDiv.appendChild(button);
        });
        quizContainer.appendChild(questionDiv);
    });
}

function selectOption(question, option) {
    console.log(`Question: ${question}, Option: ${option}`);
    // Placeholder for now, implement logic to fetch recommendations based on selections
    showRecommendations();
}

function showRecommendations() {
    const recommendations = document.getElementById('recommendations');
    const results = document.getElementById('results');
    results.innerHTML = "<p>Here are your personalized recommendations based on your preferences!</p>";
    recommendations.style.display = 'block';
}
