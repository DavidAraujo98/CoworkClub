<template>
  <div class="spaces-container">
    <header-logged rootClassName="header-logged-root-class-name"></header-logged>
    <app-toolbar rootClassName="toolbar-root-class-name"></app-toolbar>
    <div class="spaces-container1">
      <div class="spaces-container2">
        <space-card
          price="30 €/day"
          title="Aveiro Hub"
          rating="4.5/5"
          image_src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxvZmZpY2V8ZW58MHx8fHwxNjU0MDk1MjY5&amp;ixlib=rb-1.2.1&amp;w=300"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          rootClassName="space-card-root-class-name1"
        ></space-card>
        <space-card
          price="27 €/day"
          title="Work Smart"
          rating="4/5"
          image_src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxvZmZpY2V8ZW58MHx8fHwxNjU0MDk1MjY5&amp;ixlib=rb-1.2.1&amp;w=300"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          rootClassName="space-card-root-class-name"
        ></space-card>
        <space-card
          price="18 €/day"
          title="CoLab"
          rating="3.9/5"
          image_src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fG9mZmljZXxlbnwwfHx8fDE2NTQwOTUyNjk&amp;ixlib=rb-1.2.1&amp;w=300"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          rootClassName="space-card-root-class-name2"
        ></space-card>
        <space-card
          price="22 €/day"
          title="Station"
          rating="4.9/5"
          image_src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxvZmZpY2V8ZW58MHx8fHwxNjU0MDk1MjY5&amp;ixlib=rb-1.2.1&amp;w=300"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          rootClassName="space-card-root-class-name3"
        ></space-card>
        <space-card
          price="50 €/day"
          title="Business Center"
          rating="4.1/5"
          image_src="https://images.unsplash.com/photo-1570126688035-1e6adbd61053?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxvZmZpY2V8ZW58MHx8fHwxNjU0MDk1MjY5&amp;ixlib=rb-1.2.1&amp;w=300"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          rootClassName="space-card-root-class-name4"
        ></space-card>
        <space-card
          price="40  €/day "
          title="Dream Work"
          image_src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fG9mZmljZXxlbnwwfHx8fDE2NTQwOTUyNjk&amp;ixlib=rb-1.2.1&amp;w=300"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          rootClassName="space-card-root-class-name5"
        ></space-card>
        <space-card
          price="32 €/day"
          title="Rover"
          rating="5/5"
          image_src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxvZmZpY2V8ZW58MHx8fHwxNjU0MDk1MjY5&amp;ixlib=rb-1.2.1&amp;w=300"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          rootClassName="space-card-root-class-name6"
        ></space-card>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name"></app-footer>
  </div>
</template>

<script>
import HeaderLogged from '../components/header-logged'
import AppToolbar from '../components/toolbar'
import SpaceCard from '../components/space-card'
import AppFooter from '../components/footer'

export default {
  name: 'Spaces',
  components: {
    HeaderLogged,
    AppToolbar,
    SpaceCard,
    AppFooter,
  },
  metaInfo: {
    title: 'Spaces - CoworkClub',
    meta: [
      {
        property: 'og:title',
        content: 'Spaces - CoworkClub',
      },
    ],
  },
}
</script>

<style scoped>
.spaces-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-900);
}
.spaces-container1 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  position: relative;
  max-width: 1320px;
  align-self: center;
  margin-top: var(--dl-space-space-tripleunit);
  min-height: 85vh;
  align-items: center;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: flex-start;
}
.spaces-container2 {
  width: 100%;
  height: 961px;
  margin: 0px;
  display: flex;
  padding: 0px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
@media(max-width: 991px) {
  .spaces-container1 {
    max-width: 960px;
    margin-top: var(--dl-space-space-sixunits);
  }
}
@media(max-width: 767px) {
  .spaces-container1 {
    align-self: center;
    margin-top: var(--dl-space-space-fourunits);
    align-items: center;
  }
  .spaces-container2 {
    height: 2460px;
    margin-top: 0px;
    justify-content: center;
  }
}
@media(max-width: 479px) {
  .spaces-container1 {
    height: auto;
    margin-top: var(--dl-space-space-twelveunits);
  }
  .spaces-container2 {
    height: 2507px;
    justify-content: center;
  }
}
</style>
