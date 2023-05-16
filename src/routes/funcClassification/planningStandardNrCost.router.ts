import { Router } from "express";
import planningStandardNrCostController from "../../controllers/funcClassification/PlanningStandardNrCostController.js";
import { permission } from "../../middlewares/permissions.js";

const planningStandardNrCostRouter = Router();

/**
 * @swagger
 * tags:
 *   name:  Planning_standard_nr_cost
 *   description: Operações relacionadas aos planejamentos de padrão natureza de despesas
 * components:
 *   schemas:
 *     Standard_nr_cost:
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
 * /func_classification/standard_rn_cost:
 *   post:
 *     summary: Criar padrão natureza de despesas
 *     description: Criar padrão natureza de despesas
 *     tags: [Planning_standard_nr_cost]
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
 *         name: create_standard_nr_cost
 *         description: Criar padrão natureza de despesas
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Standard_nr_cost'
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
planningStandardNrCostRouter.post("/", permission(["create_standard_nr_cost"]), planningStandardNrCostController.register);
/**
 * @swagger
 *
 * /func_classification/standard_rn_cost:
 *   put:
 *     summary: Atualizar padrão natureza de despesa
 *     description: Atualizar padrão natureza de despesa
 *     tags: [Planning_standard_nr_cost]
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
 *         name: update_standard_nr_cost
 *         description: Atualizar padrão natureza de despesa
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             standard_nr_cost_id:
 *               type: number
 *             standard_nr_cost:
 *               $ref: '#/components/schemas/Standard_nr_cost'
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
planningStandardNrCostRouter.put("/", permission(["update_standard_nr_cost"]), planningStandardNrCostController.update);
/**
 * @swagger
 *
 * /func_classification/standard_rn_cost/:id:
 *   get:
 *     summary: Pegar informações sobre um padrão natureza de despesa
 *     description: Pegar informações sobre um padrão natureza de despesa
 *     tags: [Planning_standard_nr_cost]
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
 *         description: Pegar informações sobre um padrão natureza de despesa
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Padrão natureza de despesa
 *         schema:
 *           $ref: '#/components/schemas/Standard_nr_cost'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningStandardNrCostRouter.get("/:id", permission(["get_standard_nr_cost"]), planningStandardNrCostController.show);
/**
 * @swagger
 *
 * /func_classification/standard_rn_cost/:id:
 *   delete:
 *     summary: Deletar padrão natureza de despesa
 *     description: Deletar padrão natureza de despesa
 *     tags: [Planning_standard_nr_cost]
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
 *         description: Deletar padrão natureza de despesa
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
planningStandardNrCostRouter.delete("/:id", permission(["delete_standard_nr_cost"]), planningStandardNrCostController.delete);

export default planningStandardNrCostRouter;