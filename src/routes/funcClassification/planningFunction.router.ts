import { Router } from "express";
import planningFunctionController from "../../controllers/funcClassification/PlanningFunctionController.js";

const planningFunctionRouter = Router();

/**
 * @swagger
 * tags:
 *   name:  Planning_function
 *   description: Operações relacionadas aos planejamentos de funções
 * components:
 *   schemas:
 *     Function:
 *       type: object
 *       properties:
 *         description:
 *             type: string
 *         number:
 *             type: string
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
 * /func_classification/function:
 *   post:
 *     summary: Criar função
 *     description: Criar função
 *     tags: [Planning_function]
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
 *         name: create_function
 *         description: Criar função
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Function'
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
planningFunctionRouter.post("/", planningFunctionController.register);
/**
 * @swagger
 *
 * /func_classification/function:
 *   put:
 *     summary: Atualizar função
 *     description: Atualizar função
 *     tags: [Planning_function]
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
 *         name: update_function
 *         description: Atualizar função
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             function_id:
 *               type: number
 *             function_body:
 *               $ref: '#/components/schemas/Function'
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
planningFunctionRouter.put("/", planningFunctionController.update);
/**
 * @swagger
 *
 * /func_classification/function/:id:
 *   get:
 *     summary: Pegar informações sobre uma função
 *     description: Pegar informações sobre uma função
 *     tags: [Planning_function]
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
 *         description: Pegar informações sobre uma função
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Função
 *         schema:
 *           $ref: '#/components/schemas/Function'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningFunctionRouter.get("/:id", planningFunctionController.show);
/**
 * @swagger
 *
 * /func_classification/function/:id:
 *   delete:
 *     summary: Deletar função
 *     description: Deletar função
 *     tags: [Planning_function]
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
 *         description: Deletar função
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
planningFunctionRouter.delete("/:id", planningFunctionController.delete);

export default planningFunctionRouter;