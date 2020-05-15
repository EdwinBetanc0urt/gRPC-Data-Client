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
    return {
      id: undefined,
      uuid: undefined,
      tableName: undefined,
      values: undefined
    };
  },

  convertPrivateAccessFromGRPC(privateAccessToConvert) {
    if (privateAccessToConvert) {
      return {
        tableName: privateAccessToConvert.getTablename(),
        recordId: privateAccessToConvert.getRecordid(),
        userUuid: privateAccessToConvert.getUseruuid()
      };
    }
    return {
      tableName: undefined,
      recordId: undefined,
      userUuid: undefined
    };
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
    return {
      menuUuid: undefined,
      menuName: undefined,
      menuDescription: undefined,
      referenceUuid: undefined,
      action: undefined
    };
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
    return {
      menuUuid: undefined,
      menuName: undefined,
      menuDescription: undefined,
      windowUuid: undefined,
      tabUuid: undefined,
      tableId: undefined,
      recordId: undefined,
      displayName: undefined,
      recordUuid: undefined,
      updated: undefined,
      referenceUuid: undefined,
      action: undefined,
    };
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
    return {
      windowUuid: undefined,
      formUuid: undefined,
      documentName: undefined,
      documentDescription: undefined,
      sequence: undefined,
      recordCount: undefined,
      criteria: undefined
    };
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
    return {
      chatUuid: undefined,
      recordId: undefined,
      tableName: undefined,
      chatTypeUuid: undefined,
      description: undefined,
      confidentialType: undefined,
      confidentialTypeName: undefined,
      moderationType: undefined,
      moderationTypeName: undefined,
      logDate: undefined
    };
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
    return {
      chatUuid: undefined,
      chatEntryUuid: undefined,
      subject: undefined,
      characterData: undefined,
      userUuid: undefined,
      userName: undefined,
      chatEntryType: undefined,
      chatEntryTypeName: undefined,
      confidentialType: undefined,
      confidentialTypeName: undefined,
      moderatorStatus: undefined,
      moderatorStatusName: undefined,
      logDate: undefined
    };
  },

  convertCreateChatEntryFromGRPC(createChatEntry) {
    if (createChatEntry) {
      return {
        tableName: createChatEntry.getTablename(),
        recordId: createChatEntry.getRecordid(),
        comment: createChatEntry.getComment(),
      };
    }
    return {
      tableName: undefined,
      recordId: undefined,
      comment: undefined
    };
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
    return {
      processUuid: undefined,
      workflowUuid: undefined,
      workflowName: undefined,
      recordId: undefined,
      tableName: undefined,
      userUuid: undefined,
      userName: undefined,
      responsibleUuid: undefined,
      responsibleName: undefined,
      message: undefined,
      textMessage: undefined,
      processed: undefined,
      workflowState: undefined,
      workflowStateName: undefined,
      priority: undefined,
      priorityName: undefined,
      workflowEventsList: undefined,
      logDate: undefined
    };
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

    return {
      nodeUuid: undefined,
      nodeName: undefined,
      recordId: undefined,
      tableName: undefined,
      userUuid: undefined,
      userName: undefined,
      responsibleUuid: undefined,
      responsibleName: undefined,
      textMessage: undefined,
      timeElapsed: undefined,
      attributeName: undefined,
      oldValue: undefined,
      newValue: undefined,
      workflowState: undefined,
      eventType: undefined,
      eventTypeName: undefined,
      logDate: undefined
    };
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
    return {
      workflowUuid: undefined,
      value: undefined,
      name: undefined,
      description: undefined,
      help: undefined,
      tableName: undefined,
      responsibleUuid: undefined,
      responsibleName: undefined,
      priority: undefined,
      validFrom: undefined,
      isDefault: undefined,
      isValid: undefined,
      publishStatus: undefined,
      publishStatusName: undefined,
      durationUnit: undefined,
      durationUnitName: undefined,
      startNode: undefined,
      workflowNodesList: undefined
    };
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
    return {
      nodeUuid: undefined,
      value: undefined,
      name: undefined,
      description: undefined,
      help: undefined,
      responsibleUuid: undefined,
      responsibleName: undefined,
      documentActionValue: undefined,
      documentActionName: undefined,
      priority: undefined,
      action: undefined,
      actionName: undefined,
      transitionsList: undefined
    };
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
    return {
      nodeNextUuid: undefined,
      description: undefined,
      isStdUserWorkflow: undefined,
      sequence: undefined,
      workflowConditionsList: undefined
    };
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
    return {
      sequence: undefined,
      columName: undefined,
      value: undefined,
      conditionType: undefined,
      conditionTypeName: undefined,
      operation: undefined,
      operationName: undefined
    };
  },

  convertDocumentAction(documentActionToConvert) {
    if (documentActionToConvert) {
      return {
        value: documentActionToConvert.getValue(),
        name: documentActionToConvert.getName(),
        description: documentActionToConvert.getDescription()
      };
    }
    return {
      value: undefined,
      name: undefined,
      description: undefined
    };
  },

  convertDocumentStatus(documentStatusToConvert) {
    if (documentStatusToConvert) {
      return {
        value: documentStatusToConvert.getValue(),
        name: documentStatusToConvert.getName(),
        description: documentStatusToConvert.getDescription()
      };
    }
    return {
      value: undefined,
      name: undefined,
      description: undefined
    };
  }
};

module.exports = convertBusinessData;
