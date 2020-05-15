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

const convertEnums = {
    getValueOrKey({ list, key, value }) {
      if (key !== undefined) {
        return list[key];
      } else if (value !== undefined) {
        return Object.keys(list).find(keyItem => EventType[keyItem] === value);
      }
      // return all values
      return list;
    },

    /**
     * Get all event type or get key value type from value
     * @param {number} value
     * @param {string} key
     * @returns {number|string|object}
        INSERT = 0;
        UPDATE = 1;
        DELETE = 2;
     */
    getRollbackEntityRequest_EventType({ key, value }) {
      const { RollbackEntityRequest } = require('./grpc/proto/business_pb.js');
      const { EventType } = RollbackEntityRequest;

      return convertEnums.getValueOrKey({
        list: EventType,
        key,
        value
      });
    },

    /**
     * Get all confidential type or get key value type from value
     * @param {number} value
     * @param {string} key
          PUBLIC: 0,
          PARTER: 1,
          INTERNAL: 2,
      */
    getRecordChat_ConfidentialType({ key, value }) {
      const { RecordChat } = require('./grpc/proto/business_pb.js');
      const { ConfidentialType } = RecordChat;

      return convertEnums.getValueOrKey({
        list: ConfidentialType,
        key,
        value
      });
    },

    /**
     * Get all moderation type or get key value type from value
     * @param {number} value
     * @param {string} key
          NOT_MODERATED: 0,
          BEFORE_PUBLISHING: 1,
          AFTER_PUBLISHING: 2,
     */
    getRecordChat_ModerationType({ key, value }) {
      const { RecordChat } = require('./grpc/proto/business_pb.js');
      const { ModerationType } = RecordChat;

      return convertEnums.getValueOrKey({
        list: ModerationType,
        key,
        value
      });
    },

    /**
     * Get all confidential type or get key value type from value
     * @param {number} value
     * @param {string} key
          PUBLIC = 0;
          PARTER = 1;
          INTERNAL = 2;
     */
    getChatEntry_ConfidentialType({ key, value }) {
      const { ChatEntry } = require('./grpc/proto/business_pb.js');
      const { ConfidentialType } = ChatEntry;

      return convertEnums.getValueOrKey({
        list: ConfidentialType,
        key,
        value
      });
    },

    /**
     * Get all moderation status or get key value type from value
     * @param {number} value
     * @param {string} key
          NOT_DISPLAYED = 0;
          PUBLISHED = 1;
          SUSPICIUS = 2;
          TO_BE_REVIEWED = 3;
     */
    getChatEntry_ModeratorStatus({ key, value }) {
      const { ChatEntry } = require('./grpc/proto/business_pb.js');
      const { ModeratorStatus } = ChatEntry;

      return convertEnums.getValueOrKey({
        list: ModeratorStatus,
        key,
        value
      });
    },

    /**
     * Get all chat entry type or get key value type from value
     * @param {number} value
     * @param {string} key
          NOTE_FLAT = 0;
          FORUM_THREADED = 1;
          WIKI = 2;
     */
    getChatEntry_ChatEntryType({ key, value }) {
      const { ChatEntry } = require('./grpc/proto/business_pb.js');
      const { ChatEntryType } = ChatEntry;

      return convertEnums.getValueOrKey({
        list: ChatEntryType,
        key,
        value
      });
    },

    /**
     * Get all workflow state or get key value type from value
     * @param {number} value
     * @param {string} key
          RUNNING: 0,
          COMPLETED: 1,
          ABORTED: 2,
          TERMINATED: 3,
          SUSPENDED: 4,
          NOT_STARTED: 5,
     */
    getWorkflowProcess_WorkflowState({ key, value }) {
      const { WorkflowProcess } = require('./grpc/proto/business_pb.js');
      const { WorkflowState } = WorkflowProcess;

      return convertEnums.getValueOrKey({
        list: WorkflowState,
        key,
        value
      });
    },

    /**
     * Get all workflow priority or get key value type from value
     * @param {number} value
     * @param {string} key
          URGENT: 0,
          HIGH: 1,
          MEDIUM: 2,
          LOW: 3,
          MINOR: 4,
     */
    getWorkflowProcess_WorkflowPriority({ key, value }) {
      const { WorkflowProcess } = require('./grpc/proto/business_pb.js');
      const { Priority } = WorkflowProcess;

      return convertEnums.getValueOrKey({
        list: Priority,
        key,
        value
      });
    },

    /**
     * Get all workflow event type or get key value type from value
     * @param {number} value
     * @param {string} key
          PROCESS_CREATED = 0;
          PROCESS_COMPLETED = 1;
          STATE_CHANGED = 2;
      */
    getWorkflowEvent_EventType({ key, value }) {
      const { WorkflowEvent } = require('./grpc/proto/business_pb.js');
      const { EventType } = WorkflowEvent;

      return convertEnums.getValueOrKey({
        list: EventType,
        key,
        value
      });
    },

    /**
     * Get all workflow definition publush status or get key value type from value
     * @param {number} value
     * @param {string} key
          RELEASED = 0;
          TEST = 1;
          UNDER_REVISION = 2;
          VOID = 3;
     */
    getWorkflowDefinition_PublishStatus({key, value }) {
      const { WorkflowDefinition } = require('./grpc/proto/business_pb.js');
      const { PublishStatus } = WorkflowDefinition;

      return convertEnums.getValueOrKey({
        list: PublishStatus,
        key,
        value
      });
    },

    /**
     * Get all workflow definition duration unit or get key value type from value
     * @param {number} value
     * @param {string} key
          DAY = 0;
          HOUR = 1;
          MINUTE = 2;
          MONTH = 3;
          SECOND = 4;
          YEAR = 5;
     */
    getWorkflowDefinition_DurationUnit({ key, value }) {
      const { WorkflowDefinition } = require('./grpc/proto/business_pb.js');
      const { DurationUnit } = WorkflowDefinition;

      return convertEnums.getValueOrKey({
        list: DurationUnit,
        key,
        value
      });
    },

    /**
     * Get all workflow node action or get key value type from value
     * @param {number} value
     * @param {string} key
        USER_CHOICE = 0;
        DOCUMENT_ACTION = 1;
        SUB_WORKFLOW = 2;
        EMAIL = 3;
        APPS_PROCESS = 4;
        SMART_VIEW = 5;
        APPS_REPORT = 6;
        SMART_BROWSE = 7;
        APPS_TASK = 8;
        SET_VARIABLE = 9;
        USER_WINDOW = 10;
        USER_FORM = 11;
        WAIT_SLEEP = 12;
     */
    getWorkflowNode_Action({ value, key }) {
      const { WorkflowNode } = require('./grpc/proto/business_pb.js');
      const { Action } = WorkflowNode;

      return convertEnums.getValueOrKey({
        list: Action,
        key,
        value
      });
    },

    /**
     * Get all workflow condition, condition type action or get key value type from value
     * @param {number} value
     * @param {string} key
        AND = 0;
        OR = 1;
      */
    getWorkflowCondition_ConditionType({ key, value }) {
      const { WorkflowCondition } = require('./grpc/proto/business_pb.js');
      const { ConditionType } = WorkflowCondition;

      return convertEnums.getValueOrKey({
        list: ConditionType,
        key,
        value
      });
    },

    /**
     * Get all workflow condition, condition type action or get key value type from value
     * @param {number} value
     * @param {string} key
        EQUAL = 0;
        NOT_EQUAL = 1;
        LIKE = 2;
        GREATER = 4;
        GREATER_EQUAL = 5;
        LESS = 6;
        LESS_EQUAL = 7;
        BETWEEN = 8;
        SQL = 9;
     */
    getWorkflowCondition_Operation({ value, key }) {
      const { WorkflowCondition } = require('./grpc/proto/business_pb.js');
      const { Operation } = WorkflowCondition;

      return convertEnums.getValueOrKey({
        list: Operation,
        key,
        value
      });
    }

  };

  module.exports = convertEnums;
