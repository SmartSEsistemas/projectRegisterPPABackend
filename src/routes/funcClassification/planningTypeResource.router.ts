import { Router } from "express";
import planningTypeResourceController from "../../controllers/funcClassification/PlanningTypeResourceController.js";
const planningTypeResourceRouter = Router();

/**
 * @swagger
 * tags:
 *   name:  Planning_type_resource
 *   description: Operações relacionadas aos planejamentos de tipo de recurso
 * components:
 *   schemas:
 *     Type_resource:
 *       type: object
 *       properties:
 *         description:
 *             type: string
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
 * /func_classification/type_resource:
 *   post:
 *     summary: Criar do tipo de recurso
 *     description: Criar do tipo de recurso
 *     tags: [Planning_type_resource]
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
 *         name: create_type_resource
 *         description: Criar do tipo de recurso
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Type_resource'
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
planningTypeResourceRouter.post("/", planningTypeResourceController.register);
/**
 * @swagger
 *
 * /func_classification/type_resource:
 *   put:
 *     summary: Atualizar do tipo de recurso
 *     description: Atualizar do tipo de recurso
 *     tags: [Planning_type_resource]
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
 *         name: update_type_resource
 *         description: Atualizar do tipo de recurso
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             type_resource_id:
 *               type: number
 *             type_resource:
 *               $ref: '#/components/schemas/Type_resource'
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
planningTypeResourceRouter.put("/", planningTypeResourceController.update);
/**
 * @swagger
 *
 * /func_classification/type_resource/:id:
 *   get:
 *     summary: Pegar informações sobre um tipo de recurso
 *     description: Pegar informações sobre um tipo de recurso
 *     tags: [Planning_type_resource]
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
 *         description: Pegar informações sobre um tipo de recurso
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Tipo de recurso
 *         schema:
 *           $ref: '#/components/schemas/Type_resource'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningTypeResourceRouter.get("/:id", planningTypeResourceController.show);
/**
 * @swagger
 *
 * /func_classification/type_resource/:id:
 *   delete:
 *     summary: Deletar tipo de recurso
 *     description: Deletar tipo de recurso
 *     tags: [Planning_type_resource]
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
 *         description: Deletar tipo de recurso
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
planningTypeResourceRouter.delete("/:id", planningTypeResourceController.delete);

export default planningTypeResourceRouter;