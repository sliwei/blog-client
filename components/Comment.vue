<template>
  <div class="comment">
    <p class="title">{{$t('components.comment.title')}}</p>
    <div class="forms">
      <div class="item">
        <p>昵称</p>
        <div class="sub">
          <input v-model="name" v-validate="'required'" name="昵称" type="text" placeholder="请输入昵称">
          <span>{{ errors.first('昵称') }}</span>
        </div>
      </div>
      <div class="item">
        <p class="email">邮箱 <span style="color: #a1a1a1;font-size: 12px">(回复通知)</span></p>
        <div class="sub">
          <input v-model="mail" v-validate="'email'" name="邮箱" type="text" placeholder="请输入邮箱地址">
          <span>{{ errors.first('邮箱') }}</span>
        </div>
      </div>
      <div class="item">
        <p>站点</p>
        <div class="sub">
          <input v-model="website" name="站点" type="text" placeholder="请输入站点">
        </div>
      </div>
    </div>
    <div class="forms">
      <div class="item">
        <p>内容 <span style="color: #a1a1a1;font-size: 12px">(支持<a target="_blank"
                                                                 href="https://segmentfault.com/markdown">Markdown</a>语法)</span>
        </p>
        <div class="sub">
          <textarea v-show="!previewSta" id="cont" v-model="cont" v-validate="'required'" name="内容" type="text"
                    placeholder="请输入内容"></textarea>
          <div v-show="previewSta" v-html="markdownHtml" class="markdown-body"></div>

          <div class="tool">
            <div class="icons" title="表情">
              <i :class="{iconfont:1, 'a-blog-smile': 1, active: emojiSta}" @click="changeEmoji"/>
            </div>
            <div class="icons" title="图片" @click="insertText('![]()')">
              <i :class="{iconfont:1, 'a-blog-image': 1}"/>
            </div>
            <div class="icons" title="代码" @click="insertText('```\n'+
'\n'+
'```')">
              <i :class="{iconfont:1, 'a-blog-code': 1}"/>
            </div>
            <div class="icons" title="预览">
              <i :class="{iconfont:1, 'a-blog-eye': 1, active: previewSta}" @click="changePreview"/>
            </div>
          </div>

          <div v-show="emojiSta" :class="{emoji: 1, active: emojiSta}">
            <div class="menu">
              <div :class="{menu_item: 1, active: emojiActive === i}" v-for="(item, i) in emojiList" :key="i" @click="checkEmoji(item.list, i)">{{item.name}}</div>
            </div>

            <span v-for="(item,i ) in emojiMap" :key="i" @click="insertText(item)">{{item}}</span>
          </div>

          <div class="reply" v-if="reply.c_user">
            <span>@</span>
            <img :src="reply.c_user.head_img" alt="">
            <span>{{reply.c_user.name}}</span>
            <i @click="empty" class="iconfont a-blog-close"></i>
          </div>
          <span>{{ errors.first('内容') }}</span>
        </div>

      </div>
    </div>
    <div class="btn">
      <button @click="sub">提&ensp;交</button>
    </div>
  </div>
</template>
<script>
  import markdownIt from "markdown-it"
  import markdownTtHighlightjs from "markdown-it-highlightjs"
  import markdownItMark from "markdown-it-mark"
  import markdownItKbd from "markdown-it-kbd"
  import markdownItTocAndAnchor from "markdown-it-toc-and-anchor"
  import markdownItEmoji from "markdown-it-emoji"

  export default {
    props: ['b_id', 'type'],
    data() {
      return {
        // f_id: '',
        name: '',
        website: '',
        mail: '',
        cont: '',
        markdownHtml: '',
        previewSta: false,
        emojiSta: false,
        emojiActive: 0,
        emojiMap: [],
        emojiList: [
          {
            // name: 'People',
            name: '人物',
            list: [
              // ':bowtie:',
              // ':smile:',
              // ':simple_smile:',
              // ':laughing:',
              // ':blush:',
              // ':smiley:',
              // ':relaxed:',
              // ':smirk:',
              // ':heart_eyes:',
              // ':kissing_heart:',
              // ':kissing_closed_eyes:',
              // ':flushed:',
              // ':relieved:',
              // ':satisfied:',
              // ':grin:',
              // ':wink:',
              // ':stuck_out_tongue_winking_eye:',
              // ':stuck_out_tongue_closed_eyes:',
              // ':grinning:',
              // ':kissing:',
              // ':kissing_smiling_eyes:',
              // ':stuck_out_tongue:',
              // ':sleeping:',
              // ':worried:',
              // ':frowning:',
              // ':anguished:',
              // ':open_mouth:',
              // ':grimacing:',
              // ':confused:',
              // ':hushed:',
              // ':expressionless:',
              // ':unamused:',
              // ':sweat_smile:',
              // ':sweat:',
              // ':disappointed_relieved:',
              // ':weary:',
              // ':pensive:',
              // ':disappointed:',
              // ':confounded:',
              // ':fearful:',
              // ':cold_sweat:',
              // ':persevere:',
              // ':cry:',
              // ':sob:',
              // ':joy:',
              // ':astonished:',
              // ':scream:',
              // ':neckbeard:',
              // ':tired_face:',
              // ':angry:',
              // ':rage:',
              // ':triumph:',
              // ':sleepy:',
              // ':yum:',
              // ':mask:',
              // ':sunglasses:',
              // ':dizzy_face:',
              // ':imp:',
              // ':smiling_imp:',
              // ':neutral_face:',
              // ':no_mouth:',
              // ':innocent:',
              // ':alien:',
              // ':yellow_heart:',
              // ':blue_heart:',
              // ':purple_heart:',
              // ':heart:',
              // ':green_heart:',
              // ':broken_heart:',
              // ':heartbeat:',
              // ':heartpulse:',
              // ':two_hearts:',
              // ':revolving_hearts:',
              // ':cupid:',
              // ':sparkling_heart:',
              // ':sparkles:',
              // ':star:',
              // ':star2:',
              // ':dizzy:',
              // ':boom:',
              // ':collision:',
              // ':anger:',
              // ':exclamation:',
              // ':question:',
              // ':grey_exclamation:',
              // ':grey_question:',
              // ':zzz:',
              // ':dash:',
              // ':sweat_drops:',
              // ':notes:',
              // ':musical_note:',
              // ':fire:',
              // ':hankey:',
              // ':poop:',
              // ':shit:',
              // ':+1:',
              // ':thumbsup:',
              // ':-1:',
              // ':thumbsdown:',
              // ':ok_hand:',
              // ':punch:',
              // ':facepunch:',
              // ':fist:',
              // ':v:',
              // ':wave:',
              // ':hand:',
              // ':raised_hand:',
              // ':open_hands:',
              // ':point_up:',
              // ':point_down:',
              // ':point_left:',
              // ':point_right:',
              // ':raised_hands:',
              // ':pray:',
              // ':point_up_2:',
              // ':clap:',
              // ':muscle:',
              // ':metal:',
              // ':fu:',
              // ':runner:',
              // ':running:',
              // ':couple:',
              // ':family:',
              // ':two_men_holding_hands:',
              // ':two_women_holding_hands:',
              // ':dancer:',
              // ':dancers:',
              // ':ok_woman:',
              // ':no_good:',
              // ':information_desk_person:',
              // ':raising_hand:',
              // ':bride_with_veil:',
              // ':person_with_pouting_face:',
              // ':person_frowning:',
              // ':bow:',
              // ':couplekiss:',
              // ':couple_with_heart:',
              // ':massage:',
              // ':haircut:',
              // ':nail_care:',
              // ':boy:',
              // ':girl:',
              // ':woman:',
              // ':man:',
              // ':baby:',
              // ':older_woman:',
              // ':older_man:',
              // ':person_with_blond_hair:',
              // ':man_with_gua_pi_mao:',
              // ':man_with_turban:',
              // ':construction_worker:',
              // ':cop:',
              // ':angel:',
              // ':princess:',
              // ':smiley_cat:',
              // ':smile_cat:',
              // ':heart_eyes_cat:',
              // ':kissing_cat:',
              // ':smirk_cat:',
              // ':scream_cat:',
              // ':crying_cat_face:',
              // ':joy_cat:',
              // ':pouting_cat:',
              // ':japanese_ogre:',
              // ':japanese_goblin:',
              // ':see_no_evil:',
              // ':hear_no_evil:',
              // ':speak_no_evil:',
              // ':guardsman:',
              // ':skull:',
              // ':feet:',
              // ':lips:',
              // ':kiss:',
              // ':droplet:',
              // ':ear:',
              // ':eyes:',
              // ':nose:',
              // ':tongue:',
              // ':love_letter:',
              // ':bust_in_silhouette:',
              // ':busts_in_silhouette:',
              // ':speech_balloon:',
              // ':thought_balloon:',
              // ':feelsgood:',
              // ':finnadie:',
              // ':goberserk:',
              // ':godmode:',
              // ':hurtrealbad:',
              // ':rage1:',
              // ':rage2:',
              // ':rage3:',
              // ':rage4:',
              // ':suspect:',
              // ':trollface:',

              '😄',
              '😆',
              '😊',
              '😃',
              '😏',
              '😍',
              '😘',
              '😚',
              '😳',
              '😌',
              '😆',
              '😁',
              '😉',
              '😜',
              '😝',
              '😀',
              '😗',
              '😙',
              '😛',
              '😴',
              '😟',
              '😦',
              '😧',
              '😮',
              '😬',
              '😕',
              '😯',
              '😑',
              '😒',
              '😅',
              '😓',
              '😥',
              '😩',
              '😔',
              '😞',
              '😖',
              '😨',
              '😰',
              '😣',
              '😢',
              '😭',
              '😂',
              '😲',
              '😱',
              '😫',
              '😠',
              '😡',
              '😤',
              '😪',
              '😋',
              '😷',
              '😎',
              '😵',
              '👿',
              '😈',
              '😐',
              '😶',
              '😇',
              '👽',
              '💛',
              '💙',
              '💜',
              '❤️',
              '💚',
              '💔',
              '💓',
              '💗',
              '💕',
              '💞',
              '💘',
              '💖',
              '✨',
              '⭐️',
              '🌟',
              '💫',
              '💥',
              '💥',
              '💢',
              '❗️',
              '❓',
              '❕',
              '❔',
              '💤',
              '💨',
              '💦',
              '🎶',
              '🎵',
              '🔥',
              '💩',
              '💩',
              '💩',
              '👍',
              '👍',
              '👎',
              '👎',
              '👌',
              '👊',
              '👊',
              '✊',
              '✌️',
              '👋',
              '✋',
              '✋',
              '👐',
              '☝️',
              '👇',
              '👈',
              '👉',
              '🙌',
              '🙏',
              '👆',
              '👏',
              '💪',
              '🤘',
              '🖕',
              '🏃',
              '🏃',
              '👫',
              '👪',
              '👬',
              '👭',
              '💃',
              '👯',
              '🙆',
              '🙅',
              '💁',
              '🙋',
              '👰',
              '🙎',
              '🙍',
              '🙇',
              '💑',
              '💆',
              '💇',
              '💅',
              '👦',
              '👧',
              '👩',
              '👨',
              '👶',
              '👵',
              '👴',
              '👱',
              '👲',
              '👳',
              '👷',
              '👮',
              '👼',
              '👸',
              '😺',
              '😸',
              '😻',
              '😽',
              '😼',
              '🙀',
              '😿',
              '😹',
              '😾',
              '👹',
              '👺',
              '🙈',
              '🙉',
              '🙊',
              '💂',
              '💀',
              '🐾',
              '👄',
              '💋',
              '💧',
              '👂',
              '👀',
              '👃',
              '👅',
              '💌',
              '👤',
              '👥',
              '💬',
              '💭',
            ],
          },
          {
            // name: 'Nature',
            name: '自然',
            list: [
              // ':sunny:',
              // ':umbrella:',
              // ':cloud:',
              // ':snowflake:',
              // ':snowman:',
              // ':zap:',
              // ':cyclone:',
              // ':foggy:',
              // ':ocean:',
              // ':cat:',
              // ':dog:',
              // ':mouse:',
              // ':hamster:',
              // ':rabbit:',
              // ':wolf:',
              // ':frog:',
              // ':tiger:',
              // ':koala:',
              // ':bear:',
              // ':pig:',
              // ':pig_nose:',
              // ':cow:',
              // ':boar:',
              // ':monkey_face:',
              // ':monkey:',
              // ':horse:',
              // ':racehorse:',
              // ':camel:',
              // ':sheep:',
              // ':elephant:',
              // ':panda_face:',
              // ':snake:',
              // ':bird:',
              // ':baby_chick:',
              // ':hatched_chick:',
              // ':hatching_chick:',
              // ':chicken:',
              // ':penguin:',
              // ':turtle:',
              // ':bug:',
              // ':honeybee:',
              // ':ant:',
              // ':beetle:',
              // ':snail:',
              // ':octopus:',
              // ':tropical_fish:',
              // ':fish:',
              // ':whale:',
              // ':whale2:',
              // ':dolphin:',
              // ':cow2:',
              // ':ram:',
              // ':rat:',
              // ':water_buffalo:',
              // ':tiger2:',
              // ':rabbit2:',
              // ':dragon:',
              // ':goat:',
              // ':rooster:',
              // ':dog2:',
              // ':pig2:',
              // ':mouse2:',
              // ':ox:',
              // ':dragon_face:',
              // ':blowfish:',
              // ':crocodile:',
              // ':dromedary_camel:',
              // ':leopard:',
              // ':cat2:',
              // ':poodle:',
              // ':paw_prints:',
              // ':bouquet:',
              // ':cherry_blossom:',
              // ':tulip:',
              // ':four_leaf_clover:',
              // ':rose:',
              // ':sunflower:',
              // ':hibiscus:',
              // ':maple_leaf:',
              // ':leaves:',
              // ':fallen_leaf:',
              // ':herb:',
              // ':mushroom:',
              // ':cactus:',
              // ':palm_tree:',
              // ':evergreen_tree:',
              // ':deciduous_tree:',
              // ':chestnut:',
              // ':seedling:',
              // ':blossom:',
              // ':ear_of_rice:',
              // ':shell:',
              // ':globe_with_meridians:',
              // ':sun_with_face:',
              // ':full_moon_with_face:',
              // ':new_moon_with_face:',
              // ':new_moon:',
              // ':waxing_crescent_moon:',
              // ':first_quarter_moon:',
              // ':waxing_gibbous_moon:',
              // ':full_moon:',
              // ':waning_gibbous_moon:',
              // ':last_quarter_moon:',
              // ':waning_crescent_moon:',
              // ':last_quarter_moon_with_face:',
              // ':first_quarter_moon_with_face:',
              // ':crescent_moon:',
              // ':earth_africa:',
              // ':earth_americas:',
              // ':earth_asia:',
              // ':volcano:',
              // ':milky_way:',
              // ':partly_sunny:',
              // ':octocat:',
              // ':squirrel:',

              '☀️',
              '☔️',
              '☁️',
              '❄️',
              '⛄️',
              '⚡️',
              '🌀',
              '🌁',
              '🌊',
              '🐱',
              '🐶',
              '🐭',
              '🐹',
              '🐰',
              '🐺',
              '🐸',
              '🐯',
              '🐨',
              '🐻',
              '🐷',
              '🐽',
              '🐮',
              '🐗',
              '🐵',
              '🐒',
              '🐴',
              '🐎',
              '🐫',
              '🐑',
              '🐘',
              '🐼',
              '🐍',
              '🐦',
              '🐤',
              '🐥',
              '🐣',
              '🐔',
              '🐧',
              '🐢',
              '🐛',
              '🐝',
              '🐜',
              '🐞',
              '🐌',
              '🐙',
              '🐠',
              '🐟',
              '🐳',
              '🐋',
              '🐬',
              '🐄',
              '🐏',
              '🐀',
              '🐃',
              '🐅',
              '🐇',
              '🐉',
              '🐐',
              '🐓',
              '🐕',
              '🐖',
              '🐁',
              '🐂',
              '🐲',
              '🐡',
              '🐊',
              '🐪',
              '🐆',
              '🐈',
              '🐩',
              '🐾',
              '💐',
              '🌸',
              '🌷',
              '🍀',
              '🌹',
              '🌻',
              '🌺',
              '🍁',
              '🍃',
              '🍂',
              '🌿',
              '🍄',
              '🌵',
              '🌴',
              '🌲',
              '🌳',
              '🌰',
              '🌱',
              '🌼',
              '🌾',
              '🐚',
              '🌐',
              '🌞',
              '🌝',
              '🌚',
              '🌑',
              '🌒',
              '🌓',
              '🌔',
              '🌕',
              '🌖',
              '🌗',
              '🌘',
              '🌜',
              '🌛',
              '🌙',
              '🌍',
              '🌎',
              '🌏',
              '🌋',
              '🌌',
              '⛅️',
            ],
          },
          {
            // name: 'Objects',
            name: '物体',
            list: [
              // ':bamboo:',
              // ':gift_heart:',
              // ':dolls:',
              // ':school_satchel:',
              // ':mortar_board:',
              // ':flags:',
              // ':fireworks:',
              // ':sparkler:',
              // ':wind_chime:',
              // ':rice_scene:',
              // ':jack_o_lantern:',
              // ':ghost:',
              // ':santa:',
              // ':christmas_tree:',
              // ':gift:',
              // ':bell:',
              // ':no_bell:',
              // ':tanabata_tree:',
              // ':tada:',
              // ':confetti_ball:',
              // ':balloon:',
              // ':crystal_ball:',
              // ':cd:',
              // ':dvd:',
              // ':floppy_disk:',
              // ':camera:',
              // ':video_camera:',
              // ':movie_camera:',
              // ':computer:',
              // ':tv:',
              // ':iphone:',
              // ':phone:',
              // ':telephone:',
              // ':telephone_receiver:',
              // ':pager:',
              // ':fax:',
              // ':minidisc:',
              // ':vhs:',
              // ':sound:',
              // ':speaker:',
              // ':mute:',
              // ':loudspeaker:',
              // ':mega:',
              // ':hourglass:',
              // ':hourglass_flowing_sand:',
              // ':alarm_clock:',
              // ':watch:',
              // ':radio:',
              // ':satellite:',
              // ':loop:',
              // ':mag:',
              // ':mag_right:',
              // ':unlock:',
              // ':lock:',
              // ':lock_with_ink_pen:',
              // ':closed_lock_with_key:',
              // ':key:',
              // ':bulb:',
              // ':flashlight:',
              // ':high_brightness:',
              // ':low_brightness:',
              // ':electric_plug:',
              // ':battery:',
              // ':calling:',
              // ':email:',
              // ':mailbox:',
              // ':postbox:',
              // ':bath:',
              // ':bathtub:',
              // ':shower:',
              // ':toilet:',
              // ':wrench:',
              // ':nut_and_bolt:',
              // ':hammer:',
              // ':seat:',
              // ':moneybag:',
              // ':yen:',
              // ':dollar:',
              // ':pound:',
              // ':euro:',
              // ':credit_card:',
              // ':money_with_wings:',
              // ':e-mail:',
              // ':inbox_tray:',
              // ':outbox_tray:',
              // ':envelope:',
              // ':incoming_envelope:',
              // ':postal_horn:',
              // ':mailbox_closed:',
              // ':mailbox_with_mail:',
              // ':mailbox_with_no_mail:',
              // ':package:',
              // ':door:',
              // ':smoking:',
              // ':bomb:',
              // ':gun:',
              // ':hocho:',
              // ':pill:',
              // ':syringe:',
              // ':page_facing_up:',
              // ':page_with_curl:',
              // ':bookmark_tabs:',
              // ':bar_chart:',
              // ':chart_with_upwards_trend:',
              // ':chart_with_downwards_trend:',
              // ':scroll:',
              // ':clipboard:',
              // ':calendar:',
              // ':date:',
              // ':card_index:',
              // ':file_folder:',
              // ':open_file_folder:',
              // ':scissors:',
              // ':pushpin:',
              // ':paperclip:',
              // ':black_nib:',
              // ':pencil2:',
              // ':straight_ruler:',
              // ':triangular_ruler:',
              // ':closed_book:',
              // ':green_book:',
              // ':blue_book:',
              // ':orange_book:',
              // ':notebook:',
              // ':notebook_with_decorative_cover:',
              // ':ledger:',
              // ':books:',
              // ':bookmark:',
              // ':name_badge:',
              // ':microscope:',
              // ':telescope:',
              // ':newspaper:',
              // ':football:',
              // ':basketball:',
              // ':soccer:',
              // ':baseball:',
              // ':tennis:',
              // ':8ball:',
              // ':rugby_football:',
              // ':bowling:',
              // ':golf:',
              // ':mountain_bicyclist:',
              // ':bicyclist:',
              // ':horse_racing:',
              // ':snowboarder:',
              // ':swimmer:',
              // ':surfer:',
              // ':ski:',
              // ':spades:',
              // ':hearts:',
              // ':clubs:',
              // ':diamonds:',
              // ':gem:',
              // ':ring:',
              // ':trophy:',
              // ':musical_score:',
              // ':musical_keyboard:',
              // ':violin:',
              // ':space_invader:',
              // ':video_game:',
              // ':black_joker:',
              // ':flower_playing_cards:',
              // ':game_die:',
              // ':dart:',
              // ':mahjong:',
              // ':clapper:',
              // ':memo:',
              // ':pencil:',
              // ':book:',
              // ':art:',
              // ':microphone:',
              // ':headphones:',
              // ':trumpet:',
              // ':saxophone:',
              // ':guitar:',
              // ':shoe:',
              // ':sandal:',
              // ':high_heel:',
              // ':lipstick:',
              // ':boot:',
              // ':shirt:',
              // ':tshirt:',
              // ':necktie:',
              // ':womans_clothes:',
              // ':dress:',
              // ':running_shirt_with_sash:',
              // ':jeans:',
              // ':kimono:',
              // ':bikini:',
              // ':ribbon:',
              // ':tophat:',
              // ':crown:',
              // ':womans_hat:',
              // ':mans_shoe:',
              // ':closed_umbrella:',
              // ':briefcase:',
              // ':handbag:',
              // ':pouch:',
              // ':purse:',
              // ':eyeglasses:',
              // ':fishing_pole_and_fish:',
              // ':coffee:',
              // ':tea:',
              // ':sake:',
              // ':baby_bottle:',
              // ':beer:',
              // ':beers:',
              // ':cocktail:',
              // ':tropical_drink:',
              // ':wine_glass:',
              // ':fork_and_knife:',
              // ':pizza:',
              // ':hamburger:',
              // ':fries:',
              // ':poultry_leg:',
              // ':meat_on_bone:',
              // ':spaghetti:',
              // ':curry:',
              // ':fried_shrimp:',
              // ':bento:',
              // ':sushi:',
              // ':fish_cake:',
              // ':rice_ball:',
              // ':rice_cracker:',
              // ':rice:',
              // ':ramen:',
              // ':stew:',
              // ':oden:',
              // ':dango:',
              // ':egg:',
              // ':bread:',
              // ':doughnut:',
              // ':custard:',
              // ':icecream:',
              // ':ice_cream:',
              // ':shaved_ice:',
              // ':birthday:',
              // ':cake:',
              // ':cookie:',
              // ':chocolate_bar:',
              // ':candy:',
              // ':lollipop:',
              // ':honey_pot:',
              // ':apple:',
              // ':green_apple:',
              // ':tangerine:',
              // ':lemon:',
              // ':cherries:',
              // ':grapes:',
              // ':watermelon:',
              // ':strawberry:',
              // ':peach:',
              // ':melon:',
              // ':banana:',
              // ':pear:',
              // ':pineapple:',
              // ':sweet_potato:',
              // ':eggplant:',
              // ':tomato:',
              // ':corn:',

              '🎍',
              '💝',
              '🎎',
              '🎒',
              '🎓',
              '🎏',
              '🎆',
              '🎇',
              '🎐',
              '🎑',
              '🎃',
              '👻',
              '🎅',
              '🎄',
              '🎁',
              '🔔',
              '🔕',
              '🎋',
              '🎉',
              '🎊',
              '🎈',
              '🔮',
              '💿',
              '📀',
              '💾',
              '📷',
              '📹',
              '🎥',
              '💻',
              '📺',
              '📱',
              '☎️',
              '☎️',
              '📞',
              '📟',
              '📠',
              '💽',
              '📼',
              '🔉',
              '🔈',
              '🔇',
              '📢',
              '📣',
              '⌛️',
              '⏳',
              '⏰',
              '⌚️',
              '📻',
              '📡',
              '➿',
              '🔍',
              '🔎',
              '🔓',
              '🔒',
              '🔏',
              '🔐',
              '🔑',
              '💡',
              '🔦',
              '🔆',
              '🔅',
              '🔌',
              '🔋',
              '📲',
              '✉️',
              '📫',
              '📮',
              '🛀',
              '🛁',
              '🚿',
              '🚽',
              '🔧',
              '🔩',
              '🔨',
              '💺',
              '💰',
              '💴',
              '💵',
              '💷',
              '💶',
              '💳',
              '💸',
              '📧',
              '📥',
              '📤',
              '✉️',
              '📨',
              '📯',
              '📪',
              '📬',
              '📭',
              '📦',
              '🚪',
              '🚬',
              '💣',
              '🔫',
              '🔪',
              '💊',
              '💉',
              '📄',
              '📃',
              '📑',
              '📊',
              '📈',
              '📉',
              '📜',
              '📋',
              '📆',
              '📅',
              '📇',
              '📁',
              '📂',
              '✂️',
              '📌',
              '📎',
              '✒️',
              '✏️',
              '📏',
              '📐',
              '📕',
              '📗',
              '📘',
              '📙',
              '📓',
              '📔',
              '📒',
              '📚',
              '🔖',
              '📛',
              '🔬',
              '🔭',
              '📰',
              '🏈',
              '🏀',
              '⚽️',
              '⚾️',
              '🎾',
              '🎱',
              '🏉',
              '🎳',
              '⛳️',
              '🚵',
              '🚴',
              '🏇',
              '🏂',
              '🏊',
              '🏄',
              '🎿',
              '♠️',
              '♥️',
              '♣️',
              '♦️',
              '💎',
              '💍',
              '🏆',
              '🎼',
              '🎹',
              '🎻',
              '👾',
              '🎮',
              '🃏',
              '🎴',
              '🎲',
              '🎯',
              '🀄️',
              '🎬',
              '📝',
              '📝',
              '📖',
              '🎨',
              '🎤',
              '🎧',
              '🎺',
              '🎷',
              '🎸',
              '👞',
              '👡',
              '👠',
              '💄',
              '👢',
              '👕',
              '👕',
              '👔',
              '👚',
              '👗',
              '🎽',
              '👖',
              '👘',
              '👙',
              '🎀',
              '🎩',
              '👑',
              '👒',
              '👞',
              '🌂',
              '💼',
              '👜',
              '👝',
              '👛',
              '👓',
              '🎣',
              '☕️',
              '🍵',
              '🍶',
              '🍼',
              '🍺',
              '🍻',
              '🍸',
              '🍹',
              '🍷',
              '🍴',
              '🍕',
              '🍔',
              '🍟',
              '🍗',
              '🍖',
              '🍝',
              '🍛',
              '🍤',
              '🍱',
              '🍣',
              '🍥',
              '🍙',
              '🍘',
              '🍚',
              '🍜',
              '🍲',
              '🍢',
              '🍡',
              '🥚',
              '🍞',
              '🍩',
              '🍮',
              '🍦',
              '🍨',
              '🍧',
              '🎂',
              '🍰',
              '🍪',
              '🍫',
              '🍬',
              '🍭',
              '🍯',
              '🍎',
              '🍏',
              '🍊',
              '🍋',
              '🍒',
              '🍇',
              '🍉',
              '🍓',
              '🍑',
              '🍈',
              '🍌',
              '🍐',
              '🍍',
              '🍠',
              '🍆',
              '🍅',
              '🌽',
            ],
          },
          {
            // name: 'Places',
            name: '地方',
            list: [
              // ':house:',
              // ':house_with_garden:',
              // ':school:',
              // ':office:',
              // ':post_office:',
              // ':hospital:',
              // ':bank:',
              // ':convenience_store:',
              // ':love_hotel:',
              // ':hotel:',
              // ':wedding:',
              // ':church:',
              // ':department_store:',
              // ':european_post_office:',
              // ':city_sunrise:',
              // ':city_sunset:',
              // ':japanese_castle:',
              // ':european_castle:',
              // ':tent:',
              // ':factory:',
              // ':tokyo_tower:',
              // ':japan:',
              // ':mount_fuji:',
              // ':sunrise_over_mountains:',
              // ':sunrise:',
              // ':stars:',
              // ':statue_of_liberty:',
              // ':bridge_at_night:',
              // ':carousel_horse:',
              // ':rainbow:',
              // ':ferris_wheel:',
              // ':fountain:',
              // ':roller_coaster:',
              // ':ship:',
              // ':speedboat:',
              // ':boat:',
              // ':sailboat:',
              // ':rowboat:',
              // ':anchor:',
              // ':rocket:',
              // ':airplane:',
              // ':helicopter:',
              // ':steam_locomotive:',
              // ':tram:',
              // ':mountain_railway:',
              // ':bike:',
              // ':aerial_tramway:',
              // ':suspension_railway:',
              // ':mountain_cableway:',
              // ':tractor:',
              // ':blue_car:',
              // ':oncoming_automobile:',
              // ':car:',
              // ':red_car:',
              // ':taxi:',
              // ':oncoming_taxi:',
              // ':articulated_lorry:',
              // ':bus:',
              // ':oncoming_bus:',
              // ':rotating_light:',
              // ':police_car:',
              // ':oncoming_police_car:',
              // ':fire_engine:',
              // ':ambulance:',
              // ':minibus:',
              // ':truck:',
              // ':train:',
              // ':station:',
              // ':train2:',
              // ':bullettrain_front:',
              // ':bullettrain_side:',
              // ':light_rail:',
              // ':monorail:',
              // ':railway_car:',
              // ':trolleybus:',
              // ':ticket:',
              // ':fuelpump:',
              // ':vertical_traffic_light:',
              // ':traffic_light:',
              // ':warning:',
              // ':construction:',
              // ':beginner:',
              // ':atm:',
              // ':slot_machine:',
              // ':busstop:',
              // ':barber:',
              // ':hotsprings:',
              // ':checkered_flag:',
              // ':crossed_flags:',
              // ':izakaya_lantern:',
              // ':moyai:',
              // ':circus_tent:',
              // ':performing_arts:',
              // ':round_pushpin:',
              // ':triangular_flag_on_post:',
              // ':jp:',
              // ':kr:',
              // ':cn:',
              // ':us:',
              // ':fr:',
              // ':es:',
              // ':it:',
              // ':ru:',
              // ':gb:',
              // ':uk:',
              // ':de:',

              '🏠',
              '🏡',
              '🏫',
              '🏢',
              '🏣',
              '🏥',
              '🏦',
              '🏪',
              '🏩',
              '🏨',
              '💒',
              '⛪️',
              '🏬',
              '🏤',
              '🌇',
              '🌆',
              '🏯',
              '🏰',
              '⛺️',
              '🏭',
              '🗼',
              '🗾',
              '🗻',
              '🌄',
              '🌅',
              '🌠',
              '🗽',
              '🌉',
              '🎠',
              '🌈',
              '🎡',
              '⛲️',
              '🎢',
              '🚢',
              '🚤',
              '⛵️',
              '⛵️',
              '🚣',
              '⚓️',
              '🚀',
              '✈️',
              '🚁',
              '🚂',
              '🚊',
              '🚞',
              '🚲',
              '🚡',
              '🚟',
              '🚠',
              '🚜',
              '🚙',
              '🚘',
              '🚗',
              '🚗',
              '🚕',
              '🚖',
              '🚛',
              '🚌',
              '🚍',
              '🚨',
              '🚓',
              '🚔',
              '🚒',
              '🚑',
              '🚐',
              '🚚',
              '🚋',
              '🚉',
              '🚆',
              '🚅',
              '🚄',
              '🚈',
              '🚝',
              '🚃',
              '🚎',
              '🎫',
              '⛽️',
              '🚦',
              '🚥',
              '⚠️',
              '🚧',
              '🔰',
              '🏧',
              '🎰',
              '🚏',
              '💈',
              '♨️',
              '🏁',
              '🎌',
              '🏮',
              '🗿',
              '🎪',
              '🎭',
              '📍',
              '🚩',
              '🇯🇵',
              '🇰🇷',
              '🇨🇳',
              '🇺🇸',
              '🇫🇷',
              '🇪🇸',
              '🇮🇹',
              '🇷🇺',
              '🇬🇧',
              '🇬🇧',
              '🇩🇪',
            ],
          },
          {
            // name: 'Symbols',
            name: '符号',
            list: [
              // ':one:',
              // ':two:',
              // ':three:',
              // ':four:',
              // ':five:',
              // ':six:',
              // ':seven:',
              // ':eight:',
              // ':nine:',
              // ':keycap_ten:',
              // ':1234:',
              // ':zero:',
              // ':hash:',
              // ':symbols:',
              // ':arrow_backward:',
              // ':arrow_down:',
              // ':arrow_forward:',
              // ':arrow_left:',
              // ':capital_abcd:',
              // ':abcd:',
              // ':abc:',
              // ':arrow_lower_left:',
              // ':arrow_lower_right:',
              // ':arrow_right:',
              // ':arrow_up:',
              // ':arrow_upper_left:',
              // ':arrow_upper_right:',
              // ':arrow_double_down:',
              // ':arrow_double_up:',
              // ':arrow_down_small:',
              // ':arrow_heading_down:',
              // ':arrow_heading_up:',
              // ':leftwards_arrow_with_hook:',
              // ':arrow_right_hook:',
              // ':left_right_arrow:',
              // ':arrow_up_down:',
              // ':arrow_up_small:',
              // ':arrows_clockwise:',
              // ':arrows_counterclockwise:',
              // ':rewind:',
              // ':fast_forward:',
              // ':information_source:',
              // ':ok:',
              // ':twisted_rightwards_arrows:',
              // ':repeat:',
              // ':repeat_one:',
              // ':new:',
              // ':top:',
              // ':up:',
              // ':cool:',
              // ':free:',
              // ':ng:',
              // ':cinema:',
              // ':koko:',
              // ':signal_strength:',
              // ':u5272:',
              // ':u5408:',
              // ':u55b6:',
              // ':u6307:',
              // ':u6708:',
              // ':u6709:',
              // ':u6e80:',
              // ':u7121:',
              // ':u7533:',
              // ':u7a7a:',
              // ':u7981:',
              // ':sa:',
              // ':restroom:',
              // ':mens:',
              // ':womens:',
              // ':baby_symbol:',
              // ':no_smoking:',
              // ':parking:',
              // ':wheelchair:',
              // ':metro:',
              // ':baggage_claim:',
              // ':accept:',
              // ':wc:',
              // ':potable_water:',
              // ':put_litter_in_its_place:',
              // ':secret:',
              // ':congratulations:',
              // ':m:',
              // ':passport_control:',
              // ':left_luggage:',
              // ':customs:',
              // ':ideograph_advantage:',
              // ':cl:',
              // ':sos:',
              // ':id:',
              // ':no_entry_sign:',
              // ':underage:',
              // ':no_mobile_phones:',
              // ':do_not_litter:',
              // ':non-potable_water:',
              // ':no_bicycles:',
              // ':no_pedestrians:',
              // ':children_crossing:',
              // ':no_entry:',
              // ':eight_spoked_asterisk:',
              // ':sparkle:',
              // ':eight_pointed_black_star:',
              // ':heart_decoration:',
              // ':vs:',
              // ':vibration_mode:',
              // ':mobile_phone_off:',
              // ':chart:',
              // ':currency_exchange:',
              // ':aries:',
              // ':taurus:',
              // ':gemini:',
              // ':cancer:',
              // ':leo:',
              // ':virgo:',
              // ':libra:',
              // ':scorpius:',
              // ':sagittarius:',
              // ':capricorn:',
              // ':aquarius:',
              // ':pisces:',
              // ':ophiuchus:',
              // ':six_pointed_star:',
              // ':negative_squared_cross_mark:',
              // ':a:',
              // ':b:',
              // ':ab:',
              // ':o2:',
              // ':diamond_shape_with_a_dot_inside:',
              // ':recycle:',
              // ':end:',
              // ':back:',
              // ':on:',
              // ':soon:',
              // ':clock1:',
              // ':clock130:',
              // ':clock10:',
              // ':clock1030:',
              // ':clock11:',
              // ':clock1130:',
              // ':clock12:',
              // ':clock1230:',
              // ':clock2:',
              // ':clock230:',
              // ':clock3:',
              // ':clock330:',
              // ':clock4:',
              // ':clock430:',
              // ':clock5:',
              // ':clock530:',
              // ':clock6:',
              // ':clock630:',
              // ':clock7:',
              // ':clock730:',
              // ':clock8:',
              // ':clock830:',
              // ':clock9:',
              // ':clock930:',
              // ':heavy_dollar_sign:',
              // ':copyright:',
              // ':registered:',
              // ':tm:',
              // ':x:',
              // ':heavy_exclamation_mark:',
              // ':bangbang:',
              // ':interrobang:',
              // ':o:',
              // ':heavy_multiplication_x:',
              // ':heavy_plus_sign:',
              // ':heavy_minus_sign:',
              // ':heavy_division_sign:',
              // ':white_flower:',
              // ':100:',
              // ':heavy_check_mark:',
              // ':ballot_box_with_check:',
              // ':radio_button:',
              // ':link:',
              // ':curly_loop:',
              // ':wavy_dash:',
              // ':part_alternation_mark:',
              // ':trident:',
              // ':black_small_square:',
              // ':white_small_square:',
              // ':black_medium_small_square:',
              // ':white_medium_small_square:',
              // ':black_medium_square:',
              // ':white_medium_square:',
              // ':black_large_square:',
              // ':white_large_square:',
              // ':white_check_mark:',
              // ':black_square_button:',
              // ':white_square_button:',
              // ':black_circle:',
              // ':white_circle:',
              // ':red_circle:',
              // ':large_blue_circle:',
              // ':large_blue_diamond:',
              // ':large_orange_diamond:',
              // ':small_blue_diamond:',
              // ':small_orange_diamond:',
              // ':small_red_triangle:',
              // ':small_red_triangle_down:',
              // ':shipit:',

              '1️⃣',
              '2️⃣',
              '3️⃣',
              '4️⃣',
              '5️⃣',
              '6️⃣',
              '7️⃣',
              '8️⃣',
              '9️⃣',
              '🔟',
              '🔢',
              '0️⃣',
              '#️⃣',
              '🔣',
              '◀️',
              '⬇️',
              '▶️',
              '⬅️',
              '🔠',
              '🔡',
              '🔤',
              '↙️',
              '↘️',
              '➡️',
              '⬆️',
              '↖️',
              '↗️',
              '⏬',
              '⏫',
              '🔽',
              '⤵️',
              '⤴️',
              '↩️',
              '↪️',
              '↔️',
              '↕️',
              '🔼',
              '🔃',
              '🔄',
              '⏪',
              '⏩',
              'ℹ️',
              '🆗',
              '🔀',
              '🔁',
              '🔂',
              '🆕',
              '🔝',
              '🆙',
              '🆒',
              '🆓',
              '🆖',
              '🎦',
              '🈁',
              '📶',
              '🈵',
              '🈂️',
              '🚻',
              '🚹',
              '🚺',
              '🚼',
              '🚭',
              '🅿️',
              '♿️',
              '🚇',
              '🛄',
              '🉑',
              '🚾',
              '🚰',
              '🚮',
              '㊙️',
              '㊗️',
              'Ⓜ️',
              '🛂',
              '🛅',
              '🛃',
              '🉐',
              '🆑',
              '🆘',
              '🆔',
              '🚫',
              '🔞',
              '📵',
              '🚯',
              '🚱',
              '🚳',
              '🚷',
              '🚸',
              '⛔️',
              '✳️',
              '❇️',
              '✴️',
              '💟',
              '🆚',
              '📳',
              '📴',
              '💹',
              '💱',
              '♈️',
              '♉️',
              '♊️',
              '♋️',
              '♌️',
              '♍️',
              '♎️',
              '♏️',
              '♐️',
              '♑️',
              '♒️',
              '♓️',
              '⛎',
              '🔯',
              '❎',
              '🅰️',
              '🅱️',
              '🆎',
              '🅾️',
              '💠',
              '♻️',
              '🔚',
              '🔙',
              '🔛',
              '🔜',
              '🕐',
              '🕜',
              '🕙',
              '🕥',
              '🕚',
              '🕦',
              '🕛',
              '🕧',
              '🕑',
              '🕝',
              '🕒',
              '🕞',
              '🕓',
              '🕟',
              '🕔',
              '🕠',
              '🕕',
              '🕡',
              '🕖',
              '🕢',
              '🕗',
              '🕣',
              '🕘',
              '🕤',
              '💲',
              '©️',
              '®️',
              '™️',
              '❌',
              '❗️',
              '‼️',
              '⁉️',
              '⭕️',
              '✖️',
              '➕',
              '➖',
              '➗',
              '💮',
              '💯',
              '✔️',
              '☑️',
              '🔘',
              '🔗',
              '➰',
              '〰️',
              '〽️',
              '🔱',
              '▪️',
              '▫️',
              '◾️',
              '◽️',
              '◼️',
              '◻️',
              '⬛️',
              '⬜️',
              '✅',
              '🔲',
              '🔳',
              '⚫️',
              '⚪️',
              '🔴',
              '🔵',
              '🔷',
              '🔶',
              '🔹',
              '🔸',
              '🔺',
              '🔻',
            ],
          },
        ]
      }
    },
    computed: {
      reply() {
        return this.$store.state.reply.reply
      },
      code() {
        return this.$store.state.evaluate.code
      },
    },
    methods: {
      init() {
        this.checkEmoji(this.emojiList[0].list, 0);
      },
      // 预览
      changePreview() {
        this.previewSta = !this.previewSta;
        if (this.previewSta) {
          this.mk();
        }
      },
      // 标签框
      changeEmoji() {
        this.emojiSta = !this.emojiSta;
      },
      sub() {
        this.$validator.validateAll().then((result) => {
          // console.log(this.$validator.va);
          if (result) {
            let dat = {
              b_id: this.b_id,
              f_id: this.reply.id || '',
              name: this.name,
              website: this.website,
              mail: this.mail,
              cont: this.cont,
              type: this.type || 0,
            };
            this.$axios.post('/blog/manage/comment/evaluate', dat).then(res => {
              // console.log(res);
              if (res.data.code === 200) {
                this.name = '';
                this.website = '';
                this.mail = '';
                this.cont = '';
                this.$validator.reset();
                this.$message('提交成功', 'success');
                this.previewSta = false;
                this.emojiSta = false;
                this.empty();
                this.$store.dispatch('evaluate/list', this.code);
                $('html,body').animate({scrollTop: $('#evaluate').offset().top}, 1000);
              } else {
                this.$message(res.data.message, 'danger');
              }
            })
          }
        })
      },

      // 清空
      empty() {
        this.$store.commit('reply/change', {})
      },

      // 渲染mk
      mk() {
        let tocArray = '';
        let tocHtml = '';
        this.markdownHtml = markdownIt({
          html: true,
          linkify: true,
          typographer: true,
          breaks: true,
        })
          .use(markdownTtHighlightjs)
          .use(markdownItEmoji)
          .use(markdownItMark)
          .use(markdownItKbd)
          .use(markdownItTocAndAnchor, {
            anchorLinkSymbol: '#',
            anchorLinkPrefix: 'nav-from',
            slugify: string => '',
            tocCallback: function (tocMarkdown, array, html) {
              tocArray = array;
              tocHtml = html;
            }
          })
          .render(this.cont);

        this.$nextTick(() => {
          hljs.initHighlightingOnLoad();
          hljs.initLineNumbersOnLoad();
          // $('.mCSB_scrollTools').remove();
          // $(".hljs, .markdown-body table").mCustomScrollbar({
          //   horizontalScroll: true,
          //   scrollButtons: {
          //     enable: true
          //   },
          //   theme: 'dark-thin'
          // });
        });
      },
      insertText(str) {
        this.previewSta = false;
        $("#cont").insert({'text': str});
        this.cont = $("#cont").val();
      },
      checkEmoji(list, i) {
        this.emojiActive = i;
        this.emojiMap = list;
      },
    },
    mounted() {
      this.init();
      console.log(this.type);
    },
  }
</script>
<style lang="less" scoped>

  @media only screen and (max-width: 580px) {
    .comment {
      .forms {
        display: initial !important;

        .item {
          margin-right: 0 !important;
          margin-bottom: 20px;
        }
      }
    }
  }

  .comment {
    background-color: var(--black_color);
    border-radius: 4px;
    box-shadow: var(--box_shadow);
    padding: 20px;
    margin-bottom: 20px;

    .title {
      color: var(--block_title);
      font-size: 12px;
      text-align: left;
      margin-bottom: 10px;
    }

    .forms {
      display: flex;
      margin-bottom: 30px;

      .item {
        flex: 1;
        margin-right: 32px;
        width: 100%;

        &:last-child {
          margin-right: 0;
        }

        p {
          font-size: 14px;
          font-weight: 500;
          color: var(--color);
          margin: 0 0 5px 0;

          .txt {
            color: #999999;
          }

          &.email {
            position: relative;

            /*&:after {*/
            /*content: '通过邮箱发送回复或通知';*/
            /*display: block;*/
            /*position: absolute;*/
            /*top: 18px;*/
            /*left: 0;*/
            /*font-size: 12px;*/
            /*color: #a1a1a1;*/
            /*}*/
          }
        }

        .sub {
          position: relative;

          .reply {
            margin-top: 4px;
            display: inline-block;
            background: fade(#35cc62, 20);
            border: 1px solid #35cc62;
            box-sizing: border-box;
            /*border-radius: 16px;*/
            color: #35cc62;
            position: relative;
            height: 30px;
            padding: 4px 22px 4px 10px;

            img {
              border-radius: 10px;
              width: 20px;
              vertical-align: top;
            }

            span {
              color: #35cc62;
              font-size: 12px;
              line-height: 20px;
              vertical-align: top;
              display: inline-block;
              height: 20px;
            }

            i {
              position: absolute;
              right: 2px;
              top: 6px;
              font-size: 16px;
              color: #666666;
              cursor: pointer;
              transition: all 0.3s;

              &:hover {
                color: #000000;
              }
            }
          }

          input {
            width: 100%;
            height: 36px;
            border: 2px solid rgba(0, 0, 0, .1);
            /*border-radius: 4px;*/
            text-indent: 10px;
            font-size: 14px;
            transition: all .35s;

            &:focus {
              outline: none;
              border: 2px solid var(--hover_color);
              box-shadow: 0 0 2px #49fb7e;
            }
          }

          textarea {
            float: left;
            padding: 5px 10px;
            width: 100%;
            min-height: 128px;
            max-height: 500px;
            border: 2px solid rgba(0, 0, 0, .1);
            /*border-radius: 4px;*/
            font-size: 14px;
            resize: vertical;
            transition: border .35s;
            /*font-family: Arial;*/

            &:focus {
              outline: none;
              border: 2px solid var(--hover_color);
              box-shadow: 0 0 2px #49fb7e;
            }

          }

          > span {
            position: absolute;
            display: block;
            /*margin-top: 4px;*/
            font-size: 12px;
            color: #e60012;
          }

          .tool {
            border: 2px solid rgba(0, 0, 0, .1);
            border-top: 0;

            &:after {
              content: '';
              display: block;
              clear: both;
            }

            .icons {
              display: inline-block;
              float: left;
              margin: 0 10px;

              i {
                font-size: 18px;
                color: #4a4a4a;
                cursor: pointer;
                transition: all .3s;

                &:hover, &.active {
                  color: var(--hover_color);
                }
              }

            }
          }

          .emoji {
            margin-top: -2px;
            border: 2px solid #e5e5e5;
            background-color: var(--black_color);

            .menu {
              border-bottom: 1px solid var(--bg_color);
              display: flex;
              &:after {
                content: '';
                display: block;
                clear: both;
              }
              .menu_item {
                float: left;
                display: inline-block;
                font-size: 12px;
                color: var(--color);
                cursor: pointer;
                transition: all .3s;
                flex: 1;
                padding: 8px 0;
                text-align: center;
                &:hover {
                  color: var(--hover_color);
                }
                &.active {
                  color: var(--hover_color);
                }
              }

            }

            &:after {
              content: '';
              display: block;
              clear: both;
            }

            &.active {
              /*border: 2px solid var(--hover_color);*/
              /*box-shadow: 0 0 2px #49fb7e;*/
            }

            span {
              text-align: center;
              display: inline-block;
              height: 28px;
              width: 28px;
              padding: 2px;
              float: left;
              margin: 2px;
              border: 1px solid var(--black_color);
              cursor: pointer;

              &:hover {
                border: 1px solid var(--hover_color);
                background-color: rgba(var(--hover_color), .2);
              }
            }
          }
        }

        .markdown-body {
          min-height: 128px;
          max-height: 500px;
          border: 2px solid rgba(0, 0, 0, .1);
          /*border-radius: 4px;*/
          /* border: 1px solid #e0e0e0; */
          background-color: #ffffff;
          /*box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0.1);*/
          padding: 10px;
          overflow: auto;
        }
      }
    }

    .btn {
      text-align: center;

      button {
        font-family: Serif;
        cursor: pointer;
        width: 202px;
        height: 48px;
        line-height: 48px;
        background: var(--bg_color);
        border-radius: 4px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: var(--color);
        border: 0;
        outline: none;
      }
    }
  }

</style>
