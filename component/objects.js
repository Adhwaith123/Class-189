AFRAME.registerComponent(objects,{
init:function(){
    mobs()
},

mobs:function(){
    // for(var i=0; i<7; i++){
        var id="cow"
        var cow =document.createElement("a-entity")
        cow.setAttribute("id",id)
        cow.setAttribute("position",{x:5,y:0,z:15})
        cow.setAttribute("scale", { x:0.04, y:0.04, z:0.04 })
        cow.setAttribute("./assets/minecraft_-_cow/scene.gltf")
        cow.setAttribute("animation","property: position; to: 1 0 5; dur: 10000")



 //   }
}
})