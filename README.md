# 🚀 Node.js JavaScript Demo

A modern web application that demonstrates JavaScript execution capabilities with both browser-based and Node.js examples. Perfect for learning, testing JavaScript snippets, or demonstrating code concepts.


## ✨ Features

- 🎯 **Interactive Code Execution**: Run JavaScript code directly in the browser with instant results
- 🔄 **Real-time Output**: See your code results immediately without page refreshes
- 🧹 **Clean Interface**: Simple, intuitive design for distraction-free coding
- 📱 **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- 🛡️ **Error Handling**: Graceful error display and input validation
- 📚 **Code Examples**: Pre-built examples showcasing JavaScript and Node.js concepts
- 🎨 **Syntax Highlighting**: Enhanced code readability (if implemented)

## 🏗️ Project Structure

```
nodejs-js-demo/
│
├── src/
│   ├── index.html              # Main HTML document
│   ├── styles/
│   │   └── main.css           # CSS styles and responsive design
│   └── scripts/
│       └── app.js             # JavaScript application logic
└── README.md                 # This file
```

## 🚀 Quick Start

### Option 1: Direct Browser Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/Niru-9/Nodejs-Demo
   cd Nodejs-Demo
   ```

2. **Open in browser**
   ```bash
   # Open src/index.html in your preferred browser
   open src/index.html  # macOS
   start src/index.html # Windows
   xdg-open src/index.html # Linux
   ```

### Option 2: Local Development Server

1. **Using Python** (recommended for local development)
   ```bash
   # Navigate to src directory
   cd src
   ```

2. **Using Node.js** (if you have Node.js installed)
   ```bash
   # Install a simple HTTP server
   npm install -g http-server
   
   # Navigate to src directory and start server
   cd src
   ```

3. **Using VS Code Live Server**
   - Install the "Live Server" extension
   - Right-click on `src/index.html`
   - Select "Open with Live Server"

## 🎮 How to Use

### Basic Usage
1. **Enter JavaScript Code**: Type or paste JavaScript code into the input area
2. **Execute Code**: Click the "Run Code" button or use the keyboard shortcut
3. **View Results**: See the output displayed in the results section
4. **Clear Output**: Use the "Clear" button to reset the output area

## 🛠️ Technologies Used

- **Frontend:**
  - HTML5 (Semantic markup)
  - CSS3 (Flexbox, Grid, Custom Properties)
  - Vanilla JavaScript (ES6+)

- **Development Tools:**
  - Git for version control
  - Modern browser APIs
  - Responsive design principles

## 📚 Learning Resources

This demo is perfect for:
- **JavaScript Beginners**: Learn basic syntax and concepts
- **Node.js Learners**: Understand JavaScript runtime concepts
- **Code Testing**: Quick prototyping and testing of JavaScript snippets
- **Teaching**: Demonstrate JavaScript concepts in educational settings

## 🌍 Browser Compatibility

| Browser | Version | Supported |
|---------|---------|-----------|
| Chrome  | 60+     | ✅        |
| Firefox | 55+     | ✅        |
| Safari  | 12+     | ✅        |
| Edge    | 79+     | ✅        |

## 🔧 Configuration

### Customizing the Interface

**Modify the theme** in `src/styles/main.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #64748b;
  --background-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

**Add custom examples** in `src/scripts/app.js`:
```javascript
const examples = [
  {
    title: "Your Custom Example",
    code: "console.log('Custom code here');"
  }
];
```

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/awesome-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes**
   ```bash
   git commit -m 'Add awesome feature'
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/awesome-feature
   ```
7. **Open a Pull Request**

### Development Guidelines

- Follow consistent code formatting
- Add comments for complex logic
- Test on multiple browsers
- Update documentation for new features
- Ensure responsive design compatibility

## 🐛 Known Issues

- Large code outputs may affect browser performance
- Some Node.js specific APIs won't work in browser environment
- File system operations are limited to browser security constraints

## 📈 Roadmap

- [ ] Add syntax highlighting for code input
- [ ] Implement code snippet saving functionality
- [ ] Add more built-in examples and tutorials
- [ ] Include performance timing for code execution
- [ ] Add export functionality for code and results
- [ ] Implement dark/light theme toggle
- [ ] Add keyboard shortcuts for common actions
- [ ] Include code formatting/beautification

## 📄 License
This project is open-source and available under the MIT License. Feel free to use, modify, and distribute for educational or personal purposes

```
MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Author

**Nirupam**
- 🐙 GitHub: https://github.com/Niru-9
- 📧 Email: ndkindia09@gmail.com

## 🙏 Acknowledgments

- Thanks to the JavaScript community for continuous innovation
- Inspired by online code editors and learning platforms
- Built with modern web development best practices
- Special thanks to contributors and users who provide feedback

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/your-username/nodejs-js-demo?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-username/nodejs-js-demo?style=social)
![GitHub issues](https://img.shields.io/github/issues/your-username/nodejs-js-demo)
![GitHub license](https://img.shields.io/github/license/your-username/nodejs-js-demo)

---

⭐ **If this project helped you, please consider giving it a star!**
