const questionsBySubject = {
    "C": [
      { q: "Who developed the C language?", options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Ken Thompson"], answer: "Dennis Ritchie" },
      { q: "What is the file extension of C language?", options: [".c", ".cpp", ".java", ".py"], answer: ".c" },
      { q: "What does printf() do?", options: ["Takes input", "Prints output", "Compiles program", "None"], answer: "Prints output" },
      { q: "Which keyword is used to declare a constant?", options: ["constant", "const", "define", "let"], answer: "const" },
        { q: "Which function is used to print output?", options: ["print()", "cout", "printf()", "echo"], answer: "printf()" },
        { q: "Which header file is used for printf?", options: ["math.h", "conio.h", "stdio.h", "stdlib.h"], answer: "stdio.h" },
        { q: "Which symbol is used to end a statement?", options: [".", ":", ";", ","], answer: ";" },
        { q: "Which loop checks condition after executing block?", options: ["for", "while", "do-while", "foreach"], answer: "do-while" },
        { q: "Which function is used to read input?", options: ["scanf()", "cin", "input()", "gets()"], answer: "scanf()" },
        { q: "What does return 0 signify?", options: ["Success", "Error", "End", "Loop"], answer: "Success" }
    ],
    "Mathematical": [
      { q: "What is 12 * 8?", options: ["96", "84", "108", "88"], answer: "96" },
      { q: "Solve: 45 / 5", options: ["5", "10", "9", "8"], answer: "9" },
      { q: "What is the square root of 81?", options: ["7", "8", "9", "10"], answer: "9" },
      { q: "What is the square root of 144?", options: ["10", "11", "12", "13"], answer: "12" },
      { q: "Solve: 2 + 3 × 4", options: ["14", "20", "24", "18"], answer: "14" },
      { q: "What is 25% of 200?", options: ["25", "50", "75", "100"], answer: "50" },
      { q: "What is the value of pi (approx)?", options: ["3.12", "3.14", "3.16", "3.18"], answer: "3.14" },
      { q: "What is the area of a square with side 4?", options: ["8", "12", "16", "20"], answer: "16" },
      { q: "What is 2 to the power 5?", options: ["32", "64", "16", "8"], answer: "32" },
      { q: "What is the perimeter of a rectangle 4x6?", options: ["20", "24", "26", "28"], answer: "20" },
      
    ],
    
    
      "HTML": [
        { q: "HTML stands for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None"], answer: "Hyper Text Markup Language" },
        { q: "Which tag is used for links?", options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;src&gt;"], answer: "<a>" },
        { q: "Which tag defines the largest heading?", options: ["&lt;h1&gt;", "&lt;heading&gt;", "&lt;head&gt;", "&lt;h6&gt;"], answer: "<h1>" },
        { q: "Who is the father of HTML?", options: ["Brendan Eich", "Tim Berners-Lee", "James Gosling", "Guido van Rossum"], answer: "Tim Berners-Lee" },
        { q: "What is the correct HTML element for inserting a line break?", options: ["&lt;br&gt;", "&lt;break&gt;", "&lt;lb&gt;", "&lt;newline&gt;"], answer: "<br>" },
        { q: "Which tag is used to display a picture?", options: ["&lt;img&gt;", "&lt;pic&gt;", "&lt;src&gt;", "&lt;image&gt;"], answer: "<img>" },
        { q: "Which tag creates a hyperlink?", options: ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;", "&lt;hyperlink&gt;"], answer: "<a>" },
        { q: "What is the starting tag of HTML?", options: ["&lt;body&gt;", "&lt;start&gt;", "&lt;html&gt;", "&lt;code&gt;"], answer: "<html>" },
        { q: "What is the extension of an HTML file?", options: [".htm", ".html", ".ht", ".htx"], answer: ".html" },
        { q: "Which tag is used for heading?", options: ["&lt;head&gt;", "&lt;heading&gt;", "&lt;h1&gt;", "&lt;h&gt;"], answer: "<h1>" }
      ],
    

    "CSS": [
      { q: "What does CSS stand for?", options: ["Cascading Style Sheets", "Color Style Sheets", "Creative Style Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
      { q: "Which property is used for text color?", options: ["font-color", "text-color", "color", "text-style"], answer: "color" },
      { q: "How do you select an element with id 'main'?", options: [".main", "#main", "main", "*main"], answer: "#main" },
      { q: "Which property is used to change text color?", options: ["fgcolor", "text-color", "color", "font-color"], answer: "color" },
        { q: "Which CSS property sets background color?", options: ["background", "bgcolor", "background-color", "color"], answer: "background-color" },
        { q: "Which selector targets all elements?", options: ["*", "#", ".", "all"], answer: "*" },
        { q: "Which unit is relative to the root element?", options: ["em", "rem", "%", "px"], answer: "rem" },
        { q: "How to make a font bold?", options: ["font: bold", "font-weight: bold", "bold: true", "text-style: bold"], answer: "font-weight: bold" },
        { q: "How to apply CSS to a single element?", options: ["ID", "Class", "Element", "Selector"], answer: "ID" },
        { q: "Which property changes font size?", options: ["text-size", "font-size", "size", "fontsize"], answer: "font-size" }
        
    ],
    "JavaScript": [
      { q: "Which company developed JavaScript?", options: ["Microsoft", "Netscape", "Google", "IBM"], answer: "Netscape" },
      { q: "What is the correct syntax for alert box?", options: ["msgBox()", "alert()", "alertBox()", "msg()"], answer: "alert()" },
      { q: "Which keyword is used to define a variable?", options: ["var", "let", "const", "All of these"], answer: "All of these" },
      { q: "JavaScript is a ___ language?", options: ["compiled", "interpreted", "machine", "binary"], answer: "interpreted" },
        { q: "Which keyword is used to declare a variable?", options: ["int", "var", "define", "const"], answer: "var" },
        { q: "What is the output of typeof 42?", options: ["int", "number", "numeric", "value"], answer: "number" },
        { q: "Which method is used to write to console?", options: ["log()", "console.log()", "print()", "write()"], answer: "console.log()" },
        { q: "Which symbol is used for comments?", options: ["//", "#", "<!--", "**"], answer: "//" },
        { q: "Which is used to define functions?", options: ["function", "def", "func", "method"], answer: "function" },
        { q: "JavaScript runs on the ___ side?", options: ["client", "server", "database", "frontend"], answer: "client" }
      // Add more...
    ],
    "Python": [
      { q: "Who developed Python?", options: ["Guido van Rossum", "Dennis Ritchie", "James Gosling", "Bjarne Stroustrup"], answer: "Guido van Rossum" },
      { q: "Which symbol is used for comments in Python?", options: ["//", "#", "<!--", "/*"], answer: "#" },
      { q: "What is output of 3 ** 2?", options: ["6", "9", "8", "None"], answer: "9" },
      // Add more...
    ],
    "Java": [
      { q: "Java is developed by?", options: ["Sun Microsystems", "Microsoft", "Apple", "Oracle"], answer: "Sun Microsystems" },
      { q: "What is JVM?", options: ["Java Virtual Machine", "Java Visual Model", "Java Volatile Method", "None"], answer: "Java Virtual Machine" },
      { q: "What keyword is used to inherit a class?", options: ["inherits", "extends", "implements", "instanceof"], answer: "extends" },

       { q: "Which company owns Java?", options: ["Oracle", "Microsoft", "IBM", "Sun"], answer: "Oracle" },
        { q: "Extension of Java files?", options: [".jav", ".java", ".jv", ".class"], answer: ".java" },
        { q: "Main method signature?", options: ["public static void main(String[] args)", "main()", "public main()", "start()"], answer: "public static void main(String[] args)" },
        { q: "Java is ___ typed language?", options: ["Loosely", "Strictly", "Dynamically", "Untyped"], answer: "Strictly" },
        { q: "Which is not OOP concept?", options: ["Encapsulation", "Inheritance", "Compilation", "Polymorphism"], answer: "Compilation" },
        { q: "Which keyword is used to inherit class?", options: ["extends", "inherits", "derive", "super"], answer: "extends" },
        { q: "Which loop exists in Java?", options: ["for", "while", "do-while", "all"], answer: "all" },
    ],
    "Basic Computer": [
      { q: "Which one is an input device?", options: ["Monitor", "Printer", "Keyboard", "Speaker"], answer: "Keyboard" },
      { q: "What is RAM?", options: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "None"], answer: "Random Access Memory" },
      { q: "Which of these is an input device?", options: ["Monitor", "Printer", "Keyboard", "Speaker"], answer: "Keyboard" },
        { q: "Which one is an output device?", options: ["Scanner", "Mouse", "Monitor", "Keyboard"], answer: "Monitor" },
        { q: "What is the full form of CPU?", options: ["Central Process Unit", "Central Processing Unit", "Computer Processing Unit", "Control Processing Unit"], answer: "Central Processing Unit" },
        { q: "Which device stores data permanently?", options: ["RAM", "ROM", "Hard Disk", "Cache"], answer: "Hard Disk" },
        { q: "Which key is used to delete?", options: ["Esc", "Del", "Alt", "Ctrl"], answer: "Del" },
        { q: "What is used to browse the internet?", options: ["Word", "Excel", "Browser", "Paint"], answer: "Browser" },
        { q: "Shortcut for paste?", options: ["Ctrl+X", "Ctrl+C", "Ctrl+V", "Ctrl+Z"], answer: "Ctrl+V" },
        { q: "Which one is a software?", options: ["Mouse", "Monitor", "Windows", "Keyboard"], answer: "Windows" }
    
    ]
  };
  
  const urlParams = new URLSearchParams(window.location.search);
  const subject = urlParams.get('subject');
  const subjectTitle = document.getElementById('subject-title');
  const quizContainer = document.getElementById('quiz');
  const submitButton = document.getElementById('submit');
  const resultDiv = document.getElementById('result');
  
  if (!subject || !questionsBySubject[subject]) {
    subjectTitle.innerText = "Subject not found!";
    quizContainer.innerHTML = "<p>Please select a valid subject from the homepage.</p>";
    submitButton.style.display = 'none';
  } else {
    subjectTitle.innerText = `${subject} Quiz`;
  
    const questions = questionsBySubject[subject];
    questions.forEach((item, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question-block';
      questionDiv.innerHTML = `
        <div class="question">${index + 1}. ${item.q}</div>
        <div class="options">
          ${item.options.map(opt => `
            <label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label>
          `).join('')}
        </div>
      `;
      quizContainer.appendChild(questionDiv);
    });
  
    submitButton.addEventListener('click', () => {
      let score = 0;
      questions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === item.answer) {
          score++;
        }
      });
      // Save result data to localStorage
const attemptedQuestions = questions.map((item, index) => {
  const selected = document.querySelector(`input[name="q${index}"]:checked`);
  return {
    question: item.q,
    selected: selected ? selected.value : null,
    correct: item.answer,
    isCorrect: selected && selected.value === item.answer
  };
});

const resultData = {
  subject,
  score,
  total: questions.length,
  attemptedQuestions
};

localStorage.setItem('quizResult', JSON.stringify(resultData));

// Redirect to result page
window.location.href = 'ex.html';

    });
  }
  function start() {
     window.location.href = "ex1.html";
  }
  