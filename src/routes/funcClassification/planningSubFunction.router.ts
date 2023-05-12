import { Router } from "express";
import planningSubFunctionController from "../../controllers/funcClassification/PlanningSubFunctionController.js";

const planningSubFunctionRouter = Router();

/**
 * @swagger
 * tags:
 *   name:  Planning_sub_function
 *   description: Operações relacionadas aos planejamentos de sub funções
 * components:
 *   schemas:
 *     Sub_function:
 *       type: object
 *       properties:
 *         description:
 *             type: string
 *         number:
 *             type: string
 *         planning_function_id:
 *             type: number
 *         year:
 *             type: number
 *         start_date:
 *             type: string
 *             format: date-time
 *         final_date:
 *             type: string
 *             format: date-time
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
 * /func_classification/sub_function:
 *   post:
 *     summary: Criar sub função
 *     description: Criar sub função
 *     tags: [Planning_sub_function]
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
 *         name: create_sub_function
 *         description: Criar sub função
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Sub_function'
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
planningSubFunctionRouter.post("/", planningSubFunctionController.register);
/**
 * @swagger
 *
 * /func_classification/sub_function:
 *   put:
 *     summary: Atualizar sub função
 *     description: Atualizar sub função
 *     tags: [Planning_sub_function]
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
 *         name: update_sub_function
 *         description: Atualizar sub função
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             sub_function_id:
 *               type: number
 *             sub_function:
 *               $ref: '#/components/schemas/Sub_function'
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
planningSubFunctionRouter.put("/", planningSubFunctionController.update);
/**
 * @swagger
 *
 * /func_classification/sub_function/:id:
 *   get:
 *     summary: Pegar informações sobre uma sub função
 *     description: Pegar informações sobre uma sub função
 *     tags: [Planning_sub_function]
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
 *         description: Pegar informações sobre uma sub função
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Sub função
 *         schema:
 *           $ref: '#/components/schemas/Sub_function'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningSubFunctionRouter.get("/:id", planningSubFunctionController.show);
/**
 * @swagger
 *
 * /func_classification/sub_function/:id:
 *   delete:
 *     summary: Deletar sub função
 *     description: Deletar sub função
 *     tags: [Planning_sub_function]
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
 *         description: Deletar sub função
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
planningSubFunctionRouter.delete("/:id", planningSubFunctionController.delete);

export default planningSubFunctionRouter;