/*

*/

import Serializer from 'lance-gg/es5/serialize/Serializer';
import DynamicObject from 'lance-gg/es5/serialize/DynamicObject';
import Renderer from '../client/MyRenderer';

export default class MJCircle extends DynamicObject {

    constructor(gameEngine, options, props){
        super(gameEngine, options, props);
        this.showThrust = 0;
        this.isBot = false;
        this.angle = 0;
    }

    onAddToWorld(gameEngine) {
        //console.log(gameEngine);
        let options = {
            radius:20,
            params:{ 
                isSensor: true//,
                //isStatic: true 
            }
        };
        this.physicsObj = gameEngine.physicsEngine.addCircle(this.position.x,this.position.y, options);
        this.physicsObj.gameObject = this;
    }

    onRemoveFromWorld(gameEngine) {
        if(this.physicsObj){
            this.gameEngine.physicsEngine.removeObject(this.physicsObj);
        }
    }

    // update position, quaternion, and velocity from new physical state.
    refreshFromPhysics() {
        //2D
        this.position.set(this.physicsObj.position.x,this.physicsObj.position.y);
        this.angle = this.physicsObj.angle;
    }

    // update position, quaternion, and velocity from new physical state.
    refreshToPhysics() {
        //2D setup needed
        this.physicsObj.position.x = this.position.x;
        this.physicsObj.position.y = this.position.y;
        this.physicsObj.angle = this.angle;

        //3D
        //this.physicsObj.position.copy(this.position);
        //this.physicsObj.quaternion.copy(this.quaternion);
        //this.physicsObj.velocity.copy(this.velocity);
        //this.physicsObj.angularVelocity.copy(this.angularVelocity);
    }
    
}