/*************************************************************************************
 * Product: ADempiere gRPC Business Data Client                                      *
 * Copyright (C) 2012-2018 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Yamel Senih ysenih@erpya.com                                      *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                                      *
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
class BusinessData {

  /**
   * Constructor, No authentication required
   * @param {string} host
   * @param {string} sessionUuid
   * @param {string} organizationUuid
   * @param {string} warehouseUuid
   * @param {string} language Languaje i18n
   */
  constructor({
    host,
    sessionUuid,
    organizationUuid,
    warehouseUuid,
    language = 'en_US',
  }) {
    this.sessionUuid = sessionUuid;
    this.host = host;
    this.language = language;
    this.organizationUuid = organizationUuid;
    this.warehouseUuid = warehouseUuid;
  }

  /**
   * Load gRPC Connection
   * @return {object} requestService Return request for get data
   */
  getBusinessService() {
    const grpc_promise = require('grpc-promise');
    const { BusinessDataPromiseClient } = require('./src/grpc/proto/business_grpc_web_pb.js');
    const requestService = new BusinessDataPromiseClient(this.host);
    grpc_promise.promisifyAll(requestService);
    //  Return request for get data
    return requestService;
  }

  /**
   * Load gRPC Connection for core functionality service
   * @return {object} requestService Return request for get data
   */
  getCoreFunctionalityService() {
    const grpc_promise = require('grpc-promise');
    const { CoreFunctionalityPromiseClient } = require('@adempiere/grpc-core-client/src/grpc/proto/core_functionality_grpc_web_pb.js');
    const requestService = new CoreFunctionalityPromiseClient(this.host);
    grpc_promise.promisifyAll(requestService);
    //  Return request for get data
    return requestService;
  }

  getSystemCoreInstance() {
    const SystemCore = require('@adempiere/grpc-core-client');
    return new SystemCore({
      host: this.host,
      sessionUuid: this.sessionUuid,
      organizationUuid: this.organizationUuid,
      warehouseUuid: this.warehouseUuid,
      language: this.language
    });
  }

  /**
   * Load gRPC Connection
   * @return {object} requestService Return request for user interface service
   */
  getUserInterfaceService() {
    const grpc_promise = require('grpc-promise');
    const { UserInterfacePromiseClient } = require('./src/grpc/proto/business_grpc_web_pb.js');
    const requestService = new UserInterfacePromiseClient(this.host);
    grpc_promise.promisifyAll(requestService);
    //  Return request for get data
    return requestService;
  }

  /**
   * Load gRPC Connection
   * @return {object} requestService Return request workdlow service
   */
  getWorkflowService() {
    const grpc_promise = require('grpc-promise');
    const { WorkflowPromiseClient } = require('./src/grpc/proto/business_grpc_web_pb.js');
    const requestService = new WorkflowPromiseClient(this.host);
    grpc_promise.promisifyAll(requestService);
    //  Return request for get data
    return requestService;
  }

  /**
   * Load gRPC Connection
   * @return {object} requestService Return request for dashboarding service
   */
  getDashboardingService() {
    const grpc_promise = require('grpc-promise');
    const { DashboardingPromiseClient } = require('./src/grpc/proto/business_grpc_web_pb.js');
    const requestService = new DashboardingPromiseClient(this.host);
    grpc_promise.promisifyAll(requestService);
    //  Return request for get data
    return requestService;
  }

  /**
   * Load gRPC Connection
   * @return {object} requestService Return request for log service
   */
  getEntityLogService() {
    const grpc_promise = require('grpc-promise');
    const { EntityLogPromiseClient } = require('./src/grpc/proto/business_grpc_web_pb.js');
    const requestService = new EntityLogPromiseClient(this.host);
    grpc_promise.promisifyAll(requestService);
    //  Return request for get data
    return requestService;
  }

  getClientRequest() {
    const { ClientRequest } = require('@adempiere/grpc-core-client/src/grpc/proto/core_functionality_pb.js');
    const clientRequest = new ClientRequest();
    clientRequest.setSessionuuid(this.sessionUuid);
    clientRequest.setLanguage(this.language);
    clientRequest.setOrganizationuuid(this.organizationUuid);
    clientRequest.setWarehouseuuid(this.warehouseUuid);
    return clientRequest;
  }

  /**
   * Checks if value is empty. Deep-checks arrays and objects
   * Note: isEmpty([]) == true, isEmpty({}) == true, isEmpty([{0:false},"",0]) == true, isEmpty({0:1}) == false
   * @param   {boolean|array|object|number|string|date|map|function} value
   * @returns {boolean}
   */
  static isEmptyValue(value) {
    const { isEmptyValue } = require('@adempiere/grpc-core-client/src/convertValues.js');
    return isEmptyValue(value);
  }

  /**
   * Create a entity from CreateEntityRequest object
   * @param {string} tableName
   * @param {array}  attributesList [{ value, columnName }]
   * @param {string}  formatToConvert
   * @return {Entity} Entity created.
   */
  requestCreateEntity({ tableName, attributesList = [], formatToConvert = 'array' }) {
    const { CreateEntityRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new CreateEntityRequest();

    request.setClientrequest(this.getClientRequest());
    request.setTablename(tableName);

    if (attributesList && attributesList.length) {
      const { convertParameterToGRPC } = require('@adempiere/grpc-core-client/src/convertValues.js');

      attributesList.forEach(attribute => {
        const convertedAttribute = convertParameterToGRPC(attribute);
        request.addAttributes(convertedAttribute);
      });
    }

    return this.getBusinessService().createEntity(request)
      .then(responseCreateEntity => {
        const { convertEntityFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return convertEntityFromGRPC({
          entityToConvert: responseCreateEntity,
          formatToConvert
        });
      });
  }

  /**
   * Create a entity from UpdateEntityRequest object
   * @param {string} tableName
   * @param {number} recordId
   * @param {string} recordUuid
   * @param {array}  attributesList [{ value, columnName }]
   * @param {string}  formatToConvert
   * @return {Entity} Entity updated.
   */
  requestUpdateEntity({ tableName, recordId, recordUuid, attributesList = [], formatToConvert = 'array' }) {
    const { UpdateEntityRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new UpdateEntityRequest();

    request.setClientrequest(this.getClientRequest());
    request.setTablename(tableName);
    request.setRecordid(recordId);
    request.setUuid(recordUuid);

    if (attributesList && attributesList.length) {
      const { convertParameterToGRPC } = require('@adempiere/grpc-core-client/src/convertValues.js');

      attributesList.forEach(attribute => {
        const convertedAttribute = convertParameterToGRPC(attribute);
        request.addAttributes(convertedAttribute);
      });
    }

    return this.getBusinessService().updateEntity(request)
      .then(responseUpdateEntity => {
        const { convertEntityFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return convertEntityFromGRPC({
          entityToConvert: responseUpdateEntity,
          formatToConvert
        });
      });
  }

  /**
   * Get Client Request
   * @param {string} tableName, Table name from request
   * @param {string} recordUuid, Universally Unique IDentifier from record
   * @param {number} recordId, IDentifier from record
   * @param {string}  formatToConvert
   * @return {object} Entity with records
   */
  requestGetEntity({ tableName, recordUuid, recordId, formatToConvert = 'object' }) {
    const { GetEntityRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new GetEntityRequest();

    request.setClientrequest(this.getClientRequest());
    request.setRecordid(recordId);
    request.setUuid(recordUuid);

    const { convertCriteriaToGRPC } = require('@adempiere/grpc-core-client/src/convertValues.js');
    const criteriaForRequestEntity = convertCriteriaToGRPC({ tableName });
    request.setCriteria(criteriaForRequestEntity);

    return this.getBusinessService().getEntity(request)
      .then(getEntityResponse => {
        const { convertEntityFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return convertEntityFromGRPC({
          entityToConvert: getEntityResponse,
          formatToConvert
        });
      });
  }

  /**
   * Get Country Information
   * @param {string} countryUuid, Universally Unique IDentifier from country
   * @param {number} countryId, IDentifier from country
   * @return {object}
   */
  requestGetCountry({ countryUuid, countryId }) {
    return this.getSystemCoreInstance().requestGetCountry({
      countryId,
      countryUuid
    });
  }

  /**
   * Get entities list
   * @param {string} tableName
   * @param {string} query
   * @param {string} whereClause
   * @param {array}  conditionsList
   * @param {string} orderByClause
   * @param {string}  pageToken
   * @param {string}  pageSize
   * @param {string}  formatToConvert
   * @returns {ListEntitiesResponse}
   */
  requestListEntities({ tableName, query, whereClause, conditionsList = [], orderByClause, pageToken, pageSize, formatToConvert = 'object' }) {
    const { ListEntitiesRequest } = require('./src/grpc/proto/business_pb.js');

    const request = new ListEntitiesRequest();
    request.setClientrequest(this.getClientRequest());

    const { convertCriteriaToGRPC } = require('@adempiere/grpc-core-client/src/convertValues.js');
    const criteriaForList = convertCriteriaToGRPC({
      tableName,
      query,
      whereClause,
      conditionsList,
      orderByClause
    });
    request.setCriteria(criteriaForList);
    request.setPageToken(pageToken);
    request.setPageSize(pageSize);

    return this.getBusinessService().listEntities(request)
      .then(entitiesListResponse => {
        const { convertEntityFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return {
          recordCount: entitiesListResponse.getRecordcount(),
          recordsList: entitiesListResponse.getRecordsList().map(entityItem => {
            return convertEntityFromGRPC({
              entityToConvert: entityItem,
              formatToConvert
            });
          }),
          nextPageToken: entitiesListResponse.getNextPageToken(),
        };
      });
  }

  // Request Organization list
  requestListOrganizations({ roleUuid, roleId, pageToken, pageSize }) {
    return this.getSystemCoreInstance().requestListOrganizations({
      roleId,
      roleUuid,
      pageToken,
      pageSize
    });
  }

  // Request Warehouse list
  requestListWarehouses({ organizationUuid, organizationId, pageToken, pageSize }) {
    return this.getSystemCoreInstance().requestListWarehouses({
      organizationUuid,
      organizationId,
      pageToken,
      pageSize
    });
  }

  /**
   * Delete a entity request
   * @param {string} tableName
   * @param {number} recordId
   * @param {string} recordUuid
   * @return {Empty} empty for deleted and throw for error.
   */
  requestDeleteEntity({ tableName, recordId, recordUuid }) {
    const { DeleteEntityRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new DeleteEntityRequest();
    request.setClientrequest(this.getClientRequest());

    request.setTablename(tableName);
    request.setRecordid(recordId);
    request.setUuid(recordUuid);

    return this.getBusinessService().deleteEntity(request);
  }

  /**
   * Rollback last Entity operation
   * @param {string} tableName
   * @param {string} recordId
   * @param {string} eventTypeExecuted
   * @param {string}  formatToConvert
   */
  requestRollbackEntity({ tableName, recordId, eventTypeExecuted, formatToConvert = 'object' }) {
    const { RollbackEntityRequest } = require('./src/grpc/proto/business_pb.js');
    const { getRollbackEntityRequest_EventType } = require('./src/convertEnums.js');

    const rollbackRequest = new RollbackEntityRequest();
    rollbackRequest.setClientrequest(this.getClientRequest());
    rollbackRequest.setTablename(tableName);
    rollbackRequest.setRecordid(recordId);

    // set event type
    const eventType = getRollbackEntityRequest_EventType({ key: eventTypeExecuted });
    rollbackRequest.setEventtype(eventType);

    return this.getUserInterfaceService().rollbackEntity(rollbackRequest)
      .then(rollBackResponse => {
        const { convertEntityFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return convertEntityFromGRPC({
          entityToConvert: rollBackResponse,
          formatToConvert
        });
      });
  }

  /**
   * Request Object from query
   * @param {string} query
   */
  requestGetDefaultValue(query) {
    const { GetDefaultValueRequest } = require('./src/grpc/proto/business_pb.js');
    const defaultValueInstance = new GetDefaultValueRequest();

    defaultValueInstance.setClientrequest(this.getClientRequest());
    defaultValueInstance.setQuery(query);

    return this.getUserInterfaceService().getDefaultValue(defaultValueInstance)
      .then(defaultValueResponse => {
        const { convertValueFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return convertValueFromGRPC(defaultValueResponse);
      });
  }

  /**
   * Request context info value
   * @param {string}  uuid
   * @param {string}  query
   */
  requestGetContextInfoValue({ uuid, query }) {
    const { GetContextInfoValueRequest } = require('./src/grpc/proto/business_pb.js');
    const requestInstance = new GetContextInfoValueRequest();

    requestInstance.setClientrequest(this.getClientRequest());
    requestInstance.setQuery(query);
    requestInstance.setUuid(uuid);

    return this.getUserInterfaceService().getContextInfoValue(requestInstance)
      .then(contextInfoResponse => {
        return {
          messageText: contextInfoResponse.getMessagetext(),
          messageTip: contextInfoResponse.getMessagetip()
        };
      });
  }

  /**
   * Get Private Access
   * @param {string} tableName
   * @param {string} userUuid
   * @param {number} recordId
   * TODO: Add support with userId and recordUuid
   */
  requestGetPrivateAccess({ tableName, recordId, userUuid }) {
    const { GetPrivateAccessRequest } = require('./src/grpc/proto/business_pb.js');
    const privateAccessInstance = new GetPrivateAccessRequest();

    privateAccessInstance.setClientrequest(this.getClientRequest());
    privateAccessInstance.setTablename(tableName);
    privateAccessInstance.setRecordid(recordId);
    privateAccessInstance.setUseruuid(userUuid);

    return this.getUserInterfaceService().getPrivateAccess(privateAccessInstance)
      .then(privateAccessResponse => {
        const { convertPrivateAccessFromGRPC } = require('./src/convertUtils.js');

        return convertPrivateAccessFromGRPC(privateAccessResponse);
      });
  }

  /**
   * Lock Private Access
   * @param {string} tableName
   * @param {string} userUuid
   * @param {number} recordId
   * TODO: Add support with userId and recordUuid
   */
  requestLockPrivateAccess({ tableName, recordId, userUuid }) {
    const { LockPrivateAccessRequest } = require('./src/grpc/proto/business_pb.js');
    const requestInstance = new LockPrivateAccessRequest();

    requestInstance.setClientrequest(this.getClientRequest());
    requestInstance.setTablename(tableName);
    requestInstance.setRecordid(recordId);
    requestInstance.setUseruuid(userUuid);

    return this.getUserInterfaceService().lockPrivateAccess(requestInstance)
      .then(privateAccessResponse => {
        const { convertPrivateAccessFromGRPC } = require('./src/convertUtils.js');

        return convertPrivateAccessFromGRPC(privateAccessResponse);
      });
  }

  /**
   * Lock Private Access
   * @param {string} tableName
   * @param {string} userUuid
   * @param {number} recordId
   * TODO: Add support with userId and recordUuid
   */
  requestUnlockPrivateAccess({ tableName, recordId, userUuid }) {
    const { UnlockPrivateAccessRequest } = require('./src/grpc/proto/business_pb.js');
    const requestInstance = new UnlockPrivateAccessRequest();

    requestInstance.setClientrequest(this.getClientRequest());
    requestInstance.setTablename(tableName);
    requestInstance.setRecordid(recordId);
    requestInstance.setUseruuid(userUuid);

    return this.getUserInterfaceService().unlockPrivateAccess(requestInstance)
      .then(privateAccessResponse => {
        const { convertPrivateAccessFromGRPC } = require('./src/convertUtils.js');

        return convertPrivateAccessFromGRPC(privateAccessResponse);
      });
  }

  /**
   * List all references from window
   * @param {string}  windowUuid
   * @param {string}  tableName
   * @param {string}  recordUuid
   * @param {number}  recordId
   * @param {string}  pageToken
   * @param {string}  pageSize
   */
  requestListReferences({ windowUuid, tableName, recordId, recordUuid, pageToken, pageSize }) {
    const { ListReferencesRequest } = require('./src/grpc/proto/business_pb.js');
    const requestReference = new ListReferencesRequest();
    requestReference.setClientrequest(this.getClientRequest());

    requestReference.setWindowuuid(windowUuid);
    requestReference.setTablename(tableName);
    requestReference.setUuid(recordUuid);
    requestReference.setRecordid(recordId);
    requestReference.setPageToken(pageToken);
    requestReference.setPageSize(pageSize);

    return this.getUserInterfaceService().listReferences(requestReference)
      .then(referenceResponse => {
        const { convertRecordReferenceInfoFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return {
          recordCount: referenceResponse.getRecordcount(),
          referencesList: referenceResponse.getReferencesList().map(referenceItem => {
            return convertRecordReferenceInfoFromGRPC(referenceItem);
          }),
          nextPageToken: referenceResponse.getNextPageToken()
        };
      });
  }

  /**
   * Get Report Output from criteria
   * @param {array}   parametersList
   * @param {string}  tableName
   * @param {string}  printFormatUuid
   * @param {string}  reportViewUuid
   * @param {boolean} isSummary
   * @param {string}  reportName
   * @param {string}  reportType
   */
  requestGetReportOutput({ parametersList = [], tableName, printFormatUuid, reportViewUuid, isSummary, reportName, reportType }) {
    const { GetReportOutputRequest } = require('./src/grpc/proto/business_pb.js');

    const reportOutputInstance = new GetReportOutputRequest();
    reportOutputInstance.setClientrequest(this.getClientRequest());
    reportOutputInstance.setPrintformatuuid(printFormatUuid);
    reportOutputInstance.setIssummary(isSummary);
    reportOutputInstance.setReporttype(reportType);
    reportOutputInstance.setReportviewuuid(reportViewUuid);
    reportOutputInstance.setReportname(reportName);

    const { convertCriteriaToGRPC } = require('@adempiere/grpc-core-client/src/convertValues.js');
    const criteriaForReport = convertCriteriaToGRPC({ tableName });
    if (parametersList && parametersList.length) {
      const { convertConditionToGRPC } = require('@adempiere/grpc-core-client/src/convertValues.js');
      parametersList.forEach(parameter => {
        if (parameter.columnName.endsWith('_To')) {
          const previousParemeter = parametersList.find(param => param.columnName === parameter.columnName.replace('_To', ''));
          if (previousParemeter && previousParemeter.isRange) {
            parameter.columnName = parameter.columnName.replace('_To', '');
          }
        }

        const convertedCondition = convertConditionToGRPC(parameter);
        criteriaForReport.addConditions(convertedCondition);
      });
    }
    reportOutputInstance.setCriteria(criteriaForReport);

    return this.getUserInterfaceService().getReportOutput(reportOutputInstance)
      .then(reportOutputResponse => {
        const { convertReportOutputFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return convertReportOutputFromGRPC(reportOutputResponse);
      });
  }

  /**
   * Request Lookup from Reference
   * @param {string} tableName
   * @param {string} directQuery
   * @param {string|number} value current value to get display column
   */
  requestLookupFromReference({ tableName, directQuery, value: valuesList = [] }) {
    const { convertCriteriaToGRPC, isEmptyValue } = require('@adempiere/grpc-core-client/src/convertValues.js');

    if (!isEmptyValue(valuesList) && !Array.isArray(valuesList)) {
      valuesList = Array(valuesList);
    }
    const criteriaForLookup = convertCriteriaToGRPC({
      tableName,
      query: directQuery,
      valuesList
    });

    const { GetLookupItemRequest } = require('./src/grpc/proto/business_pb.js');
    const requestLookup = new GetLookupItemRequest();
    requestLookup.setClientrequest(this.getClientRequest());
    requestLookup.setCriteria(criteriaForLookup);

    return this.getUserInterfaceService().getLookupItem(requestLookup)
      .then(lookupItemRepsonse => {
        const { convertLookupFromGRPC } = require('./src/convertUtils.js');

        return convertLookupFromGRPC(lookupItemRepsonse);
      });
  }

  /**
   * Request Lookup List from Reference
   * @param {string} tableName
   * @param {string} query
   * @param {array}  valuesList values to match in response list
   * @param {string} pageToken
   * @param {string} pageSize
   */
  requestListLookupFromReference({ tableName, query, valuesList = [], pageToken, pageSize }) {
    const { convertCriteriaToGRPC, isEmptyValue } = require('@adempiere/grpc-core-client/src/convertValues.js');

    if (!isEmptyValue(valuesList) && !Array.isArray(valuesList)) {
      valuesList = Array(valuesList);
    }
    const criteriaForLookup = convertCriteriaToGRPC({
      tableName,
      query,
      valuesList
    });

    const { ListLookupItemsRequest } = require('./src/grpc/proto/business_pb.js');
    const requestLookup = new ListLookupItemsRequest();
    requestLookup.setClientrequest(this.getClientRequest());
    requestLookup.setCriteria(criteriaForLookup);
    requestLookup.setPageToken(pageToken);
    requestLookup.setPageSize(pageSize);

    return this.getUserInterfaceService().listLookupItems(requestLookup)
      .then(lookupsListRepsonse => {
        const { convertLookupFromGRPC } = require('./src/convertUtils.js');

        return {
          recordCount: lookupsListRepsonse.getRecordcount(),
          recordsList: lookupsListRepsonse.getRecordsList().map(lookupItem => {
            return convertLookupFromGRPC(lookupItem);
          }),
          nextPageToken: lookupsListRepsonse.getNextPageToken()
        };
      });
  }

  /**
   * Request a process to run
   * @param {string}  uuid, uuid from process to run
   * @param {number}  tableName, table name of tab, used only window
   * @param {number}  recordId, record identifier, used only window
   * @param {string}  recordUuid, // TODO: Add record uuid
   * @param {array}   parametersList, parameters from process [{ columnName, value }]
   * @param {array}   selectionsList, selection records, used only browser
        [{
          selectionId,
          selectionValues: [{
            columnName,
            value
          }]
        }]
   */
  requestRunProcess({ uuid, reportType, printFormatUuid, parametersList, tableName, recordId, recordUuid, selectionsList = [] }) {
    const { RunBusinessProcessRequest } = require('./src/grpc/proto/business_pb.js');
    const processRequest = new RunBusinessProcessRequest();
    processRequest.setClientrequest(this.getClientRequest());

    //  Fill Request process
    processRequest.setUuid(uuid);
    // report export type
    if (reportType) {
      processRequest.setReporttype(reportType);
    }
    if (printFormatUuid) {
      processRequest.setPrintformatuuid(printFormatUuid);
    }
    // process params
    if (parametersList && parametersList.length) {
      const { convertParameterToGRPC } = require('@adempiere/grpc-core-client/src/convertValues.js');

      parametersList.forEach(parameter => {
        const convertedParameter = convertParameterToGRPC(parameter);
        processRequest.addParameters(convertedParameter);
      });
    }

    // record in window
    if (tableName) {
      processRequest.setTablename(tableName);
      processRequest.setRecordid(recordId);
    }

    // browser selection list records
    if (selectionsList && selectionsList.length) {
      const { convertSelectionToGRPC } = require('@adempiere/grpc-core-client/src/convertValues.js');

      selectionsList.forEach(record => {
        // selection format = { selectionId: number, selectionValues: array }
        const convertedRecord = convertSelectionToGRPC(record);
        processRequest.addSelections(convertedRecord);
      });
    }

    return this.getBusinessService().runBusinessProcess(processRequest)
      .then(runProcessResponse => {
        const { convertProcessLogFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return convertProcessLogFromGRPC(runProcessResponse);
      });
  }

  /**
   * Request Browser Search
   * @param {string} uuid Of browser
   * @param {array}  parametersList
   * @param {string} query
   * @param {string} whereClause
   * @param {string} orderByClause
   * @param {string} pageToken
   * @param {string} pageSize
   * @param {string} formatToConvert
   */
  requestListBrowserSearch({ uuid, parametersList = [], query, whereClause, orderByClause, pageToken, pageSize, formatToConvert = 'object' }) {
    const { ListBrowserItemsRequest } = require('./src/grpc/proto/business_pb.js');
    const browserRequest = new ListBrowserItemsRequest();
    browserRequest.setClientrequest(this.getClientRequest());

    //  Fill Request browser
    browserRequest.setUuid(uuid);
    browserRequest.setPageToken(pageToken);
    browserRequest.setPageSize(pageSize);

    // isQueryCriteria fields parameters list
    if (parametersList && parametersList.length) {
      const { convertParameterToGRPC } = require('@adempiere/grpc-core-client/src/convertValues.js');

      parametersList.forEach(parameter => {
        const convertedParameter = convertParameterToGRPC(parameter);
        browserRequest.addParameters(convertedParameter);
      });
    }
    const { convertCriteriaToGRPC } = require('@adempiere/grpc-core-client/src/convertValues.js');
    const browserCriteria = convertCriteriaToGRPC({ query, whereClause, orderByClause });
    browserRequest.setCriteria(browserCriteria);

    return this.getUserInterfaceService().listBrowserItems(browserRequest)
      .then(browserSearchResponse => {
        const { convertEntityFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return {
          recordCount: browserSearchResponse.getRecordcount(),
          recordsList: browserSearchResponse.getRecordsList().map(entityItem => {
            return convertEntityFromGRPC({
              entityToConvert: entityItem,
              formatToConvert
            });
          }),
          nextPageToken: browserSearchResponse.getNextPageToken()
        };
      });
  }

  /**
   * Request Processes Logs List
   * @param {string}  pageToken
   * @param {string}  pageSize
   */
  requestListProcessesLogs({ tableName, recordId, pageToken, pageSize }) {
    const { ListProcessLogsRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new ListProcessLogsRequest();

    request.setClientrequest(this.getClientRequest());
    request.setPageToken(pageToken);
    request.setPageSize(pageSize);
    request.setTablename(tableName);
    request.setRecordid(recordId);

    //  return
    return this.getEntityLogService().listProcessLogs(request)
      .then(processLogsResponse => {
        const { convertProcessLogFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return {
          recordCount: processLogsResponse.getRecordcount(),
          processLogsList: processLogsResponse.getProcesslogsList().map(processItem => {
            return convertProcessLogFromGRPC(processItem);
          }),
          nextPageToken: processLogsResponse.getNextPageToken()
        };
      });
  }

  /**
   * Request Print Formats List
   * @param {string} tableName
   * @param {string} reportViewUuid
   * @param {string} processUuid
   * @param {string}  pageToken
   * @param {string}  pageSize
   */
  requestListPrintFormats({ tableName, reportViewUuid, processUuid, pageToken, pageSize }) {
    const { ListPrintFormatsRequest } = require('./src/grpc/proto/business_pb.js');
    const requestInstance = new ListPrintFormatsRequest();

    requestInstance.setClientrequest(this.getClientRequest());
    requestInstance.setTablename(tableName);
    requestInstance.setReportviewuuid(reportViewUuid);
    requestInstance.setProcessuuid(processUuid);
    requestInstance.setPageToken(pageToken);
    requestInstance.setPageSize(pageSize);

    return this.getUserInterfaceService().listPrintFormats(requestInstance)
      .then(printFormatResponse => {
        const { convertPrintFromatFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return {
          recordCount: printFormatResponse.getRecordcount(),
          printFormatsList: printFormatResponse.getPrintformatsList().map(printFormatItem => {
            return convertPrintFromatFromGRPC(printFormatItem);
          }),
          nextPageToken: printFormatResponse.getNextPageToken()
        };
      });
  }

  /**
   * Request Report Views List
   * @param {string}  tableName
   * @param {string}  processUuid
   * @param {string}  pageToken
   * @param {string}  pageSize
   */
  requestListReportViews({ tableName, processUuid, pageToken, pageSize }) {
    const { ListReportViewsRequest } = require('./src/grpc/proto/business_pb.js');
    const requestInstance = new ListReportViewsRequest();
    requestInstance.setClientrequest(this.getClientRequest());
    requestInstance.setTablename(tableName);
    requestInstance.setProcessuuid(processUuid);
    requestInstance.setPageToken(pageToken);
    requestInstance.setPageSize(pageSize);

    return this.getUserInterfaceService().listReportViews(requestInstance)
      .then(reportViewsResponse => {
        const { convertReportViewFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return {
          recordCount: reportViewsResponse.getRecordcount(),
          reportViewsList: reportViewsResponse.getReportviewsList().map(reportViewItem => {
            return convertReportViewFromGRPC(reportViewItem);
          }),
          nextPageToken: reportViewsResponse.getNextPageToken()
        };
      });
  }

  /**
   * Request Favorites List
   * @param {string} tableName
   * @param {string}  pageToken
   * @param {string}  pageSize
   */
  requestListDrillTables({ tableName, pageToken, pageSize }) {
    const { ListDrillTablesRequest } = require('./src/grpc/proto/business_pb.js');
    const requestInstance = new ListDrillTablesRequest();

    requestInstance.setClientrequest(this.getClientRequest());
    requestInstance.setTablename(tableName);
    requestInstance.setPageToken(pageToken);
    requestInstance.setPageSize(pageSize);

    return this.getUserInterfaceService().listDrillTables(requestInstance)
      .then(drillTableResponse => {
        const { convertDrillTableFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return {
          recordCount: drillTableResponse.getRecordcount(),
          drillTablesList: drillTableResponse.getDrilltablesList().map(itemDrillTable => {
            return convertDrillTableFromGRPC(itemDrillTable);
          }),
          nextPageToken: drillTableResponse.getNextPageToken()
        };
      });
  }

  /**
   * Request Dashboards List
   * @param {string}  roleUuid
   * @param {string}  pageToken
   * @param {string}  pageSize
   */
  requestListDashboards({ roleUuid, pageToken, pageSize }) {
    const { ListDashboardsRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new ListDashboardsRequest();
    request.setClientrequest(this.getClientRequest());
    request.setRoleuuid(roleUuid);
    request.setPageToken(pageToken);
    request.setPageSize(pageSize);

    return this.getDashboardingService().listDashboards(request)
      .then(dashboardResponse => {
        const { convertDashboardFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return {
          recordCount: dashboardResponse.getRecordcount(),
          dashboardsList: dashboardResponse.getDashboardsList().map(dashboardItem => {
            return convertDashboardFromGRPC(dashboardItem);
          }),
          nextPageToken: dashboardResponse.getNextPageToken()
        };
      });
  }

  /**
   * Request Recent Items Activity List
   * @param {string}  pageToken
   * @param {string}  pageSize
   */
  requestListRecentItems({ pageToken, pageSize }) {
    const { ListRecentItemsRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new ListRecentItemsRequest();

    request.setClientrequest(this.getClientRequest());
    request.setPageToken(pageToken);
    request.setPageSize(pageSize);

    return this.getEntityLogService().listRecentItems(request)
      .then(recentItemsResponse => {
        const { convertRecentItemFromGRPC } = require('./src/convertUtils.js');

        return {
          recordCount: recentItemsResponse.getRecordcount(),
          recentItemsList: recentItemsResponse.getRecentitemsList().map(recentItem => {
            return convertRecentItemFromGRPC(recentItem);
          }),
          nextPageToken: recentItemsResponse.getNextPageToken()
        };
      });
  }

  /**
   * Request Pending Documents List
   * @param {string} userUuid
   * @param {string} roleUuid
   * @param {string}  pageToken
   * @param {string}  pageSize
   */
  requestListPendingDocuments({ userUuid, roleUuid, pageToken, pageSize }) {
    const { ListPendingDocumentsRequest } = require('./src/grpc/proto/business_pb.js');
    const requestInstance = new ListPendingDocumentsRequest();

    requestInstance.setClientrequest(this.getClientRequest());
    requestInstance.setUseruuid(userUuid);
    requestInstance.setRoleuuid(roleUuid);
    requestInstance.setPageToken(pageToken);
    requestInstance.setPageSize(pageSize);

    return this.getDashboardingService().listPendingDocuments(requestInstance)
      .then(pendingDocumentsResponse => {
        const { convertPendingDocumentFromGRPC } = require('./src/convertUtils.js');

        return {
          recordCount: pendingDocumentsResponse.getRecordcount(),
          pendingDocumentsList: pendingDocumentsResponse.getPendingdocumentsList().map(documentItem => {
            return convertPendingDocumentFromGRPC(documentItem);
          }),
          nextPageToken: pendingDocumentsResponse.getNextPageToken()
        };
      });
  }

  /**
   * Request Favorites List
   * @param {string}  userUuid
   * @param {string}  pageToken
   * @param {string}  pageSize
   */
  requestListFavorites({ userUuid, pageToken, pageSize }) {
    const { ListFavoritesRequest } = require('./src/grpc/proto/business_pb.js');
    const requestInstance = new ListFavoritesRequest();

    requestInstance.setClientrequest(this.getClientRequest());
    requestInstance.setUseruuid(userUuid);
    requestInstance.setPageToken(pageToken);
    requestInstance.setPageSize(pageSize);

    return this.getDashboardingService().listFavorites(requestInstance)
      .then(favoritesResponse => {
        const { convertFavoriteFromGRPC } = require('./src/convertUtils.js');

        return {
          recordCount: favoritesResponse.getRecordcount(),
          favoritesList: favoritesResponse.getFavoritesList().map(favoriteItem => {
            return convertFavoriteFromGRPC(favoriteItem);
          }),
          nextPageToken: favoritesResponse.getNextPageToken()
        };
      });
  }

  /**
   * Get languages flagged as System Language or Base Language
   * @param {string}  pageToken
   * @param {string}  pageSize
   */
  requestListLanguages({ pageToken, pageSize }) {
    return this.getSystemCoreInstance().requestListLanguages({
      pageToken,
      pageSize
    });
  }

  /**
   * Get languages flagged as System Language or Base Language
   * @param {string}  tableName
   * @param {string}  recordUuid
   * @param {number}  recordId
   * @param {string}  language
   * @param {string}  pageToken
   * @param {string}  pageSize
   */
  requestListTranslations({
    tableName,
    recordUuid,
    recordId,
    language,
    pageToken,
    pageSize,
  }) {
    const { ListTranslationsRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new ListTranslationsRequest();

    request.setClientrequest(this.getClientRequest());
    request.setPageToken(pageToken);
    request.setPageSize(pageSize);
    //  Set values
    request.setTablename(tableName);
    request.setRecorduuid(recordUuid);
    request.setRecordid(recordId);
    request.setLanguage(language);

    return this.getUserInterfaceService().listTranslations(request)
      .then(translationResponse => {
        const { convertTranslationFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return {
          recordCount: translationResponse.getRecordcount(),
          translationsList: translationResponse.getTranslationsList().map(translationItem => {
            return convertTranslationFromGRPC(translationItem);
          }),
          nextPageToken: translationResponse.getNextPageToken()
        };
      });
  }

  /**
   * Run callout request
   * @param {string}  windowUuid
   * @param {number}  windowNo
   * @param {string}  tabUuid
   * @param {string}  tableName
   * @param {string}  columnName
   * @param {mixed}   value
   * @param {mixed}   oldValue
   * @param {string}  valueType
   * @param {string}  callout
   * @param {array}   attributesList
   * @returns {Entity}
   */
  requestRunCallout({
    windowUuid,
    windowNo,
    tabUuid,
    tableName,
    columnName,
    value,
    oldValue,
    valueType,
    callout,
    attributesList = []
  }) {
    const { RunCalloutRequest } = require('./src/grpc/proto/business_pb.js');
    const { convertValueToGRPC } = require('@adempiere/grpc-core-client/src/convertValues.js');
    const calloutRequestInstance = new RunCalloutRequest();

    calloutRequestInstance.setClientrequest(this.getClientRequest());
    calloutRequestInstance.setWindowuuid(windowUuid);
    calloutRequestInstance.setWindowno(windowNo);
    calloutRequestInstance.setTabuuid(tabUuid);
    calloutRequestInstance.setTablename(tableName);
    calloutRequestInstance.setColumnname(columnName);
    calloutRequestInstance.setValue(
      convertValueToGRPC({
        value,
        valueType
      })
    );
    calloutRequestInstance.setOldvalue(
      convertValueToGRPC({
        value: oldValue,
        valueType
      })
    );
    calloutRequestInstance.setCallout(callout);

    if (attributesList.length) {
      const { convertParameterToGRPC } = require('@adempiere/grpc-core-client/src/convertValues.js');

      attributesList.forEach(attribute => {
        const convertedAttribute = convertParameterToGRPC(attribute);
        calloutRequestInstance.addAttributes(convertedAttribute);
      });
    }

    return this.getUserInterfaceService().runCallout(calloutRequestInstance)
      .then(calloutResponse => {
        const { convertValuesMapFromGRPC } = require('@adempiere/grpc-core-client/src/convertValues.js');

        return {
          result: calloutResponse.getResult(),
          values: convertValuesMapFromGRPC({
            mapToConvert: calloutResponse.getValuesMap(),
            returnType: 'object'
          })
        };
      });
  }

  /**
   * Request Records Logs List
   * @param {string}  tableName
   * @param {number}  recordId
   * @param {string}  pageToken
   * @param {string}  pageSize
   */
  requestListRecordsLogs({ tableName, recordId, pageToken, pageSize }) {
    const { ListRecordLogsRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new ListRecordLogsRequest();

    request.setClientrequest(this.getClientRequest());
    request.setTablename(tableName);
    request.setRecordid(recordId);
    request.setPageToken(pageToken);
    request.setPageSize(pageSize);

    //  return
    return this.getEntityLogService().listRecordLogs(request)
      .then(recordLogsResponse => {
        const { convertRecordLogFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return {
          recordCount: recordLogsResponse.getRecordcount(),
          recordLogsList: recordLogsResponse.getRecordlogsList().map(recordItem => {
            return convertRecordLogFromGRPC(recordItem);
          }),
          nextPageToken: recordLogsResponse.getNextPageToken()
        };
      });
  }

  /**
   * Request Record Chats
   * @param {string}  tableName
   * @param {number}  recordId
   * @param {string}  pageToken
   * @param {string}  pageSize
   */
  requestListRecordChats({ tableName, recordId, pageToken, pageSize }) {
    const { ListRecordChatsRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new ListRecordChatsRequest();

    request.setClientrequest(this.getClientRequest());
    request.setTablename(tableName);
    request.setRecordid(recordId);
    request.setPageToken(pageToken);
    request.setPageSize(pageSize);

    //  return
    return this.getEntityLogService().listRecordChats(request)
      .then(recordChatResponse => {
        const { convertRecordChatsFromGRPC } = require('./src/convertUtils.js');

        return {
          recordCount: recordChatResponse.getRecordcount(),
          recordChatsList: recordChatResponse.getRecordchatsList().map(recordChatsItem => {
            return convertRecordChatsFromGRPC(recordChatsItem);
          }),
          nextPageToken: recordChatResponse.getNextPageToken()
        };
      });
  }

  /**
   * Request Chats Entries
   * @param {string}  uuid
   * @param {string}  pageToken
   * @param {string}  pageSize
   */
  requestListChatEntries({ uuid, pageToken, pageSize }) {
    const { ListChatEntriesRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new ListChatEntriesRequest();

    request.setClientrequest(this.getClientRequest());
    request.setChatuuid(uuid);
    request.setPageToken(pageToken);
    request.setPageSize(pageSize);

    //  return
    return this.getEntityLogService().listChatEntries(request)
      .then(chatEntriesResponse => {
        const { convertChatEntryFromGRPC } = require('./src/convertUtils.js');

        return {
          recordCount: chatEntriesResponse.getRecordcount(),
          chatEntriesList: chatEntriesResponse.getChatentriesList().map(chatEntryItem => {
            return convertChatEntryFromGRPC(chatEntryItem);
          }),
          nextPageToken: chatEntriesResponse.getNextPageToken()
        };
      });
  }

  /**
   * Request Chats Entries
   * @param {string}  tableName
   * @param {number}  recordId
   * @param {string}  comment
   */
  requestCreateChatEntry({ tableName, recordId, comment }) {
    const { CreateChatEntryRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new CreateChatEntryRequest();

    request.setClientrequest(this.getClientRequest());
    request.setTablename(tableName);
    request.setRecordid(recordId);
    request.setComment(comment);

    //  return
    return this.getUserInterfaceService().createChatEntry(request)
      .then(chatEntryResponse => {
        const { convertChatEntryFromGRPC } = require('./src/convertUtils.js');

        return convertChatEntryFromGRPC(chatEntryResponse);
      });
  }

  /**
   * Request Workflows Logs List
   * @param {string}  tableName
   * @param {number}  recordId
   * @param {string}  pageToken
   * @param {string}  pageSize
   */
  requestListWorkflowsLogs({ tableName, recordId, pageToken, pageSize }) {
    const { ListWorkflowLogsRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new ListWorkflowLogsRequest();

    request.setClientrequest(this.getClientRequest());
    request.setTablename(tableName);
    request.setRecordid(recordId);
    request.setPageToken(pageToken);
    request.setPageSize(pageSize);

    //  return
    return this.getEntityLogService().listWorkflowLogs(request)
      .then(workflowLogsResponse => {
        const { convertWorkflowProcessFomGRPC } = require('./src/convertUtils.js');

        return {
          recordCount: workflowLogsResponse.getRecordcount(),
          workflowLogsList: workflowLogsResponse.getWorkflowlogsList().map(workflowItem => {
            return convertWorkflowProcessFomGRPC(workflowItem);
          }),
          nextPageToken: workflowLogsResponse.getNextPageToken()
        };
      });
  }

  requestListWorkflows({ tableName, pageToken, pageSize }) {
    const { ListWorkflowsRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new ListWorkflowsRequest();

    request.setClientrequest(this.getClientRequest());
    request.setTablename(tableName);
    request.setPageToken(pageToken);
    request.setPageSize(pageSize);

    return this.getWorkflowService().listWorkflows(request)
      .then(workflowResponse => {
        const { convertWorkflowDefinitionFromGRPC } = require('./src/convertUtils.js');

        return {
          recordCount: workflowResponse.getRecordcount(),
          workflowsList: workflowResponse.getWorkflowsList().map(workflowItem => {
            return convertWorkflowDefinitionFromGRPC(workflowItem);
          }),
          nextPageToken: workflowResponse.getNextPageToken()
        };
      });
  }

  /**
   * Get all operator or get key value type from value
   * @param {string} key
   */
  getConditionOperators(key) {
    const { getCondition_Operator } = require('@adempiere/grpc-core-client/src/convertEnums.js');
    return getCondition_Operator({ key });
  }

  /**
   * Request Document Actions List
   * @param {string} tableName
   * @param {number} recordId
   * @param {string} recordUuid
   * @param {string} documentStatus
   * @param {string} documentAction
   * @param {number} pageSize
   * @param {string} pageToken
   */
  requestListDocumentActions({ tableName, recordId, recordUuid, documentStatus, documentAction, pageSize, pageToken }) {
    const { ListDocumentActionsRequest } = require('./src/grpc/proto/business_pb.js');
    const requestInstance = new ListDocumentActionsRequest;

    requestInstance.setClientrequest(this.getClientRequest());
    requestInstance.setTablename(tableName);
    requestInstance.setRecordid(recordId);
    requestInstance.setRecorduuid(recordUuid);
    requestInstance.setDocumentstatus(documentStatus);
    requestInstance.setDocumentaction(documentAction);
    requestInstance.setPageSize(pageSize);
    requestInstance.setPageToken(pageToken);

    return this.getWorkflowService().listDocumentActions(requestInstance)
      .then(listDocumentActionsResponse => {
        const { convertDocumentAction } = require('./src/convertUtils.js');

        return {
          recordCount: listDocumentActionsResponse.getRecordcount(),
          documentActionsList: listDocumentActionsResponse.getDocumentactionsList()
            .map(documentActionItem => {
              return convertDocumentAction(documentActionItem);
            }),
          defaultDocumentAction: convertDocumentAction(
            listDocumentActionsResponse.getDefaultdocumentaction()
          ),
          nextPageToken: listDocumentActionsResponse.getNextPageToken()
        };
      });
  }

  /**
   * Request Document Actions List
   * @param {string} tableName
   * @param {number} recordId
   * @param {string} recordUuid
   * @param {string} documentStatus
   * @param {string} documentAction
   * @param {number} pageSize
   * @param {string} pageToken
   */
  requestListDocumentStatuses({ tableName, recordId, recordUuid, documentStatus, pageSize, pageToken }) {
    const { ListDocumentStatusesRequest } = require('./src/grpc/proto/business_pb.js');
    const requestInstance = new ListDocumentStatusesRequest;

    requestInstance.setClientrequest(this.getClientRequest());
    requestInstance.setTablename(tableName);
    requestInstance.setRecordid(recordId);
    requestInstance.setRecorduuid(recordUuid);
    requestInstance.setDocumentstatus(documentStatus);
    requestInstance.setPageSize(pageSize);
    requestInstance.setPageToken(pageToken);

    return this.getWorkflowService().listDocumentStatuses(requestInstance)
      .then(listDocumentStatusesResponse => {
        const { convertDocumentStatus } = require('./src/convertUtils.js');

        return {
          recordCount: listDocumentStatusesResponse.getRecordcount(),
          documentStatusesList: listDocumentStatusesResponse.getDocumentstatusesList()
            .map(documentStatus => {
              return convertDocumentStatus(documentStatus);
            }),
          nextPageToken: listDocumentStatusesResponse.getNextPageToken()
        };
      });
  }

  getResource({ resourceUuid }) {
    const { GetResourceRequest } = require('./src/grpc/proto/business_pb.js');
    const requestInstance = new GetResourceRequest;

    requestInstance.setClientrequest(this.getClientRequest());
    requestInstance.setResourceuuid(resourceUuid);

    return this.getUserInterfaceService().getResource(requestInstance);
  }

  getResourceReference({ imageId }) {
    const { GetResourceReferenceRequest } = require('./src/grpc/proto/business_pb.js');
    const requestInstance = new GetResourceReferenceRequest;

    requestInstance.setClientrequest(this.getClientRequest());
    requestInstance.setImageid(imageId);

    return this.getUserInterfaceService().getResourceReference(requestInstance)
      .then(responseResourceReference => {
        const { convertResourceReferenceFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return convertResourceReferenceFromGRPC(responseResourceReference);
      });
  }

  getAttachment({ tableName, recordUuid }) {
    const { GetAttachmentRequest } = require('./src/grpc/proto/business_pb.js');
    const requestInstance = new GetAttachmentRequest;

    requestInstance.setClientrequest(this.getClientRequest());
    requestInstance.setTablename(tableName);
    requestInstance.setResourceuuid(recordUuid);

    return this.getUserInterfaceService().getAttachment(requestInstance)
      .then(responseAttachment => {
        const { convertAttachmentFromGRPC } = require('@adempiere/grpc-core-client/src/convertBaseDataType.js');

        return convertAttachmentFromGRPC(responseAttachment);
      });
  }

}

module.exports = BusinessData;
