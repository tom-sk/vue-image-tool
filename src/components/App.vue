<template>
  <div id="app">

    <div class='left' :style="borderObject">
      <div class='overlay' :style="overlayObject">

        <div class="quote">
          <div class='' :style="quoteTextObject">The Way Get Started Is To Quit Talking And Begin Doing</div>

          

          <div class='author' :style="authorTextObject">
            <div class="style-bar" :style='barObject'></div>
            Walt Disney
          </div>

        </div>

      </div>
    </div>

    <div class='right'>
<!-- IMAGE BORDER -->
<p>Image Border</p>
      <button @click='imageBorderChange' value='display'>
        Border
      </button>

      <button @click='imageBorderChange' value='none'>
        None
      </button> 
<br >
<!-- COLOUR CHANGE -->
<p>Color</p>
        <vue-slider ref="slider" v-model="rValue" tooltip='false' :min='0' :max='255' :processStyle='rSliderColor'></vue-slider>
        <input v-model="rValue" type='number'>

        <vue-slider ref="slider" v-model="gValue" tooltip='false' :min='0' :max='255' :processStyle='gSliderColor'></vue-slider>
        <input v-model="gValue" type='number'>

        <vue-slider ref="slider" v-model="bValue" tooltip='false' :min='0' :max='255' :processStyle='bSliderColor'></vue-slider>
        <input v-model="bValue" type='number'>

          <br/>
<!-- QUOTE TEXT CHANGE -->
<p>Quote</p>
      <button @click='quoteTextPositionChange' value='left'>
        Left
      </button>

      <button @click='quoteTextPositionChange' value='center'>
        Center
      </button> 

      <button @click='quoteTextPositionChange' value='right'>
        Right
      </button>

      <!-- font size/type  -->
      <vue-slider ref="slider" v-model="quoteTextStyle.fontSize" tooltip='false' :min='6' :max='40' :processStyle='processStyle2'></vue-slider>
      <input v-model="quoteTextStyle.fontSize" type='number'>

      <select v-model='quoteTextStyle.fontType'>
          <option value="Arial">Arial</option>
          <option value="Courier">Courier</option>
          <option value="Verdana">Verdana</option>
          <option value="Georgia">Georgia</option>
        </select>

      <br />
<!-- AUTHOR TEXT CHANGE -->
<p>Author</p>
      <button @click='authorTextPositionChange' value='left'>
        Left
      </button>

      <button @click='authorTextPositionChange' value='center'>
        Center
      </button> 

      <button @click='authorTextPositionChange' value='right'>
        Right
      </button>

      <!-- font size/type  -->
      <vue-slider ref="slider" v-model="authorTextStyle.fontSize" tooltip='false' :min='6' :max='40' :processStyle='processStyle2'></vue-slider>
      <input v-model="authorTextStyle.fontSize" type='number'>

      <select v-model='authorTextStyle.fontType'>
          <option value="Arial">Arial</option>
          <option value="Courier">Courier</option>
          <option value="Verdana">Verdana</option>
          <option value="Georgia">Georgia</option>
        </select>

      <br />

<!-- STYLE BAR -->
<p>Style Bar</p>
      <button 
        @click='barPositionChange' 
        value='left'>
        Left
      </button>

      <button @click='barPositionChange' value='center'>
        Center
      </button> 

      <button @click='barPositionChange' value='right'>
        Right
      </button>

    <br >
       <button @click='barShow' value='display'>
         Seperator 
      </button> 

      <button @click='barShow' value='none'>
        None
      </button>
    <br />
<!-- OVERLAY CHANGE -->
<p>Overlay</p>
      <button @click='overlayChange' value='overlay'>
        Overlay
      </button>

      <button @click='overlayChange' value='border'>
        Border
      </button> 

      <button @click='overlayChange' value='bars'>
        Bars
      </button>

      <button @click='overlayChange' value='none'>
        None
      </button>


    </div>
  </div>
</template>

<script>

import vueSlider from 'vue-slider-component';

export default {
    components: {
		vueSlider
	},
  data () {
		return {
      rValue:1,
      gValue:1,
      bValue:1,
      quoteTextStyle: {
        position: 'center',
        fontSize: '25',
        fontType: 'arial'
      },
      authorTextStyle: {
        position: 'center',
        fontSize: '25',
        fontType: 'arial'
      },
      overlayStyle: {
        backgroundOpacity: 0.3,
        borderTop : '',
        borderBottom: '',
        borderLeft : '',
        borderRight: ''
      },
      barStyle: {
        marginLeft: '',
        marginRight: '',
        color: '',
        borderWidth: ''
      },
      borderStyle: {
        border: ''
      },
      rSliderColor: {"backgroundColor": `#F44336`},
      gSliderColor: {"backgroundColor": `#00C853`},
      bSliderColor: {"backgroundColor": `#03A9F4`},
		}
  },
  computed: {
    borderObject(){
      return {
        'border-color': `rgb(${this.rValue}, ${this.gValue}, ${this.bValue})`,
        'color' : `rgb(${this.rValue}, ${this.gValue}, ${this.bValue})`,
        'border-width': this.borderStyle.border
      }
    },
    processStyle2(){
      return {
        "backgroundColor": `rgb(${this.rValue}, ${this.gValue}, ${this.bValue})`
      }
    },
    quoteTextObject(){
      return {
        'font-size':this.quoteTextStyle.fontSize + 'px',
        'font-family': this.quoteTextStyle.fontType,
        'align-items': 'center',
        'text-align':this.quoteTextStyle.position
      }
    },
    authorTextObject(){
      return {
        'font-size':this.authorTextStyle.fontSize + 'px',
        'font-family': this.authorTextStyle.fontType,
        'align-items': 'center',
        'text-align':this.authorTextStyle.position
      }
    },
    overlayObject(){
      return {
       'background': `rgba(51, 51, 51, ${this.overlayStyle.backgroundOpacity})`,
       'border-top': this.overlayStyle.borderTop,
       'border-bottom': this.overlayStyle.borderBottom,
       'border-left': this.overlayStyle.borderLeft,
       'border-right': this.overlayStyle.borderRight,
       'border-color': `rgb(${this.rValue}, ${this.gValue}, ${this.bValue})`
      //  'border': this.overlayStyle.border
      }
    },
    barObject(position){
      return {
        'margin-right': this.barStyle.marginRight,
        'margin-left': this.barStyle.marginLeft,
        'border-color': `rgb(${this.rValue}, ${this.gValue}, ${this.bValue})`,
        'border-width' : this.barStyle.borderWidth
      }
    }
  },
  methods: {
    quoteTextPositionChange(e){
      this.quoteTextStyle.position = e.target.value;
    },
    authorTextPositionChange(e){
      this.authorTextStyle.position = e.target.value;
    },
    fontChange(e){
      this.quoteTextStyle.fontType = e.target.value;
    },
    overlayChange(e){
      var borderColor = `rgb(${this.rValue}, ${this.gValue}, ${this.bValue})`;
      var borderVal = `2px solid ${borderColor}`;
      var noBorder = `0px solid ${borderColor}`;

      if(e.target.value == 'none') {

        this.overlayStyle.backgroundOpacity = 0;
        this.overlayStyle.borderTop = noBorder;
        this.overlayStyle.borderLeft = noBorder;
        this.overlayStyle.borderRight = noBorder;
        this.overlayStyle.borderBottom = noBorder;
        
      } else if(e.target.value == 'border'){

        this.overlayStyle.backgroundOpacity = 0;
        this.overlayStyle.borderTop = borderVal;
        this.overlayStyle.borderLeft = borderVal;
        this.overlayStyle.borderRight = borderVal;
        this.overlayStyle.borderBottom = borderVal;

      } else if(e.target.value == 'bars'){

        this.overlayStyle.backgroundOpacity = 0;
        this.overlayStyle.borderTop = borderVal;
        this.overlayStyle.borderBottom = borderVal;
        this.overlayStyle.borderLeft = noBorder;
        this.overlayStyle.borderRight = noBorder;

      } else if(e.target.value == 'overlay'){

        this.overlayStyle.backgroundOpacity = 0.3;
        this.overlayStyle.borderTop = noBorder;
        this.overlayStyle.borderLeft = noBorder;
        this.overlayStyle.borderRight = noBorder;
        this.overlayStyle.borderBottom = noBorder;
      }
    },
    barPositionChange(e){
      if(e.target.value == 'right'){
        // this.barStyle.margin = 'auto';
        this.barStyle.marginRight = '0px';
        this.barStyle.marginLeft = 'auto';
      } else if(e.target.value == 'left'){
        this.barStyle.marginLeft = '0px';
        this.barStyle.marginRight = 'auto';

      } else if(e.target.value == 'center') {
        
        this.barStyle.marginRight = 'auto';
        this.barStyle.marginLeft = 'auto';

      }
    },
    barShow(e){
      if(e.target.value == 'none'){
        this.barStyle.borderWidth = '0px'
      } else if(e.target.value == 'display'){
        this.barStyle.borderWidth = '2px'
      }
    },
    imageBorderChange(e){
      if(e.target.value == 'none'){
        this.borderStyle.border = '0px'
      } else if(e.target.value == 'display'){
        this.borderStyle.border = '2px'
      }
    }
  }
}
</script>

<style src="/Users/thomasscully-king/Desktop/Desktop/web/Vue/vue-image-tool/src/assests/style.css">
