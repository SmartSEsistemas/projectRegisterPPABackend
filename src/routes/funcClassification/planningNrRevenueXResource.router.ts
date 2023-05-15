import { Router } from "express";
import { permission } from "../../middlewares/permissions.js";
import planningNrRevenueXResourceController from "../../controllers/funcClassification/PlanningNrRevenueXResourceController.js";

const planningNrRevenueXResourceRouter = Router();

/**
   * @swagger
   * tags:
   *   name:  Planning_nrrevenue_resource
   *   description: Operações relacionadas aos planejamentos de natureza de receita X recurso X recurso
   * components:
   *   schemas:
   *     Nr_revenue_resource:
   *       type: object
   *       properties:
   *         planning_nature_revenue_id:
   *             type: number
   *         planning_resource_id:
   *             type: number
   *         percentage:
   *             type: number
   *         required:
   *             type: boolean
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
   * /func_classification/nrrevenue_x_resource:
   *   post:
   *     summary: Criar natureza de receita X recurso
   *     description: Criar natureza de receita X recurso
   *     tags: [Planning_nrrevenue_resource]
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
   *         name: create_nrrevenue_x_resource
   *         description: Criar natureza de receita X recurso
   *         required: true
   *         schema:
   *           $ref: '#/components/schemas/Nr_revenue_resource'
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
planningNrRevenueXResourceRouter.post("/", permission(["create_nrrenevue_x_resource"]), planningNrRevenueXResourceController.register);
/**
 * @swagger
 *
 * /func_classification/nrrevenue_x_resource:
 *   put:
 *     summary: Atualizar natureza de receita X recurso
 *     description: Atualizar natureza de receita X recurso
 *     tags: [Planning_nrrevenue_resource]
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
 *         name: update_nrrevenue_x_resource
 *         description: Atualizar natureza de receita X recurso
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nrrevenue_resource_id:
 *               type: number
 *             nrrevenue_resource:
 *               $ref: '#/components/schemas/Nr_revenue_resource'
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
planningNrRevenueXResourceRouter.put("/", permission(["update_nrrenevue_x_resource"]), planningNrRevenueXResourceController.update);
/**
 * @swagger
 *
 * /func_classification/nrrevenue_x_resource/:id:
 *   get:
 *     summary: Pegar informações sobre um natureza de receita X recurso
 *     description: Pegar informações sobre um natureza de receita X recurso
 *     tags: [Planning_nrrevenue_resource]
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
 *         description: Pegar informações sobre um natureza de receita X recurso
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Natureza de receita X recurso
 *         schema:
 *           $ref: '#/components/schemas/Nr_revenue_resource'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningNrRevenueXResourceRouter.get("/:id", permission(["get_nrrenevue_x_resource"]), planningNrRevenueXResourceController.show);
/**
 * @swagger
 *
 * /func_classification/nrrevenue_x_resource/:id:
 *   delete:
 *     summary: Deletar natureza de receita X recurso
 *     description: Deletar natureza de receita X recurso
 *     tags: [Planning_nrrevenue_resource]
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
 *         description: Deletar natureza de receita X recurso
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
planningNrRevenueXResourceRouter.delete("/:id", permission(["delete_nrrenevue_x_resource"]), planningNrRevenueXResourceController.delete);

export default planningNrRevenueXResourceRouter;