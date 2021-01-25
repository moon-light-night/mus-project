<template>
  <div>
    <p>
      This free service provides an opportunity to view video clips and listen
      to the available tracks. We don't use other people's products, we provide
      visitors with the opportunity to use original video and audio materials.
      All copyrights reserved.
    </p>
    <p>Contacts:</p>
    <div id="contacts">
      <ul>
        <li>Front</li>
        <li><a>baskakov.11111@mail.ru</a></li>
        <li>
          <a
            target="__blank"
            href="https://instagram.com/glxmind?igshid=f7z9cn093uer"
            ><img
              title="Instagram"
              src="./icons/Instagram_icon-icons.com_66804.png"
          /></a>
        </li>
        <li>
          <a target="__blank" href="https://t.me/glxmind"
            ><img title="Telegram" src="./icons/telegram_logo_icon_147228.png"
          /></a>
        </li>
        <li>
          <a target="__blank" href="https://vk.com/glxmind"
            ><img
              title="Vk"
              src="./icons/1486147227-social-media-network26_79482.png"
          /></a>
        </li>
        <li>
          <a href="https://github.com/moon-light-night" target="__blank"
            ><img
              title="GitHub"
              src="./icons/Github_social_media_corporate_logo_icon-icons.com_67672.png"
          /></a>
        </li>
      </ul>
      <ul>
        <li>Back</li>
        <li><a>baskakov.11111@mail.ru</a></li>
        <li>
          <a
            ><img
              title="Instagram"
              src="./icons/Instagram_icon-icons.com_66804.png"
          /></a>
        </li>
        <li>
          <a
            ><img
              title="Telegram"
              src="./icons/telegram_logo_icon_147228.png"
            />
          </a>
        </li>
        <li>
          <a target="__blank" href="https://vk.com/andrey_434">
            <img
              title="Vk"
              src="./icons/1486147227-social-media-network26_79482.png"
            />
          </a>
        </li>
        <li>
          <a
            ><img
              title="GitHub"
              src="./icons/Github_social_media_corporate_logo_icon-icons.com_67672.png"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
  p {
    font-family: 'East Sea Dokdo';
    font-size: 40px;
    color: rgb(207, 21, 21);
    text-shadow: 1px 1px 2px black, 0 0 1em black;
    margin-bottom: 0px;
    margin-top: 0px;
    cursor: default;
  }
  #contacts {
    display: flex;
    justify-content: space-evenly;
    ul {
      color: white;
      padding-left: 0px;
      li {
        list-style-type: none;
        text-shadow: 1px 1px 2px black, 0 0 1em black;
        font-family: 'Potta One';
        font-size: 20px;
        padding-bottom: 15px;
        cursor: default;
        img {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
