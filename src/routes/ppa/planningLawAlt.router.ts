import { Router } from "express";
import planningLawAltController from "../../controllers/ppa/PlanningLawAltController.js";
import { permission } from "../../middlewares/permissions.js";

const planningLawAltRouter = Router();

/**
 * @swagger
 * tags:
 *   name:  Ppa_law_alt
 *   description: Operações relacionadas aos PPA - Alteração de lei
 * components:
 *   schemas:
 *     Law:
 *       type: object
 *       properties:
 *         law:
 *             type: string
 *         type_local_publication:
 *             type: string
 *         local_publication:
 *             type: string
 *         planning_ppa_register_id:
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
 * /ppa/law_alt:
 *   post:
 *     summary: Criar alteração de lei
 *     description: Criar alteração de lei
 *     tags: [Ppa_law_alt]
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
 *         name: create_law_alt
 *         description: Criar alteração de lei
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Law'
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
planningLawAltRouter.post("/", permission(["create_law_alt"]), planningLawAltController.register);
/**
 * @swagger
 *
 * /ppa/law_alt:
 *   put:
 *     summary: Atualizar alteração de lei
 *     description: Atualizar alteração de lei
 *     tags: [Ppa_law_alt]
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
 *         name: update_law
 *         description: Atualizar alteração de lei
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             law_id:
 *               type: number
 *             law:
 *               $ref: '#/components/schemas/Law'
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
planningLawAltRouter.put("/", permission(["update_law_alt"]), planningLawAltController.update);
/**
 * @swagger
 *
 * /ppa/law_alt/:id:
 *   get:
 *     summary: Pegar informações sobre uma alteração de lei
 *     description: Pegar informações sobre uma alteração de lei
 *     tags: [Ppa_law_alt]
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
 *         description: Pegar informações sobre uma alteração de lei
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Alteração de lei
 *         schema:
 *           $ref: '#/components/schemas/Law'
 *       400:
 *         description: Error
 *         schema:
 *           $ref: '#/components/schemas/Message'
 */
planningLawAltRouter.get("/:id", permission(["get_law_alt"]), planningLawAltController.show);
/**
 * @swagger
 *
 * /ppa/law_alt/:id:
 *   delete:
 *     summary: Deletar alteração de lei
 *     description: Deletar alteração de lei
 *     tags: [Ppa_law_alt]
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
 *         description: Deletar alteração de lei
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
planningLawAltRouter.delete("/:id", permission(["delete_law_alt"]), planningLawAltController.delete);

export default planningLawAltRouter;