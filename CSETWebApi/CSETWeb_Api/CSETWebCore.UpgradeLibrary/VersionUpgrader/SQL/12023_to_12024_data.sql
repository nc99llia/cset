/*
Run this script on:

(localdb)\INLLocalDb2022.CSETWeb12023    -  This database will be modified

to synchronize it with:

(localdb)\INLLocalDb2022.CSETWeb12024

You are recommended to back up your database before running this script

Script created by SQL Data Compare version 14.10.9.22680 from Red Gate Software Ltd at 7/10/2023 3:31:37 PM

*/
		
SET NUMERIC_ROUNDABORT OFF
GO
SET ANSI_PADDING, ANSI_WARNINGS, CONCAT_NULL_YIELDS_NULL, ARITHABORT, QUOTED_IDENTIFIER, ANSI_NULLS, NOCOUNT ON
GO
SET DATEFORMAT YMD
GO
SET XACT_ABORT ON
GO
SET TRANSACTION ISOLATION LEVEL Serializable
GO
BEGIN TRANSACTION

PRINT(N'Drop constraints from [dbo].[MATURITY_MODELS]')
ALTER TABLE [dbo].[MATURITY_MODELS] NOCHECK CONSTRAINT [FK_MATURITY_MODELS_MATURITY_LEVEL_USAGE_TYPES]

PRINT(N'Drop constraint FK_ANALYTICS_MATURITY_GROUPINGS_MATURITY_MODELS from [dbo].[ANALYTICS_MATURITY_GROUPINGS]')
ALTER TABLE [dbo].[ANALYTICS_MATURITY_GROUPINGS] NOCHECK CONSTRAINT [FK_ANALYTICS_MATURITY_GROUPINGS_MATURITY_MODELS]

PRINT(N'Drop constraint FK__AVAILABLE__model__6F6A7CB2 from [dbo].[AVAILABLE_MATURITY_MODELS]')
ALTER TABLE [dbo].[AVAILABLE_MATURITY_MODELS] NOCHECK CONSTRAINT [FK__AVAILABLE__model__6F6A7CB2]

PRINT(N'Drop constraint FK_MATURITY_LEVELS_MATURITY_MODELS from [dbo].[MATURITY_LEVELS]')
ALTER TABLE [dbo].[MATURITY_LEVELS] NOCHECK CONSTRAINT [FK_MATURITY_LEVELS_MATURITY_MODELS]

PRINT(N'Drop constraint FK_MATURITY_QUESTIONS_MATURITY_MODELS from [dbo].[MATURITY_QUESTIONS]')
ALTER TABLE [dbo].[MATURITY_QUESTIONS] NOCHECK CONSTRAINT [FK_MATURITY_QUESTIONS_MATURITY_MODELS]

PRINT(N'Drop constraint FK_MODES_SETS_MATURITY_MODELS_MATURITY_MODELS from [dbo].[MODES_SETS_MATURITY_MODELS]')
ALTER TABLE [dbo].[MODES_SETS_MATURITY_MODELS] NOCHECK CONSTRAINT [FK_MODES_SETS_MATURITY_MODELS_MATURITY_MODELS]

PRINT(N'Drop constraint FK_ASSESSMENTS_GALLERY_ITEM from [dbo].[ASSESSMENTS]')
ALTER TABLE [dbo].[ASSESSMENTS] NOCHECK CONSTRAINT [FK_ASSESSMENTS_GALLERY_ITEM]

PRINT(N'Drop constraint FK_GALLERY_GROUP_DETAILS_GALLERY_ITEM from [dbo].[GALLERY_GROUP_DETAILS]')
ALTER TABLE [dbo].[GALLERY_GROUP_DETAILS] NOCHECK CONSTRAINT [FK_GALLERY_GROUP_DETAILS_GALLERY_ITEM]

PRINT(N'Update rows in [dbo].[MATURITY_MODELS]')
UPDATE [dbo].[MATURITY_MODELS] SET [Maturity_Level_Usage_Type]=N'User_Selected' WHERE [Maturity_Model_Id] = 1
UPDATE [dbo].[MATURITY_MODELS] SET [Maturity_Level_Usage_Type]=N'User_Selected' WHERE [Maturity_Model_Id] = 2
UPDATE [dbo].[MATURITY_MODELS] SET [Maturity_Level_Usage_Type]=N'Static' WHERE [Maturity_Model_Id] = 3
UPDATE [dbo].[MATURITY_MODELS] SET [Maturity_Level_Usage_Type]=N'Static' WHERE [Maturity_Model_Id] = 4
UPDATE [dbo].[MATURITY_MODELS] SET [Maturity_Level_Usage_Type]=N'Static' WHERE [Maturity_Model_Id] = 5
UPDATE [dbo].[MATURITY_MODELS] SET [Maturity_Level_Usage_Type]=N'User_Selected' WHERE [Maturity_Model_Id] = 6
UPDATE [dbo].[MATURITY_MODELS] SET [Maturity_Level_Usage_Type]=N'Special' WHERE [Maturity_Model_Id] = 7
UPDATE [dbo].[MATURITY_MODELS] SET [Maturity_Level_Usage_Type]=N'Static' WHERE [Maturity_Model_Id] = 8
UPDATE [dbo].[MATURITY_MODELS] SET [Maturity_Level_Usage_Type]=N'Static' WHERE [Maturity_Model_Id] = 9
UPDATE [dbo].[MATURITY_MODELS] SET [Maturity_Level_Usage_Type]=N'Special' WHERE [Maturity_Model_Id] = 10
UPDATE [dbo].[MATURITY_MODELS] SET [Maturity_Level_Usage_Type]=N'Static' WHERE [Maturity_Model_Id] = 11
UPDATE [dbo].[MATURITY_MODELS] SET [Maturity_Level_Usage_Type]=N'Static' WHERE [Maturity_Model_Id] = 12
UPDATE [dbo].[MATURITY_MODELS] SET [Maturity_Level_Usage_Type]=N'Static' WHERE [Maturity_Model_Id] = 13
UPDATE [dbo].[MATURITY_MODELS] SET [Maturity_Level_Usage_Type]=N'Static' WHERE [Maturity_Model_Id] = 14
UPDATE [dbo].[MATURITY_MODELS] SET [Maturity_Level_Usage_Type]=N'Static' WHERE [Maturity_Model_Id] = 15
PRINT(N'Operation applied to 15 rows out of 15')

PRINT(N'Update row in [dbo].[GALLERY_ITEM]')
UPDATE [dbo].[GALLERY_ITEM] SET [Is_Visible]=0 WHERE [Gallery_Item_Guid] = 'a802be1c-7f3d-42f1-8e15-c739695b5532'

PRINT(N'Add rows to [dbo].[MATURITY_LEVEL_USAGE_TYPES]')
INSERT INTO [dbo].[MATURITY_LEVEL_USAGE_TYPES] ([Maturity_Level_Usage_Type]) VALUES (N'Special')
INSERT INTO [dbo].[MATURITY_LEVEL_USAGE_TYPES] ([Maturity_Level_Usage_Type]) VALUES (N'Static')
INSERT INTO [dbo].[MATURITY_LEVEL_USAGE_TYPES] ([Maturity_Level_Usage_Type]) VALUES (N'User_Selected')
PRINT(N'Operation applied to 3 rows out of 3')

PRINT(N'Add constraints to [dbo].[MATURITY_MODELS]')
ALTER TABLE [dbo].[MATURITY_MODELS] WITH CHECK CHECK CONSTRAINT [FK_MATURITY_MODELS_MATURITY_LEVEL_USAGE_TYPES]
ALTER TABLE [dbo].[ANALYTICS_MATURITY_GROUPINGS] WITH CHECK CHECK CONSTRAINT [FK_ANALYTICS_MATURITY_GROUPINGS_MATURITY_MODELS]
ALTER TABLE [dbo].[AVAILABLE_MATURITY_MODELS] WITH CHECK CHECK CONSTRAINT [FK__AVAILABLE__model__6F6A7CB2]
ALTER TABLE [dbo].[MATURITY_LEVELS] WITH CHECK CHECK CONSTRAINT [FK_MATURITY_LEVELS_MATURITY_MODELS]
ALTER TABLE [dbo].[MATURITY_QUESTIONS] CHECK CONSTRAINT [FK_MATURITY_QUESTIONS_MATURITY_MODELS]
ALTER TABLE [dbo].[MODES_SETS_MATURITY_MODELS] WITH CHECK CHECK CONSTRAINT [FK_MODES_SETS_MATURITY_MODELS_MATURITY_MODELS]
ALTER TABLE [dbo].[ASSESSMENTS] WITH CHECK CHECK CONSTRAINT [FK_ASSESSMENTS_GALLERY_ITEM]
ALTER TABLE [dbo].[GALLERY_GROUP_DETAILS] WITH CHECK CHECK CONSTRAINT [FK_GALLERY_GROUP_DETAILS_GALLERY_ITEM]
COMMIT TRANSACTION
GO