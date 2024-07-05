# MAIA: Medical AI Assistant on Internet Computer

![MAIA Logo](https://github.com/MAIA-Medical-AI-Assistant/maia_app/blob/master/logo.png)

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Flowchart](#flowchart)
5. [Getting Started](#getting-started)
6. [Usage](#usage)
7. [Roadmap](#roadmap)
8. [Contact](#contact)

## Introduction

MAIA (Medical AI Assistant) is an AI-powered medical diagnostic tool developed on the Internet Computer. Our aim is to leverage artificial intelligence to enhance medical diagnostics, provide reliable second opinions, and assist healthcare professionals in making their diagnostic processes more efficient and accurate.

MAIA aims to bridge the gap between AI technologies and practical medical applications, offering a user-friendly interface for both patients and healthcare providers.

## Features

MAIA currently offers the following key features:

1. **Brain CT Scan Analysis**: Detect glioma, meningioma, and pituitary tumors with high accuracy.
2. **Kidney CT Scan Analysis**: Identify cysts, stones, or tumors in kidney scans with precision.
3. **Lung CT Scan Analysis**: Check for various types of lung cancer and other pulmonary conditions.
4. **Skin Lesion Image Analysis**: Determine if moles are benign or malignant with high reliability.
5. **Chest X-Ray Analysis**: Diagnose various lung conditions from chest X-ray images.
6. **AI-Powered Q&A**: Get detailed information about the diagnosis using MAIA.

## Technology Stack

- **Frontend**: React.js with Ant Design UI framework
- **Backend**: Internet Computer (IC) canister smart contracts
- **AI Models**: ONNX (Open Neural Network Exchange) models
- **Authentication**: Internet Identity
- **Animation**: Framer Motion

## Flowchart
![MAIA Flowchart](https://github.com/MAIA-Medical-AI-Assistant/maia_app/blob/master/maia_flowchart.png)
## Getting Started

To get started with MAIA, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/MAIA-Medical-AI-Assistant/maia_app.git
    ```
2. Install dependencies:
    ```bash
    cd maia_app
    npm install
    ```
3. Set up the Internet Computer SDK (follow instructions on the DFINITY website).
4. Deploy the canisters:
    ```bash
    dfx start --clean --background
    dfx deploy
    ```
5. Start the development server:
    ```bash
    npm start
    ```

## Usage

1. Navigate to the MAIA web application.
2. Connect your Internet Identity.
3. Choose the type of medical image you want to analyze.
4. Upload the image.
5. View the AI-generated diagnosis and additional information.
6. Use the AI-powered Q&A feature for more details about your diagnosis.

## Roadmap

### Q1 2024: Base Model Deployments (Completed)
- Deploy brain CT scan model for tumor detection
- Implement kidney CT scan analysis for tumors, cysts and stones
- Launch lung CT scan model for lung cancer detection
- Enhance skin lesion detection for skin cancer
- Deploy chest X-ray analysis for various lung conditions
- Develop AI-powered Q&A for diagnosis information

### Q2 2024: Expanding Capabilities
- Implement bone health assessment
- Add blood test analysis
- Optimize AI models for better accuracy
- Add ultrasound scan analysis
- Improve skin lesion detection
- Start mobile UI enhancements for better accessibility

### Q3 2024: Segmentation and Detection
- Implement tumor segmentation in brain CT scans
- Add nodule detection and segmentation for lung CT scans
- Develop lesion boundary detection for skin images
- Introduce bone fracture localization in X-rays
- Integrate segmentation results into user interface for visual feedback

## Contact

- Website: [https://s4gzj-baaaa-aaaam-act7a-cai.icp0.io/](https://s4gzj-baaaa-aaaam-act7a-cai.icp0.io/)
- Email: contact.maia.healthcare@gmail.com
- Twitter: [@MAIA_ICP](https://twitter.com/MAIA_ICP)
- Forum: [DFINITY Forum Post](https://forum.dfinity.org/t/introducing-maia-medical-ai-assistant-on-internet-computer/32022)

For a video demonstration of MAIA, check out our [Demo Video](https://www.loom.com/share/cf622c2986ed4665917bd57f644da3f9?sid=1188141d-bd3f-4d4b-8861-de31a09461a5).

---

MAIA - Medical AI Assistant on the Internet Computer
