import { Router } from "express";
import planningRespController from "../../controllers/register/PlanningRespController.js";
import { permission } from "../../middlewares/permissions.js";

const planningRespRouter = Router();

/**
 * @swagger
 * tags:
 *   name:  Planning_resp
 *   description: Operações relacionadas aos responsáveis
 * components:
 *   schemas:
 *     Resp:
 *       type: object
 *       properties:
 *         natural_person_id:
 *             type: number
 *         planning_type_resp_id:
 *             type: number
 *         office:
 *             type: string
 *         crc:
 *             type: string
 *             optional: true
 *         start_date:
 *             type: string
 *             format: date-time
 *         final_date:
 *             type: string
 *             format: date-time
 *         entity_id:
 *             type: number
 *     Message:
 *       type: object
 *       properties:
 *         status:
 *             type: string
 *         message:
 *             type: string
 */
/**
 * @swagger
 *
 * /register/plan_resp:
 *   post:
 *     summary: Vincular responsáveis
 *     description: Vincular responsáveis
 *     tags: [Planning_resp]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: body
 *         name: link_resp
 *         description: Vincular responsáveis
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Resp'
 *     responses:
 *       201:
 *         description: Mensagem
 *         schema:
 *           $ref: '#/components/schemas/Message'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningRespRouter.post("/", permission(["create_plan_resp"]), planningRespController.register);
/**
 * @swagger
 *
 * /register/plan_resp:
 *   put:
 *     summary: Atualizar responsáveis
 *     description: Atualizar responsáveis
 *     tags: [Planning_resp]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: body
 *         name: update_resp
 *         description: Atualizar responsáveis
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             resp_id:
 *               type: number
 *             resp:
 *               $ref: '#/components/schemas/Resp'
 *     responses:
 *       200:
 *         description: Mensagem
 *         schema:
 *           $ref: '#/components/schemas/Message'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningRespRouter.put("/", permission(["update_plan_resp"]), planningRespController.update);
/**
 * @swagger
 *
 * /register/plan_resp/id=:
 *   get:
 *     summary: Pegar informações sobre um responsável
 *     description: Pegar informações sobre um responsável
 *     tags: [Planning_resp]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: param
 *         name: id
 *         description: Pegar informações sobre um responsável
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Responsável
 *         schema:
 *           $ref: '#/components/schemas/Resp'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningRespRouter.get("/:id", permission(["get_plan_resp"]), planningRespController.resp);
/**
 * @swagger
 *
 * /register/plan_resp/id=:
 *   delete:
 *     summary: Deletar responsável
 *     description: Deletar responsável
 *     tags: [Planning_resp]
 *     security:
 *       - entityNameHeader: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Entity-Name
 *         description: Nome da entidade a ser consultada
 *         required: true
 *         type: string
 *         default: Nome da entidade
 *       - in: param
 *         name: id
 *         description: Deletar responsável
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Message
 *         schema:
 *           $ref: '#/components/schemas/Message'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningRespRouter.delete("/:id", permission(["delete_plan_resp"]), planningRespController.delete);

export default planningRespRouter;