/**
 * @swagger
 * components:
 *   schemas:
 *     blog:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - imageUlr
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the blog
 *         title:
 *           type: string
 *           description: The blog title
 *         content:
 *           type: string
 *           description: The blog suthor
 *         imageUlr:
 *           type: array
 *           description: The blog background image
 *         _v:
 *           type: string
 *           description: Version
 *       example:
 *           id: d5fE_ass
 *           title: The new Turing Omnibus
 *           content: Alexander K. Danny
 *           imageUlr: https://www.freeImages.com
 */