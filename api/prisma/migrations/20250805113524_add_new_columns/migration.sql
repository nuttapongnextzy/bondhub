/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "name",
ADD COLUMN     "bio" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "firstName" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "lastName" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "nickname" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "profileImage" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT '';
