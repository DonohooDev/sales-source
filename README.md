# Sales Source LLC

[![Netlify Status](https://api.netlify.com/api/v1/badges/ff57c4a7-bb7f-4f45-b10c-a5ae103c78b9/deploy-status)](https://app.netlify.com/sites/salessource/deploys) [![Netlify Preview Status](https://api.netlify.com/api/v1/badges/fe95252b-254a-4fe1-afcb-f23501069509/deploy-status)](https://app.netlify.com/sites/salessource-preview/deploys)

Sales Source is a repository that contains code and resources for the landing page for the company. This application utilizes SvelteKit, Embla Carousel, and EmailJs to create a dynamic and interactive user experience.

## Developing

Once you've cloned the repository and installed the dependencies with `npm install`, you can start a development server by running the following command:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of the application, run the following command:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy the application, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

### Resources

#### Saos Example
- [Saos Example Repository](https://github.com/shiryel/saos/blob/master/demo_sveltekit/src/components/animations.svelte)

#### Embla Carousel Docs
- [Embla Carousel Documentation](https://www.embla-carousel.com/get-started/svelte/)

#### EmailJs
- [EmailJs](https://www.emailjs.com/)
- Account Email: example@salessource.com
- Integrated with ActiveCampaign Postmark for SMTP
