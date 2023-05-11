import { Router } from "express";
import planningTypeRespController from "../../controllers/register/PlanningTypeRespController.js";

const planningTypeRespRouter = Router();

/**
 * @swagger
 * tags:
 *   name:  Planning_type_resp
 *   description: Operações relacionadas aos tipos responsáveis
 * components:
 *   schemas:
 *     Type_resp:
 *       type: object
 *       properties:
 *         description:
 *             type: string
 *         nb_tce:
 *             type: string
 *         default:
 *             type: boolean
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
 * /register/plan_type_resp:
 *   post:
 *     summary: Criar tipos responsáveis
 *     description: Criar tipos responsáveis
 *     tags: [Planning_type_resp]
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
 *         name: create_type_resp
 *         description: Criar tipos responsáveis
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Type_resp'
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
planningTypeRespRouter.post("/", planningTypeRespController.register);
/**
 * @swagger
 *
 * /register/plan_type_resp:
 *   put:
 *     summary: Atualizar tipo responsáveis
 *     description: Atualizar tipo responsáveis
 *     tags: [Planning_type_resp]
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
 *         name: update_type_resp
 *         description: Atualizar tipo responsáveis
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             type_resp_id:
 *               type: number
 *             type_resp:
 *               $ref: '#/components/schemas/Type_resp'
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
planningTypeRespRouter.put("/", planningTypeRespController.update);
/**
 * @swagger
 *
 * /register/plan_type_resp/id=:
 *   get:
 *     summary: Pegar informações sobre um tipo responsável
 *     description: Pegar informações sobre um tipo responsável
 *     tags: [Planning_type_resp]
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
 *         description: Pegar informações sobre um tipo responsável
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Tipo responsável
 *         schema:
 *           $ref: '#/components/schemas/Type_resp'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningTypeRespRouter.get("/:id", planningTypeRespController.typeResp);
/**
 * @swagger
 *
 * /register/plan_type_resp/id=:
 *   delete:
 *     summary: Deletar tipo responsável
 *     description: Deletar tipo responsável
 *     tags: [Planning_type_resp]
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
 *         description: Deletar tipo responsável
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
planningTypeRespRouter.delete("/:id", planningTypeRespController.delete);

export default planningTypeRespRouter;