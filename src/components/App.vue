<template>
  <div id="app">

    <div class='left' :style="borderObject">
      <div class='overlay' :style="[textObject, overlayObject]">
        <div class='quote'>Quote</div>
      </div>
    </div>

    <div class='right'>
       
        <vue-slider ref="slider" v-model="rValue" tooltip='false' :min='0' :max='255'></vue-slider>
        <input v-model="rValue" type='number'>

        <vue-slider ref="slider" v-model="gValue" tooltip='false' :min='0' :max='255'></vue-slider>
        <input v-model="gValue" type='number'>

        <vue-slider ref="slider" v-model="bValue" tooltip='false' :min='0' :max='255'></vue-slider>
        <input v-model="bValue" type='number'>

          <br/>

      <button 
        @click='textPositionChange' 
        value='flex-start'>
        Left
      </button>

      <button  
        @click='textPositionChange' 
        value='center'>
        Center
      </button> 

      <button  
        @click='textPositionChange' 
        value='flex-end'>
        Right
      </button>

      <vue-slider ref="slider" v-model="textStyle.fontSize" tooltip='false' :min='10' :max='40'></vue-slider>
      <input v-model="textStyle.fontSize" type='number'>

      <select v-model='textStyle.fontType'>
          <option value="Arial">Arial</option>
          <option value="Courier">Courier</option>
          <option value="Verdana">Verdana</option>
          <option value="Georgia">Georgia</option>
        </select>

      <br />


      <button 
        @click='overlayChange' 
        value='overlay'>
        Overlay
      </button>

      <button  
        @click='overlayChange' 
        value='border'>
        Border
      </button> 

      <button  
        @click='overlayChange' 
        value='bars'>
        Bars
      </button>

      <button  
        @click='overlayChange' 
        value='none'>
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
      textStyle: {
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
      }
		}
  },
  computed: {
    borderObject(){
      return {
        'border-color': `rgb(${this.rValue}, ${this.gValue}, ${this.bValue})`,
        'color' : `rgb(${this.rValue}, ${this.gValue}, ${this.bValue})`
      }
    },
    textObject(){
      return {
        'font-size':this.textStyle.fontSize + 'px',
        'font-family': this.textStyle.fontType,
        'align-items': 'center',
        'justify-content':this.textStyle.position
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
    }
  },
  methods: {
    textPositionChange(e){
      this.textStyle.position = e.target.value;
    },
    fontChange(e){
      this.textStyle.fontType = e.target.value;
    },
    overlayChange(e){
      var borderColor = `rgb(${this.rValue}, ${this.gValue}, ${this.bValue})`;
      var borderVal = `1px solid ${borderColor}`;
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
    }
  }
}
</script>

<style scoped>
#app {
  width: 500px;
  height: 200px;
  display:flex;
}
.left, .right {
  width:50%;
  position: relative;
}

.left {
  border: 4px solid black;
  display:flex;
  align-items: center;
  justify-content: center;
  
}

.quote{
  z-index:10;
  padding:20px;
}
.overlay {
  z-index: 1;
  display:flex;
  width: 90%;
  height:90%;
}

</style>
