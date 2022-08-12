import { Context, helpers } from "../devDependencias.ts";
import {User} from "../types/user.ts"

const arr = []


export const findUserAll = (ctx: Context)=>{
    try {
        ctx.response.body = arr
    } catch (error) {
        ctx.response.status = 404
        ctx.response.body = {msg: error.message}
    }
}

export const findUser = (ctx: Context)=>{
    try {
        const {id} = helpers.getQuery(ctx, {mergeParams: true}); // {id: "123"}
        const user: User = arr.find((x)=>{
            return x.uuid === id
        })
        ctx.response.body = user;
    } catch (error) {
        ctx.response.status = 404
        ctx.response.body = {msg: error.message}
    }
}