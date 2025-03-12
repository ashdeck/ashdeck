# About Us
Ashdeck is an open-source productivity app that blocks distractions and enhances focus. It transforms your browser into a personalized dashboard to help you stay calm, track progress, set goals, and build efficient work habits—ultimately boosting productivity and control.

# React + TypeScript + Vite

## Introduction

### How to run

1. ```npm install```

2. ```npm run dev```


Please try to study the code structure for easy collaboration.
I included abstractions to mimic a Next.js file router by making use of generouted.

If you need to read on generouted, please visit the [documentation](https://github.com/oedotme/generouted)

I also included ready made components that are easy to use e.g:

- CustomButton: Button component
- FormInput: Input component for basic text. works well with React-hook-forms

etc.

## Packages:
- Axios
- Prettier
- React-hook-forms
- Icon -  IconSax
- React hot toast
- Zustand (Pleaseeee let's consider it.. it's very simple to use, check out the store folder)
- Tanstack Query

## Custom Wrappers/Abstractions
- Custom Router (Wrapper around react-router-dom), the router is already setup to work with generouted. <br>Folder: ```commons/router```
  <br> Usage:
  ```jsx
  import { useRouter } from '@router';
  // You can import eevry thing importable from react-router-dom from "@router"
  
  const router = useRouter();
  
  router.push('/users');
  router.replace('/settings');
  ```
- API Object (Wrapper around Axios) <br>File: ```commons/utils/axiosProvider.ts```
  <br>Usage:
  ```jsx
  import {api} from '@utils/axiosProvider';
  api.get('/users').then((res) => console.log(res));
  api.post('/users', {name:"William"}).then((res) => console.log(res));
  ```





