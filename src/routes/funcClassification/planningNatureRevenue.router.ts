import { Router } from "express";
import planningNatureRevenueController from "../../controllers/funcClassification/PlanningNatureRevenueController.js";
import { permission } from "../../middlewares/permissions.js";

const planningNatureRevenueRouter = Router();

/**
   * @swagger
   * tags:
   *   name:  Planning_nature_revenue
   *   description: Operações relacionadas aos planejamentos de natureza de receita
   * components:
   *   schemas:
   *     Nature_revenue:
   *       type: object
   *       properties:
   *         number:
   *             type: string
   *         description:
   *             type: string
   *         planning_type_resource_id:
   *             type: string
   *         deduction:
   *             type: boolean
   *         nr_deduction:
   *             type: string
   *         year:
   *             type: number
   *         standard_resource_id:
   *             type: string
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
   * /func_classification/nature_revenue:
   *   post:
   *     summary: Criar natureza de receita
   *     description: Criar natureza de receita
   *     tags: [Planning_nature_revenue]
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
   *         name: create_nature_revenue
   *         description: Criar natureza de receita
   *         required: true
   *         schema:
   *           $ref: '#/components/schemas/Nature_revenue'
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
planningNatureRevenueRouter.post("/", permission(["create_nature_renevue"]), planningNatureRevenueController.register);
/**
 * @swagger
 *
 * /func_classification/nature_revenue:
 *   put:
 *     summary: Atualizar natureza de receita
 *     description: Atualizar natureza de receita
 *     tags: [Planning_nature_revenue]
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
 *         name: update_nature_revenue
 *         description: Atualizar natureza de receita
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             resource_id:
 *               type: number
 *             resource:
 *               $ref: '#/components/schemas/Nature_revenue'
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
planningNatureRevenueRouter.put("/", permission(["update_nature_renevue"]), planningNatureRevenueController.update);
/**
 * @swagger
 *
 * /func_classification/nature_revenue/:id:
 *   get:
 *     summary: Pegar informações sobre um natureza de receita
 *     description: Pegar informações sobre um natureza de receita
 *     tags: [Planning_nature_revenue]
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
 *         description: Pegar informações sobre um natureza de receita
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Natureza de receita
 *         schema:
 *           $ref: '#/components/schemas/Nature_revenue'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningNatureRevenueRouter.get("/:id", permission(["get_nature_renevue"]), planningNatureRevenueController.show);
/**
 * @swagger
 *
 * /func_classification/nature_revenue/:id:
 *   delete:
 *     summary: Deletar natureza de receita
 *     description: Deletar natureza de receita
 *     tags: [Planning_nature_revenue]
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
 *         description: Deletar natureza de receita
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
planningNatureRevenueRouter.delete("/:id", permission(["delete_nature_renevue"]), planningNatureRevenueController.delete);

export default planningNatureRevenueRouter;