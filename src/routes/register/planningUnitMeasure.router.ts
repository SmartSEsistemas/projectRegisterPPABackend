import { Router } from "express";
import planningUnitMeasureController from "../../controllers/register/PlanningUnitMeasureController.js";
import { permission } from "../../middlewares/permissions.js";

const planningUnitMeasureRouter = Router();

/**
 * @swagger
 * tags:
 *   name:  Planning_unit_measure
 *   description: Operações relacionadas as Unidades de Medida
 * components:
 *   schemas:
 *     Unit_measure:
 *       type: object
 *       properties:
 *         description:
 *             type: string
 *         entity_id:
 *             type: number
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
 * /register/plan_unit_measure:
 *   post:
 *     summary: Criar Unidade de medida
 *     description: Criar Unidade de medida
 *     tags: [Planning_unit_measure]
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
 *         name: create_unit_measure
 *         description: Criar Unidade de medida
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Unit_measure'
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
planningUnitMeasureRouter.post("/", permission(["create_unit_measure"]), planningUnitMeasureController.register);
/**
 * @swagger
 *
 * /register/plan_unit_measure:
 *   put:
 *     summary: Atualizar Unidade de medida
 *     description: Atualizar Unidade de medida
 *     tags: [Planning_unit_measure]
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
 *         name: update_unit_measure
 *         description: Atualizar Unidade de medida
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             unit_measure_id:
 *               type: number
 *             unit_measure:
 *               $ref: '#/components/schemas/Unit_measure'
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
planningUnitMeasureRouter.put("/", permission(["update_unit_measure"]), planningUnitMeasureController.update);
/**
 * @swagger
 *
 * /register/plan_unit_measure/id=:
 *   get:
 *     summary: Pegar informações sobre a Unidade de medida
 *     description: Pegar informações sobre a Unidade de medida
 *     tags: [Planning_unit_measure]
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
 *         description: Pegar informações sobre a Unidade de medida
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Unidade de medida
 *         schema:
 *           $ref: '#/components/schemas/Unit_measure'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningUnitMeasureRouter.get("/:id", permission(["get_unit_measure"]), planningUnitMeasureController.unit);
/**
 * @swagger
 *
 * /register/plan_unit_measure/id=:
 *   delete:
 *     summary: Deletar Unidade de medida
 *     description: Deletar Unidade de medida
 *     tags: [Planning_unit_measure]
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
 *         description: Deletar Unidade de medida
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
planningUnitMeasureRouter.delete("/:id", permission(["delete_unit_measure"]), planningUnitMeasureController.delete);

export default planningUnitMeasureRouter;