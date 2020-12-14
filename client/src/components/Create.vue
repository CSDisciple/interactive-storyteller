<template>
    <div class="editor">
        <medium-editor :text='myText' :options='options' custom-tag='h2' v-on:edit='applyTextEdit'/>
    </div>
</template>

<script>
export default {
  name: "create",
  components: {
    
  
  }
};
</script>

<style scoped>
.editor{
  margin:0 auto;
  width: 50%;
  background-color: #EEEEEE;
  border-radius: 1em;
}
template{
background-color: #f5f5f5;
width: 50em;
height: 15em;
border-radius: 15px;
margin: 0 auto;
}

</style>