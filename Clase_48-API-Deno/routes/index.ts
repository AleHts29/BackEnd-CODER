
import { Router } from "../devDependencias.ts";
import {findUserAll, findUser } from "../helpers/users.ts"

export const router = new Router()
.get('api/users', findUserAll)
.get('api/users/:id', findUser)
// .post('api/users', createUser)
