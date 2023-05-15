import { Router } from "express";
import planningStandardResourceController from "../../controllers/funcClassification/PlanningStandardResourceController.js";
import { permission } from "../../middlewares/permissions.js";

const planningStandardResourceRouter = Router();

/**
 * @swagger
 * tags:
 *   name:  Planning_standard_resource
 *   description: Operações relacionadas aos planejamentos de padrão de recurso
 * components:
 *   schemas:
 *     Standard_resource:
 *       type: object
 *       properties:
 *         description:
 *             type: string
 *         level:
 *             type: string
 *         separator:
 *             type: string
 *         size_level:
 *             type: number
 *         type_resource_id:
 *             type: number
 *         type_tce:
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
 * /func_classification/standard_resource:
 *   post:
 *     summary: Criar padrão de recurso
 *     description: Criar padrão de recurso
 *     tags: [Planning_standard_resource]
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
 *         name: create_standard_resource
 *         description: Criar padrão de recurso
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             standards: 
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Standard_resource'        
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
planningStandardResourceRouter.post("/", permission(["create_standard_revenue"]), planningStandardResourceController.register);
/**
 * @swagger
 *
 * /func_classification/standard_resource:
 *   put:
 *     summary: Atualizar padrão de recurso
 *     description: Atualizar padrão de recurso
 *     tags: [Planning_standard_resource]
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
 *         name: update_standard_resource
 *         description: Atualizar padrão de recurso
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             standard_resource_id:
 *               type: number
 *             standard_resource:
 *               $ref: '#/components/schemas/Standard_resource'
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
planningStandardResourceRouter.put("/", permission(["update_standard_revenue"]), planningStandardResourceController.update);
/**
 * @swagger
 *
 * /func_classification/standard_resource/:id:
 *   get:
 *     summary: Pegar informações sobre um padrão de recurso
 *     description: Pegar informações sobre um padrão de recurso
 *     tags: [Planning_standard_resource]
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
 *         description: Pegar informações sobre um padrão de recurso
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Padrão de recurso
 *         schema:
 *           $ref: '#/components/schemas/Standard_resource'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningStandardResourceRouter.get("/:id", permission(["get_standard_revenue"]), planningStandardResourceController.show);
/**
 * @swagger
 *
 * /func_classification/standard_resource/:id:
 *   delete:
 *     summary: Deletar padrão de recurso
 *     description: Deletar padrão de recurso
 *     tags: [Planning_standard_resource]
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
 *         description: Deletar padrão de recurso
 *         required: true
 *         schema:
 *           type: string
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
planningStandardResourceRouter.delete("/:id", permission(["delete_standard_revenue"]), planningStandardResourceController.delete);

export default planningStandardResourceRouter;