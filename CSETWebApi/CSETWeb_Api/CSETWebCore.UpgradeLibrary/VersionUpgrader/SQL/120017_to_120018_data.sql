/*
Run this script on:

(localdb)\MSSQLLocalDB.CSETWeb120017    -  This database will be modified

to synchronize it with:

(localdb)\MSSQLLocalDB.NCUAWeb120018

You are recommended to back up your database before running this script

Script created by SQL Data Compare version 14.7.8.21163 from Red Gate Software Ltd at 1/19/2023 11:05:10 AM

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

PRINT(N'Drop constraints from [dbo].[ISE_ACTIONS]')
ALTER TABLE [dbo].[ISE_ACTIONS] NOCHECK CONSTRAINT [FK_MATURITY_QUESTIONS_MAT_QUESTION_ID]

PRINT(N'Drop constraint FK_ISE_ACTIONS_FINDINGS_ISE_ACTIONS from [dbo].[ISE_ACTIONS_FINDINGS]')
ALTER TABLE [dbo].[ISE_ACTIONS_FINDINGS] NOCHECK CONSTRAINT [FK_ISE_ACTIONS_FINDINGS_ISE_ACTIONS]

PRINT(N'Drop constraints from [dbo].[MATURITY_QUESTIONS]')
ALTER TABLE [dbo].[MATURITY_QUESTIONS] NOCHECK CONSTRAINT [FK__MATURITY___Matur__5B638405]
ALTER TABLE [dbo].[MATURITY_QUESTIONS] NOCHECK CONSTRAINT [FK_MATURITY_QUESTIONS_MATURITY_GROUPINGS]
ALTER TABLE [dbo].[MATURITY_QUESTIONS] NOCHECK CONSTRAINT [FK_MATURITY_QUESTIONS_MATURITY_LEVELS]
ALTER TABLE [dbo].[MATURITY_QUESTIONS] NOCHECK CONSTRAINT [FK_MATURITY_QUESTIONS_MATURITY_MODELS]
ALTER TABLE [dbo].[MATURITY_QUESTIONS] NOCHECK CONSTRAINT [FK_MATURITY_QUESTIONS_MATURITY_OPTIONS]
ALTER TABLE [dbo].[MATURITY_QUESTIONS] NOCHECK CONSTRAINT [FK_MATURITY_QUESTIONS_MATURITY_QUESTION_TYPES]
ALTER TABLE [dbo].[MATURITY_QUESTIONS] NOCHECK CONSTRAINT [FK_MATURITY_QUESTIONS_MATURITY_QUESTIONS]

PRINT(N'Drop constraint FK_MATURITY_ANSWER_OPTIONS_MATURITY_QUESTIONS1 from [dbo].[MATURITY_ANSWER_OPTIONS]')
ALTER TABLE [dbo].[MATURITY_ANSWER_OPTIONS] NOCHECK CONSTRAINT [FK_MATURITY_ANSWER_OPTIONS_MATURITY_QUESTIONS1]

PRINT(N'Drop constraint FK_MATURITY_QUESTION_PROPS_MATURITY_QUESTIONS from [dbo].[MATURITY_QUESTION_PROPS]')
ALTER TABLE [dbo].[MATURITY_QUESTION_PROPS] NOCHECK CONSTRAINT [FK_MATURITY_QUESTION_PROPS_MATURITY_QUESTIONS]

PRINT(N'Drop constraint FK_MATURITY_REFERENCE_TEXT_MATURITY_QUESTIONS from [dbo].[MATURITY_REFERENCE_TEXT]')
ALTER TABLE [dbo].[MATURITY_REFERENCE_TEXT] NOCHECK CONSTRAINT [FK_MATURITY_REFERENCE_TEXT_MATURITY_QUESTIONS]

PRINT(N'Drop constraint FK_MATURITY_REFERENCES_MATURITY_QUESTIONS from [dbo].[MATURITY_REFERENCES]')
ALTER TABLE [dbo].[MATURITY_REFERENCES] NOCHECK CONSTRAINT [FK_MATURITY_REFERENCES_MATURITY_QUESTIONS]

PRINT(N'Drop constraint FK_MATURITY_SOURCE_FILES_MATURITY_QUESTIONS from [dbo].[MATURITY_SOURCE_FILES]')
ALTER TABLE [dbo].[MATURITY_SOURCE_FILES] NOCHECK CONSTRAINT [FK_MATURITY_SOURCE_FILES_MATURITY_QUESTIONS]

PRINT(N'Drop constraints from [dbo].[IRP]')
ALTER TABLE [dbo].[IRP] NOCHECK CONSTRAINT [FK_IRP_IRP_HEADER]

PRINT(N'Drop constraint FK__Assessmen__IRP_I__5EDF0F2E from [dbo].[ASSESSMENT_IRP]')
ALTER TABLE [dbo].[ASSESSMENT_IRP] NOCHECK CONSTRAINT [FK__Assessmen__IRP_I__5EDF0F2E]

PRINT(N'Update rows in [dbo].[ISE_ACTIONS]')
UPDATE [dbo].[ISE_ACTIONS] SET [Description]=N'Governance of the information security program is not commensurate to its size, complexity, and risk.  Each credit union must annually report to the Board on the overall status of the information security program.

An information security program is the written plan created and implemented by a credit union to identify and control risks to information and information systems and to properly dispose of information. The plan includes policies and procedures regarding the institution’s risk assessment, controls, testing, service-provider oversight, periodic review and updating, and reporting to its board of directors.' WHERE [Mat_Question_Id] = 7578
UPDATE [dbo].[ISE_ACTIONS] SET [Description]=N'Governance of the information security program is not commensurate to its size, complexity, and risk.  Each credit union must annually report to the Board on the overall status of the information security program.

An information security program is the written plan created and implemented by a credit union to identify and control risks to information and information systems and to properly dispose of information. The plan includes policies and procedures regarding the institution’s risk assessment, controls, testing, service-provider oversight, periodic review and updating, and reporting to its board of directors.' WHERE [Mat_Question_Id] = 7579
UPDATE [dbo].[ISE_ACTIONS] SET [Description]=N'Governance of the information security program is not commensurate to its size, complexity, and risk.  Each credit union must annually report to the Board on the overall status of the information security program.

An information security program is the written plan created and implemented by a credit union to identify and control risks to information and information systems and to properly dispose of information. The plan includes policies and procedures regarding the institution’s risk assessment, controls, testing, service-provider oversight, periodic review and updating, and reporting to its board of directors.' WHERE [Mat_Question_Id] = 7580
UPDATE [dbo].[ISE_ACTIONS] SET [Description]=N'Governance of the information security program is not commensurate to its size, complexity, and risk.  Each credit union must annually report to the Board on the overall status of the information security program.

An information security program is the written plan created and implemented by a credit union to identify and control risks to information and information systems and to properly dispose of information. The plan includes policies and procedures regarding the institution’s risk assessment, controls, testing, service-provider oversight, periodic review and updating, and reporting to its board of directors.' WHERE [Mat_Question_Id] = 7581
UPDATE [dbo].[ISE_ACTIONS] SET [Description]=N'Governance of the information security program is not commensurate to its size, complexity, and risk.  Each credit union must annually report to the Board on the overall status of the information security program.

An information security program is the written plan created and implemented by a credit union to identify and control risks to information and information systems and to properly dispose of information. The plan includes policies and procedures regarding the institution’s risk assessment, controls, testing, service-provider oversight, periodic review and updating, and reporting to its board of directors.' WHERE [Mat_Question_Id] = 7629
UPDATE [dbo].[ISE_ACTIONS] SET [Description]=N'Governance of the information security program is not commensurate to its size, complexity, and risk.  Each credit union must annually report to the Board on the overall status of the information security program.

An information security program is the written plan created and implemented by a credit union to identify and control risks to information and information systems and to properly dispose of information. The plan includes policies and procedures regarding the institution’s risk assessment, controls, testing, service-provider oversight, periodic review and updating, and reporting to its board of directors.' WHERE [Mat_Question_Id] = 7630
UPDATE [dbo].[ISE_ACTIONS] SET [Description]=N'Governance of the information security program is not commensurate to its size, complexity, and risk.  Each credit union must annually report to the Board on the overall status of the information security program.

An information security program is the written plan created and implemented by a credit union to identify and control risks to information and information systems and to properly dispose of information. The plan includes policies and procedures regarding the institution’s risk assessment, controls, testing, service-provider oversight, periodic review and updating, and reporting to its board of directors.' WHERE [Mat_Question_Id] = 7631
UPDATE [dbo].[ISE_ACTIONS] SET [Description]=N'Governance of the information security program is not commensurate to its size, complexity, and risk.  Each credit union must annually report to the Board on the overall status of the information security program.

An information security program is the written plan created and implemented by a credit union to identify and control risks to information and information systems and to properly dispose of information. The plan includes policies and procedures regarding the institution’s risk assessment, controls, testing, service-provider oversight, periodic review and updating, and reporting to its board of directors.' WHERE [Mat_Question_Id] = 7632
UPDATE [dbo].[ISE_ACTIONS] SET [Regulatory_Citation]=N'12 C.F.R. § 748.0 (b)(2)' WHERE [Mat_Question_Id] = 7656
UPDATE [dbo].[ISE_ACTIONS] SET [Regulatory_Citation]=N'12 C.F.R. § 748.0 (b)(2)' WHERE [Mat_Question_Id] = 7657
UPDATE [dbo].[ISE_ACTIONS] SET [Regulatory_Citation]=N'12 C.F.R. § 748.0 (b)(2)' WHERE [Mat_Question_Id] = 7658
UPDATE [dbo].[ISE_ACTIONS] SET [Regulatory_Citation]=N'12 C.F.R. § 748.0 (b)(2)' WHERE [Mat_Question_Id] = 7659
UPDATE [dbo].[ISE_ACTIONS] SET [Regulatory_Citation]=N'12 C.F.R. § 748.0 (b)(2)' WHERE [Mat_Question_Id] = 7660
UPDATE [dbo].[ISE_ACTIONS] SET [Description]=N'Governance of the information security program is not commensurate to its size, complexity, and risk.  Each credit union must annually report to the Board on the overall status of the information security program.

An information security program is the written plan created and implemented by a credit union to identify and control risks to information and information systems and to properly dispose of information. The plan includes policies and procedures regarding the institution’s risk assessment, controls, testing, service-provider oversight, periodic review and updating, and reporting to its board of directors.' WHERE [Mat_Question_Id] = 7707
UPDATE [dbo].[ISE_ACTIONS] SET [Description]=N'Governance of the information security program is not commensurate to its size, complexity, and risk.  Each credit union must annually report to the Board on the overall status of the information security program.

An information security program is the written plan created and implemented by a credit union to identify and control risks to information and information systems and to properly dispose of information. The plan includes policies and procedures regarding the institution’s risk assessment, controls, testing, service-provider oversight, periodic review and updating, and reporting to its board of directors.' WHERE [Mat_Question_Id] = 7708
UPDATE [dbo].[ISE_ACTIONS] SET [Description]=N'Governance of the information security program is not commensurate to its size, complexity, and risk.  Each credit union must annually report to the Board on the overall status of the information security program.

An information security program is the written plan created and implemented by a credit union to identify and control risks to information and information systems and to properly dispose of information. The plan includes policies and procedures regarding the institution’s risk assessment, controls, testing, service-provider oversight, periodic review and updating, and reporting to its board of directors.' WHERE [Mat_Question_Id] = 7709
UPDATE [dbo].[ISE_ACTIONS] SET [Description]=N'Governance of the information security program is not commensurate to its size, complexity, and risk.  Each credit union must annually report to the Board on the overall status of the information security program.

An information security program is the written plan created and implemented by a credit union to identify and control risks to information and information systems and to properly dispose of information. The plan includes policies and procedures regarding the institution’s risk assessment, controls, testing, service-provider oversight, periodic review and updating, and reporting to its board of directors.' WHERE [Mat_Question_Id] = 7710
UPDATE [dbo].[ISE_ACTIONS] SET [Regulatory_Citation]=N'12 C.F.R. § 748.0 (b)(2)' WHERE [Mat_Question_Id] = 7740
UPDATE [dbo].[ISE_ACTIONS] SET [Regulatory_Citation]=N'12 C.F.R. § 748.0 (b)(2)' WHERE [Mat_Question_Id] = 7741
UPDATE [dbo].[ISE_ACTIONS] SET [Regulatory_Citation]=N'12 C.F.R. § 748.0 (b)(2)' WHERE [Mat_Question_Id] = 7742
UPDATE [dbo].[ISE_ACTIONS] SET [Regulatory_Citation]=N'12 C.F.R. § 748.0 (b)(2)' WHERE [Mat_Question_Id] = 7743
UPDATE [dbo].[ISE_ACTIONS] SET [Regulatory_Citation]=N'12 C.F.R. § 748.0 (b)(2)' WHERE [Mat_Question_Id] = 7744
UPDATE [dbo].[ISE_ACTIONS] SET [Regulatory_Citation]=N'12 C.F.R. § 748.0 (b)(2)' WHERE [Mat_Question_Id] = 7745
UPDATE [dbo].[ISE_ACTIONS] SET [Regulatory_Citation]=N'12 C.F.R. § 748.0 (b)(2)' WHERE [Mat_Question_Id] = 7746
PRINT(N'Operation applied to 24 rows out of 24')

PRINT(N'Update rows in [dbo].[MATURITY_QUESTIONS]')
UPDATE [dbo].[MATURITY_QUESTIONS] SET [Question_Text]=N'Documents data destruction and media sanitization criteria' WHERE [Mat_Question_Id] = 7575
UPDATE [dbo].[MATURITY_QUESTIONS] SET [Question_Text]=N'Documents data destruction and media sanitization criteria' WHERE [Mat_Question_Id] = 7626
UPDATE [dbo].[MATURITY_QUESTIONS] SET [Question_Text]=N'Maintain procedures to notify members, when warranted.' WHERE [Mat_Question_Id] = 7668
PRINT(N'Operation applied to 3 rows out of 3')

PRINT(N'Update row in [dbo].[IRP]')
UPDATE [dbo].[IRP] SET [Risk_2_Description]=N'Number of employees totals 10 - 50', [Risk_4_Description]=N'Number of employees totals 101 - 500' WHERE [IRP_ID] = 46

PRINT(N'Add constraints to [dbo].[ISE_ACTIONS]')
ALTER TABLE [dbo].[ISE_ACTIONS] WITH CHECK CHECK CONSTRAINT [FK_MATURITY_QUESTIONS_MAT_QUESTION_ID]
ALTER TABLE [dbo].[ISE_ACTIONS_FINDINGS] WITH CHECK CHECK CONSTRAINT [FK_ISE_ACTIONS_FINDINGS_ISE_ACTIONS]

PRINT(N'Add constraints to [dbo].[MATURITY_QUESTIONS]')
ALTER TABLE [dbo].[MATURITY_QUESTIONS] CHECK CONSTRAINT [FK__MATURITY___Matur__5B638405]
ALTER TABLE [dbo].[MATURITY_QUESTIONS] WITH CHECK CHECK CONSTRAINT [FK_MATURITY_QUESTIONS_MATURITY_GROUPINGS]
ALTER TABLE [dbo].[MATURITY_QUESTIONS] WITH CHECK CHECK CONSTRAINT [FK_MATURITY_QUESTIONS_MATURITY_LEVELS]
ALTER TABLE [dbo].[MATURITY_QUESTIONS] CHECK CONSTRAINT [FK_MATURITY_QUESTIONS_MATURITY_MODELS]
ALTER TABLE [dbo].[MATURITY_QUESTIONS] WITH CHECK CHECK CONSTRAINT [FK_MATURITY_QUESTIONS_MATURITY_OPTIONS]
ALTER TABLE [dbo].[MATURITY_QUESTIONS] WITH CHECK CHECK CONSTRAINT [FK_MATURITY_QUESTIONS_MATURITY_QUESTION_TYPES]
ALTER TABLE [dbo].[MATURITY_ANSWER_OPTIONS] WITH CHECK CHECK CONSTRAINT [FK_MATURITY_ANSWER_OPTIONS_MATURITY_QUESTIONS1]
ALTER TABLE [dbo].[MATURITY_QUESTION_PROPS] WITH CHECK CHECK CONSTRAINT [FK_MATURITY_QUESTION_PROPS_MATURITY_QUESTIONS]
ALTER TABLE [dbo].[MATURITY_REFERENCE_TEXT] WITH CHECK CHECK CONSTRAINT [FK_MATURITY_REFERENCE_TEXT_MATURITY_QUESTIONS]
ALTER TABLE [dbo].[MATURITY_REFERENCES] CHECK CONSTRAINT [FK_MATURITY_REFERENCES_MATURITY_QUESTIONS]
ALTER TABLE [dbo].[MATURITY_SOURCE_FILES] CHECK CONSTRAINT [FK_MATURITY_SOURCE_FILES_MATURITY_QUESTIONS]

PRINT(N'Add constraints to [dbo].[IRP]')
ALTER TABLE [dbo].[IRP] WITH CHECK CHECK CONSTRAINT [FK_IRP_IRP_HEADER]
ALTER TABLE [dbo].[ASSESSMENT_IRP] WITH CHECK CHECK CONSTRAINT [FK__Assessmen__IRP_I__5EDF0F2E]
COMMIT TRANSACTION
GO
