import { Router } from "express";
import planningStandardNrRevenueController from "../../controllers/funcClassification/PlanningStandardNrRevenueController.js";
import { permission } from "../../middlewares/permissions.js";

const planningStandardNrResourceRouter = Router();

/**
 * @swagger
 * tags:
 *   name:  Planning_standard_nr_revenue
 *   description: Operações relacionadas aos planejamentos de padrão natureza de receita
 * components:
 *   schemas:
 *     Standard_nr_revenue:
 *       type: object
 *       properties:
 *         description:
 *             type: string
 *         level:
 *             type: string
 *         separator:
 *             type: string
 *             enum: ['.', ',', ';', '-']
 *         size_level:
 *             type: number
 *         type:
 *             type: string
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
 * /func_classification/standard_rn_revenue:
 *   post:
 *     summary: Criar padrão natureza de receita
 *     description: Criar padrão natureza de receita
 *     tags: [Planning_standard_nr_revenue]
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
 *         name: create_standard_nr_revenue
 *         description: Criar padrão natureza de receita
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Standard_nr_revenue'
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
planningStandardNrResourceRouter.post("/", permission(["create_standard_nr_resource"]), planningStandardNrRevenueController.register);
/**
 * @swagger
 *
 * /func_classification/standard_rn_revenue:
 *   put:
 *     summary: Atualizar padrão natureza de receita
 *     description: Atualizar padrão natureza de receita
 *     tags: [Planning_standard_nr_revenue]
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
 *         name: update_standard_nr_revenue
 *         description: Atualizar padrão natureza de receita
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             standard_nr_revenue_id:
 *               type: number
 *             standard_nr_revenue:
 *               $ref: '#/components/schemas/Standard_nr_revenue'
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
planningStandardNrResourceRouter.put("/", permission(["update_standard_nr_resource"]), planningStandardNrRevenueController.update);
/**
 * @swagger
 *
 * /func_classification/standard_rn_revenue/:id:
 *   get:
 *     summary: Pegar informações sobre um padrão natureza de receita
 *     description: Pegar informações sobre um padrão natureza de receita
 *     tags: [Planning_standard_nr_revenue]
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
 *         description: Pegar informações sobre um padrão natureza de receita
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Padrão natureza de receita
 *         schema:
 *           $ref: '#/components/schemas/Standard_nr_revenue'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningStandardNrResourceRouter.get("/:id", permission(["get_standard_nr_resource"]), planningStandardNrRevenueController.show);
/**
 * @swagger
 *
 * /func_classification/standard_rn_revenue/:id:
 *   delete:
 *     summary: Deletar padrão natureza de receita
 *     description: Deletar padrão natureza de receita
 *     tags: [Planning_standard_nr_revenue]
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
 *         description: Deletar padrão natureza de receita
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
planningStandardNrResourceRouter.delete("/:id", permission(["delete_standard_nr_resource"]), planningStandardNrRevenueController.delete);

export default planningStandardNrResourceRouter;