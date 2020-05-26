/*************************************************************************************
 * Product: ADempiere gRPC Business Data Client Convert Utils                        *
 * Copyright (C) 2012-2020 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                     *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.            *
 ************************************************************************************/

const convertBusinessData = {
  convertLookupFromGRPC(lookupToConvert) {
    if (lookupToConvert) {
      const { convertValuesMapFromGRPC } = require('@adempiere/grpc-core-client/src/convertValues.js');

      return {
        id: lookupToConvert.getId(),
        uuid: lookupToConvert.getUuid(),
        tableName: lookupToConvert.getTablename(),
        values: convertValuesMapFromGRPC({
          mapToConvert: lookupToConvert.getValuesMap(),
          returnType: 'object'
        })
      };
    }
    return undefined;
  },

  convertPrivateAccessFromGRPC(privateAccessToConvert) {
    if (privateAccessToConvert) {
      return {
        tableName: privateAccessToConvert.getTablename(),
        recordId: privateAccessToConvert.getRecordid(),
        userUuid: privateAccessToConvert.getUseruuid()
      };
    }
    return undefined;
  },

  convertFavoriteFromGRPC(favoriteToConvert) {
    if (favoriteToConvert) {
      return {
        menuUuid: favoriteToConvert.getMenuuuid(),
        menuName: favoriteToConvert.getMenuname(),
        menuDescription: favoriteToConvert.getMenudescription(),
        referenceUuid: favoriteToConvert.getReferenceuuid(),
        action: favoriteToConvert.getAction()
      };
    }
    return undefined;
  },

  convertRecentItemFromGRPC(recentItemToConvert) {
    if (recentItemToConvert) {
      return {
        menuUuid: recentItemToConvert.getMenuuuid(),
        menuName: recentItemToConvert.getMenuname(),
        menuDescription: recentItemToConvert.getMenudescription(),
        windowUuid: recentItemToConvert.getWindowuuid(),
        tabUuid: recentItemToConvert.getTabuuid(),
        tableId: recentItemToConvert.getTableid(),
        recordId: recentItemToConvert.getRecordid(),
        displayName: recentItemToConvert.getDisplayname(),
        recordUuid: recentItemToConvert.getRecorduuid(),
        updated: new Date(recentItemToConvert.getUpdated()),
        referenceUuid: recentItemToConvert.getReferenceuuid(),
        action: recentItemToConvert.getAction()
      };
    }
    return undefined;
  },

  convertPendingDocumentFromGRPC(pendingDocumentToConvert) {
    if (pendingDocumentToConvert) {
      const { convertCriteriaFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

      return {
        windowUuid: pendingDocumentToConvert.getWindowuuid(),
        formUuid: pendingDocumentToConvert.getFormuuid(),
        documentName: pendingDocumentToConvert.getDocumentname(),
        documentDescription: pendingDocumentToConvert.getDocumentdescription(),
        sequence: pendingDocumentToConvert.getSequence(),
        recordCount: pendingDocumentToConvert.getRecordcount(),
        criteria: convertCriteriaFromGRPC(
          pendingDocumentToConvert.getCriteria()
        )
      };
    }
    return undefined;
  },

  convertRecordChatsFromGRPC(recordChatToConvert) {
    if (recordChatToConvert) {
      const {
        getRecordChat_ConfidentialType,
        getRecordChat_ModerationType
      } = require('./convertEnums.js');

      return {
        chatUuid: recordChatToConvert.getChatuuid(),
        recordId: recordChatToConvert.getRecordid(),
        tableName: recordChatToConvert.getTablename(),
        chatTypeUuid: recordChatToConvert.getChattypeuuid(),
        description: recordChatToConvert.getDescription(),
        confidentialType: recordChatToConvert.getConfidentialtype(),
        confidentialTypeName: getRecordChat_ConfidentialType({
          value: recordChatToConvert.getConfidentialtype()
        }),
        moderationType: recordChatToConvert.getModerationtype(),
        moderationTypeName: getRecordChat_ModerationType({
          value: recordChatToConvert.getModerationtype()
        }),
        logDate: new Date(recordChatToConvert.getLogdate())
      };
    }
    return undefined;
  },

  convertChatEntryFromGRPC(chatEntryToConvert) {
    if (chatEntryToConvert) {
      const {
        getChatEntry_ChatEntryType,
        getChatEntry_ConfidentialType,
        getChatEntry_ModeratorStatus
      } = require('./convertEnums.js');

      return {
        chatUuid: chatEntryToConvert.getChatuuid(),
        chatEntryUuid: chatEntryToConvert.getChatentryuuid(),
        subject: chatEntryToConvert.getSubject(),
        characterData: chatEntryToConvert.getCharacterdata(),
        userUuid: chatEntryToConvert.getUseruuid(),
        userName: chatEntryToConvert.getUsername(),
        chatEntryType: chatEntryToConvert.getChatentrytype(),
        chatEntryTypeName: getChatEntry_ChatEntryType({
          value: chatEntryToConvert.getChatentrytype()
        }),
        confidentialType: chatEntryToConvert.getConfidentialtype(),
        confidentialTypeName: getChatEntry_ConfidentialType({
          value: chatEntryToConvert.getConfidentialtype()
        }),
        moderatorStatus: chatEntryToConvert.getModeratorstatus(),
        moderatorStatusName: getChatEntry_ModeratorStatus({
          value: chatEntryToConvert.getModeratorstatus()
        }),
        logDate: new Date(chatEntryToConvert.getLogdate())
      };
    }
    return undefined;
  },

  convertCreateChatEntryFromGRPC(createChatEntry) {
    if (createChatEntry) {
      return {
        tableName: createChatEntry.getTablename(),
        recordId: createChatEntry.getRecordid(),
        comment: createChatEntry.getComment(),
      };
    }
    return undefined;
  },

  convertWorkflowProcessFomGRPC(workflowProcessToConvert) {
    if (workflowProcessToConvert) {
      const {
        getWorkflowProcess_WorkflowState,
        getWorkflowProcess_WorkflowPriority
      } = require('./convertEnums.js');

      return {
        processUuid: workflowProcessToConvert.getProcessuuid(),
        workflowUuid: workflowProcessToConvert.getWorkflowuuid(),
        workflowName: workflowProcessToConvert.getWorkflowname(),
        recordId: workflowProcessToConvert.getRecordid(),
        tableName: workflowProcessToConvert.getTablename(),
        userUuid: workflowProcessToConvert.getUseruuid(),
        userName: workflowProcessToConvert.getUsername(),
        responsibleUuid: workflowProcessToConvert.getResponsibleuuid(),
        responsibleName: workflowProcessToConvert.getResponsiblename(),
        textMessage: workflowProcessToConvert.getTextmessage(),
        processed: workflowProcessToConvert.getProcessed(),
        workflowStateName: getWorkflowProcess_WorkflowState({
          value: workflowProcessToConvert.getWorkflowstate()
        }),
        workflowState: workflowProcessToConvert.getWorkflowstate(),
        priority: workflowProcessToConvert.getPriority(),
        priorityName: getWorkflowProcess_WorkflowPriority({
          value: workflowProcessToConvert.getPriority()
        }),
        workflowEventsList: workflowProcessToConvert.getWorkfloweventsList().map(itemEvent => {
          return convertBusinessData.convertWorkflowEventFromGRPC(itemEvent);
        }),
        logDate: new Date(workflowProcessToConvert.getLogdate())
      };
    }
    return undefined;
  },

  convertWorkflowEventFromGRPC(workflowEventToConvert) {
    if (workflowEventToConvert) {
      const {
        getWorkflowProcess_WorkflowState,
        getWorkflowEvent_EventType
      } = require('./convertEnums.js');

      return {
        nodeUuid: workflowEventToConvert.getNodeuuid(),
        nodeName: workflowEventToConvert.getNodename(),
        recordId: workflowEventToConvert.getRecordid(),
        tableName: workflowEventToConvert.getTablename(),
        userUuid: workflowEventToConvert.getUseruuid(),
        userName: workflowEventToConvert.getUsername(),
        responsibleUuid: workflowEventToConvert.getResponsibleuuid(),
        responsibleName: workflowEventToConvert.getResponsiblename(),
        textMessage: workflowEventToConvert.getTextmessage(),
        timeElapsed: workflowEventToConvert.getTimeelapsed(),
        attributeName: workflowEventToConvert.getAttributename(),
        oldValue: workflowEventToConvert.getOldvalue(),
        newValue: workflowEventToConvert.getNewvalue(),
        workflowState: workflowEventToConvert.getWorkflowstate(),
        workflowStateName: getWorkflowProcess_WorkflowState({
          value: workflowEventToConvert.getWorkflowstate()
        }),
        eventType: workflowEventToConvert.getEventtype(),
        eventTypeName: getWorkflowEvent_EventType({
          value: workflowEventToConvert.getEventtype()
        }),
        logDate: new Date(workflowEventToConvert.getLogdate())
      };
    }

    return undefined;
  },

  convertWorkflowDefinitionFromGRPC(workflowDefinitionToConvert) {
    if (workflowDefinitionToConvert) {
      const {
        getWorkflowDefinition_PublishStatus,
        getWorkflowDefinition_DurationUnit
      } = require('./convertEnums.js');

      return {
        workflowUuid: workflowDefinitionToConvert.getWorkflowuuid(),
        value: workflowDefinitionToConvert.getValue(),
        name: workflowDefinitionToConvert.getName(),
        description: workflowDefinitionToConvert.getDescription(),
        help: workflowDefinitionToConvert.getHelp(),
        tableName: workflowDefinitionToConvert.getTablename(),
        responsibleUuid: workflowDefinitionToConvert.getResponsibleuuid(),
        priority: workflowDefinitionToConvert.getPriority(),
        validFrom: workflowDefinitionToConvert.getValidfrom(),
        isDefault: workflowDefinitionToConvert.getIsdefault(),
        isValid: workflowDefinitionToConvert.getIsvalid(),
        publishStatus: workflowDefinitionToConvert.getPublishstatus(),
        publishStatusName: getWorkflowDefinition_PublishStatus({
          value: workflowDefinitionToConvert.getPublishstatus()
        }),
        durationUnit: workflowDefinitionToConvert.getDurationunit(),
        durationUnitName: getWorkflowDefinition_DurationUnit({
          value: workflowDefinitionToConvert.getDurationunit()
        }),
        startNode: convertBusinessData.convertWorkflowNodeFromGRPC(workflowDefinitionToConvert.getStartnode()),
        workflowNodesList: workflowDefinitionToConvert.getWorkflownodesList().map(itemWorkflowNode => {
          return convertBusinessData.convertWorkflowNodeFromGRPC(itemWorkflowNode);
        })
      };
    }
    return undefined;
  },

  convertWorkflowNodeFromGRPC(workflowNodeToConvert) {
    if (workflowNodeToConvert) {
      const { getWorkflowNode_Action } = require('./convertEnums.js');

      return {
        nodeUuid: workflowNodeToConvert.getNodeuuid(),
        value: workflowNodeToConvert.getValue(),
        name: workflowNodeToConvert.getName(),
        description: workflowNodeToConvert.getDescription(),
        help: workflowNodeToConvert.getHelp(),
        responsibleUuid: workflowNodeToConvert.getResponsibleuuid(),
        documentActionValue: workflowNodeToConvert.getDocumentactionvalue(),
        documentActionName: workflowNodeToConvert.getDocumentactionname(),
        priority: workflowNodeToConvert.getPriority(),
        action: workflowNodeToConvert.getAction(),
        actionName: getWorkflowNode_Action({
          value: workflowNodeToConvert.getAction()
        }),
        transitionsList: workflowNodeToConvert.getTransitionsList().map(itemTransition => {
          return convertBusinessData.convertWorkflowTransitionFromGRPC(itemTransition);
        })
      }
    }
    // Workflow Node
    return undefined;
  },

  convertWorkflowTransitionFromGRPC(workflowTransitionToConvert) {
    if (workflowTransitionToConvert) {
      return {
        nodeNextUuid: workflowTransitionToConvert.getNodenextuuid(),
        description: workflowTransitionToConvert.getDescription(),
        isStdUserWorkflow: workflowTransitionToConvert.getIsstduserworkflow(),
        sequence: workflowTransitionToConvert.getSequence(),
        workflowConditionsList: workflowTransitionToConvert.getWorkflowconditionsList().map(conditionItem => {
          return convertBusinessData.convertWorkflowConditionFromGRPC(conditionItem);
        })
      };
    }
    return undefined;
  },

  convertWorkflowConditionFromGRPC(workflowConditionToConvert) {
    if (workflowConditionToConvert) {
      const {
        getWorkflowCondition_ConditionType,
        getWorkflowCondition_Operation
      } = require('./convertEnums.js');

      return {
        sequence: workflowConditionToConvert.getSequence(),
        columName: workflowConditionToConvert.getColumnname(),
        value: workflowConditionToConvert.getValue(),
        conditionType: workflowConditionToConvert.getConditiontype(),
        conditionTypeName: getWorkflowCondition_ConditionType({
          value: workflowConditionToConvert.getConditiontype()
        }),
        operation: workflowConditionToConvert.getOperation(),
        operationName: getWorkflowCondition_Operation({
          value: workflowConditionToConvert.getOpetation()
        })
      };
    }
    return undefined;
  },

  convertDocumentAction(documentActionToConvert) {
    if (documentActionToConvert) {
      return {
        value: documentActionToConvert.getValue(),
        name: documentActionToConvert.getName(),
        description: documentActionToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertDocumentStatus(documentStatusToConvert) {
    if (documentStatusToConvert) {
      return {
        value: documentStatusToConvert.getValue(),
        name: documentStatusToConvert.getName(),
        description: documentStatusToConvert.getDescription()
      };
    }
    return undefined;
  }

};

module.exports = convertBusinessData;
