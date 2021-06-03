<template>
<div>
    <ol>
        <li v-for="item in items" :key="item.name" v-bind:style="{ 'background-color' : item.color}">{{item.name}}</li>
    </ol>
</div>
</template>

<script>
export default ({
        data() {
            return {
                
            items:[
                {name:"First",color:"rgb(0, 217, 255)"},
                {name:"Second",color:"rgb(255, 217, 255)"},
                {name:"Third",color:"rgb(0, 0, 255)"},
                {name:"Fourth",color:"rgb(255,0, 0)"}
            ]
        
            }
        }
})
</script>

<style scoped>
    ol {
        display:block;
    }

    li {
        text-align: center;
        
        display:block;
        float: left;
        margin-left: 0px;
        background-color: rgb(0, 217, 255);
        width: 200px;
        height: 40px;
        list-style:none; 
    }
</style>
