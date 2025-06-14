export const flashcardsData = [
    // Section: Plan and manage an Azure AI solution
    {
        front: "Plan & Manage: Service Selection Mastery",
        back: `<h3>1. Service Selection Mastery</h3>
        <p><strong>Briefing:</strong> This is about knowing the Azure AI toolbox inside and out. The exam will present scenarios, and you need to pick the <em>best</em> tool for the job.</p>
        <ul>
            <li><strong>Azure Cognitive Services:</strong> Pre-built, cloud-based AI services for common AI tasks (Vision, Speech, Language, Decision, OpenAI). Ideal for adding AI without extensive ML expertise.</li>
            <li><strong>Azure Machine Learning (Azure ML):</strong> Platform for building, training, deploying, and managing custom ML models. For data scientists needing control over model lifecycle.</li>
            <li><strong>Azure Cognitive Search:</strong> Cloud search service with built-in AI for rich search experiences, often integrating with Cognitive Services for "AI enrichment."</li>
            <li><strong>Azure AI Document Intelligence:</strong> Specializes in extracting data from documents (forms, invoices, receipts) using AI.</li>
            <li><strong>Azure AI Bot Service & Bot Framework:</strong> Tools for building, connecting, deploying, and managing intelligent bots.</li>
        </ul>
        <p><strong>Exam Tip:</strong> Be ready for scenario questions asking "Which Azure AI service should you use to..." followed by a specific task.</p>`
    },
    {
        front: "Plan & Manage: Architectural Design Principles",
        back: `<h3>2. Architectural Design Principles</h3>
        <p><strong>Briefing:</strong> This involves understanding how different Azure services fit together to create a complete, functional AI solution. It's about thinking holistically.</p>
        <ul>
            <li><strong>Typical AI Solution Flow:</strong> Data Ingestion/Storage &rarr; Data Preparation/Feature Engineering &rarr; Model Training/Development &rarr; Model Deployment/Inference &rarr; Application Integration &rarr; Monitoring & Management.</li>
            <li><strong>Design Considerations:</strong> Scalability, Reliability, Cost-Effectiveness, Security, Latency, Data Governance.</li>
        </ul>
        <p><strong>Exam Tip:</strong> Understand the sequence of operations and the common Azure services used at each stage of an AI solution lifecycle.</p>`
    },
    {
        front: "Plan & Manage: Responsible AI Integration",
        back: `<h3>3. Responsible AI Integration</h3>
        <p><strong>Briefing:</strong> Microsoft emphasizes Responsible AI. You need to know the principles and how to consider them during the planning and design phases to build ethical and trustworthy AI systems.</p>
        <ul>
            <li><strong>The Six Principles of Responsible AI:</strong>
                <ul>
                    <li><strong>Fairness:</strong> Avoid bias, plan for diverse training data.</li>
                    <li><strong>Reliability & Safety:</strong> Perform reliably, safely, consistently; robust testing, error handling.</li>
                    <li><strong>Privacy & Security:</strong> Secure and respect data privacy; encryption, access controls, data minimization.</li>
                    <li><strong>Inclusiveness:</strong> Empower everyone; design for accessibility.</li>
                    <li><strong>Transparency:</strong> Understandable systems; plan for explainability.</li>
                    <li><strong>Accountability:</strong> People accountable for AI systems; human oversight.</li>
                </ul>
            </li>
        </ul>
        <p><strong>Exam Tip:</strong> Be able to identify scenarios where a Responsible AI principle is being violated or upheld.</p>`
    },
    {
        front: "Plan & Manage: Resource Provisioning & Configuration",
        back: `<h3>4. Resource Provisioning and Configuration</h3>
        <p><strong>Briefing:</strong> This covers the practical steps of setting up your AI services in Azure.</p>
        <ul>
            <li><strong>Creating Resources:</strong> Azure Portal, Azure CLI, Azure PowerShell, ARM Templates/Bicep (IaC).</li>
            <li><strong>Key Management:</strong> API keys for authentication; use Azure Key Vault for secure storage.</li>
            <li><strong>Endpoints:</strong> Unique URL for each service to send requests.</li>
            <li><strong>Pricing Tiers:</strong> Understand different tiers impact cost and capabilities.</li>
            <li><strong>Regions:</strong> Deploy in appropriate Azure regions for latency, data residency, compliance.</li>
        </ul>
        <p><strong>Exam Tip:</strong> Know the different methods for provisioning resources and the importance of securely managing API keys and endpoints.</p>`
    },
    {
        front: "Plan & Manage: Security Best Practices",
        back: `<h3>5. Security Best Practices</h3>
        <p><strong>Briefing:</strong> Protecting your AI solutions, data, and access is critical.</p>
        <ul>
            <li><strong>Azure Key Vault:</strong> Securely store and manage secrets (API keys, connection strings).</li>
            <li><strong>Azure RBAC (Role-Based Access Control):</strong> Granularly manage permissions (least privilege).</li>
            <li><strong>Network Security:</strong> Virtual Networks (VNets), Private Endpoints (bypassing public internet), Firewalls, Service Endpoints.</li>
            <li><strong>Data Encryption:</strong> At rest (Microsoft-managed or customer-managed keys) and in transit (TLS/SSL).</li>
        </ul>
        <p><strong>Exam Tip:</strong> Expect questions on how to secure API keys, restrict network access, and manage user permissions. Private Endpoints are common.</p>`
    },
    {
        front: "Plan & Manage: Monitoring & Maintenance",
        back: `<h3>6. Monitoring and Maintenance</h3>
        <p><strong>Briefing:</strong> Once your AI solution is deployed, you need to ensure it's running smoothly, performing as expected, and identifying issues proactively.</p>
        <ul>
            <li><strong>Azure Monitor:</strong> Collects and analyzes telemetry (metrics, logs). Features: Metrics, Logs, Alerts.</li>
            <li><strong>Application Insights:</strong> APM service for monitoring live web applications (performance, usage, custom events).</li>
            <li><strong>Diagnostic Settings:</strong> Enable on services to send logs/metrics to Log Analytics Workspace, storage, or event hubs.</li>
            <li><strong>Auditing:</strong> Track changes and activities using Azure Activity Log.</li>
            <li><strong>Model Performance Monitoring:</strong> Track accuracy, drift, bias over time (Azure ML tools).</li>
        </ul>
        <p><strong>Exam Tip:</strong> Understand how to use Azure Monitor and Application Insights to track health and performance, and how to set up alerts.</p>`
    },
    {
        front: "Plan & Manage: Deployment Strategies (Containers & CI/CD)",
        back: `<h3>7. Deployment Strategies (especially Containers & CI/CD)</h3>
        <p><strong>Briefing:</strong> How do you get your AI models and applications from development to production efficiently and reliably?</p>
        <ul>
            <li><strong>Containerization (Docker):</strong> Package code, dependencies, config into a portable unit. Benefits: consistency, simplified deployment, isolation.</li>
            <li><strong>Azure Services for Containers:</strong> Azure Container Instances (ACI), Azure Kubernetes Service (AKS), Azure App Service (for Containers).</li>
            <li><strong>CI/CD (Continuous Integration/Continuous Delivery):</strong> Automating build, test, and deployment. Tools: Azure DevOps, GitHub Actions.</li>
            <li><strong>Benefit for AI:</strong> Ensures consistent, automated deployment of model updates and application code.</li>
        </ul>
        <p><strong>Exam Tip:</strong> Understand why containers are beneficial for AI deployments and how CI/CD automates the process.</p>`
    },

    // Section: Implement generative AI solutions
    {
        front: "Generative AI: Understanding & Azure OpenAI Service",
        back: `<h3>1. Understanding Generative AI and Azure OpenAI Service</h3>
        <p><strong>Briefing:</strong> This is the core of the section. You need to grasp what generative AI is and how Azure OpenAI Service provides access to powerful models.</p>
        <ul>
            <li><strong>Generative AI Concepts:</strong> Models generating new, original content (text, images, code). LLMs are a type of generative AI.</li>
            <li><strong>Azure OpenAI Service:</strong> Provides REST API access to OpenAI models (GPT-3.5, GPT-4, Embeddings, DALL-E 2) with Azure's security, compliance, and enterprise features.</li>
            <li><strong>Key Differentiators from Public OpenAI:</strong> Azure Security (VNet, managed identities), Responsible AI (content filtering, abuse monitoring), Scalability, Data Privacy (your data not used for retraining).</li>
        </ul>
        <p><strong>Exam Tip:</strong> Understand the core capabilities of generative AI and why Azure OpenAI Service is preferred in enterprise.</p>`
    },
    {
        front: "Generative AI: Provisioning & Deploying Azure OpenAI",
        back: `<h3>2. Provisioning and Deploying Azure OpenAI Resources</h3>
        <p><strong>Briefing:</strong> You need to know the practical steps to get started with Azure OpenAI Service.</p>
        <ul>
            <li><strong>Resource Creation:</strong> Create an Azure OpenAI Service resource (requires access application).</li>
            <li><strong>Model Deployment:</strong> Deploy specific models (e.g., gpt-35-turbo) to an endpoint within your resource. Each deployment has a unique name.</li>
            <li><strong>Authentication:</strong> Access via API keys and endpoint URL. Use Azure Key Vault and Managed Identities for security.</li>
        </ul>
        <p><strong>Exam Tip:</strong> Be familiar with creating a resource and deploying a model. Understand you deploy <em>specific models</em> to <em>specific endpoints</em>.</p>`
    },
    {
        front: "Generative AI: Prompt Engineering",
        back: `<h3>3. Prompt Engineering</h3>
        <p><strong>Briefing:</strong> This is the art and science of crafting effective inputs (prompts) to guide generative AI models to produce desired outputs.</p>
        <ul>
            <li><strong>Prompt Structure:</strong> Instruction, Context, Input Data, Output Format.</li>
            <li><strong>Prompting Techniques:</strong>
                <ul>
                    <li><strong>Zero-shot:</strong> No examples.</li>
                    <li><strong>Few-shot:</strong> A few examples within the prompt.</li>
                    <li><strong>Chain-of-Thought:</strong> Encourage step-by-step reasoning.</li>
                    <li><strong>Role-playing:</strong> Assign a persona.</li>
                    <li><strong>Delimiters:</strong> Clearly separate parts of the prompt.</li>
                </ul>
            </li>
            <li><strong>Iterative Prompting:</strong> Refine prompts based on model outputs.</li>
        </ul>
        <p><strong>Exam Tip:</strong> Understand different prompting techniques and when to apply them. Identify good prompts for scenarios.</p>`
    },
    {
        front: "Generative AI: Integrating Solutions",
        back: `<h3>4. Integrating Generative AI Solutions</h3>
        <p><strong>Briefing:</strong> How do you incorporate these models into your applications?</p>
        <ul>
            <li><strong>REST APIs and SDKs:</strong> Interact with deployed models.</li>
            <li><strong>Application Integration Patterns:</strong>
                <ul>
                    <li>Chatbots/Conversational AI.</li>
                    <li>Content Generation.</li>
                    <li>Semantic Search/Retrieval Augmented Generation (RAG): Combine LLMs with external knowledge bases (e.g., Azure Cognitive Search) for accurate answers.</li>
                    <li>Code Generation/Assistance.</li>
                </ul>
            </li>
            <li><strong>Streaming:</strong> Stream responses for real-time applications.</li>
        </ul>
        <p><strong>Exam Tip:</strong> Know how to programmatically interact with Azure OpenAI models and understand common integration patterns like RAG.</p>`
    },
    {
        front: "Generative AI: Responsible AI",
        back: `<h3>5. Responsible AI for Generative AI</h3>
        <p><strong>Briefing:</strong> This is paramount. Generative AI models can produce harmful, biased, or inappropriate content.</p>
        <ul>
            <li><strong>Content Filtering:</strong> Azure OpenAI has built-in filters for harmful content (prompts and completions). Configurable strictness.</li>
            <li><strong>Abuse Monitoring:</strong> Microsoft monitors usage for potential abuse.</li>
            <li><strong>Data Privacy:</strong> Data submitted to Azure OpenAI is <em>not</em> used to train or improve underlying models.</li>
            <li><strong>Mitigation Strategies:</strong> Prompt Engineering, Human Review, Guardrails, Transparency, Bias Mitigation.</li>
        </ul>
        <p><strong>Exam Tip:</strong> High-priority area. Understand built-in filtering/monitoring and user-side mitigation strategies.</p>`
    },
    {
        front: "Generative AI: Fine-tuning & Custom Data",
        back: `<h3>6. Fine-tuning and Custom Data (Advanced)</h3>
        <p><strong>Briefing:</strong> While prompt engineering is often sufficient, some scenarios require customizing a model with your own data.</p>
        <ul>
            <li><strong>Fine-tuning:</strong> Adapting a pre-trained model for specific tasks/styles by further training on a smaller, high-quality dataset. Use cases: niche topics, specific jargon.</li>
            <li><strong>Retrieval Augmented Generation (RAG):</strong> Alternative to fine-tuning for knowledge. Retrieve relevant info from external knowledge base (e.g., Azure Cognitive Search) and feed as context to LLM.</li>
            <li><strong>Benefits of RAG:</strong> Up-to-date info, reduces hallucinations, often more cost-effective than fine-tuning for knowledge.</li>
        </ul>
        <p><strong>Exam Tip:</strong> Understand the difference between fine-tuning and RAG, and when to choose one over the other. RAG is generally preferred for new, dynamic knowledge.</p>`
    },

    // Section: Implement an agentic solution
    {
        front: "Agentic Solutions: Understanding AI Agents",
        back: `<h3>1. Understanding AI Agents and Agentic Architectures</h3>
        <p><strong>Briefing:</strong> Grasping the core concept of an AI agent and its fundamental components is key.</p>
        <ul>
            <li><strong>What is an AI Agent?</strong> Autonomous entity that perceives, decides, and acts to achieve goals. Can break down tasks, use tools, maintain memory.</li>
            <li><strong>Core Components:</strong>
                <ul>
                    <li><strong>LLM as "Brain":</strong> Reasoning engine (e.g., GPT-4).</li>
                    <li><strong>Tools/Functions:</strong> External capabilities (APIs, databases, other AI services).</li>
                    <li><strong>Memory:</strong> Short-term (context window) and Long-term (persistent storage, e.g., vector databases).</li>
                    <li><strong>Planning/Reasoning Module:</strong> Decompose, Sequence, Reflect/Self-Correction.</li>
                    <li><strong>Orchestration Layer:</strong> Manages flow, connects components (e.g., Semantic Kernel, LangChain).</li>
                </ul>
            </li>
        </ul>
        <p><strong>Exam Tip:</strong> Understand that an agent is more than just an LLM; it's an LLM <em>plus</em> tools, memory, and a planning mechanism.</p>`
    },
    {
        front: "Agentic Solutions: Designing Agentic Solutions",
        back: `<h3>2. Designing Agentic Solutions</h3>
        <p><strong>Briefing:</strong> This involves thinking about how to structure a problem for an agent to solve.</p>
        <ul>
            <li><strong>Goal Definition:</strong> Clearly define the agent's objective.</li>
            <li><strong>Tool Selection and Definition:</strong> Identify external systems, define tools as functions/APIs with clear descriptions and schemas. Examples: weather API, database query, other Cognitive Services.</li>
            <li><strong>Memory Strategy:</strong> Decide what information needs to be remembered (short-term vs. long-term).</li>
            <li><strong>Prompting for Agent Behavior:</strong> System prompt defines agent's role, tools, and how to use them, guiding LLM to output structured tool calls.</li>
        </ul>
        <p><strong>Exam Tip:</strong> Be able to identify appropriate tools for a given agent task and understand how memory plays a role.</p>`
    },
    {
        front: "Agentic Solutions: Implementing on Azure",
        back: `<h3>3. Implementing Agentic Solutions on Azure</h3>
        <p><strong>Briefing:</strong> How do you build these architectures using Azure services?</p>
        <ul>
            <li><strong>LLM Integration:</strong> Azure OpenAI Service (GPT-4) with \`function calling\` capability.</li>
            <li><strong>Tool Implementation:</strong> Azure Functions (serverless APIs), Azure Logic Apps, other Azure Cognitive Services, Azure Data Services.</li>
            <li><strong>Memory Implementation:</strong> Azure Cognitive Search (knowledge base, vector search), Azure Cosmos DB, dedicated vector databases.</li>
            <li><strong>Orchestration Frameworks:</strong> Understand the role of Semantic Kernel or LangChain in simplifying development.</li>
        </ul>
        <p><strong>Exam Tip:</strong> Focus on how Azure services (Azure OpenAI, Azure Functions, Azure Cognitive Search) are used to build agent components.</p>`
    },
    {
        front: "Agentic Solutions: Responsible AI",
        back: `<h3>4. Responsible AI Considerations for Agents</h3>
        <p><strong>Briefing:</strong> Agentic solutions introduce new ethical and safety challenges due to their autonomy and ability to take actions.</p>
        <ul>
            <li><strong>Unintended Actions/Side Effects:</strong> Mitigate with clear tool limits, validation, human-in-the-loop.</li>
            <li><strong>Safety and Guardrails:</strong> Ensure agent operates within boundaries. Leverage Azure OpenAI content filtering, application-level checks.</li>
            <li><strong>Transparency and Explainability:</strong> Log agent's thought process, provide explanations.</li>
            <li><strong>Bias Amplification:</strong> Monitor for bias, curate data/tools.</li>
            <li><strong>Human Oversight and Control:</strong> Design for human review, allow override/stop.</li>
        </ul>
        <p><strong>Exam Tip:</strong> Be prepared to discuss unique Responsible AI challenges and mitigation strategies for agentic solutions.</p>`
    },

    // Section: Implement computer vision solutions
    {
        front: "Computer Vision: Understanding Azure AI Vision",
        back: `<h3>1. Understanding Azure AI Vision</h3>
        <p><strong>Briefing:</strong> Azure AI Vision is a comprehensive service for analyzing images and extracting information.</p>
        <ul>
            <li><strong>Core Capabilities:</strong>
                <ul>
                    <li><strong>Image Analysis (4.0):</strong> Captioning, Object Detection, Tagging, People Detection, Smart Cropping, Background Removal.</li>
                    <li><strong>OCR / Read API:</strong> Extracts printed/handwritten text from images/documents.</li>
                    <li><strong>Spatial Analysis:</strong> Processes video streams for people, movements, interactions.</li>
                </ul>
            </li>
        </ul>
        <p><strong>Exam Tip:</strong> Differentiate between analysis capabilities. Know when to use general image analysis vs. specialized services.</p>`
    },
    {
        front: "Computer Vision: Custom Vision Solutions",
        back: `<h3>2. Implementing Custom Vision Solutions with Azure AI Custom Vision</h3>
        <p><strong>Briefing:</strong> Train models for specific, domain-specific objects or classifications without deep ML expertise.</p>
        <ul>
            <li><strong>Purpose:</strong>
                <ul>
                    <li><strong>Image Classification:</strong> Categorize an entire image.</li>
                    <li><strong>Object Detection:</strong> Identify and locate specific objects with bounding boxes.</li>
                </ul>
            </li>
            <li><strong>Training Process:</strong> Upload Images &rarr; Tag Images &rarr; Train Model &rarr; Evaluate Performance &rarr; Iterate.</li>
            <li><strong>Deployment:</strong> Cloud Endpoint or Export for Edge Devices (ONNX, TensorFlow, Docker).</li>
        </ul>
        <p><strong>Exam Tip:</strong> Understand the workflow for training a custom vision model. Know the difference between classification and detection, and when to use each. Be aware of edge deployment.</p>`
    },
    {
        front: "Computer Vision: Document Intelligence",
        back: `<h3>3. Extracting Information from Documents with Azure AI Document Intelligence</h3>
        <p><strong>Briefing:</strong> Specialized computer vision service for extracting structured data from documents.</p>
        <ul>
            <li><strong>Purpose:</strong> Automate data extraction from forms, invoices, receipts, IDs, etc.</li>
            <li><strong>Capabilities:</strong>
                <ul>
                    <li><strong>Pre-built Models:</strong> For common document types (invoices, receipts, IDs).</li>
                    <li><strong>Custom Models:</strong>
                        <ul>
                            <li><strong>Custom Template Models:</strong> For consistent layouts (min 5 samples).</li>
                            <li><strong>Custom Neural Models:</strong> For varying layouts (min 50 samples), more robust.</li>
                        </ul>
                    </li>
                    <li><strong>Layout Model:</strong> Extracts text, selection marks, tables, structure.</li>
                    <li><strong>Key-Value Pairs, Tables, Selection Marks.</strong></li>
                </ul>
            </li>
        </ul>
        <p><strong>Exam Tip:</strong> Know the difference between pre-built, custom template, and custom neural models, and when to use each. Document Intelligence is for <em>documents</em>.</p>`
    },
    {
        front: "Computer Vision: Working with Faces",
        back: `<h3>4. Working with Faces using Azure Face</h3>
        <p><strong>Briefing:</strong> Provides AI algorithms for detecting, recognizing, and analyzing human faces.</p>
        <ul>
            <li><strong>Capabilities:</strong> Face Detection, Face Analysis (age, gender, emotion), Face Verification (same person), Face Identification (match against known individuals), Similar Face Search.</li>
        </ul>
        <p><strong>Exam Tip:</strong> Be aware of Face service capabilities. Crucially, understand the <strong>Responsible AI implications</strong> of facial recognition.</p>`
    },
    {
        front: "Computer Vision: Responsible AI",
        back: `<h3>5. Responsible AI for Computer Vision</h3>
        <p><strong>Briefing:</strong> Implementing computer vision solutions requires careful consideration of ethical implications.</p>
        <ul>
            <li><strong>Bias:</strong> Data bias can lead to unfair performance (e.g., facial recognition accuracy). Mitigation: diverse data, monitor performance across groups.</li>
            <li><strong>Privacy:</strong> Processing sensitive data (faces, biometrics). Mitigation: anonymize, strict access controls, comply with regulations.</li>
            <li><strong>Fairness:</strong> Ensure equitable outcomes for all users.</li>
            <li><strong>Transparency:</strong> Understand and communicate model limitations.</li>
            <li><strong>Safety and Security:</strong> Prevent misuse. Adhere to Microsoft's Responsible AI principles.</li>
            <li><strong>Content Safety:</strong> Ensure generated/analyzed content is appropriate (use Azure AI Content Safety).</li>
        </ul>
        <p><strong>Exam Tip:</strong> High-priority area. Be prepared for scenario questions on ethical dilemmas and applying Responsible AI principles.</p>`
    },

    // Section: Implement natural language processing solutions
    {
        front: "NLP: Understanding Azure AI Language",
        back: `<h3>1. Understanding Azure AI Language</h3>
        <p><strong>Briefing:</strong> Primary service for text-based NLP tasks, offering pre-built and customizable models.</p>
        <ul>
            <li><strong>Pre-built Capabilities:</strong> Sentiment Analysis, Key Phrase Extraction, Named Entity Recognition (NER), Language Detection, Text Summarization, Question Answering, Healthcare NLP, PII Detection.</li>
            <li><strong>Custom Capabilities (requires training):</strong>
                <ul>
                    <li><strong>Custom Text Classification:</strong> Categorize text into custom classes.</li>
                    <li><strong>Custom Named Entity Recognition (Custom NER):</strong> Identify domain-specific entities.</li>
                    <li><strong>Conversational Language Understanding (CLU):</strong> Extracts intents and entities for conversational AI.</li>
                </ul>
            </li>
        </ul>
        <p><strong>Exam Tip:</strong> Differentiate between pre-built and custom features. Know when to use CLU for conversational scenarios.</p>`
    },
    {
        front: "NLP: Implementing Speech Solutions",
        back: `<h3>2. Implementing Speech Solutions with Azure AI Speech</h3>
        <p><strong>Briefing:</strong> Provides capabilities for converting spoken language to text and vice-versa.</p>
        <ul>
            <li><strong>Core Capabilities:</strong>
                <ul>
                    <li><strong>Speech-to-Text (STT):</strong> Converts audio to text (real-time, batch, diarization).</li>
                    <li><strong>Text-to-Speech (TTS):</strong> Converts text to natural-sounding speech (neural voices, SSML control).</li>
                </ul>
            </li>
            <li><strong>Customization:</strong>
                <ul>
                    <li><strong>Custom Speech:</strong> Improve STT accuracy for specific vocabulary/environments.</li>
                    <li><strong>Custom Voice:</strong> Create unique synthetic voices.</li>
                </ul>
            </li>
        </ul>
        <p><strong>Exam Tip:</strong> Understand STT vs. TTS. Know when to use custom speech models.</p>`
    },
    {
        front: "NLP: Machine Translation",
        back: `<h3>3. Machine Translation with Azure AI Translator</h3>
        <p><strong>Briefing:</strong> Cloud-based machine translation service.</p>
        <ul>
            <li><strong>Core Capabilities:</strong> Translates text between 100+ languages, supports document translation, auto language detection.</li>
            <li><strong>Customization:</strong>
                <ul>
                    <li><strong>Custom Translator:</strong> Build custom translation models with your own parallel data for domain-specific terminology.</li>
                </ul>
            </li>
        </ul>
        <p><strong>Exam Tip:</strong> Recognize Translator as the go-to service for language translation.</p>`
    },
    {
        front: "NLP: Conversational AI",
        back: `<h3>4. Conversational AI with Azure AI Bot Service and Bot Framework</h3>
        <p><strong>Briefing:</strong> Crucial for building conversational AI solutions that heavily rely on NLP services.</p>
        <ul>
            <li><strong>Azure AI Bot Service:</strong> Managed service for hosting and connecting bots to channels.</li>
            <li><strong>Bot Framework SDK:</strong> For developing bots.</li>
            <li><strong>Integration with NLP:</strong> Bots integrate with CLU, Question Answering, Azure AI Speech, Azure OpenAI Service.</li>
        </ul>
        <p><strong>Exam Tip:</strong> Understand that Bot Service provides the <em>platform</em>, while NLP services provide the <em>intelligence</em>.</p>`
    },
    {
        front: "NLP: Knowledge Mining (Cognitive Search)",
        back: `<h3>5. Knowledge Mining with Azure Cognitive Search (NLP Context)</h3>
        <p><strong>Briefing:</strong> Remember Azure Cognitive Search's role in NLP, especially for knowledge mining.</p>
        <ul>
            <li><strong>AI Enrichment:</strong> Integrates with Azure AI Language (and Vision) to extract insights from unstructured text during indexing (e.g., key phrases, entities, sentiment).</li>
            <li><strong>Semantic Search:</strong> Improves search relevance by understanding the <em>meaning</em> of queries and content.</li>
        </ul>
        <p><strong>Exam Tip:</strong> Remember Cognitive Search's ability to use NLP services to enrich data for better search experiences.</p>`
    },
    {
        front: "NLP: Responsible AI",
        back: `<h3>6. Responsible AI for Natural Language Processing</h3>
        <p><strong>Briefing:</strong> NLP models can exhibit biases and generate harmful content. Responsible AI is critical.</p>
        <ul>
            <li><strong>Bias:</strong> Training data bias can lead to unfair/discriminatory outputs. Mitigation: diverse data, bias detection.</li>
            <li><strong>Fairness:</strong> Ensure equitable outcomes.</li>
            <li><strong>Privacy:</strong> NLP processes sensitive text. Mitigation: PII detection/redaction, anonymization, compliance.</li>
            <li><strong>Safety:</strong> Prevent harmful content. Mitigation: Azure AI Content Safety, content filtering, usage policies.</li>
            <li><strong>Transparency/Explainability:</strong> Understand model decisions.</li>
            <li><strong>Hallucinations:</strong> Generative models can produce incorrect info. Mitigation: RAG, disclaimers.</li>
        </ul>
        <p><strong>Exam Tip:</strong> High-priority area. Be prepared for scenario questions on bias, privacy, and safety in NLP.</p>`
    },

    // Section: Implement knowledge mining and information extraction solutions
    {
        front: "Knowledge Mining: Understanding",
        back: `<h3>1. Understanding Knowledge Mining</h3>
        <p><strong>Briefing:</strong> Transforming raw, unstructured data into searchable, navigable, and actionable knowledge.</p>
        <ul>
            <li><strong>Purpose:</strong> Unlock value from vast amounts of unstructured/semi-structured data (PDFs, images, emails).</li>
            <li><strong>Key Goals:</strong> Information Extraction, Content Understanding, Search Enhancement, Automation.</li>
            <li><strong>Core Concept:</strong> Take raw data, apply AI to enrich it, then index for powerful search/analysis.</li>
        </ul>
        <p><strong>Exam Tip:</strong> Think of knowledge mining as turning "dark data" into "light data."</p>`
    },
    {
        front: "Knowledge Mining: Azure Cognitive Search Hub",
        back: `<h3>2. Azure Cognitive Search as the Knowledge Mining Hub</h3>
        <p><strong>Briefing:</strong> The central service for implementing knowledge mining solutions on Azure.</p>
        <ul>
            <li><strong>Key Components:</strong>
                <ul>
                    <li><strong>Data Source:</strong> Where raw data resides (Blob Storage, SQL, etc.).</li>
                    <li><strong>Indexer:</strong> Crawls data, passes to enrichment pipeline.</li>
                    <li><strong>Skillset (AI Enrichment Pipeline):</strong> Collection of AI skills to process and enrich content.</li>
                    <li><strong>Index:</strong> Searchable repository for enriched, structured data.</li>
                    <li><strong>Search Client Application:</strong> Queries the index.</li>
                </ul>
            </li>
        </ul>
        <p><strong>Exam Tip:</strong> Understand the flow: Data Source &rarr; Indexer &rarr; Skillset (AI Enrichments) &rarr; Index &rarr; Search Application.</p>`
    },
    {
        front: "Knowledge Mining: AI Enrichments (Skillsets)",
        back: `<h3>3. AI Enrichments (Skillsets)</h3>
        <p><strong>Briefing:</strong> Collections of AI "skills" that perform specific tasks to extract and transform information.</p>
        <ul>
            <li><strong>Types of Skills:</strong>
                <ul>
                    <li><strong>Built-in Skills (Cognitive Skills):</strong> Pre-trained AI models from Cognitive Services.
                        <ul>
                            <li><strong>Vision Skills:</strong> OCR, Image Analysis, Face Detection.</li>
                            <li><strong>Language Skills:</strong> Entity Recognition, Key Phrase Extraction, Sentiment Analysis, Language Detection, Text Translation, Text Split.</li>
                            <li><strong>Document Intelligence Skills:</strong> Extract structured data from forms.</li>
                        </ul>
                    </li>
                    <li><strong>Custom Skills:</strong> Implement as Azure Function/web API for specific needs (e.g., custom ML model, third-party API).</li>
                </ul>
            </li>
            <li><strong>Skillset Flow:</strong> Skills are chained; output of one is input for another.</li>
        </ul>
        <p><strong>Exam Tip:</strong> Identify appropriate built-in skills. Understand when a custom skill is necessary.</p>`
    },
    {
        front: "Knowledge Mining: Information Extraction Techniques",
        back: `<h3>4. Information Extraction Techniques</h3>
        <p><strong>Briefing:</strong> The core of knowledge mining is extracting meaningful information.</p>
        <ul>
            <li><strong>Techniques:</strong> Entity Extraction, Key Phrase Extraction, Relationship Extraction, Structured Data from Unstructured (using Document Intelligence).</li>
            <li><strong>Semantic Search:</strong> Cognitive Search can understand query meaning, providing more relevant results (uses embeddings/vector search).</li>
        </ul>
        <p><strong>Exam Tip:</strong> Focus on how different skills combine to extract various types of information.</p>`
    },
    {
        front: "Knowledge Mining: Responsible AI",
        back: `<h3>5. Responsible AI for Knowledge Mining</h3>
        <p><strong>Briefing:</strong> Knowledge mining deals with large volumes of data, which can contain biases or sensitive information.</p>
        <ul>
            <li><strong>Bias in Data:</strong> Can perpetuate/amplify biases from source data. Mitigation: aware of source, monitor extracted info for bias.</li>
            <li><strong>Privacy and Confidentiality:</strong> Processes sensitive info. Mitigation: strong access controls, PII detection/redaction, compliance.</li>
            <li><strong>Transparency and Explainability:</strong> Challenging to understand why info was extracted. Mitigation: provide context, highlight source.</li>
            <li><strong>Security:</strong> Protecting data during ingestion, enrichment, storage. Mitigation: secure connections, encryption, RBAC.</li>
        </ul>
        <p><strong>Exam Tip:</strong> Be prepared for scenarios addressing ethical concerns related to data privacy, bias, and responsible use of extracted information.</p>`
    }
];
