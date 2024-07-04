import {CognitoUserPool} from "amazon-cognito-identity-js" ;

const poolData = {
    UserPoolId : "us-east-1_KXqsMzWD7",
    ClientId: "6pvv44clorio0g7o51fknk3ar2"
}


export default new CognitoUserPool(poolData);