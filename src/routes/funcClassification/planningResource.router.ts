import { Router } from "express";
import planningResourceController from "../../controllers/funcClassification/PlanningResourceController.js";
import { permission } from "../../middlewares/permissions.js";

const planningResourceRouter = Router();

/**
   * @swagger
   * tags:
   *   name:  Planning_resource
   *   description: Operações relacionadas aos planejamentos de recurso
   * components:
   *   schemas:
   *     Resource:
   *       type: object
   *       properties:
   *         number:
   *             type: string
   *         description:
   *             type: string
   *         year:
   *             type: number
   *         start_date:
   *             type: string
   *             format: date-time
   *         planning_type_resource_id:
   *             type: number
   *         superavit:
   *             type: boolean
   *         planning_resource_id:
   *             type: number
   *         standard_resource_id:
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
   * /func_classification/resource:
   *   post:
   *     summary: Criar recurso
   *     description: Criar recurso
   *     tags: [Planning_resource]
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
   *         name: create_resource
   *         description: Criar recurso
   *         required: true
   *         schema:
   *           $ref: '#/components/schemas/Resource'
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
planningResourceRouter.post("/", permission(["create_resource"]), planningResourceController.register);
/**
 * @swagger
 *
 * /func_classification/resource:
 *   put:
 *     summary: Atualizar recurso
 *     description: Atualizar recurso
 *     tags: [Planning_resource]
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
 *         name: update_resource
 *         description: Atualizar recurso
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             resource_id:
 *               type: number
 *             resource:
 *               $ref: '#/components/schemas/Resource'
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
planningResourceRouter.put("/", permission(["update_resource"]), planningResourceController.update);
/**
 * @swagger
 *
 * /func_classification/resource/:id:
 *   get:
 *     summary: Pegar informações sobre um recurso
 *     description: Pegar informações sobre um recurso
 *     tags: [Planning_resource]
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
 *         description: Pegar informações sobre um recurso
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Recurso
 *         schema:
 *           $ref: '#/components/schemas/Resource'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningResourceRouter.get("/:id", permission(["get_resource"]), planningResourceController.show);
/**
 * @swagger
 *
 * /func_classification/resource/:id:
 *   delete:
 *     summary: Deletar recurso
 *     description: Deletar recurso
 *     tags: [Planning_resource]
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
 *         description: Deletar recurso
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
planningResourceRouter.delete("/:id", permission(["delete_resource"]), planningResourceController.delete);

export default planningResourceRouter;