import { Router } from "express";
import planningNatureCostController from "../../controllers/funcClassification/PlanningNatureCostController.js";
import { permission } from "../../middlewares/permissions.js";

const planningNatureCostRouter = Router();

/**
   * @swagger
   * tags:
   *   name:  Planning_nature_cost
   *   description: Operações relacionadas aos planejamentos de natureza de recurso
   * components:
   *   schemas:
   *     Nature_cost:
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
   *         final_date:
   *             type: string
   *             format: date-time
   *         type:
   *             type: string
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
   * /func_classification/nature_cost:
   *   post:
   *     summary: Criar natureza da despesa
   *     description: Criar natureza da despesa
   *     tags: [Planning_nature_cost]
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
   *         name: create_nature_cost
   *         description: Criar natureza da despesa
   *         required: true
   *         schema:
   *           $ref: '#/components/schemas/Nature_cost'
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
planningNatureCostRouter.post("/", permission(["create_nature_cost"]), planningNatureCostController.register);
/**
 * @swagger
 *
 * /func_classification/nature_cost:
 *   put:
 *     summary: Atualizar natureza de despesa
 *     description: Atualizar natureza de despesa
 *     tags: [Planning_nature_cost]
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
 *         name: update_nature_cost
 *         description: Atualizar natureza de despesa
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nature_cost_id:
 *               type: number
 *             nature_cost:
 *               $ref: '#/components/schemas/Nature_cost'
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
planningNatureCostRouter.put("/", permission(["update_nature_cost"]), planningNatureCostController.update);
/**
 * @swagger
 *
 * /func_classification/nature_cost/:id:
 *   get:
 *     summary: Pegar informações sobre uma natureza de despesa
 *     description: Pegar informações sobre uma natureza de despesa
 *     tags: [Planning_nature_cost]
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
 *         description: Pegar informações sobre uma natureza de despesa
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Natureza de despesa
 *         schema:
 *           $ref: '#/components/schemas/Nature_cost'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningNatureCostRouter.get("/:id", permission(["get_nature_cost"]), planningNatureCostController.show);
/**
 * @swagger
 *
 * /func_classification/nature_cost/:id:
 *   delete:
 *     summary: Deletar natureza de despesa
 *     description: Deletar natureza de despesa
 *     tags: [Planning_nature_cost]
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
 *         description: Deletar natureza de despesa
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
planningNatureCostRouter.delete("/:id", permission(["delete_nature_cost"]), planningNatureCostController.delete);

export default planningNatureCostRouter;