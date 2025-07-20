export interface CLICommand {
  command: string;
  description: string;
  execute: () => string;
}

export const cliCommands: CLICommand[] = [
  {
    command: 'whoami',
    description: 'Display user information',
    execute: () => `
╔═══════════════════════════════════════════════════════════════╗
║                        QUANTUM PROFILE                        ║
╠═══════════════════════════════════════════════════════════════╣
║ > Name: Sayman Lal                                            ║
║ > Alias: CodeChemist                                          ║
║ > Role: Developer, Author, Entrepreneur                       ║
║ > Work: AIALCHEMIST (CEO),TEAM VASILIADES (Lead)              ║
║ > Location: Jabalpur, Madhya Pradesh, India - 482001          ║
║ > Status: Building the my own verse of futuristic tech        ║
║ > Uptime: 24/7/365                                            ║
║ > Mode: QUANTUM_TERMINAL_ACTIVE                               ║
╚═══════════════════════════════════════════════════════════════╝`
  },
  {
    command: 'skills',
    description: 'List technical skills',
    execute: () => `
╔═══════════════════════════════════════════════════════════════╗
║                      QUANTUM SKILL MATRIX                    ║
╠═══════════════════════════════════════════════════════════════╣
║ 🧠 AI/ML:                                                    ║
║ ├─ TensorFlow      ████████████████████ 95%                 ║
║ ├─ PyTorch         ████████████████████ 90%                 ║
║ ├─ OpenAI GPT      ████████████████████ 88%                 ║
║ └─ Computer Vision ████████████████████ 85%                 ║
║                                                              ║
║ 🌐 Web3/Blockchain:                                          ║
║ ├─ Solidity        ████████████████████ 88%                 ║
║ ├─ Web3.js         ████████████████████ 85%                 ║
║ ├─ Ethereum        ████████████████████ 82%                 ║
║ └─ DeFi Protocols  ████████████████████ 80%                 ║
║                                                              ║
║ ⚡ Frontend:                                                  ║
║ ├─ React/Next.js   ████████████████████ 95%                 ║
║ ├─ TypeScript      ████████████████████ 90%                 ║
║ ├─ Tailwind CSS    ████████████████████ 88%                 ║
║ └─ Framer Motion   ████████████████████ 85%                 ║
║                                                              ║
║ ☁️ DevOps/Cloud:                                             ║
║ ├─ AWS             ████████████████████ 88%                 ║
║ ├─ Docker          ████████████████████ 85%                 ║
║ ├─ Kubernetes      ████████████████████ 78%                 ║
║ └─ Terraform       ████████████████████ 75%                 ║
╚═══════════════════════════════════════════════════════════════╝`
  },
  {
    command: 'projects',
    description: 'Show recent projects',
    execute: () => `
╔═══════════════════════════════════════════════════════════════╗
║                      QUANTUM PROJECTS                         ║
╠═══════════════════════════════════════════════════════════════╣
║ 🎨 ArtMart                                                    ║
║    ├─ Decentralized NFT marketplace for artists               ║
║    ├─ 8,000+ NFTs listed, 500+ creators onboarded             ║
║    └─ Tech: Solidity, IPFS, React, Tailwind, Polygon          ║
║                                                               ║
║ 🗳️ Votex                                                      ║
║    ├─ Transparent DAO voting protocol for communities         ║
║    ├─ 2,500+ votes processed on-chain                         ║
║    └─ Tech: Solidity, Hardhat, Next.js, Ethers.js             ║
║                                                               ║
║ 💻 Veyon                                                      ║
║    ├─ AI-enhanced devtool for collaborative coding            ║
║    ├─ Live code sync with GPT-powered suggestions             ║
║    └─ Tech: Node.js, WebSocket, GPT-4 API, Monaco Editor      ║
║                                                               ║
║ 🚀 AIALCHEMIST Platform                                       ║
║    ├─ AI dev democratization platform                         ║
║    ├─ 10,000+ developers onboarded                            ║
║    └─ Tech: Python, TensorFlow, React, AWS                    ║
╚═══════════════════════════════════════════════════════════════╝`

  },
  {
    command: 'contact',
    description: 'Display contact information',
    execute: () => `
╔═══════════════════════════════════════════════════════════════╗
║                    QUANTUM COMMUNICATION                      ║
╠═══════════════════════════════════════════════════════════════╣
║ 📧 Email: buisnesssayman@gmail.com                            ║
║ 🌐 Website: https://worksofsayman.vercel.app                  ║
║ 🐙 GitHub: github.com/worksofsayman                           ║
║ 💼 LinkedIn: linkedin.com/in/saymanlal                        ║
║ 🐦 Twitter: @worksofsayman                                    ║
║ 👨‍💻 Dev.to: dev.to/worksofsayman                               ║
║ ✍️ Medium: medium.com/@worksofsayman                           ║
║ 🏆 LeetCode: leetcode.com/workdofsayman                       ║
║ 🥇 HackerRank: hackerrank.com/worksofsayman                   ║ 
║ 🍳 CodeChef: codechef.com/users/worksofsayman                 ║
║                                                               ║
║ 🚀 Available for:                                             ║
║ ├─ AI/ML Consulting & Development                             ║
║ ├─ Web3/Blockchain Architecture                               ║
║ ├─ Smart Contract Auditing                                    ║
║ ├─ Technical Leadership & Mentoring                           ║
║ ├─ Startup Advisory & Investment                              ║
║ └─ Speaking Engagements & Workshops                           ║
╚═══════════════════════════════════════════════════════════════╝`
  },
  {
    command: 'ascii',
    description: 'Display ASCII art',
    execute: () => `
╔═══════════════════════════════════════════════════════════════╗
║                                                              ║
║   ██████╗ ██████╗ ██████╗ ███████╗ ██████╗██╗  ██╗███████╗   ║
║  ██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔════╝██║  ██║██╔════╝   ║
║  ██║     ██║   ██║██║  ██║█████╗  ██║     ███████║█████╗     ║
║  ██║     ██║   ██║██║  ██║██╔══╝  ██║     ██╔══██║██╔══╝     ║
║  ╚██████╗╚██████╔╝██████╔╝███████╗╚██████╗██║  ██║███████╗   ║
║   ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝   ║
║                                                              ║
║   ██████╗██╗  ██╗███████╗███╗   ███╗██╗███████╗████████╗     ║
║  ██╔════╝██║  ██║██╔════╝████╗ ████║██║██╔════╝╚══██╔══╝     ║
║  ██║     ███████║█████╗  ██╔████╔██║██║███████╗   ██║        ║
║  ██║     ██╔══██║██╔══╝  ██║╚██╔╝██║██║╚════██║   ██║        ║
║  ╚██████╗██║  ██║███████╗██║ ╚═╝ ██║██║███████║   ██║        ║
║   ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚═╝╚══════╝   ╚═╝        ║
║                                                              ║
║              "Building the Quantum Future"                  ║
║                                                              ║
╚═══════════════════════════════════════════════════════════════╝`
  },
  {
    command: 'stats',
    description: 'Show GitHub and platform statistics',
    execute: () => `
╔═══════════════════════════════════════════════════════════════╗
║                      QUANTUM STATISTICS                       ║
╠═══════════════════════════════════════════════════════════════╣
║ 🐙 GitHub:                                                    ║
║ ├─ Repositories: 127                                          ║
║ ├─ Followers: 2,847                                           ║
║ ├─ Contributions: 1,250+ (this year)                          ║
║ └─ Rank: Top 1% Developer                                     ║
║                                                               ║
║ 🏆 LeetCode:                                                  ║
║ ├─ Problems Solved: 450+                                      ║ 
║ ├─ Ranking: Top 5%                                            ║
║ └─ Contest Rating: 1,847                                      ║
║                                                               ║
║ 🥇 HackerRank:                                                ║
║ ├─ Badges: 15 Gold                                            ║
║ ├─ Rating: 5 Star                                             ║
║ └─ Domains: 8 Certified                                       ║
║                                                               ║
║ 🍳 CodeChef:                                                  ║
║ ├─ Rating: 2,156                                              ║
║ ├─ Stars: 5 Star                                              ║
║ └─ Contests: 42 Participated                                  ║
╚═══════════════════════════════════════════════════════════════╝`
  },
  {
    command: 'companies',
    description: 'Show company information',
    execute: () => `
╔═══════════════════════════════════════════════════════════════╗
║                     QUANTUM ENTERPRISES                       ║
╠═══════════════════════════════════════════════════════════════╣
║ 🚀 AIALCHEMIST                                                ║
║ ├─ Role: Founder & CEO                                        ║
║ ├─ Founded: April 2025                                        ║
║ ├─ Mission: Democratizing AI development                      ║
║ ├─ Users: 4,000+ students and developers                      ║
║ ├─ Funding: N/A                                               ║
║ └─ Website: https://aialchemist.vercel.app                    ║
║                                                               ║
║ 🔐 VASILIADES                                                 ║
║ ├─ Role: Co-Founder & Team Lead                               ║
║ ├─ Founded: December 2024                                     ║
║ ├─ Mission: Securing the rapidly changing future              ║
║ ├─ Audited: N/A                                               ║
║ ├─ Status: Winners & Smart workers                            ║
║ └─ Website: linkedin.com/showcase/teamvasiliadesaia/          ║
╚═══════════════════════════════════════════════════════════════╝`
  },
  {
    command: 'matrix',
    description: 'Toggle Matrix rain effect',
    execute: () => {
      // This will be handled by the CLI component
      return `
╔═══════════════════════════════════════════════════════════════╗
║                    MATRIX PROTOCOL ACTIVE                     ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████       ║
║  ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████       ║
║  ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████       ║
║                                                               ║
║              Matrix rain effect toggled!                      ║
║                                                               ║
║  ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████       ║
║  ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████       ║
║  ████ ████ ████ ████ ████ ████ ████ ████ ████ ████ ████       ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝`;
    }
  },
  {
    command: 'theme',
    description: 'Switch between Developer and Entrepreneur themes',
    execute: () => {
      // This will be handled by the CLI component
      return `
╔═══════════════════════════════════════════════════════════════╗
║                    QUANTUM THEME MATRIX                       ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  🧑‍💻 DEVELOPER MODE (Quantum Terminal)                         ║
║  ├─ Matrix rain effects                                       ║
║  ├─ Neon green terminal UI                                    ║
║  ├─ CRT flicker animations                                    ║
║  └─ Synthwave aesthetics                                      ║
║                                                               ║
║  💼 ENTREPRENEUR MODE (Elevated Startup)                      ║
║  ├─ Clean glassmorphism design                                ║
║  ├─ Soft gradients & blur effects                             ║
║  ├─ Professional color palette                                ║
║  └─ Modern business aesthetics                                ║
║                                                               ║
║              Theme successfully switched!                     ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝`;
    }
  },
  {
    command: 'clear',
    description: 'Clear the terminal',
    execute: () => {
      // This will be handled by the CLI component
      return '';
    }
  },
  {
    command: 'ls',
    description: 'List available sections',
    execute: () => `
╔═══════════════════════════════════════════════════════════════╗
║                    QUANTUM DIRECTORY                          ║
╠═══════════════════════════════════════════════════════════════╣
║ 📁 /home                    - Homepage & intro                ║
║ 📁 /about                   - Personal profile & story        ║
║ 📁 /skills                  - Technical expertise matrix      ║
║ 📁 /projects                - Portfolio showcase              ║
║ 📁 /timeline                - Career milestones               ║ 
║ 📁 /teams                   - AIALCHEMIST & VASILIADES        ║
║ 📁 /certificates            - Professional credentials        ║
║ 📁 /blog                    - Technical articles              ║
║ 📁 /contact                 - Communication channels          ║
║ 📁 /cli                     - Terminal playground             ║
║ 📁 /admin                   - Content management              ║
║                                                               ║
║ Use 'cd <directory>' to navigate                              ║
╚═══════════════════════════════════════════════════════════════╝`
  },
  {
    command: 'cd',
    description: 'Navigate to different sections',
    execute: () => `
╔═══════════════════════════════════════════════════════════════╗
║                    QUANTUM NAVIGATION                         ║
╠═══════════════════════════════════════════════════════════════╣
║ Usage: cd <directory>                                         ║
║                                                               ║
║ Available directories:                                        ║ 
║ ├─ home, about, skills, projects                              ║
║ ├─ timeline, teams, certificates                              ║
║ ├─ blog, contact, cli, admin                                  ║
║                                                               ║
║ Example: cd projects                                          ║
╚═══════════════════════════════════════════════════════════════╝`
  },
  {
    command: 'help',
    description: 'Show available commands',
    execute: () => `
╔═══════════════════════════════════════════════════════════════╗
║                    QUANTUM COMMAND MATRIX                     ║
╠═══════════════════════════════════════════════════════════════╣
║ 🔍 Information Commands:                                      ║
║ ├─ whoami       - Display user profile                        ║
║ ├─ skills       - Show technical expertise                    ║
║ ├─ projects     - List featured projects                      ║
║ ├─ stats        - GitHub & platform statistics                ║
║ ├─ companies    - Show AIALCHEMIST & VASILIADES info          ║
║ └─ contact      - Communication channels                      ║
║                                                               ║
║ 🎨 Interface Commands:                                        ║
║ ├─ matrix       - Toggle Matrix rain effect                   ║
║ ├─ theme        - Switch Developer/Entrepreneur mode          ║
║ ├─ ascii        - Display ASCII art                           ║
║ └─ clear        - Clear terminal screen                       ║
║                                                               ║
║ 🧭 Navigation Commands:                                       ║
║ ├─ ls           - List available sections                     ║ 
║ ├─ cd           - Navigate to sections                        ║
║ └─ help         - Show this command matrix                    ║
║                                                               ║
║ Type any command to execute. Welcome to the Quantum!          ║
╚═══════════════════════════════════════════════════════════════╝`
  }
];

export const getCommand = (cmd: string): CLICommand | undefined => {
  return cliCommands.find(command => command.command === cmd);
};