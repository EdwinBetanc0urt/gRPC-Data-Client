// source: proto/business.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_core_functionality_pb = require('@adempiere/grpc-core-client/src/grpc/proto/core_functionality_pb.js');
goog.object.extend(proto, proto_core_functionality_pb);
var proto_base_data_type_pb = require('@adempiere/grpc-core-client/src/grpc/proto/base_data_type_pb.js');
goog.object.extend(proto, proto_base_data_type_pb);
var proto_client_pb = require('@adempiere/grpc-core-client/src/grpc/proto/client_pb.js');
goog.object.extend(proto, proto_client_pb);
goog.exportSymbol('proto.data.Callout', null, global);
goog.exportSymbol('proto.data.ChatEntry', null, global);
goog.exportSymbol('proto.data.ChatEntry.ChatEntryType', null, global);
goog.exportSymbol('proto.data.ChatEntry.ConfidentialType', null, global);
goog.exportSymbol('proto.data.ChatEntry.ModeratorStatus', null, global);
goog.exportSymbol('proto.data.ContextInfoValue', null, global);
goog.exportSymbol('proto.data.CreateChatEntryRequest', null, global);
goog.exportSymbol('proto.data.CreateEntityRequest', null, global);
goog.exportSymbol('proto.data.DeleteEntityRequest', null, global);
goog.exportSymbol('proto.data.Favorite', null, global);
goog.exportSymbol('proto.data.GetAttachmentRequest', null, global);
goog.exportSymbol('proto.data.GetContextInfoValueRequest', null, global);
goog.exportSymbol('proto.data.GetDefaultValueRequest', null, global);
goog.exportSymbol('proto.data.GetEntityRequest', null, global);
goog.exportSymbol('proto.data.GetLookupItemRequest', null, global);
goog.exportSymbol('proto.data.GetPrivateAccessRequest', null, global);
goog.exportSymbol('proto.data.GetReportOutputRequest', null, global);
goog.exportSymbol('proto.data.GetResourceReferenceRequest', null, global);
goog.exportSymbol('proto.data.GetResourceRequest', null, global);
goog.exportSymbol('proto.data.ListBrowserItemsRequest', null, global);
goog.exportSymbol('proto.data.ListBrowserItemsResponse', null, global);
goog.exportSymbol('proto.data.ListChatEntriesRequest', null, global);
goog.exportSymbol('proto.data.ListChatEntriesResponse', null, global);
goog.exportSymbol('proto.data.ListDashboardsRequest', null, global);
goog.exportSymbol('proto.data.ListDashboardsResponse', null, global);
goog.exportSymbol('proto.data.ListDocumentActionsRequest', null, global);
goog.exportSymbol('proto.data.ListDocumentActionsResponse', null, global);
goog.exportSymbol('proto.data.ListDocumentStatusesRequest', null, global);
goog.exportSymbol('proto.data.ListDocumentStatusesResponse', null, global);
goog.exportSymbol('proto.data.ListDrillTablesRequest', null, global);
goog.exportSymbol('proto.data.ListDrillTablesResponse', null, global);
goog.exportSymbol('proto.data.ListEntitiesRequest', null, global);
goog.exportSymbol('proto.data.ListEntitiesResponse', null, global);
goog.exportSymbol('proto.data.ListFavoritesRequest', null, global);
goog.exportSymbol('proto.data.ListFavoritesResponse', null, global);
goog.exportSymbol('proto.data.ListLookupItemsRequest', null, global);
goog.exportSymbol('proto.data.ListLookupItemsResponse', null, global);
goog.exportSymbol('proto.data.ListPendingDocumentsRequest', null, global);
goog.exportSymbol('proto.data.ListPendingDocumentsResponse', null, global);
goog.exportSymbol('proto.data.ListPrintFormatsRequest', null, global);
goog.exportSymbol('proto.data.ListPrintFormatsResponse', null, global);
goog.exportSymbol('proto.data.ListProcessLogsRequest', null, global);
goog.exportSymbol('proto.data.ListProcessLogsResponse', null, global);
goog.exportSymbol('proto.data.ListRecentItemsRequest', null, global);
goog.exportSymbol('proto.data.ListRecentItemsResponse', null, global);
goog.exportSymbol('proto.data.ListRecordChatsRequest', null, global);
goog.exportSymbol('proto.data.ListRecordChatsResponse', null, global);
goog.exportSymbol('proto.data.ListRecordLogsRequest', null, global);
goog.exportSymbol('proto.data.ListRecordLogsResponse', null, global);
goog.exportSymbol('proto.data.ListReferencesRequest', null, global);
goog.exportSymbol('proto.data.ListReferencesResponse', null, global);
goog.exportSymbol('proto.data.ListReportViewsRequest', null, global);
goog.exportSymbol('proto.data.ListReportViewsResponse', null, global);
goog.exportSymbol('proto.data.ListTranslationsRequest', null, global);
goog.exportSymbol('proto.data.ListTranslationsResponse', null, global);
goog.exportSymbol('proto.data.ListWorkflowLogsRequest', null, global);
goog.exportSymbol('proto.data.ListWorkflowLogsResponse', null, global);
goog.exportSymbol('proto.data.ListWorkflowsRequest', null, global);
goog.exportSymbol('proto.data.ListWorkflowsResponse', null, global);
goog.exportSymbol('proto.data.LockPrivateAccessRequest', null, global);
goog.exportSymbol('proto.data.LookupItem', null, global);
goog.exportSymbol('proto.data.PendingDocument', null, global);
goog.exportSymbol('proto.data.PrivateAccess', null, global);
goog.exportSymbol('proto.data.RecentItem', null, global);
goog.exportSymbol('proto.data.RecordChat', null, global);
goog.exportSymbol('proto.data.RecordChat.ConfidentialType', null, global);
goog.exportSymbol('proto.data.RecordChat.ModerationType', null, global);
goog.exportSymbol('proto.data.RollbackEntityRequest', null, global);
goog.exportSymbol('proto.data.RollbackEntityRequest.EventType', null, global);
goog.exportSymbol('proto.data.RunBusinessProcessRequest', null, global);
goog.exportSymbol('proto.data.RunCalloutRequest', null, global);
goog.exportSymbol('proto.data.UnlockPrivateAccessRequest', null, global);
goog.exportSymbol('proto.data.UpdateEntityRequest', null, global);
goog.exportSymbol('proto.data.WorkflowCondition', null, global);
goog.exportSymbol('proto.data.WorkflowCondition.ConditionType', null, global);
goog.exportSymbol('proto.data.WorkflowCondition.Operation', null, global);
goog.exportSymbol('proto.data.WorkflowDefinition', null, global);
goog.exportSymbol('proto.data.WorkflowDefinition.DurationUnit', null, global);
goog.exportSymbol('proto.data.WorkflowDefinition.PublishStatus', null, global);
goog.exportSymbol('proto.data.WorkflowEvent', null, global);
goog.exportSymbol('proto.data.WorkflowEvent.EventType', null, global);
goog.exportSymbol('proto.data.WorkflowEvent.WorkflowState', null, global);
goog.exportSymbol('proto.data.WorkflowNode', null, global);
goog.exportSymbol('proto.data.WorkflowNode.Action', null, global);
goog.exportSymbol('proto.data.WorkflowProcess', null, global);
goog.exportSymbol('proto.data.WorkflowProcess.Priority', null, global);
goog.exportSymbol('proto.data.WorkflowProcess.WorkflowState', null, global);
goog.exportSymbol('proto.data.WorkflowTransition', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetAttachmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetAttachmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetAttachmentRequest.displayName = 'proto.data.GetAttachmentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetResourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetResourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetResourceRequest.displayName = 'proto.data.GetResourceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetResourceReferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetResourceReferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetResourceReferenceRequest.displayName = 'proto.data.GetResourceReferenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetReportOutputRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetReportOutputRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetReportOutputRequest.displayName = 'proto.data.GetReportOutputRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.CreateEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.CreateEntityRequest.repeatedFields_, null);
};
goog.inherits(proto.data.CreateEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.CreateEntityRequest.displayName = 'proto.data.CreateEntityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.LockPrivateAccessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.LockPrivateAccessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.LockPrivateAccessRequest.displayName = 'proto.data.LockPrivateAccessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetEntityRequest.displayName = 'proto.data.GetEntityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetPrivateAccessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetPrivateAccessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetPrivateAccessRequest.displayName = 'proto.data.GetPrivateAccessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.UnlockPrivateAccessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.UnlockPrivateAccessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.UnlockPrivateAccessRequest.displayName = 'proto.data.UnlockPrivateAccessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.PrivateAccess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.PrivateAccess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.PrivateAccess.displayName = 'proto.data.PrivateAccess';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.RollbackEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.RollbackEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.RollbackEntityRequest.displayName = 'proto.data.RollbackEntityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.UpdateEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.UpdateEntityRequest.repeatedFields_, null);
};
goog.inherits(proto.data.UpdateEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.UpdateEntityRequest.displayName = 'proto.data.UpdateEntityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.DeleteEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.DeleteEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.DeleteEntityRequest.displayName = 'proto.data.DeleteEntityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListBrowserItemsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListBrowserItemsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListBrowserItemsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListBrowserItemsResponse.displayName = 'proto.data.ListBrowserItemsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ContextInfoValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ContextInfoValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ContextInfoValue.displayName = 'proto.data.ContextInfoValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetLookupItemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetLookupItemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetLookupItemRequest.displayName = 'proto.data.GetLookupItemRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetDefaultValueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetDefaultValueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetDefaultValueRequest.displayName = 'proto.data.GetDefaultValueRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetContextInfoValueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetContextInfoValueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetContextInfoValueRequest.displayName = 'proto.data.GetContextInfoValueRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.LookupItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.LookupItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.LookupItem.displayName = 'proto.data.LookupItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListLookupItemsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListLookupItemsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListLookupItemsRequest.displayName = 'proto.data.ListLookupItemsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListLookupItemsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListLookupItemsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListLookupItemsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListLookupItemsResponse.displayName = 'proto.data.ListLookupItemsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListEntitiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListEntitiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListEntitiesRequest.displayName = 'proto.data.ListEntitiesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListEntitiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListEntitiesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListEntitiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListEntitiesResponse.displayName = 'proto.data.ListEntitiesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.RunCalloutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.RunCalloutRequest.repeatedFields_, null);
};
goog.inherits(proto.data.RunCalloutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.RunCalloutRequest.displayName = 'proto.data.RunCalloutRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.Callout = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.Callout, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.Callout.displayName = 'proto.data.Callout';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.RunBusinessProcessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.RunBusinessProcessRequest.repeatedFields_, null);
};
goog.inherits(proto.data.RunBusinessProcessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.RunBusinessProcessRequest.displayName = 'proto.data.RunBusinessProcessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListProcessLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListProcessLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListProcessLogsRequest.displayName = 'proto.data.ListProcessLogsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListProcessLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListProcessLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListProcessLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListProcessLogsResponse.displayName = 'proto.data.ListProcessLogsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListRecentItemsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListRecentItemsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListRecentItemsRequest.displayName = 'proto.data.ListRecentItemsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.RecentItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.RecentItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.RecentItem.displayName = 'proto.data.RecentItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListRecentItemsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListRecentItemsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListRecentItemsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListRecentItemsResponse.displayName = 'proto.data.ListRecentItemsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListFavoritesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListFavoritesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListFavoritesRequest.displayName = 'proto.data.ListFavoritesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.Favorite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.Favorite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.Favorite.displayName = 'proto.data.Favorite';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListFavoritesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListFavoritesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListFavoritesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListFavoritesResponse.displayName = 'proto.data.ListFavoritesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListTranslationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListTranslationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListTranslationsRequest.displayName = 'proto.data.ListTranslationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListTranslationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListTranslationsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListTranslationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListTranslationsResponse.displayName = 'proto.data.ListTranslationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListPendingDocumentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListPendingDocumentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListPendingDocumentsRequest.displayName = 'proto.data.ListPendingDocumentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.PendingDocument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.PendingDocument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.PendingDocument.displayName = 'proto.data.PendingDocument';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListPendingDocumentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListPendingDocumentsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListPendingDocumentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListPendingDocumentsResponse.displayName = 'proto.data.ListPendingDocumentsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListDashboardsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListDashboardsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDashboardsRequest.displayName = 'proto.data.ListDashboardsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListDashboardsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListDashboardsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListDashboardsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDashboardsResponse.displayName = 'proto.data.ListDashboardsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListPrintFormatsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListPrintFormatsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListPrintFormatsRequest.displayName = 'proto.data.ListPrintFormatsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListPrintFormatsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListPrintFormatsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListPrintFormatsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListPrintFormatsResponse.displayName = 'proto.data.ListPrintFormatsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListRecordLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListRecordLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListRecordLogsRequest.displayName = 'proto.data.ListRecordLogsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListRecordLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListRecordLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListRecordLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListRecordLogsResponse.displayName = 'proto.data.ListRecordLogsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListRecordChatsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListRecordChatsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListRecordChatsRequest.displayName = 'proto.data.ListRecordChatsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.RecordChat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.RecordChat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.RecordChat.displayName = 'proto.data.RecordChat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListRecordChatsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListRecordChatsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListRecordChatsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListRecordChatsResponse.displayName = 'proto.data.ListRecordChatsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListChatEntriesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListChatEntriesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListChatEntriesRequest.displayName = 'proto.data.ListChatEntriesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ChatEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ChatEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ChatEntry.displayName = 'proto.data.ChatEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.CreateChatEntryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.CreateChatEntryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.CreateChatEntryRequest.displayName = 'proto.data.CreateChatEntryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListChatEntriesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListChatEntriesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListChatEntriesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListChatEntriesResponse.displayName = 'proto.data.ListChatEntriesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListWorkflowsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListWorkflowsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListWorkflowsRequest.displayName = 'proto.data.ListWorkflowsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.WorkflowDefinition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.WorkflowDefinition.repeatedFields_, null);
};
goog.inherits(proto.data.WorkflowDefinition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.WorkflowDefinition.displayName = 'proto.data.WorkflowDefinition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.WorkflowNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.WorkflowNode.repeatedFields_, null);
};
goog.inherits(proto.data.WorkflowNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.WorkflowNode.displayName = 'proto.data.WorkflowNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.WorkflowCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.WorkflowCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.WorkflowCondition.displayName = 'proto.data.WorkflowCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.WorkflowTransition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.WorkflowTransition.repeatedFields_, null);
};
goog.inherits(proto.data.WorkflowTransition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.WorkflowTransition.displayName = 'proto.data.WorkflowTransition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListWorkflowsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListWorkflowsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListWorkflowsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListWorkflowsResponse.displayName = 'proto.data.ListWorkflowsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListDocumentActionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListDocumentActionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDocumentActionsRequest.displayName = 'proto.data.ListDocumentActionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListDocumentActionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListDocumentActionsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListDocumentActionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDocumentActionsResponse.displayName = 'proto.data.ListDocumentActionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListDocumentStatusesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListDocumentStatusesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDocumentStatusesRequest.displayName = 'proto.data.ListDocumentStatusesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListDocumentStatusesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListDocumentStatusesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListDocumentStatusesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDocumentStatusesResponse.displayName = 'proto.data.ListDocumentStatusesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListWorkflowLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListWorkflowLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListWorkflowLogsRequest.displayName = 'proto.data.ListWorkflowLogsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.WorkflowProcess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.WorkflowProcess.repeatedFields_, null);
};
goog.inherits(proto.data.WorkflowProcess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.WorkflowProcess.displayName = 'proto.data.WorkflowProcess';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.WorkflowEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.WorkflowEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.WorkflowEvent.displayName = 'proto.data.WorkflowEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListWorkflowLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListWorkflowLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListWorkflowLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListWorkflowLogsResponse.displayName = 'proto.data.ListWorkflowLogsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListReportViewsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListReportViewsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListReportViewsRequest.displayName = 'proto.data.ListReportViewsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListReportViewsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListReportViewsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListReportViewsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListReportViewsResponse.displayName = 'proto.data.ListReportViewsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListDrillTablesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListDrillTablesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDrillTablesRequest.displayName = 'proto.data.ListDrillTablesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListDrillTablesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListDrillTablesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListDrillTablesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDrillTablesResponse.displayName = 'proto.data.ListDrillTablesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListBrowserItemsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListBrowserItemsRequest.repeatedFields_, null);
};
goog.inherits(proto.data.ListBrowserItemsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListBrowserItemsRequest.displayName = 'proto.data.ListBrowserItemsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListReferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListReferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListReferencesRequest.displayName = 'proto.data.ListReferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListReferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListReferencesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListReferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListReferencesResponse.displayName = 'proto.data.ListReferencesResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetAttachmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetAttachmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetAttachmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetAttachmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recorduuid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetAttachmentRequest}
 */
proto.data.GetAttachmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetAttachmentRequest;
  return proto.data.GetAttachmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetAttachmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetAttachmentRequest}
 */
proto.data.GetAttachmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecorduuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetAttachmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetAttachmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetAttachmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetAttachmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecorduuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetAttachmentRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetAttachmentRequest} returns this
*/
proto.data.GetAttachmentRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetAttachmentRequest} returns this
 */
proto.data.GetAttachmentRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetAttachmentRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.GetAttachmentRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetAttachmentRequest} returns this
 */
proto.data.GetAttachmentRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string recordUuid = 3;
 * @return {string}
 */
proto.data.GetAttachmentRequest.prototype.getRecorduuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetAttachmentRequest} returns this
 */
proto.data.GetAttachmentRequest.prototype.setRecorduuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetResourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetResourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetResourceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetResourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    resourceuuid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetResourceRequest}
 */
proto.data.GetResourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetResourceRequest;
  return proto.data.GetResourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetResourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetResourceRequest}
 */
proto.data.GetResourceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceuuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetResourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetResourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetResourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetResourceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getResourceuuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetResourceRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetResourceRequest} returns this
*/
proto.data.GetResourceRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetResourceRequest} returns this
 */
proto.data.GetResourceRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetResourceRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string resourceUuid = 2;
 * @return {string}
 */
proto.data.GetResourceRequest.prototype.getResourceuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetResourceRequest} returns this
 */
proto.data.GetResourceRequest.prototype.setResourceuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetResourceReferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetResourceReferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetResourceReferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetResourceReferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    imageid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetResourceReferenceRequest}
 */
proto.data.GetResourceReferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetResourceReferenceRequest;
  return proto.data.GetResourceReferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetResourceReferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetResourceReferenceRequest}
 */
proto.data.GetResourceReferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setImageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetResourceReferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetResourceReferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetResourceReferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetResourceReferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getImageid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetResourceReferenceRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetResourceReferenceRequest} returns this
*/
proto.data.GetResourceReferenceRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetResourceReferenceRequest} returns this
 */
proto.data.GetResourceReferenceRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetResourceReferenceRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 imageId = 2;
 * @return {number}
 */
proto.data.GetResourceReferenceRequest.prototype.getImageid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetResourceReferenceRequest} returns this
 */
proto.data.GetResourceReferenceRequest.prototype.setImageid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetReportOutputRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetReportOutputRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetReportOutputRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetReportOutputRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    printformatuuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reportviewuuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    issummary: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    reportname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    reporttype: jspb.Message.getFieldWithDefault(msg, 6, ""),
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetReportOutputRequest}
 */
proto.data.GetReportOutputRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetReportOutputRequest;
  return proto.data.GetReportOutputRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetReportOutputRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetReportOutputRequest}
 */
proto.data.GetReportOutputRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrintformatuuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportviewuuid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssummary(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setReporttype(value);
      break;
    case 7:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 8:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetReportOutputRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetReportOutputRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetReportOutputRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetReportOutputRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrintformatuuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReportviewuuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIssummary();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getReportname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getReporttype();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional string printFormatUuid = 1;
 * @return {string}
 */
proto.data.GetReportOutputRequest.prototype.getPrintformatuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.setPrintformatuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string reportViewUuid = 2;
 * @return {string}
 */
proto.data.GetReportOutputRequest.prototype.getReportviewuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.setReportviewuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool isSummary = 3;
 * @return {boolean}
 */
proto.data.GetReportOutputRequest.prototype.getIssummary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.setIssummary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string reportName = 5;
 * @return {string}
 */
proto.data.GetReportOutputRequest.prototype.getReportname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.setReportname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string reportType = 6;
 * @return {string}
 */
proto.data.GetReportOutputRequest.prototype.getReporttype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.setReporttype = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional ClientRequest clientRequest = 7;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetReportOutputRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 7));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetReportOutputRequest} returns this
*/
proto.data.GetReportOutputRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetReportOutputRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Criteria criteria = 8;
 * @return {?proto.data.Criteria}
 */
proto.data.GetReportOutputRequest.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 8));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.GetReportOutputRequest} returns this
*/
proto.data.GetReportOutputRequest.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetReportOutputRequest.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.CreateEntityRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.CreateEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.CreateEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.CreateEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    attributesList: jspb.Message.toObjectList(msg.getAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.CreateEntityRequest}
 */
proto.data.CreateEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.CreateEntityRequest;
  return proto.data.CreateEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.CreateEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.CreateEntityRequest}
 */
proto.data.CreateEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addAttributes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.CreateEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.CreateEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.CreateEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.CreateEntityRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.CreateEntityRequest} returns this
*/
proto.data.CreateEntityRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.CreateEntityRequest} returns this
 */
proto.data.CreateEntityRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.CreateEntityRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.CreateEntityRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateEntityRequest} returns this
 */
proto.data.CreateEntityRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated KeyValue attributes = 3;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.CreateEntityRequest.prototype.getAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 3));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.CreateEntityRequest} returns this
*/
proto.data.CreateEntityRequest.prototype.setAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.CreateEntityRequest.prototype.addAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.CreateEntityRequest} returns this
 */
proto.data.CreateEntityRequest.prototype.clearAttributesList = function() {
  return this.setAttributesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.LockPrivateAccessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.LockPrivateAccessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.LockPrivateAccessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.LockPrivateAccessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    useruuid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.LockPrivateAccessRequest}
 */
proto.data.LockPrivateAccessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.LockPrivateAccessRequest;
  return proto.data.LockPrivateAccessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.LockPrivateAccessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.LockPrivateAccessRequest}
 */
proto.data.LockPrivateAccessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseruuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.LockPrivateAccessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.LockPrivateAccessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.LockPrivateAccessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.LockPrivateAccessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUseruuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.LockPrivateAccessRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.LockPrivateAccessRequest} returns this
*/
proto.data.LockPrivateAccessRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.LockPrivateAccessRequest} returns this
 */
proto.data.LockPrivateAccessRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.LockPrivateAccessRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.LockPrivateAccessRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.LockPrivateAccessRequest} returns this
 */
proto.data.LockPrivateAccessRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 recordId = 3;
 * @return {number}
 */
proto.data.LockPrivateAccessRequest.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.LockPrivateAccessRequest} returns this
 */
proto.data.LockPrivateAccessRequest.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string userUuid = 4;
 * @return {string}
 */
proto.data.LockPrivateAccessRequest.prototype.getUseruuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.LockPrivateAccessRequest} returns this
 */
proto.data.LockPrivateAccessRequest.prototype.setUseruuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetEntityRequest}
 */
proto.data.GetEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetEntityRequest;
  return proto.data.GetEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetEntityRequest}
 */
proto.data.GetEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 4:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 5:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.GetEntityRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetEntityRequest} returns this
 */
proto.data.GetEntityRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.GetEntityRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetEntityRequest} returns this
 */
proto.data.GetEntityRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 recordId = 3;
 * @return {number}
 */
proto.data.GetEntityRequest.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetEntityRequest} returns this
 */
proto.data.GetEntityRequest.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional ClientRequest clientRequest = 4;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetEntityRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 4));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetEntityRequest} returns this
*/
proto.data.GetEntityRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetEntityRequest} returns this
 */
proto.data.GetEntityRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetEntityRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Criteria criteria = 5;
 * @return {?proto.data.Criteria}
 */
proto.data.GetEntityRequest.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 5));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.GetEntityRequest} returns this
*/
proto.data.GetEntityRequest.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetEntityRequest} returns this
 */
proto.data.GetEntityRequest.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetEntityRequest.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetPrivateAccessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetPrivateAccessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetPrivateAccessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetPrivateAccessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    useruuid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetPrivateAccessRequest}
 */
proto.data.GetPrivateAccessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetPrivateAccessRequest;
  return proto.data.GetPrivateAccessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetPrivateAccessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetPrivateAccessRequest}
 */
proto.data.GetPrivateAccessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseruuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetPrivateAccessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetPrivateAccessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetPrivateAccessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetPrivateAccessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUseruuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetPrivateAccessRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetPrivateAccessRequest} returns this
*/
proto.data.GetPrivateAccessRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetPrivateAccessRequest} returns this
 */
proto.data.GetPrivateAccessRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetPrivateAccessRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.GetPrivateAccessRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetPrivateAccessRequest} returns this
 */
proto.data.GetPrivateAccessRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 recordId = 3;
 * @return {number}
 */
proto.data.GetPrivateAccessRequest.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetPrivateAccessRequest} returns this
 */
proto.data.GetPrivateAccessRequest.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string userUuid = 4;
 * @return {string}
 */
proto.data.GetPrivateAccessRequest.prototype.getUseruuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetPrivateAccessRequest} returns this
 */
proto.data.GetPrivateAccessRequest.prototype.setUseruuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.UnlockPrivateAccessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.UnlockPrivateAccessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.UnlockPrivateAccessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UnlockPrivateAccessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    useruuid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.UnlockPrivateAccessRequest}
 */
proto.data.UnlockPrivateAccessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.UnlockPrivateAccessRequest;
  return proto.data.UnlockPrivateAccessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.UnlockPrivateAccessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.UnlockPrivateAccessRequest}
 */
proto.data.UnlockPrivateAccessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseruuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.UnlockPrivateAccessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.UnlockPrivateAccessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.UnlockPrivateAccessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UnlockPrivateAccessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUseruuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.UnlockPrivateAccessRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.UnlockPrivateAccessRequest} returns this
*/
proto.data.UnlockPrivateAccessRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.UnlockPrivateAccessRequest} returns this
 */
proto.data.UnlockPrivateAccessRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.UnlockPrivateAccessRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.UnlockPrivateAccessRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UnlockPrivateAccessRequest} returns this
 */
proto.data.UnlockPrivateAccessRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 recordId = 3;
 * @return {number}
 */
proto.data.UnlockPrivateAccessRequest.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.UnlockPrivateAccessRequest} returns this
 */
proto.data.UnlockPrivateAccessRequest.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string userUuid = 4;
 * @return {string}
 */
proto.data.UnlockPrivateAccessRequest.prototype.getUseruuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UnlockPrivateAccessRequest} returns this
 */
proto.data.UnlockPrivateAccessRequest.prototype.setUseruuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.PrivateAccess.prototype.toObject = function(opt_includeInstance) {
  return proto.data.PrivateAccess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.PrivateAccess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PrivateAccess.toObject = function(includeInstance, msg) {
  var f, obj = {
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    useruuid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.PrivateAccess}
 */
proto.data.PrivateAccess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.PrivateAccess;
  return proto.data.PrivateAccess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.PrivateAccess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.PrivateAccess}
 */
proto.data.PrivateAccess.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseruuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.PrivateAccess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.PrivateAccess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.PrivateAccess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PrivateAccess.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUseruuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.PrivateAccess.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PrivateAccess} returns this
 */
proto.data.PrivateAccess.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 recordId = 3;
 * @return {number}
 */
proto.data.PrivateAccess.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.PrivateAccess} returns this
 */
proto.data.PrivateAccess.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string userUuid = 4;
 * @return {string}
 */
proto.data.PrivateAccess.prototype.getUseruuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PrivateAccess} returns this
 */
proto.data.PrivateAccess.prototype.setUseruuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.RollbackEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.RollbackEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.RollbackEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RollbackEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    eventtype: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.RollbackEntityRequest}
 */
proto.data.RollbackEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.RollbackEntityRequest;
  return proto.data.RollbackEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.RollbackEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.RollbackEntityRequest}
 */
proto.data.RollbackEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 4:
      var value = /** @type {!proto.data.RollbackEntityRequest.EventType} */ (reader.readEnum());
      msg.setEventtype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.RollbackEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.RollbackEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.RollbackEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RollbackEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getEventtype();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.RollbackEntityRequest.EventType = {
  INSERT: 0,
  UPDATE: 1,
  DELETE: 2
};

/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.RollbackEntityRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.RollbackEntityRequest} returns this
*/
proto.data.RollbackEntityRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.RollbackEntityRequest} returns this
 */
proto.data.RollbackEntityRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.RollbackEntityRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.RollbackEntityRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RollbackEntityRequest} returns this
 */
proto.data.RollbackEntityRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 recordId = 3;
 * @return {number}
 */
proto.data.RollbackEntityRequest.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RollbackEntityRequest} returns this
 */
proto.data.RollbackEntityRequest.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional EventType eventType = 4;
 * @return {!proto.data.RollbackEntityRequest.EventType}
 */
proto.data.RollbackEntityRequest.prototype.getEventtype = function() {
  return /** @type {!proto.data.RollbackEntityRequest.EventType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.data.RollbackEntityRequest.EventType} value
 * @return {!proto.data.RollbackEntityRequest} returns this
 */
proto.data.RollbackEntityRequest.prototype.setEventtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.UpdateEntityRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.UpdateEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.UpdateEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.UpdateEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    attributesList: jspb.Message.toObjectList(msg.getAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.UpdateEntityRequest}
 */
proto.data.UpdateEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.UpdateEntityRequest;
  return proto.data.UpdateEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.UpdateEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.UpdateEntityRequest}
 */
proto.data.UpdateEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 5:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addAttributes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.UpdateEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.UpdateEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.UpdateEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.UpdateEntityRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.UpdateEntityRequest} returns this
*/
proto.data.UpdateEntityRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.UpdateEntityRequest} returns this
 */
proto.data.UpdateEntityRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.UpdateEntityRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.UpdateEntityRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateEntityRequest} returns this
 */
proto.data.UpdateEntityRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.UpdateEntityRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateEntityRequest} returns this
 */
proto.data.UpdateEntityRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 recordId = 4;
 * @return {number}
 */
proto.data.UpdateEntityRequest.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.UpdateEntityRequest} returns this
 */
proto.data.UpdateEntityRequest.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated KeyValue attributes = 5;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.UpdateEntityRequest.prototype.getAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 5));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.UpdateEntityRequest} returns this
*/
proto.data.UpdateEntityRequest.prototype.setAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.UpdateEntityRequest.prototype.addAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.UpdateEntityRequest} returns this
 */
proto.data.UpdateEntityRequest.prototype.clearAttributesList = function() {
  return this.setAttributesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.DeleteEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.DeleteEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.DeleteEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeleteEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.DeleteEntityRequest}
 */
proto.data.DeleteEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.DeleteEntityRequest;
  return proto.data.DeleteEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.DeleteEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.DeleteEntityRequest}
 */
proto.data.DeleteEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.DeleteEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.DeleteEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.DeleteEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeleteEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.DeleteEntityRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.DeleteEntityRequest} returns this
*/
proto.data.DeleteEntityRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.DeleteEntityRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.DeleteEntityRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.DeleteEntityRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 recordId = 4;
 * @return {number}
 */
proto.data.DeleteEntityRequest.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListBrowserItemsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListBrowserItemsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListBrowserItemsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListBrowserItemsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListBrowserItemsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto_base_data_type_pb.Entity.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListBrowserItemsResponse}
 */
proto.data.ListBrowserItemsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListBrowserItemsResponse;
  return proto.data.ListBrowserItemsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListBrowserItemsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListBrowserItemsResponse}
 */
proto.data.ListBrowserItemsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Entity;
      reader.readMessage(value,proto_base_data_type_pb.Entity.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListBrowserItemsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListBrowserItemsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListBrowserItemsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListBrowserItemsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.Entity.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListBrowserItemsResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListBrowserItemsResponse} returns this
 */
proto.data.ListBrowserItemsResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Entity records = 2;
 * @return {!Array<!proto.data.Entity>}
 */
proto.data.ListBrowserItemsResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.data.Entity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.Entity, 2));
};


/**
 * @param {!Array<!proto.data.Entity>} value
 * @return {!proto.data.ListBrowserItemsResponse} returns this
*/
proto.data.ListBrowserItemsResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Entity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Entity}
 */
proto.data.ListBrowserItemsResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Entity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListBrowserItemsResponse} returns this
 */
proto.data.ListBrowserItemsResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListBrowserItemsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListBrowserItemsResponse} returns this
 */
proto.data.ListBrowserItemsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ContextInfoValue.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ContextInfoValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ContextInfoValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ContextInfoValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagetext: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messagetip: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ContextInfoValue}
 */
proto.data.ContextInfoValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ContextInfoValue;
  return proto.data.ContextInfoValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ContextInfoValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ContextInfoValue}
 */
proto.data.ContextInfoValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetext(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetip(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ContextInfoValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ContextInfoValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ContextInfoValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ContextInfoValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagetext();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessagetip();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string messageText = 1;
 * @return {string}
 */
proto.data.ContextInfoValue.prototype.getMessagetext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ContextInfoValue} returns this
 */
proto.data.ContextInfoValue.prototype.setMessagetext = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string messageTip = 2;
 * @return {string}
 */
proto.data.ContextInfoValue.prototype.getMessagetip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ContextInfoValue} returns this
 */
proto.data.ContextInfoValue.prototype.setMessagetip = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetLookupItemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetLookupItemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetLookupItemRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetLookupItemRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetLookupItemRequest}
 */
proto.data.GetLookupItemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetLookupItemRequest;
  return proto.data.GetLookupItemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetLookupItemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetLookupItemRequest}
 */
proto.data.GetLookupItemRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 4:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetLookupItemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetLookupItemRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetLookupItemRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetLookupItemRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.data.GetLookupItemRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.GetLookupItemRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ClientRequest clientRequest = 3;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetLookupItemRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 3));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetLookupItemRequest} returns this
*/
proto.data.GetLookupItemRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetLookupItemRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Criteria criteria = 4;
 * @return {?proto.data.Criteria}
 */
proto.data.GetLookupItemRequest.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 4));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.GetLookupItemRequest} returns this
*/
proto.data.GetLookupItemRequest.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetLookupItemRequest.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetDefaultValueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetDefaultValueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetDefaultValueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetDefaultValueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    query: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetDefaultValueRequest}
 */
proto.data.GetDefaultValueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetDefaultValueRequest;
  return proto.data.GetDefaultValueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetDefaultValueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetDefaultValueRequest}
 */
proto.data.GetDefaultValueRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetDefaultValueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetDefaultValueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetDefaultValueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetDefaultValueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetDefaultValueRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetDefaultValueRequest} returns this
*/
proto.data.GetDefaultValueRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetDefaultValueRequest} returns this
 */
proto.data.GetDefaultValueRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetDefaultValueRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string query = 2;
 * @return {string}
 */
proto.data.GetDefaultValueRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetDefaultValueRequest} returns this
 */
proto.data.GetDefaultValueRequest.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetContextInfoValueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetContextInfoValueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetContextInfoValueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetContextInfoValueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    query: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetContextInfoValueRequest}
 */
proto.data.GetContextInfoValueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetContextInfoValueRequest;
  return proto.data.GetContextInfoValueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetContextInfoValueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetContextInfoValueRequest}
 */
proto.data.GetContextInfoValueRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetContextInfoValueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetContextInfoValueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetContextInfoValueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetContextInfoValueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetContextInfoValueRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetContextInfoValueRequest} returns this
*/
proto.data.GetContextInfoValueRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetContextInfoValueRequest} returns this
 */
proto.data.GetContextInfoValueRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetContextInfoValueRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.GetContextInfoValueRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetContextInfoValueRequest} returns this
 */
proto.data.GetContextInfoValueRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string query = 3;
 * @return {string}
 */
proto.data.GetContextInfoValueRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetContextInfoValueRequest} returns this
 */
proto.data.GetContextInfoValueRequest.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.LookupItem.prototype.toObject = function(opt_includeInstance) {
  return proto.data.LookupItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.LookupItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.LookupItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tablename: jspb.Message.getFieldWithDefault(msg, 3, ""),
    valuesMap: (f = msg.getValuesMap()) ? f.toObject(includeInstance, proto.data.Value.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.LookupItem}
 */
proto.data.LookupItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.LookupItem;
  return proto.data.LookupItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.LookupItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.LookupItem}
 */
proto.data.LookupItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 4:
      var value = msg.getValuesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.data.Value.deserializeBinaryFromReader, "", new proto.data.Value());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.LookupItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.LookupItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.LookupItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.LookupItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValuesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.data.Value.serializeBinaryToWriter);
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.data.LookupItem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.LookupItem} returns this
 */
proto.data.LookupItem.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.LookupItem.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.LookupItem} returns this
 */
proto.data.LookupItem.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tableName = 3;
 * @return {string}
 */
proto.data.LookupItem.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.LookupItem} returns this
 */
proto.data.LookupItem.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, Value> values = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.data.Value>}
 */
proto.data.LookupItem.prototype.getValuesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.data.Value>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.data.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.data.LookupItem} returns this
 */
proto.data.LookupItem.prototype.clearValuesMap = function() {
  this.getValuesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListLookupItemsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListLookupItemsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListLookupItemsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListLookupItemsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListLookupItemsRequest}
 */
proto.data.ListLookupItemsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListLookupItemsRequest;
  return proto.data.ListLookupItemsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListLookupItemsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListLookupItemsRequest}
 */
proto.data.ListLookupItemsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 4:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListLookupItemsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListLookupItemsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListLookupItemsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListLookupItemsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 3;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListLookupItemsRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 3));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
*/
proto.data.ListLookupItemsRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListLookupItemsRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Criteria criteria = 4;
 * @return {?proto.data.Criteria}
 */
proto.data.ListLookupItemsRequest.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 4));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
*/
proto.data.ListLookupItemsRequest.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListLookupItemsRequest.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 page_size = 5;
 * @return {number}
 */
proto.data.ListLookupItemsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListLookupItemsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListLookupItemsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListLookupItemsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListLookupItemsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListLookupItemsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto.data.LookupItem.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListLookupItemsResponse}
 */
proto.data.ListLookupItemsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListLookupItemsResponse;
  return proto.data.ListLookupItemsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListLookupItemsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListLookupItemsResponse}
 */
proto.data.ListLookupItemsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto.data.LookupItem;
      reader.readMessage(value,proto.data.LookupItem.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListLookupItemsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListLookupItemsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListLookupItemsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListLookupItemsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.LookupItem.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListLookupItemsResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListLookupItemsResponse} returns this
 */
proto.data.ListLookupItemsResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated LookupItem records = 2;
 * @return {!Array<!proto.data.LookupItem>}
 */
proto.data.ListLookupItemsResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.data.LookupItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.LookupItem, 2));
};


/**
 * @param {!Array<!proto.data.LookupItem>} value
 * @return {!proto.data.ListLookupItemsResponse} returns this
*/
proto.data.ListLookupItemsResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.LookupItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.LookupItem}
 */
proto.data.ListLookupItemsResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.LookupItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListLookupItemsResponse} returns this
 */
proto.data.ListLookupItemsResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListLookupItemsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsResponse} returns this
 */
proto.data.ListLookupItemsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListEntitiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListEntitiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListEntitiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntitiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListEntitiesRequest}
 */
proto.data.ListEntitiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListEntitiesRequest;
  return proto.data.ListEntitiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListEntitiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListEntitiesRequest}
 */
proto.data.ListEntitiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 4:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListEntitiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListEntitiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListEntitiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntitiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 3;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListEntitiesRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 3));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListEntitiesRequest} returns this
*/
proto.data.ListEntitiesRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListEntitiesRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Criteria criteria = 4;
 * @return {?proto.data.Criteria}
 */
proto.data.ListEntitiesRequest.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 4));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.ListEntitiesRequest} returns this
*/
proto.data.ListEntitiesRequest.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListEntitiesRequest.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 page_size = 5;
 * @return {number}
 */
proto.data.ListEntitiesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.data.ListEntitiesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListEntitiesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListEntitiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListEntitiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListEntitiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntitiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto_base_data_type_pb.Entity.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListEntitiesResponse}
 */
proto.data.ListEntitiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListEntitiesResponse;
  return proto.data.ListEntitiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListEntitiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListEntitiesResponse}
 */
proto.data.ListEntitiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Entity;
      reader.readMessage(value,proto_base_data_type_pb.Entity.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListEntitiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListEntitiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListEntitiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntitiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.Entity.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListEntitiesResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListEntitiesResponse} returns this
 */
proto.data.ListEntitiesResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Entity records = 2;
 * @return {!Array<!proto.data.Entity>}
 */
proto.data.ListEntitiesResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.data.Entity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.Entity, 2));
};


/**
 * @param {!Array<!proto.data.Entity>} value
 * @return {!proto.data.ListEntitiesResponse} returns this
*/
proto.data.ListEntitiesResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Entity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Entity}
 */
proto.data.ListEntitiesResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Entity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListEntitiesResponse} returns this
 */
proto.data.ListEntitiesResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListEntitiesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListEntitiesResponse} returns this
 */
proto.data.ListEntitiesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.RunCalloutRequest.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.RunCalloutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.RunCalloutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.RunCalloutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RunCalloutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    windowuuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tabuuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    callout: jspb.Message.getFieldWithDefault(msg, 5, ""),
    columnname: jspb.Message.getFieldWithDefault(msg, 6, ""),
    oldvalue: (f = msg.getOldvalue()) && proto_base_data_type_pb.Value.toObject(includeInstance, f),
    value: (f = msg.getValue()) && proto_base_data_type_pb.Value.toObject(includeInstance, f),
    windowno: jspb.Message.getFieldWithDefault(msg, 9, 0),
    attributesList: jspb.Message.toObjectList(msg.getAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.RunCalloutRequest}
 */
proto.data.RunCalloutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.RunCalloutRequest;
  return proto.data.RunCalloutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.RunCalloutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.RunCalloutRequest}
 */
proto.data.RunCalloutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWindowuuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTabuuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallout(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnname(value);
      break;
    case 7:
      var value = new proto_base_data_type_pb.Value;
      reader.readMessage(value,proto_base_data_type_pb.Value.deserializeBinaryFromReader);
      msg.setOldvalue(value);
      break;
    case 8:
      var value = new proto_base_data_type_pb.Value;
      reader.readMessage(value,proto_base_data_type_pb.Value.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWindowno(value);
      break;
    case 10:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addAttributes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.RunCalloutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.RunCalloutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.RunCalloutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RunCalloutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWindowuuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTabuuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCallout();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getColumnname();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOldvalue();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_base_data_type_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_base_data_type_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getWindowno();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.RunCalloutRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.RunCalloutRequest} returns this
*/
proto.data.RunCalloutRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.RunCalloutRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.RunCalloutRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string windowUuid = 3;
 * @return {string}
 */
proto.data.RunCalloutRequest.prototype.getWindowuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setWindowuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string tabUuid = 4;
 * @return {string}
 */
proto.data.RunCalloutRequest.prototype.getTabuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setTabuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string callout = 5;
 * @return {string}
 */
proto.data.RunCalloutRequest.prototype.getCallout = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setCallout = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string columnName = 6;
 * @return {string}
 */
proto.data.RunCalloutRequest.prototype.getColumnname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setColumnname = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Value oldValue = 7;
 * @return {?proto.data.Value}
 */
proto.data.RunCalloutRequest.prototype.getOldvalue = function() {
  return /** @type{?proto.data.Value} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Value, 7));
};


/**
 * @param {?proto.data.Value|undefined} value
 * @return {!proto.data.RunCalloutRequest} returns this
*/
proto.data.RunCalloutRequest.prototype.setOldvalue = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.clearOldvalue = function() {
  return this.setOldvalue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.RunCalloutRequest.prototype.hasOldvalue = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Value value = 8;
 * @return {?proto.data.Value}
 */
proto.data.RunCalloutRequest.prototype.getValue = function() {
  return /** @type{?proto.data.Value} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Value, 8));
};


/**
 * @param {?proto.data.Value|undefined} value
 * @return {!proto.data.RunCalloutRequest} returns this
*/
proto.data.RunCalloutRequest.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.RunCalloutRequest.prototype.hasValue = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 windowNo = 9;
 * @return {number}
 */
proto.data.RunCalloutRequest.prototype.getWindowno = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setWindowno = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * repeated KeyValue attributes = 10;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.RunCalloutRequest.prototype.getAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 10));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.RunCalloutRequest} returns this
*/
proto.data.RunCalloutRequest.prototype.setAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.RunCalloutRequest.prototype.addAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.clearAttributesList = function() {
  return this.setAttributesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.Callout.prototype.toObject = function(opt_includeInstance) {
  return proto.data.Callout.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.Callout} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Callout.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, ""),
    valuesMap: (f = msg.getValuesMap()) ? f.toObject(includeInstance, proto.data.Value.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.Callout}
 */
proto.data.Callout.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.Callout;
  return proto.data.Callout.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.Callout} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.Callout}
 */
proto.data.Callout.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    case 2:
      var value = msg.getValuesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.data.Value.deserializeBinaryFromReader, "", new proto.data.Value());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.Callout.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.Callout.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.Callout} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Callout.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValuesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.data.Value.serializeBinaryToWriter);
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.data.Callout.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Callout} returns this
 */
proto.data.Callout.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, Value> values = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.data.Value>}
 */
proto.data.Callout.prototype.getValuesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.data.Value>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.data.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.data.Callout} returns this
 */
proto.data.Callout.prototype.clearValuesMap = function() {
  this.getValuesMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.RunBusinessProcessRequest.repeatedFields_ = [10,11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.RunBusinessProcessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.RunBusinessProcessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.RunBusinessProcessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RunBusinessProcessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    tableselectedid: jspb.Message.getFieldWithDefault(msg, 5, 0),
    reporttype: jspb.Message.getFieldWithDefault(msg, 6, ""),
    printformatuuid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    reportviewuuid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    issummary: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance),
    selectionsList: jspb.Message.toObjectList(msg.getSelectionsList(),
    proto_base_data_type_pb.KeyValueSelection.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.RunBusinessProcessRequest}
 */
proto.data.RunBusinessProcessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.RunBusinessProcessRequest;
  return proto.data.RunBusinessProcessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.RunBusinessProcessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.RunBusinessProcessRequest}
 */
proto.data.RunBusinessProcessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTableselectedid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setReporttype(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrintformatuuid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportviewuuid(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssummary(value);
      break;
    case 10:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addParameters(value);
      break;
    case 11:
      var value = new proto_base_data_type_pb.KeyValueSelection;
      reader.readMessage(value,proto_base_data_type_pb.KeyValueSelection.deserializeBinaryFromReader);
      msg.addSelections(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.RunBusinessProcessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.RunBusinessProcessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.RunBusinessProcessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RunBusinessProcessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTableselectedid();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getReporttype();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPrintformatuuid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getReportviewuuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getIssummary();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getSelectionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto_base_data_type_pb.KeyValueSelection.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.RunBusinessProcessRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
*/
proto.data.RunBusinessProcessRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.RunBusinessProcessRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.RunBusinessProcessRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.RunBusinessProcessRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 recordId = 4;
 * @return {number}
 */
proto.data.RunBusinessProcessRequest.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 tableSelectedId = 5;
 * @return {number}
 */
proto.data.RunBusinessProcessRequest.prototype.getTableselectedid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setTableselectedid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string reportType = 6;
 * @return {string}
 */
proto.data.RunBusinessProcessRequest.prototype.getReporttype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setReporttype = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string printFormatUuid = 7;
 * @return {string}
 */
proto.data.RunBusinessProcessRequest.prototype.getPrintformatuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setPrintformatuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string reportViewUuid = 8;
 * @return {string}
 */
proto.data.RunBusinessProcessRequest.prototype.getReportviewuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setReportviewuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool isSummary = 9;
 * @return {boolean}
 */
proto.data.RunBusinessProcessRequest.prototype.getIssummary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setIssummary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * repeated KeyValue parameters = 10;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.RunBusinessProcessRequest.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 10));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
*/
proto.data.RunBusinessProcessRequest.prototype.setParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.RunBusinessProcessRequest.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.clearParametersList = function() {
  return this.setParametersList([]);
};


/**
 * repeated KeyValueSelection selections = 11;
 * @return {!Array<!proto.data.KeyValueSelection>}
 */
proto.data.RunBusinessProcessRequest.prototype.getSelectionsList = function() {
  return /** @type{!Array<!proto.data.KeyValueSelection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValueSelection, 11));
};


/**
 * @param {!Array<!proto.data.KeyValueSelection>} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
*/
proto.data.RunBusinessProcessRequest.prototype.setSelectionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.data.KeyValueSelection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValueSelection}
 */
proto.data.RunBusinessProcessRequest.prototype.addSelections = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.data.KeyValueSelection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.clearSelectionsList = function() {
  return this.setSelectionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListProcessLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListProcessLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListProcessLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListProcessLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    useruuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    instanceuuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tablename: jspb.Message.getFieldWithDefault(msg, 4, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListProcessLogsRequest}
 */
proto.data.ListProcessLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListProcessLogsRequest;
  return proto.data.ListProcessLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListProcessLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListProcessLogsRequest}
 */
proto.data.ListProcessLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseruuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceuuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListProcessLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListProcessLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListProcessLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListProcessLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUseruuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInstanceuuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListProcessLogsRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListProcessLogsRequest} returns this
*/
proto.data.ListProcessLogsRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListProcessLogsRequest} returns this
 */
proto.data.ListProcessLogsRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListProcessLogsRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string userUuid = 2;
 * @return {string}
 */
proto.data.ListProcessLogsRequest.prototype.getUseruuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListProcessLogsRequest} returns this
 */
proto.data.ListProcessLogsRequest.prototype.setUseruuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string instanceUuid = 3;
 * @return {string}
 */
proto.data.ListProcessLogsRequest.prototype.getInstanceuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListProcessLogsRequest} returns this
 */
proto.data.ListProcessLogsRequest.prototype.setInstanceuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string tableName = 4;
 * @return {string}
 */
proto.data.ListProcessLogsRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListProcessLogsRequest} returns this
 */
proto.data.ListProcessLogsRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 recordId = 5;
 * @return {number}
 */
proto.data.ListProcessLogsRequest.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListProcessLogsRequest} returns this
 */
proto.data.ListProcessLogsRequest.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 page_size = 6;
 * @return {number}
 */
proto.data.ListProcessLogsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListProcessLogsRequest} returns this
 */
proto.data.ListProcessLogsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string page_token = 7;
 * @return {string}
 */
proto.data.ListProcessLogsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListProcessLogsRequest} returns this
 */
proto.data.ListProcessLogsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListProcessLogsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListProcessLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListProcessLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListProcessLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListProcessLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    processlogsList: jspb.Message.toObjectList(msg.getProcesslogsList(),
    proto_base_data_type_pb.ProcessLog.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListProcessLogsResponse}
 */
proto.data.ListProcessLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListProcessLogsResponse;
  return proto.data.ListProcessLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListProcessLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListProcessLogsResponse}
 */
proto.data.ListProcessLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.ProcessLog;
      reader.readMessage(value,proto_base_data_type_pb.ProcessLog.deserializeBinaryFromReader);
      msg.addProcesslogs(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListProcessLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListProcessLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListProcessLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListProcessLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getProcesslogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.ProcessLog.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListProcessLogsResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListProcessLogsResponse} returns this
 */
proto.data.ListProcessLogsResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ProcessLog processLogs = 2;
 * @return {!Array<!proto.data.ProcessLog>}
 */
proto.data.ListProcessLogsResponse.prototype.getProcesslogsList = function() {
  return /** @type{!Array<!proto.data.ProcessLog>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.ProcessLog, 2));
};


/**
 * @param {!Array<!proto.data.ProcessLog>} value
 * @return {!proto.data.ListProcessLogsResponse} returns this
*/
proto.data.ListProcessLogsResponse.prototype.setProcesslogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.ProcessLog=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.ProcessLog}
 */
proto.data.ListProcessLogsResponse.prototype.addProcesslogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.ProcessLog, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListProcessLogsResponse} returns this
 */
proto.data.ListProcessLogsResponse.prototype.clearProcesslogsList = function() {
  return this.setProcesslogsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListProcessLogsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListProcessLogsResponse} returns this
 */
proto.data.ListProcessLogsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListRecentItemsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListRecentItemsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListRecentItemsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListRecentItemsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    useruuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roleuuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    currentsession: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListRecentItemsRequest}
 */
proto.data.ListRecentItemsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListRecentItemsRequest;
  return proto.data.ListRecentItemsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListRecentItemsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListRecentItemsRequest}
 */
proto.data.ListRecentItemsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseruuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleuuid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCurrentsession(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListRecentItemsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListRecentItemsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListRecentItemsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListRecentItemsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUseruuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoleuuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCurrentsession();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListRecentItemsRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListRecentItemsRequest} returns this
*/
proto.data.ListRecentItemsRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListRecentItemsRequest} returns this
 */
proto.data.ListRecentItemsRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListRecentItemsRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string userUuid = 2;
 * @return {string}
 */
proto.data.ListRecentItemsRequest.prototype.getUseruuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListRecentItemsRequest} returns this
 */
proto.data.ListRecentItemsRequest.prototype.setUseruuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string roleUuid = 3;
 * @return {string}
 */
proto.data.ListRecentItemsRequest.prototype.getRoleuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListRecentItemsRequest} returns this
 */
proto.data.ListRecentItemsRequest.prototype.setRoleuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool currentSession = 4;
 * @return {boolean}
 */
proto.data.ListRecentItemsRequest.prototype.getCurrentsession = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.ListRecentItemsRequest} returns this
 */
proto.data.ListRecentItemsRequest.prototype.setCurrentsession = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 page_size = 5;
 * @return {number}
 */
proto.data.ListRecentItemsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListRecentItemsRequest} returns this
 */
proto.data.ListRecentItemsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.data.ListRecentItemsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListRecentItemsRequest} returns this
 */
proto.data.ListRecentItemsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.RecentItem.prototype.toObject = function(opt_includeInstance) {
  return proto.data.RecentItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.RecentItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RecentItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    menuuuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    menuname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    menudescription: jspb.Message.getFieldWithDefault(msg, 3, ""),
    windowuuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    tabuuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    tableid: jspb.Message.getFieldWithDefault(msg, 6, 0),
    recordid: jspb.Message.getFieldWithDefault(msg, 7, 0),
    displayname: jspb.Message.getFieldWithDefault(msg, 8, ""),
    recorduuid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    updated: jspb.Message.getFieldWithDefault(msg, 10, 0),
    referenceuuid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    action: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.RecentItem}
 */
proto.data.RecentItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.RecentItem;
  return proto.data.RecentItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.RecentItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.RecentItem}
 */
proto.data.RecentItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenuuuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenuname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenudescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWindowuuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTabuuid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTableid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayname(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecorduuid(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdated(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceuuid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.RecentItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.RecentItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.RecentItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RecentItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMenuuuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMenuname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMenudescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWindowuuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTabuuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTableid();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getDisplayname();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRecorduuid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getUpdated();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getReferenceuuid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string menuUuid = 1;
 * @return {string}
 */
proto.data.RecentItem.prototype.getMenuuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setMenuuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string menuName = 2;
 * @return {string}
 */
proto.data.RecentItem.prototype.getMenuname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setMenuname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string menuDescription = 3;
 * @return {string}
 */
proto.data.RecentItem.prototype.getMenudescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setMenudescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string windowUuid = 4;
 * @return {string}
 */
proto.data.RecentItem.prototype.getWindowuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setWindowuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string tabUuid = 5;
 * @return {string}
 */
proto.data.RecentItem.prototype.getTabuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setTabuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 tableId = 6;
 * @return {number}
 */
proto.data.RecentItem.prototype.getTableid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setTableid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 recordId = 7;
 * @return {number}
 */
proto.data.RecentItem.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string displayName = 8;
 * @return {string}
 */
proto.data.RecentItem.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setDisplayname = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string recordUuid = 9;
 * @return {string}
 */
proto.data.RecentItem.prototype.getRecorduuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setRecorduuid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 updated = 10;
 * @return {number}
 */
proto.data.RecentItem.prototype.getUpdated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setUpdated = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string referenceUuid = 11;
 * @return {string}
 */
proto.data.RecentItem.prototype.getReferenceuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setReferenceuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string action = 12;
 * @return {string}
 */
proto.data.RecentItem.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListRecentItemsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListRecentItemsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListRecentItemsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListRecentItemsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListRecentItemsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recentitemsList: jspb.Message.toObjectList(msg.getRecentitemsList(),
    proto.data.RecentItem.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListRecentItemsResponse}
 */
proto.data.ListRecentItemsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListRecentItemsResponse;
  return proto.data.ListRecentItemsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListRecentItemsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListRecentItemsResponse}
 */
proto.data.ListRecentItemsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto.data.RecentItem;
      reader.readMessage(value,proto.data.RecentItem.deserializeBinaryFromReader);
      msg.addRecentitems(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListRecentItemsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListRecentItemsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListRecentItemsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListRecentItemsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRecentitemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.RecentItem.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListRecentItemsResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListRecentItemsResponse} returns this
 */
proto.data.ListRecentItemsResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated RecentItem recentItems = 2;
 * @return {!Array<!proto.data.RecentItem>}
 */
proto.data.ListRecentItemsResponse.prototype.getRecentitemsList = function() {
  return /** @type{!Array<!proto.data.RecentItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.RecentItem, 2));
};


/**
 * @param {!Array<!proto.data.RecentItem>} value
 * @return {!proto.data.ListRecentItemsResponse} returns this
*/
proto.data.ListRecentItemsResponse.prototype.setRecentitemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.RecentItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.RecentItem}
 */
proto.data.ListRecentItemsResponse.prototype.addRecentitems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.RecentItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListRecentItemsResponse} returns this
 */
proto.data.ListRecentItemsResponse.prototype.clearRecentitemsList = function() {
  return this.setRecentitemsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListRecentItemsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListRecentItemsResponse} returns this
 */
proto.data.ListRecentItemsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListFavoritesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListFavoritesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListFavoritesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListFavoritesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    useruuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListFavoritesRequest}
 */
proto.data.ListFavoritesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListFavoritesRequest;
  return proto.data.ListFavoritesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListFavoritesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListFavoritesRequest}
 */
proto.data.ListFavoritesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseruuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListFavoritesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListFavoritesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListFavoritesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListFavoritesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUseruuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListFavoritesRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListFavoritesRequest} returns this
*/
proto.data.ListFavoritesRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListFavoritesRequest} returns this
 */
proto.data.ListFavoritesRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListFavoritesRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string userUuid = 2;
 * @return {string}
 */
proto.data.ListFavoritesRequest.prototype.getUseruuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListFavoritesRequest} returns this
 */
proto.data.ListFavoritesRequest.prototype.setUseruuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.data.ListFavoritesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListFavoritesRequest} returns this
 */
proto.data.ListFavoritesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.data.ListFavoritesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListFavoritesRequest} returns this
 */
proto.data.ListFavoritesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.Favorite.prototype.toObject = function(opt_includeInstance) {
  return proto.data.Favorite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.Favorite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Favorite.toObject = function(includeInstance, msg) {
  var f, obj = {
    menuuuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    menuname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    menudescription: jspb.Message.getFieldWithDefault(msg, 3, ""),
    referenceuuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    action: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.Favorite}
 */
proto.data.Favorite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.Favorite;
  return proto.data.Favorite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.Favorite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.Favorite}
 */
proto.data.Favorite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenuuuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenuname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenudescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceuuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.Favorite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.Favorite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.Favorite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Favorite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMenuuuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMenuname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMenudescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReferenceuuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string menuUuid = 1;
 * @return {string}
 */
proto.data.Favorite.prototype.getMenuuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Favorite} returns this
 */
proto.data.Favorite.prototype.setMenuuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string menuName = 2;
 * @return {string}
 */
proto.data.Favorite.prototype.getMenuname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Favorite} returns this
 */
proto.data.Favorite.prototype.setMenuname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string menuDescription = 3;
 * @return {string}
 */
proto.data.Favorite.prototype.getMenudescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Favorite} returns this
 */
proto.data.Favorite.prototype.setMenudescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string referenceUuid = 4;
 * @return {string}
 */
proto.data.Favorite.prototype.getReferenceuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Favorite} returns this
 */
proto.data.Favorite.prototype.setReferenceuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string action = 5;
 * @return {string}
 */
proto.data.Favorite.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Favorite} returns this
 */
proto.data.Favorite.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListFavoritesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListFavoritesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListFavoritesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListFavoritesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListFavoritesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    favoritesList: jspb.Message.toObjectList(msg.getFavoritesList(),
    proto.data.Favorite.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListFavoritesResponse}
 */
proto.data.ListFavoritesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListFavoritesResponse;
  return proto.data.ListFavoritesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListFavoritesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListFavoritesResponse}
 */
proto.data.ListFavoritesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto.data.Favorite;
      reader.readMessage(value,proto.data.Favorite.deserializeBinaryFromReader);
      msg.addFavorites(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListFavoritesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListFavoritesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListFavoritesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListFavoritesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFavoritesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.Favorite.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListFavoritesResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListFavoritesResponse} returns this
 */
proto.data.ListFavoritesResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Favorite favorites = 2;
 * @return {!Array<!proto.data.Favorite>}
 */
proto.data.ListFavoritesResponse.prototype.getFavoritesList = function() {
  return /** @type{!Array<!proto.data.Favorite>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.Favorite, 2));
};


/**
 * @param {!Array<!proto.data.Favorite>} value
 * @return {!proto.data.ListFavoritesResponse} returns this
*/
proto.data.ListFavoritesResponse.prototype.setFavoritesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Favorite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Favorite}
 */
proto.data.ListFavoritesResponse.prototype.addFavorites = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Favorite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListFavoritesResponse} returns this
 */
proto.data.ListFavoritesResponse.prototype.clearFavoritesList = function() {
  return this.setFavoritesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListFavoritesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListFavoritesResponse} returns this
 */
proto.data.ListFavoritesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListTranslationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListTranslationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListTranslationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTranslationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recorduuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    language: jspb.Message.getFieldWithDefault(msg, 5, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListTranslationsRequest}
 */
proto.data.ListTranslationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListTranslationsRequest;
  return proto.data.ListTranslationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListTranslationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListTranslationsRequest}
 */
proto.data.ListTranslationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecorduuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListTranslationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListTranslationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListTranslationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTranslationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecorduuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListTranslationsRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListTranslationsRequest} returns this
*/
proto.data.ListTranslationsRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListTranslationsRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.ListTranslationsRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string recordUuid = 3;
 * @return {string}
 */
proto.data.ListTranslationsRequest.prototype.getRecorduuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setRecorduuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 recordId = 4;
 * @return {number}
 */
proto.data.ListTranslationsRequest.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string language = 5;
 * @return {string}
 */
proto.data.ListTranslationsRequest.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 page_size = 6;
 * @return {number}
 */
proto.data.ListTranslationsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string page_token = 7;
 * @return {string}
 */
proto.data.ListTranslationsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListTranslationsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListTranslationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListTranslationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListTranslationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTranslationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    translationsList: jspb.Message.toObjectList(msg.getTranslationsList(),
    proto_base_data_type_pb.Translation.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListTranslationsResponse}
 */
proto.data.ListTranslationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListTranslationsResponse;
  return proto.data.ListTranslationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListTranslationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListTranslationsResponse}
 */
proto.data.ListTranslationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Translation;
      reader.readMessage(value,proto_base_data_type_pb.Translation.deserializeBinaryFromReader);
      msg.addTranslations(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListTranslationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListTranslationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListTranslationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTranslationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTranslationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.Translation.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListTranslationsResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListTranslationsResponse} returns this
 */
proto.data.ListTranslationsResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Translation translations = 2;
 * @return {!Array<!proto.data.Translation>}
 */
proto.data.ListTranslationsResponse.prototype.getTranslationsList = function() {
  return /** @type{!Array<!proto.data.Translation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.Translation, 2));
};


/**
 * @param {!Array<!proto.data.Translation>} value
 * @return {!proto.data.ListTranslationsResponse} returns this
*/
proto.data.ListTranslationsResponse.prototype.setTranslationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Translation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Translation}
 */
proto.data.ListTranslationsResponse.prototype.addTranslations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Translation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListTranslationsResponse} returns this
 */
proto.data.ListTranslationsResponse.prototype.clearTranslationsList = function() {
  return this.setTranslationsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListTranslationsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTranslationsResponse} returns this
 */
proto.data.ListTranslationsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListPendingDocumentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListPendingDocumentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListPendingDocumentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPendingDocumentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    useruuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roleuuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListPendingDocumentsRequest}
 */
proto.data.ListPendingDocumentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListPendingDocumentsRequest;
  return proto.data.ListPendingDocumentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListPendingDocumentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListPendingDocumentsRequest}
 */
proto.data.ListPendingDocumentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseruuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleuuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListPendingDocumentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListPendingDocumentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListPendingDocumentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPendingDocumentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUseruuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoleuuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListPendingDocumentsRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
*/
proto.data.ListPendingDocumentsRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListPendingDocumentsRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string userUuid = 2;
 * @return {string}
 */
proto.data.ListPendingDocumentsRequest.prototype.getUseruuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.setUseruuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string roleUuid = 3;
 * @return {string}
 */
proto.data.ListPendingDocumentsRequest.prototype.getRoleuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.setRoleuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListPendingDocumentsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListPendingDocumentsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.PendingDocument.prototype.toObject = function(opt_includeInstance) {
  return proto.data.PendingDocument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.PendingDocument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PendingDocument.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowuuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    formuuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    documentname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    documentdescription: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 5, 0),
    recordcount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.PendingDocument}
 */
proto.data.PendingDocument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.PendingDocument;
  return proto.data.PendingDocument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.PendingDocument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.PendingDocument}
 */
proto.data.PendingDocument.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWindowuuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormuuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentdescription(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequence(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 7:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.PendingDocument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.PendingDocument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.PendingDocument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PendingDocument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowuuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFormuuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDocumentname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDocumentdescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional string windowUuid = 1;
 * @return {string}
 */
proto.data.PendingDocument.prototype.getWindowuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setWindowuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string formUuid = 2;
 * @return {string}
 */
proto.data.PendingDocument.prototype.getFormuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setFormuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string documentName = 3;
 * @return {string}
 */
proto.data.PendingDocument.prototype.getDocumentname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setDocumentname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string documentDescription = 4;
 * @return {string}
 */
proto.data.PendingDocument.prototype.getDocumentdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setDocumentdescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 sequence = 5;
 * @return {number}
 */
proto.data.PendingDocument.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 recordCount = 6;
 * @return {number}
 */
proto.data.PendingDocument.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional Criteria criteria = 7;
 * @return {?proto.data.Criteria}
 */
proto.data.PendingDocument.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 7));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.PendingDocument} returns this
*/
proto.data.PendingDocument.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.PendingDocument.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListPendingDocumentsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListPendingDocumentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListPendingDocumentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListPendingDocumentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPendingDocumentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pendingdocumentsList: jspb.Message.toObjectList(msg.getPendingdocumentsList(),
    proto.data.PendingDocument.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListPendingDocumentsResponse}
 */
proto.data.ListPendingDocumentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListPendingDocumentsResponse;
  return proto.data.ListPendingDocumentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListPendingDocumentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListPendingDocumentsResponse}
 */
proto.data.ListPendingDocumentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto.data.PendingDocument;
      reader.readMessage(value,proto.data.PendingDocument.deserializeBinaryFromReader);
      msg.addPendingdocuments(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListPendingDocumentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListPendingDocumentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListPendingDocumentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPendingDocumentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPendingdocumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.PendingDocument.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListPendingDocumentsResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPendingDocumentsResponse} returns this
 */
proto.data.ListPendingDocumentsResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated PendingDocument pendingDocuments = 2;
 * @return {!Array<!proto.data.PendingDocument>}
 */
proto.data.ListPendingDocumentsResponse.prototype.getPendingdocumentsList = function() {
  return /** @type{!Array<!proto.data.PendingDocument>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.PendingDocument, 2));
};


/**
 * @param {!Array<!proto.data.PendingDocument>} value
 * @return {!proto.data.ListPendingDocumentsResponse} returns this
*/
proto.data.ListPendingDocumentsResponse.prototype.setPendingdocumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.PendingDocument=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.PendingDocument}
 */
proto.data.ListPendingDocumentsResponse.prototype.addPendingdocuments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.PendingDocument, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListPendingDocumentsResponse} returns this
 */
proto.data.ListPendingDocumentsResponse.prototype.clearPendingdocumentsList = function() {
  return this.setPendingdocumentsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListPendingDocumentsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPendingDocumentsResponse} returns this
 */
proto.data.ListPendingDocumentsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListDashboardsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDashboardsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDashboardsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDashboardsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    roleuuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListDashboardsRequest}
 */
proto.data.ListDashboardsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDashboardsRequest;
  return proto.data.ListDashboardsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDashboardsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDashboardsRequest}
 */
proto.data.ListDashboardsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleuuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListDashboardsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDashboardsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDashboardsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDashboardsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getRoleuuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListDashboardsRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListDashboardsRequest} returns this
*/
proto.data.ListDashboardsRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListDashboardsRequest} returns this
 */
proto.data.ListDashboardsRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListDashboardsRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string roleUuid = 2;
 * @return {string}
 */
proto.data.ListDashboardsRequest.prototype.getRoleuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDashboardsRequest} returns this
 */
proto.data.ListDashboardsRequest.prototype.setRoleuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.data.ListDashboardsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDashboardsRequest} returns this
 */
proto.data.ListDashboardsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.data.ListDashboardsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDashboardsRequest} returns this
 */
proto.data.ListDashboardsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListDashboardsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListDashboardsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDashboardsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDashboardsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDashboardsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dashboardsList: jspb.Message.toObjectList(msg.getDashboardsList(),
    proto_base_data_type_pb.Dashboard.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListDashboardsResponse}
 */
proto.data.ListDashboardsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDashboardsResponse;
  return proto.data.ListDashboardsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDashboardsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDashboardsResponse}
 */
proto.data.ListDashboardsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Dashboard;
      reader.readMessage(value,proto_base_data_type_pb.Dashboard.deserializeBinaryFromReader);
      msg.addDashboards(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListDashboardsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDashboardsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDashboardsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDashboardsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDashboardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.Dashboard.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListDashboardsResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDashboardsResponse} returns this
 */
proto.data.ListDashboardsResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Dashboard dashboards = 2;
 * @return {!Array<!proto.data.Dashboard>}
 */
proto.data.ListDashboardsResponse.prototype.getDashboardsList = function() {
  return /** @type{!Array<!proto.data.Dashboard>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.Dashboard, 2));
};


/**
 * @param {!Array<!proto.data.Dashboard>} value
 * @return {!proto.data.ListDashboardsResponse} returns this
*/
proto.data.ListDashboardsResponse.prototype.setDashboardsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Dashboard=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Dashboard}
 */
proto.data.ListDashboardsResponse.prototype.addDashboards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Dashboard, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListDashboardsResponse} returns this
 */
proto.data.ListDashboardsResponse.prototype.clearDashboardsList = function() {
  return this.setDashboardsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListDashboardsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDashboardsResponse} returns this
 */
proto.data.ListDashboardsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListPrintFormatsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListPrintFormatsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListPrintFormatsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPrintFormatsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    reportviewuuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    processuuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListPrintFormatsRequest}
 */
proto.data.ListPrintFormatsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListPrintFormatsRequest;
  return proto.data.ListPrintFormatsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListPrintFormatsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListPrintFormatsRequest}
 */
proto.data.ListPrintFormatsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportviewuuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessuuid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListPrintFormatsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListPrintFormatsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListPrintFormatsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPrintFormatsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReportviewuuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProcessuuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListPrintFormatsRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
*/
proto.data.ListPrintFormatsRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListPrintFormatsRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.ListPrintFormatsRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string reportViewUuid = 3;
 * @return {string}
 */
proto.data.ListPrintFormatsRequest.prototype.getReportviewuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.setReportviewuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string processUuid = 4;
 * @return {string}
 */
proto.data.ListPrintFormatsRequest.prototype.getProcessuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.setProcessuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 page_size = 5;
 * @return {number}
 */
proto.data.ListPrintFormatsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.data.ListPrintFormatsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListPrintFormatsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListPrintFormatsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListPrintFormatsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListPrintFormatsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPrintFormatsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    printformatsList: jspb.Message.toObjectList(msg.getPrintformatsList(),
    proto_base_data_type_pb.PrintFormat.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListPrintFormatsResponse}
 */
proto.data.ListPrintFormatsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListPrintFormatsResponse;
  return proto.data.ListPrintFormatsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListPrintFormatsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListPrintFormatsResponse}
 */
proto.data.ListPrintFormatsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.PrintFormat;
      reader.readMessage(value,proto_base_data_type_pb.PrintFormat.deserializeBinaryFromReader);
      msg.addPrintformats(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListPrintFormatsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListPrintFormatsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListPrintFormatsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPrintFormatsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPrintformatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.PrintFormat.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListPrintFormatsResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPrintFormatsResponse} returns this
 */
proto.data.ListPrintFormatsResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated PrintFormat printFormats = 2;
 * @return {!Array<!proto.data.PrintFormat>}
 */
proto.data.ListPrintFormatsResponse.prototype.getPrintformatsList = function() {
  return /** @type{!Array<!proto.data.PrintFormat>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.PrintFormat, 2));
};


/**
 * @param {!Array<!proto.data.PrintFormat>} value
 * @return {!proto.data.ListPrintFormatsResponse} returns this
*/
proto.data.ListPrintFormatsResponse.prototype.setPrintformatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.PrintFormat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.PrintFormat}
 */
proto.data.ListPrintFormatsResponse.prototype.addPrintformats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.PrintFormat, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListPrintFormatsResponse} returns this
 */
proto.data.ListPrintFormatsResponse.prototype.clearPrintformatsList = function() {
  return this.setPrintformatsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListPrintFormatsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPrintFormatsResponse} returns this
 */
proto.data.ListPrintFormatsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListRecordLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListRecordLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListRecordLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListRecordLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListRecordLogsRequest}
 */
proto.data.ListRecordLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListRecordLogsRequest;
  return proto.data.ListRecordLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListRecordLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListRecordLogsRequest}
 */
proto.data.ListRecordLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListRecordLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListRecordLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListRecordLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListRecordLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListRecordLogsRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListRecordLogsRequest} returns this
*/
proto.data.ListRecordLogsRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListRecordLogsRequest} returns this
 */
proto.data.ListRecordLogsRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListRecordLogsRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.ListRecordLogsRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListRecordLogsRequest} returns this
 */
proto.data.ListRecordLogsRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 recordId = 3;
 * @return {number}
 */
proto.data.ListRecordLogsRequest.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListRecordLogsRequest} returns this
 */
proto.data.ListRecordLogsRequest.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListRecordLogsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListRecordLogsRequest} returns this
 */
proto.data.ListRecordLogsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListRecordLogsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListRecordLogsRequest} returns this
 */
proto.data.ListRecordLogsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListRecordLogsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListRecordLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListRecordLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListRecordLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListRecordLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordlogsList: jspb.Message.toObjectList(msg.getRecordlogsList(),
    proto_base_data_type_pb.RecordLog.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListRecordLogsResponse}
 */
proto.data.ListRecordLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListRecordLogsResponse;
  return proto.data.ListRecordLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListRecordLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListRecordLogsResponse}
 */
proto.data.ListRecordLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.RecordLog;
      reader.readMessage(value,proto_base_data_type_pb.RecordLog.deserializeBinaryFromReader);
      msg.addRecordlogs(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListRecordLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListRecordLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListRecordLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListRecordLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRecordlogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.RecordLog.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListRecordLogsResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListRecordLogsResponse} returns this
 */
proto.data.ListRecordLogsResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated RecordLog recordLogs = 2;
 * @return {!Array<!proto.data.RecordLog>}
 */
proto.data.ListRecordLogsResponse.prototype.getRecordlogsList = function() {
  return /** @type{!Array<!proto.data.RecordLog>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.RecordLog, 2));
};


/**
 * @param {!Array<!proto.data.RecordLog>} value
 * @return {!proto.data.ListRecordLogsResponse} returns this
*/
proto.data.ListRecordLogsResponse.prototype.setRecordlogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.RecordLog=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.RecordLog}
 */
proto.data.ListRecordLogsResponse.prototype.addRecordlogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.RecordLog, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListRecordLogsResponse} returns this
 */
proto.data.ListRecordLogsResponse.prototype.clearRecordlogsList = function() {
  return this.setRecordlogsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListRecordLogsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListRecordLogsResponse} returns this
 */
proto.data.ListRecordLogsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListRecordChatsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListRecordChatsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListRecordChatsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListRecordChatsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListRecordChatsRequest}
 */
proto.data.ListRecordChatsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListRecordChatsRequest;
  return proto.data.ListRecordChatsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListRecordChatsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListRecordChatsRequest}
 */
proto.data.ListRecordChatsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListRecordChatsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListRecordChatsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListRecordChatsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListRecordChatsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListRecordChatsRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListRecordChatsRequest} returns this
*/
proto.data.ListRecordChatsRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListRecordChatsRequest} returns this
 */
proto.data.ListRecordChatsRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListRecordChatsRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.ListRecordChatsRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListRecordChatsRequest} returns this
 */
proto.data.ListRecordChatsRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 recordId = 3;
 * @return {number}
 */
proto.data.ListRecordChatsRequest.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListRecordChatsRequest} returns this
 */
proto.data.ListRecordChatsRequest.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListRecordChatsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListRecordChatsRequest} returns this
 */
proto.data.ListRecordChatsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListRecordChatsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListRecordChatsRequest} returns this
 */
proto.data.ListRecordChatsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.RecordChat.prototype.toObject = function(opt_includeInstance) {
  return proto.data.RecordChat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.RecordChat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RecordChat.toObject = function(includeInstance, msg) {
  var f, obj = {
    chatuuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tablename: jspb.Message.getFieldWithDefault(msg, 3, ""),
    chattypeuuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    confidentialtype: jspb.Message.getFieldWithDefault(msg, 6, 0),
    moderationtype: jspb.Message.getFieldWithDefault(msg, 7, 0),
    logdate: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.RecordChat}
 */
proto.data.RecordChat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.RecordChat;
  return proto.data.RecordChat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.RecordChat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.RecordChat}
 */
proto.data.RecordChat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatuuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setChattypeuuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {!proto.data.RecordChat.ConfidentialType} */ (reader.readEnum());
      msg.setConfidentialtype(value);
      break;
    case 7:
      var value = /** @type {!proto.data.RecordChat.ModerationType} */ (reader.readEnum());
      msg.setModerationtype(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLogdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.RecordChat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.RecordChat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.RecordChat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RecordChat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChatuuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getChattypeuuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getConfidentialtype();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getModerationtype();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getLogdate();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.RecordChat.ConfidentialType = {
  PUBLIC: 0,
  PARTER: 1,
  INTERNAL: 2
};

/**
 * @enum {number}
 */
proto.data.RecordChat.ModerationType = {
  NOT_MODERATED: 0,
  BEFORE_PUBLISHING: 1,
  AFTER_PUBLISHING: 2
};

/**
 * optional string chatUuid = 1;
 * @return {string}
 */
proto.data.RecordChat.prototype.getChatuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecordChat} returns this
 */
proto.data.RecordChat.prototype.setChatuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 recordId = 2;
 * @return {number}
 */
proto.data.RecordChat.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RecordChat} returns this
 */
proto.data.RecordChat.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string tableName = 3;
 * @return {string}
 */
proto.data.RecordChat.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecordChat} returns this
 */
proto.data.RecordChat.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string chatTypeUuid = 4;
 * @return {string}
 */
proto.data.RecordChat.prototype.getChattypeuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecordChat} returns this
 */
proto.data.RecordChat.prototype.setChattypeuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.data.RecordChat.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecordChat} returns this
 */
proto.data.RecordChat.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional ConfidentialType confidentialType = 6;
 * @return {!proto.data.RecordChat.ConfidentialType}
 */
proto.data.RecordChat.prototype.getConfidentialtype = function() {
  return /** @type {!proto.data.RecordChat.ConfidentialType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.data.RecordChat.ConfidentialType} value
 * @return {!proto.data.RecordChat} returns this
 */
proto.data.RecordChat.prototype.setConfidentialtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional ModerationType moderationType = 7;
 * @return {!proto.data.RecordChat.ModerationType}
 */
proto.data.RecordChat.prototype.getModerationtype = function() {
  return /** @type {!proto.data.RecordChat.ModerationType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.data.RecordChat.ModerationType} value
 * @return {!proto.data.RecordChat} returns this
 */
proto.data.RecordChat.prototype.setModerationtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional int64 logDate = 8;
 * @return {number}
 */
proto.data.RecordChat.prototype.getLogdate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RecordChat} returns this
 */
proto.data.RecordChat.prototype.setLogdate = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListRecordChatsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListRecordChatsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListRecordChatsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListRecordChatsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListRecordChatsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordchatsList: jspb.Message.toObjectList(msg.getRecordchatsList(),
    proto.data.RecordChat.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListRecordChatsResponse}
 */
proto.data.ListRecordChatsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListRecordChatsResponse;
  return proto.data.ListRecordChatsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListRecordChatsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListRecordChatsResponse}
 */
proto.data.ListRecordChatsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto.data.RecordChat;
      reader.readMessage(value,proto.data.RecordChat.deserializeBinaryFromReader);
      msg.addRecordchats(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListRecordChatsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListRecordChatsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListRecordChatsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListRecordChatsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRecordchatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.RecordChat.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListRecordChatsResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListRecordChatsResponse} returns this
 */
proto.data.ListRecordChatsResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated RecordChat recordChats = 2;
 * @return {!Array<!proto.data.RecordChat>}
 */
proto.data.ListRecordChatsResponse.prototype.getRecordchatsList = function() {
  return /** @type{!Array<!proto.data.RecordChat>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.RecordChat, 2));
};


/**
 * @param {!Array<!proto.data.RecordChat>} value
 * @return {!proto.data.ListRecordChatsResponse} returns this
*/
proto.data.ListRecordChatsResponse.prototype.setRecordchatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.RecordChat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.RecordChat}
 */
proto.data.ListRecordChatsResponse.prototype.addRecordchats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.RecordChat, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListRecordChatsResponse} returns this
 */
proto.data.ListRecordChatsResponse.prototype.clearRecordchatsList = function() {
  return this.setRecordchatsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListRecordChatsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListRecordChatsResponse} returns this
 */
proto.data.ListRecordChatsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListChatEntriesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListChatEntriesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListChatEntriesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListChatEntriesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    chatuuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListChatEntriesRequest}
 */
proto.data.ListChatEntriesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListChatEntriesRequest;
  return proto.data.ListChatEntriesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListChatEntriesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListChatEntriesRequest}
 */
proto.data.ListChatEntriesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatuuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListChatEntriesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListChatEntriesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListChatEntriesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListChatEntriesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getChatuuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListChatEntriesRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListChatEntriesRequest} returns this
*/
proto.data.ListChatEntriesRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListChatEntriesRequest} returns this
 */
proto.data.ListChatEntriesRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListChatEntriesRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string chatUuid = 2;
 * @return {string}
 */
proto.data.ListChatEntriesRequest.prototype.getChatuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListChatEntriesRequest} returns this
 */
proto.data.ListChatEntriesRequest.prototype.setChatuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.data.ListChatEntriesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListChatEntriesRequest} returns this
 */
proto.data.ListChatEntriesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.data.ListChatEntriesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListChatEntriesRequest} returns this
 */
proto.data.ListChatEntriesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ChatEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ChatEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ChatEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ChatEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    chatuuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    chatentryuuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subject: jspb.Message.getFieldWithDefault(msg, 3, ""),
    characterdata: jspb.Message.getFieldWithDefault(msg, 4, ""),
    useruuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    username: jspb.Message.getFieldWithDefault(msg, 6, ""),
    chatentrytype: jspb.Message.getFieldWithDefault(msg, 7, 0),
    confidentialtype: jspb.Message.getFieldWithDefault(msg, 8, 0),
    moderatorstatus: jspb.Message.getFieldWithDefault(msg, 9, 0),
    logdate: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ChatEntry}
 */
proto.data.ChatEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ChatEntry;
  return proto.data.ChatEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ChatEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ChatEntry}
 */
proto.data.ChatEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatuuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatentryuuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCharacterdata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseruuid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 7:
      var value = /** @type {!proto.data.ChatEntry.ChatEntryType} */ (reader.readEnum());
      msg.setChatentrytype(value);
      break;
    case 8:
      var value = /** @type {!proto.data.ChatEntry.ConfidentialType} */ (reader.readEnum());
      msg.setConfidentialtype(value);
      break;
    case 9:
      var value = /** @type {!proto.data.ChatEntry.ModeratorStatus} */ (reader.readEnum());
      msg.setModeratorstatus(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLogdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ChatEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ChatEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ChatEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ChatEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChatuuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChatentryuuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCharacterdata();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUseruuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getChatentrytype();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getConfidentialtype();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getModeratorstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getLogdate();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.ChatEntry.ConfidentialType = {
  PUBLIC: 0,
  PARTER: 1,
  INTERNAL: 2
};

/**
 * @enum {number}
 */
proto.data.ChatEntry.ModeratorStatus = {
  NOT_DISPLAYED: 0,
  PUBLISHED: 1,
  SUSPICIUS: 2,
  TO_BE_REVIEWED: 3
};

/**
 * @enum {number}
 */
proto.data.ChatEntry.ChatEntryType = {
  NOTE_FLAT: 0,
  FORUM_THREADED: 1,
  WIKI: 2
};

/**
 * optional string chatUuid = 1;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getChatuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setChatuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string chatEntryUuid = 2;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getChatentryuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setChatentryuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string subject = 3;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string characterData = 4;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getCharacterdata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setCharacterdata = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string userUuid = 5;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getUseruuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setUseruuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string userName = 6;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional ChatEntryType chatEntryType = 7;
 * @return {!proto.data.ChatEntry.ChatEntryType}
 */
proto.data.ChatEntry.prototype.getChatentrytype = function() {
  return /** @type {!proto.data.ChatEntry.ChatEntryType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.data.ChatEntry.ChatEntryType} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setChatentrytype = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional ConfidentialType confidentialType = 8;
 * @return {!proto.data.ChatEntry.ConfidentialType}
 */
proto.data.ChatEntry.prototype.getConfidentialtype = function() {
  return /** @type {!proto.data.ChatEntry.ConfidentialType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.data.ChatEntry.ConfidentialType} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setConfidentialtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional ModeratorStatus moderatorStatus = 9;
 * @return {!proto.data.ChatEntry.ModeratorStatus}
 */
proto.data.ChatEntry.prototype.getModeratorstatus = function() {
  return /** @type {!proto.data.ChatEntry.ModeratorStatus} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.data.ChatEntry.ModeratorStatus} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setModeratorstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional int64 logDate = 10;
 * @return {number}
 */
proto.data.ChatEntry.prototype.getLogdate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setLogdate = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.CreateChatEntryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.CreateChatEntryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.CreateChatEntryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateChatEntryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    comment: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.CreateChatEntryRequest}
 */
proto.data.CreateChatEntryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.CreateChatEntryRequest;
  return proto.data.CreateChatEntryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.CreateChatEntryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.CreateChatEntryRequest}
 */
proto.data.CreateChatEntryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.CreateChatEntryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.CreateChatEntryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.CreateChatEntryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateChatEntryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.CreateChatEntryRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.CreateChatEntryRequest} returns this
*/
proto.data.CreateChatEntryRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.CreateChatEntryRequest} returns this
 */
proto.data.CreateChatEntryRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.CreateChatEntryRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.CreateChatEntryRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateChatEntryRequest} returns this
 */
proto.data.CreateChatEntryRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 recordId = 3;
 * @return {number}
 */
proto.data.CreateChatEntryRequest.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.CreateChatEntryRequest} returns this
 */
proto.data.CreateChatEntryRequest.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string comment = 4;
 * @return {string}
 */
proto.data.CreateChatEntryRequest.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateChatEntryRequest} returns this
 */
proto.data.CreateChatEntryRequest.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListChatEntriesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListChatEntriesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListChatEntriesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListChatEntriesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListChatEntriesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    chatentriesList: jspb.Message.toObjectList(msg.getChatentriesList(),
    proto.data.ChatEntry.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListChatEntriesResponse}
 */
proto.data.ListChatEntriesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListChatEntriesResponse;
  return proto.data.ListChatEntriesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListChatEntriesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListChatEntriesResponse}
 */
proto.data.ListChatEntriesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto.data.ChatEntry;
      reader.readMessage(value,proto.data.ChatEntry.deserializeBinaryFromReader);
      msg.addChatentries(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListChatEntriesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListChatEntriesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListChatEntriesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListChatEntriesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getChatentriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.ChatEntry.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListChatEntriesResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListChatEntriesResponse} returns this
 */
proto.data.ListChatEntriesResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ChatEntry chatEntries = 2;
 * @return {!Array<!proto.data.ChatEntry>}
 */
proto.data.ListChatEntriesResponse.prototype.getChatentriesList = function() {
  return /** @type{!Array<!proto.data.ChatEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.ChatEntry, 2));
};


/**
 * @param {!Array<!proto.data.ChatEntry>} value
 * @return {!proto.data.ListChatEntriesResponse} returns this
*/
proto.data.ListChatEntriesResponse.prototype.setChatentriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.ChatEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.ChatEntry}
 */
proto.data.ListChatEntriesResponse.prototype.addChatentries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.ChatEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListChatEntriesResponse} returns this
 */
proto.data.ListChatEntriesResponse.prototype.clearChatentriesList = function() {
  return this.setChatentriesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListChatEntriesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListChatEntriesResponse} returns this
 */
proto.data.ListChatEntriesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListWorkflowsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListWorkflowsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListWorkflowsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListWorkflowsRequest}
 */
proto.data.ListWorkflowsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListWorkflowsRequest;
  return proto.data.ListWorkflowsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListWorkflowsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListWorkflowsRequest}
 */
proto.data.ListWorkflowsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListWorkflowsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListWorkflowsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListWorkflowsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListWorkflowsRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListWorkflowsRequest} returns this
*/
proto.data.ListWorkflowsRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListWorkflowsRequest} returns this
 */
proto.data.ListWorkflowsRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListWorkflowsRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.ListWorkflowsRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListWorkflowsRequest} returns this
 */
proto.data.ListWorkflowsRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListWorkflowsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListWorkflowsRequest} returns this
 */
proto.data.ListWorkflowsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListWorkflowsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListWorkflowsRequest} returns this
 */
proto.data.ListWorkflowsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.WorkflowDefinition.repeatedFields_ = [16];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.WorkflowDefinition.prototype.toObject = function(opt_includeInstance) {
  return proto.data.WorkflowDefinition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.WorkflowDefinition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowDefinition.toObject = function(includeInstance, msg) {
  var f, obj = {
    workflowuuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    help: jspb.Message.getFieldWithDefault(msg, 5, ""),
    tablename: jspb.Message.getFieldWithDefault(msg, 6, ""),
    responsibleuuid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    responsiblename: jspb.Message.getFieldWithDefault(msg, 8, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 9, 0),
    validfrom: jspb.Message.getFieldWithDefault(msg, 10, 0),
    isdefault: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    isvalid: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    publishstatus: jspb.Message.getFieldWithDefault(msg, 13, 0),
    durationunit: jspb.Message.getFieldWithDefault(msg, 14, 0),
    startnode: (f = msg.getStartnode()) && proto.data.WorkflowNode.toObject(includeInstance, f),
    workflownodesList: jspb.Message.toObjectList(msg.getWorkflownodesList(),
    proto.data.WorkflowNode.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.WorkflowDefinition}
 */
proto.data.WorkflowDefinition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.WorkflowDefinition;
  return proto.data.WorkflowDefinition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.WorkflowDefinition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.WorkflowDefinition}
 */
proto.data.WorkflowDefinition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflowuuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHelp(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsibleuuid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsiblename(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValidfrom(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdefault(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsvalid(value);
      break;
    case 13:
      var value = /** @type {!proto.data.WorkflowDefinition.PublishStatus} */ (reader.readEnum());
      msg.setPublishstatus(value);
      break;
    case 14:
      var value = /** @type {!proto.data.WorkflowDefinition.DurationUnit} */ (reader.readEnum());
      msg.setDurationunit(value);
      break;
    case 15:
      var value = new proto.data.WorkflowNode;
      reader.readMessage(value,proto.data.WorkflowNode.deserializeBinaryFromReader);
      msg.setStartnode(value);
      break;
    case 16:
      var value = new proto.data.WorkflowNode;
      reader.readMessage(value,proto.data.WorkflowNode.deserializeBinaryFromReader);
      msg.addWorkflownodes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.WorkflowDefinition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.WorkflowDefinition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.WorkflowDefinition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowDefinition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkflowuuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHelp();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getResponsibleuuid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getResponsiblename();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getValidfrom();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getIsdefault();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getIsvalid();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getPublishstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getDurationunit();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getStartnode();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.data.WorkflowNode.serializeBinaryToWriter
    );
  }
  f = message.getWorkflownodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto.data.WorkflowNode.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.data.WorkflowDefinition.DurationUnit = {
  DAY: 0,
  HOUR: 1,
  MINUTE: 2,
  MONTH: 3,
  SECOND: 4,
  YEAR: 5
};

/**
 * @enum {number}
 */
proto.data.WorkflowDefinition.PublishStatus = {
  RELEASED: 0,
  TEST: 1,
  UNDER_REVISION: 2,
  VOID: 3
};

/**
 * optional string workflowUuid = 1;
 * @return {string}
 */
proto.data.WorkflowDefinition.prototype.getWorkflowuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setWorkflowuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.data.WorkflowDefinition.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.data.WorkflowDefinition.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.data.WorkflowDefinition.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string help = 5;
 * @return {string}
 */
proto.data.WorkflowDefinition.prototype.getHelp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setHelp = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string tableName = 6;
 * @return {string}
 */
proto.data.WorkflowDefinition.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string responsibleUuid = 7;
 * @return {string}
 */
proto.data.WorkflowDefinition.prototype.getResponsibleuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setResponsibleuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string responsibleName = 8;
 * @return {string}
 */
proto.data.WorkflowDefinition.prototype.getResponsiblename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setResponsiblename = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 priority = 9;
 * @return {number}
 */
proto.data.WorkflowDefinition.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 validFrom = 10;
 * @return {number}
 */
proto.data.WorkflowDefinition.prototype.getValidfrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setValidfrom = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional bool isDefault = 11;
 * @return {boolean}
 */
proto.data.WorkflowDefinition.prototype.getIsdefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setIsdefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool isValid = 12;
 * @return {boolean}
 */
proto.data.WorkflowDefinition.prototype.getIsvalid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setIsvalid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional PublishStatus publishStatus = 13;
 * @return {!proto.data.WorkflowDefinition.PublishStatus}
 */
proto.data.WorkflowDefinition.prototype.getPublishstatus = function() {
  return /** @type {!proto.data.WorkflowDefinition.PublishStatus} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.data.WorkflowDefinition.PublishStatus} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setPublishstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional DurationUnit durationUnit = 14;
 * @return {!proto.data.WorkflowDefinition.DurationUnit}
 */
proto.data.WorkflowDefinition.prototype.getDurationunit = function() {
  return /** @type {!proto.data.WorkflowDefinition.DurationUnit} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.data.WorkflowDefinition.DurationUnit} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setDurationunit = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * optional WorkflowNode startNode = 15;
 * @return {?proto.data.WorkflowNode}
 */
proto.data.WorkflowDefinition.prototype.getStartnode = function() {
  return /** @type{?proto.data.WorkflowNode} */ (
    jspb.Message.getWrapperField(this, proto.data.WorkflowNode, 15));
};


/**
 * @param {?proto.data.WorkflowNode|undefined} value
 * @return {!proto.data.WorkflowDefinition} returns this
*/
proto.data.WorkflowDefinition.prototype.setStartnode = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.clearStartnode = function() {
  return this.setStartnode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.WorkflowDefinition.prototype.hasStartnode = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * repeated WorkflowNode workflowNodes = 16;
 * @return {!Array<!proto.data.WorkflowNode>}
 */
proto.data.WorkflowDefinition.prototype.getWorkflownodesList = function() {
  return /** @type{!Array<!proto.data.WorkflowNode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.WorkflowNode, 16));
};


/**
 * @param {!Array<!proto.data.WorkflowNode>} value
 * @return {!proto.data.WorkflowDefinition} returns this
*/
proto.data.WorkflowDefinition.prototype.setWorkflownodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.data.WorkflowNode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.WorkflowNode}
 */
proto.data.WorkflowDefinition.prototype.addWorkflownodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.data.WorkflowNode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.clearWorkflownodesList = function() {
  return this.setWorkflownodesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.WorkflowNode.repeatedFields_ = [12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.WorkflowNode.prototype.toObject = function(opt_includeInstance) {
  return proto.data.WorkflowNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.WorkflowNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeuuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    help: jspb.Message.getFieldWithDefault(msg, 5, ""),
    responsibleuuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    responsiblename: jspb.Message.getFieldWithDefault(msg, 7, ""),
    documentactionvalue: jspb.Message.getFieldWithDefault(msg, 8, ""),
    documentactionname: jspb.Message.getFieldWithDefault(msg, 9, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 10, 0),
    action: jspb.Message.getFieldWithDefault(msg, 11, 0),
    transitionsList: jspb.Message.toObjectList(msg.getTransitionsList(),
    proto.data.WorkflowTransition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.WorkflowNode}
 */
proto.data.WorkflowNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.WorkflowNode;
  return proto.data.WorkflowNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.WorkflowNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.WorkflowNode}
 */
proto.data.WorkflowNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeuuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHelp(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsibleuuid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsiblename(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentactionvalue(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentactionname(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    case 11:
      var value = /** @type {!proto.data.WorkflowNode.Action} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 12:
      var value = new proto.data.WorkflowTransition;
      reader.readMessage(value,proto.data.WorkflowTransition.deserializeBinaryFromReader);
      msg.addTransitions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.WorkflowNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.WorkflowNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.WorkflowNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeuuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHelp();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getResponsibleuuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getResponsiblename();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDocumentactionvalue();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDocumentactionname();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getTransitionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.data.WorkflowTransition.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.data.WorkflowNode.Action = {
  USER_CHOICE: 0,
  DOCUMENT_ACTION: 1,
  SUB_WORKFLOW: 2,
  EMAIL: 3,
  APPS_PROCESS: 4,
  SMART_VIEW: 5,
  APPS_REPORT: 6,
  SMART_BROWSE: 7,
  APPS_TASK: 8,
  SET_VARIABLE: 9,
  USER_WINDOW: 10,
  USER_FORM: 11,
  WAIT_SLEEP: 12
};

/**
 * optional string nodeUuid = 1;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getNodeuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setNodeuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string help = 5;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getHelp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setHelp = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string responsibleUuid = 6;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getResponsibleuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setResponsibleuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string responsibleName = 7;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getResponsiblename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setResponsiblename = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string documentActionValue = 8;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getDocumentactionvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setDocumentactionvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string documentActionName = 9;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getDocumentactionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setDocumentactionname = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 priority = 10;
 * @return {number}
 */
proto.data.WorkflowNode.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional Action action = 11;
 * @return {!proto.data.WorkflowNode.Action}
 */
proto.data.WorkflowNode.prototype.getAction = function() {
  return /** @type {!proto.data.WorkflowNode.Action} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.data.WorkflowNode.Action} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * repeated WorkflowTransition transitions = 12;
 * @return {!Array<!proto.data.WorkflowTransition>}
 */
proto.data.WorkflowNode.prototype.getTransitionsList = function() {
  return /** @type{!Array<!proto.data.WorkflowTransition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.WorkflowTransition, 12));
};


/**
 * @param {!Array<!proto.data.WorkflowTransition>} value
 * @return {!proto.data.WorkflowNode} returns this
*/
proto.data.WorkflowNode.prototype.setTransitionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.data.WorkflowTransition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.WorkflowTransition}
 */
proto.data.WorkflowNode.prototype.addTransitions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.data.WorkflowTransition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.clearTransitionsList = function() {
  return this.setTransitionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.WorkflowCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.data.WorkflowCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.WorkflowCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    sequence: jspb.Message.getFieldWithDefault(msg, 1, 0),
    columnname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, ""),
    conditiontype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    operation: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.WorkflowCondition}
 */
proto.data.WorkflowCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.WorkflowCondition;
  return proto.data.WorkflowCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.WorkflowCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.WorkflowCondition}
 */
proto.data.WorkflowCondition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequence(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {!proto.data.WorkflowCondition.ConditionType} */ (reader.readEnum());
      msg.setConditiontype(value);
      break;
    case 5:
      var value = /** @type {!proto.data.WorkflowCondition.Operation} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.WorkflowCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.WorkflowCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.WorkflowCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSequence();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getColumnname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getConditiontype();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.WorkflowCondition.ConditionType = {
  AND: 0,
  OR: 1
};

/**
 * @enum {number}
 */
proto.data.WorkflowCondition.Operation = {
  EQUAL: 0,
  NOT_EQUAL: 1,
  LIKE: 2,
  GREATER: 4,
  GREATER_EQUAL: 5,
  LESS: 6,
  LESS_EQUAL: 7,
  BETWEEN: 8,
  SQL: 9
};

/**
 * optional int32 sequence = 1;
 * @return {number}
 */
proto.data.WorkflowCondition.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowCondition} returns this
 */
proto.data.WorkflowCondition.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string columnName = 2;
 * @return {string}
 */
proto.data.WorkflowCondition.prototype.getColumnname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowCondition} returns this
 */
proto.data.WorkflowCondition.prototype.setColumnname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.data.WorkflowCondition.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowCondition} returns this
 */
proto.data.WorkflowCondition.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ConditionType conditionType = 4;
 * @return {!proto.data.WorkflowCondition.ConditionType}
 */
proto.data.WorkflowCondition.prototype.getConditiontype = function() {
  return /** @type {!proto.data.WorkflowCondition.ConditionType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.data.WorkflowCondition.ConditionType} value
 * @return {!proto.data.WorkflowCondition} returns this
 */
proto.data.WorkflowCondition.prototype.setConditiontype = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional Operation operation = 5;
 * @return {!proto.data.WorkflowCondition.Operation}
 */
proto.data.WorkflowCondition.prototype.getOperation = function() {
  return /** @type {!proto.data.WorkflowCondition.Operation} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.data.WorkflowCondition.Operation} value
 * @return {!proto.data.WorkflowCondition} returns this
 */
proto.data.WorkflowCondition.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.WorkflowTransition.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.WorkflowTransition.prototype.toObject = function(opt_includeInstance) {
  return proto.data.WorkflowTransition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.WorkflowTransition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowTransition.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodenextuuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isstduserworkflow: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    sequence: jspb.Message.getFieldWithDefault(msg, 4, 0),
    workflowconditionsList: jspb.Message.toObjectList(msg.getWorkflowconditionsList(),
    proto.data.WorkflowCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.WorkflowTransition}
 */
proto.data.WorkflowTransition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.WorkflowTransition;
  return proto.data.WorkflowTransition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.WorkflowTransition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.WorkflowTransition}
 */
proto.data.WorkflowTransition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodenextuuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsstduserworkflow(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequence(value);
      break;
    case 5:
      var value = new proto.data.WorkflowCondition;
      reader.readMessage(value,proto.data.WorkflowCondition.deserializeBinaryFromReader);
      msg.addWorkflowconditions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.WorkflowTransition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.WorkflowTransition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.WorkflowTransition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowTransition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodenextuuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsstduserworkflow();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getWorkflowconditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.data.WorkflowCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional string nodeNextUuid = 1;
 * @return {string}
 */
proto.data.WorkflowTransition.prototype.getNodenextuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowTransition} returns this
 */
proto.data.WorkflowTransition.prototype.setNodenextuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.data.WorkflowTransition.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowTransition} returns this
 */
proto.data.WorkflowTransition.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool isStdUserWorkflow = 3;
 * @return {boolean}
 */
proto.data.WorkflowTransition.prototype.getIsstduserworkflow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.WorkflowTransition} returns this
 */
proto.data.WorkflowTransition.prototype.setIsstduserworkflow = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int32 sequence = 4;
 * @return {number}
 */
proto.data.WorkflowTransition.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowTransition} returns this
 */
proto.data.WorkflowTransition.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated WorkflowCondition workflowConditions = 5;
 * @return {!Array<!proto.data.WorkflowCondition>}
 */
proto.data.WorkflowTransition.prototype.getWorkflowconditionsList = function() {
  return /** @type{!Array<!proto.data.WorkflowCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.WorkflowCondition, 5));
};


/**
 * @param {!Array<!proto.data.WorkflowCondition>} value
 * @return {!proto.data.WorkflowTransition} returns this
*/
proto.data.WorkflowTransition.prototype.setWorkflowconditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.data.WorkflowCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.WorkflowCondition}
 */
proto.data.WorkflowTransition.prototype.addWorkflowconditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.data.WorkflowCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.WorkflowTransition} returns this
 */
proto.data.WorkflowTransition.prototype.clearWorkflowconditionsList = function() {
  return this.setWorkflowconditionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListWorkflowsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListWorkflowsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListWorkflowsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListWorkflowsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    workflowsList: jspb.Message.toObjectList(msg.getWorkflowsList(),
    proto.data.WorkflowDefinition.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListWorkflowsResponse}
 */
proto.data.ListWorkflowsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListWorkflowsResponse;
  return proto.data.ListWorkflowsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListWorkflowsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListWorkflowsResponse}
 */
proto.data.ListWorkflowsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto.data.WorkflowDefinition;
      reader.readMessage(value,proto.data.WorkflowDefinition.deserializeBinaryFromReader);
      msg.addWorkflows(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListWorkflowsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListWorkflowsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListWorkflowsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getWorkflowsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.WorkflowDefinition.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListWorkflowsResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListWorkflowsResponse} returns this
 */
proto.data.ListWorkflowsResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated WorkflowDefinition workflows = 2;
 * @return {!Array<!proto.data.WorkflowDefinition>}
 */
proto.data.ListWorkflowsResponse.prototype.getWorkflowsList = function() {
  return /** @type{!Array<!proto.data.WorkflowDefinition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.WorkflowDefinition, 2));
};


/**
 * @param {!Array<!proto.data.WorkflowDefinition>} value
 * @return {!proto.data.ListWorkflowsResponse} returns this
*/
proto.data.ListWorkflowsResponse.prototype.setWorkflowsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.WorkflowDefinition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.WorkflowDefinition}
 */
proto.data.ListWorkflowsResponse.prototype.addWorkflows = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.WorkflowDefinition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListWorkflowsResponse} returns this
 */
proto.data.ListWorkflowsResponse.prototype.clearWorkflowsList = function() {
  return this.setWorkflowsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListWorkflowsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListWorkflowsResponse} returns this
 */
proto.data.ListWorkflowsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListDocumentActionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDocumentActionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDocumentActionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDocumentActionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    recorduuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    documentstatus: jspb.Message.getFieldWithDefault(msg, 5, ""),
    documentaction: jspb.Message.getFieldWithDefault(msg, 6, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListDocumentActionsRequest}
 */
proto.data.ListDocumentActionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDocumentActionsRequest;
  return proto.data.ListDocumentActionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDocumentActionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDocumentActionsRequest}
 */
proto.data.ListDocumentActionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecorduuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentstatus(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentaction(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListDocumentActionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDocumentActionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDocumentActionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDocumentActionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRecorduuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDocumentstatus();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDocumentaction();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListDocumentActionsRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListDocumentActionsRequest} returns this
*/
proto.data.ListDocumentActionsRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListDocumentActionsRequest} returns this
 */
proto.data.ListDocumentActionsRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListDocumentActionsRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.ListDocumentActionsRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentActionsRequest} returns this
 */
proto.data.ListDocumentActionsRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 recordId = 3;
 * @return {number}
 */
proto.data.ListDocumentActionsRequest.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDocumentActionsRequest} returns this
 */
proto.data.ListDocumentActionsRequest.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string recordUuid = 4;
 * @return {string}
 */
proto.data.ListDocumentActionsRequest.prototype.getRecorduuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentActionsRequest} returns this
 */
proto.data.ListDocumentActionsRequest.prototype.setRecorduuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string documentStatus = 5;
 * @return {string}
 */
proto.data.ListDocumentActionsRequest.prototype.getDocumentstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentActionsRequest} returns this
 */
proto.data.ListDocumentActionsRequest.prototype.setDocumentstatus = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string documentAction = 6;
 * @return {string}
 */
proto.data.ListDocumentActionsRequest.prototype.getDocumentaction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentActionsRequest} returns this
 */
proto.data.ListDocumentActionsRequest.prototype.setDocumentaction = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 page_size = 7;
 * @return {number}
 */
proto.data.ListDocumentActionsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDocumentActionsRequest} returns this
 */
proto.data.ListDocumentActionsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string page_token = 8;
 * @return {string}
 */
proto.data.ListDocumentActionsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentActionsRequest} returns this
 */
proto.data.ListDocumentActionsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListDocumentActionsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListDocumentActionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDocumentActionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDocumentActionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDocumentActionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    documentactionsList: jspb.Message.toObjectList(msg.getDocumentactionsList(),
    proto_base_data_type_pb.DocumentAction.toObject, includeInstance),
    defaultdocumentaction: (f = msg.getDefaultdocumentaction()) && proto_base_data_type_pb.DocumentAction.toObject(includeInstance, f),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListDocumentActionsResponse}
 */
proto.data.ListDocumentActionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDocumentActionsResponse;
  return proto.data.ListDocumentActionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDocumentActionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDocumentActionsResponse}
 */
proto.data.ListDocumentActionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.DocumentAction;
      reader.readMessage(value,proto_base_data_type_pb.DocumentAction.deserializeBinaryFromReader);
      msg.addDocumentactions(value);
      break;
    case 3:
      var value = new proto_base_data_type_pb.DocumentAction;
      reader.readMessage(value,proto_base_data_type_pb.DocumentAction.deserializeBinaryFromReader);
      msg.setDefaultdocumentaction(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListDocumentActionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDocumentActionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDocumentActionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDocumentActionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDocumentactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.DocumentAction.serializeBinaryToWriter
    );
  }
  f = message.getDefaultdocumentaction();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_base_data_type_pb.DocumentAction.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListDocumentActionsResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDocumentActionsResponse} returns this
 */
proto.data.ListDocumentActionsResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DocumentAction documentActions = 2;
 * @return {!Array<!proto.data.DocumentAction>}
 */
proto.data.ListDocumentActionsResponse.prototype.getDocumentactionsList = function() {
  return /** @type{!Array<!proto.data.DocumentAction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.DocumentAction, 2));
};


/**
 * @param {!Array<!proto.data.DocumentAction>} value
 * @return {!proto.data.ListDocumentActionsResponse} returns this
*/
proto.data.ListDocumentActionsResponse.prototype.setDocumentactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.DocumentAction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.DocumentAction}
 */
proto.data.ListDocumentActionsResponse.prototype.addDocumentactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.DocumentAction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListDocumentActionsResponse} returns this
 */
proto.data.ListDocumentActionsResponse.prototype.clearDocumentactionsList = function() {
  return this.setDocumentactionsList([]);
};


/**
 * optional DocumentAction defaultDocumentAction = 3;
 * @return {?proto.data.DocumentAction}
 */
proto.data.ListDocumentActionsResponse.prototype.getDefaultdocumentaction = function() {
  return /** @type{?proto.data.DocumentAction} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.DocumentAction, 3));
};


/**
 * @param {?proto.data.DocumentAction|undefined} value
 * @return {!proto.data.ListDocumentActionsResponse} returns this
*/
proto.data.ListDocumentActionsResponse.prototype.setDefaultdocumentaction = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListDocumentActionsResponse} returns this
 */
proto.data.ListDocumentActionsResponse.prototype.clearDefaultdocumentaction = function() {
  return this.setDefaultdocumentaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListDocumentActionsResponse.prototype.hasDefaultdocumentaction = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string next_page_token = 4;
 * @return {string}
 */
proto.data.ListDocumentActionsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentActionsResponse} returns this
 */
proto.data.ListDocumentActionsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListDocumentStatusesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDocumentStatusesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDocumentStatusesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDocumentStatusesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    recorduuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    documentstatus: jspb.Message.getFieldWithDefault(msg, 5, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListDocumentStatusesRequest}
 */
proto.data.ListDocumentStatusesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDocumentStatusesRequest;
  return proto.data.ListDocumentStatusesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDocumentStatusesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDocumentStatusesRequest}
 */
proto.data.ListDocumentStatusesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecorduuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentstatus(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListDocumentStatusesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDocumentStatusesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDocumentStatusesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDocumentStatusesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRecorduuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDocumentstatus();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListDocumentStatusesRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListDocumentStatusesRequest} returns this
*/
proto.data.ListDocumentStatusesRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListDocumentStatusesRequest} returns this
 */
proto.data.ListDocumentStatusesRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListDocumentStatusesRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.ListDocumentStatusesRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentStatusesRequest} returns this
 */
proto.data.ListDocumentStatusesRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 recordId = 3;
 * @return {number}
 */
proto.data.ListDocumentStatusesRequest.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDocumentStatusesRequest} returns this
 */
proto.data.ListDocumentStatusesRequest.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string recordUuid = 4;
 * @return {string}
 */
proto.data.ListDocumentStatusesRequest.prototype.getRecorduuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentStatusesRequest} returns this
 */
proto.data.ListDocumentStatusesRequest.prototype.setRecorduuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string documentStatus = 5;
 * @return {string}
 */
proto.data.ListDocumentStatusesRequest.prototype.getDocumentstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentStatusesRequest} returns this
 */
proto.data.ListDocumentStatusesRequest.prototype.setDocumentstatus = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 page_size = 6;
 * @return {number}
 */
proto.data.ListDocumentStatusesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDocumentStatusesRequest} returns this
 */
proto.data.ListDocumentStatusesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string page_token = 7;
 * @return {string}
 */
proto.data.ListDocumentStatusesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentStatusesRequest} returns this
 */
proto.data.ListDocumentStatusesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListDocumentStatusesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListDocumentStatusesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDocumentStatusesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDocumentStatusesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDocumentStatusesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    documentstatusesList: jspb.Message.toObjectList(msg.getDocumentstatusesList(),
    proto_base_data_type_pb.DocumentStatus.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListDocumentStatusesResponse}
 */
proto.data.ListDocumentStatusesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDocumentStatusesResponse;
  return proto.data.ListDocumentStatusesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDocumentStatusesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDocumentStatusesResponse}
 */
proto.data.ListDocumentStatusesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.DocumentStatus;
      reader.readMessage(value,proto_base_data_type_pb.DocumentStatus.deserializeBinaryFromReader);
      msg.addDocumentstatuses(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListDocumentStatusesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDocumentStatusesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDocumentStatusesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDocumentStatusesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDocumentstatusesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.DocumentStatus.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListDocumentStatusesResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDocumentStatusesResponse} returns this
 */
proto.data.ListDocumentStatusesResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DocumentStatus documentStatuses = 2;
 * @return {!Array<!proto.data.DocumentStatus>}
 */
proto.data.ListDocumentStatusesResponse.prototype.getDocumentstatusesList = function() {
  return /** @type{!Array<!proto.data.DocumentStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.DocumentStatus, 2));
};


/**
 * @param {!Array<!proto.data.DocumentStatus>} value
 * @return {!proto.data.ListDocumentStatusesResponse} returns this
*/
proto.data.ListDocumentStatusesResponse.prototype.setDocumentstatusesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.DocumentStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.DocumentStatus}
 */
proto.data.ListDocumentStatusesResponse.prototype.addDocumentstatuses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.DocumentStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListDocumentStatusesResponse} returns this
 */
proto.data.ListDocumentStatusesResponse.prototype.clearDocumentstatusesList = function() {
  return this.setDocumentstatusesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListDocumentStatusesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentStatusesResponse} returns this
 */
proto.data.ListDocumentStatusesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListWorkflowLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListWorkflowLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListWorkflowLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListWorkflowLogsRequest}
 */
proto.data.ListWorkflowLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListWorkflowLogsRequest;
  return proto.data.ListWorkflowLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListWorkflowLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListWorkflowLogsRequest}
 */
proto.data.ListWorkflowLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListWorkflowLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListWorkflowLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListWorkflowLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListWorkflowLogsRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListWorkflowLogsRequest} returns this
*/
proto.data.ListWorkflowLogsRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListWorkflowLogsRequest} returns this
 */
proto.data.ListWorkflowLogsRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListWorkflowLogsRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.ListWorkflowLogsRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListWorkflowLogsRequest} returns this
 */
proto.data.ListWorkflowLogsRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 recordId = 3;
 * @return {number}
 */
proto.data.ListWorkflowLogsRequest.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListWorkflowLogsRequest} returns this
 */
proto.data.ListWorkflowLogsRequest.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListWorkflowLogsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListWorkflowLogsRequest} returns this
 */
proto.data.ListWorkflowLogsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListWorkflowLogsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListWorkflowLogsRequest} returns this
 */
proto.data.ListWorkflowLogsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.WorkflowProcess.repeatedFields_ = [14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.WorkflowProcess.prototype.toObject = function(opt_includeInstance) {
  return proto.data.WorkflowProcess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.WorkflowProcess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowProcess.toObject = function(includeInstance, msg) {
  var f, obj = {
    processuuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workflowuuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workflowname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    tablename: jspb.Message.getFieldWithDefault(msg, 5, ""),
    useruuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    username: jspb.Message.getFieldWithDefault(msg, 7, ""),
    responsibleuuid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    responsiblename: jspb.Message.getFieldWithDefault(msg, 9, ""),
    textmessage: jspb.Message.getFieldWithDefault(msg, 10, ""),
    processed: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    workflowstate: jspb.Message.getFieldWithDefault(msg, 12, 0),
    priority: jspb.Message.getFieldWithDefault(msg, 13, 0),
    workfloweventsList: jspb.Message.toObjectList(msg.getWorkfloweventsList(),
    proto.data.WorkflowEvent.toObject, includeInstance),
    logdate: jspb.Message.getFieldWithDefault(msg, 15, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.WorkflowProcess}
 */
proto.data.WorkflowProcess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.WorkflowProcess;
  return proto.data.WorkflowProcess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.WorkflowProcess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.WorkflowProcess}
 */
proto.data.WorkflowProcess.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessuuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflowuuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflowname(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseruuid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsibleuuid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsiblename(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextmessage(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProcessed(value);
      break;
    case 12:
      var value = /** @type {!proto.data.WorkflowProcess.WorkflowState} */ (reader.readEnum());
      msg.setWorkflowstate(value);
      break;
    case 13:
      var value = /** @type {!proto.data.WorkflowProcess.Priority} */ (reader.readEnum());
      msg.setPriority(value);
      break;
    case 14:
      var value = new proto.data.WorkflowEvent;
      reader.readMessage(value,proto.data.WorkflowEvent.deserializeBinaryFromReader);
      msg.addWorkflowevents(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLogdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.WorkflowProcess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.WorkflowProcess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.WorkflowProcess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowProcess.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessuuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkflowuuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkflowname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUseruuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getResponsibleuuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getResponsiblename();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTextmessage();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getProcessed();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getWorkflowstate();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getWorkfloweventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.data.WorkflowEvent.serializeBinaryToWriter
    );
  }
  f = message.getLogdate();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.WorkflowProcess.WorkflowState = {
  RUNNING: 0,
  COMPLETED: 1,
  ABORTED: 2,
  TERMINATED: 3,
  SUSPENDED: 4,
  NOT_STARTED: 5
};

/**
 * @enum {number}
 */
proto.data.WorkflowProcess.Priority = {
  URGENT: 0,
  HIGH: 1,
  MEDIUM: 2,
  LOW: 3,
  MINOR: 4
};

/**
 * optional string processUuid = 1;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getProcessuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setProcessuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workflowUuid = 2;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getWorkflowuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setWorkflowuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string workflowName = 3;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getWorkflowname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setWorkflowname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 recordId = 4;
 * @return {number}
 */
proto.data.WorkflowProcess.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string tableName = 5;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string userUuid = 6;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getUseruuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setUseruuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string userName = 7;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string responsibleUuid = 8;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getResponsibleuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setResponsibleuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string responsibleName = 9;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getResponsiblename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setResponsiblename = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string textMessage = 10;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getTextmessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setTextmessage = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional bool processed = 11;
 * @return {boolean}
 */
proto.data.WorkflowProcess.prototype.getProcessed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setProcessed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional WorkflowState workflowState = 12;
 * @return {!proto.data.WorkflowProcess.WorkflowState}
 */
proto.data.WorkflowProcess.prototype.getWorkflowstate = function() {
  return /** @type {!proto.data.WorkflowProcess.WorkflowState} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.data.WorkflowProcess.WorkflowState} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setWorkflowstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional Priority priority = 13;
 * @return {!proto.data.WorkflowProcess.Priority}
 */
proto.data.WorkflowProcess.prototype.getPriority = function() {
  return /** @type {!proto.data.WorkflowProcess.Priority} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.data.WorkflowProcess.Priority} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setPriority = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * repeated WorkflowEvent workflowEvents = 14;
 * @return {!Array<!proto.data.WorkflowEvent>}
 */
proto.data.WorkflowProcess.prototype.getWorkfloweventsList = function() {
  return /** @type{!Array<!proto.data.WorkflowEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.WorkflowEvent, 14));
};


/**
 * @param {!Array<!proto.data.WorkflowEvent>} value
 * @return {!proto.data.WorkflowProcess} returns this
*/
proto.data.WorkflowProcess.prototype.setWorkfloweventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.data.WorkflowEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.WorkflowEvent}
 */
proto.data.WorkflowProcess.prototype.addWorkflowevents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.data.WorkflowEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.clearWorkfloweventsList = function() {
  return this.setWorkfloweventsList([]);
};


/**
 * optional int64 logDate = 15;
 * @return {number}
 */
proto.data.WorkflowProcess.prototype.getLogdate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setLogdate = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.WorkflowEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.data.WorkflowEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.WorkflowEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeuuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nodename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tablename: jspb.Message.getFieldWithDefault(msg, 4, ""),
    useruuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    username: jspb.Message.getFieldWithDefault(msg, 6, ""),
    responsibleuuid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    responsiblename: jspb.Message.getFieldWithDefault(msg, 8, ""),
    textmessage: jspb.Message.getFieldWithDefault(msg, 9, ""),
    timeelapsed: jspb.Message.getFieldWithDefault(msg, 10, 0),
    attributename: jspb.Message.getFieldWithDefault(msg, 11, ""),
    oldvalue: jspb.Message.getFieldWithDefault(msg, 12, ""),
    newvalue: jspb.Message.getFieldWithDefault(msg, 13, ""),
    workflowstate: jspb.Message.getFieldWithDefault(msg, 14, 0),
    eventtype: jspb.Message.getFieldWithDefault(msg, 15, 0),
    logdate: jspb.Message.getFieldWithDefault(msg, 16, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.WorkflowEvent}
 */
proto.data.WorkflowEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.WorkflowEvent;
  return proto.data.WorkflowEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.WorkflowEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.WorkflowEvent}
 */
proto.data.WorkflowEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeuuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseruuid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsibleuuid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsiblename(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextmessage(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeelapsed(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttributename(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldvalue(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewvalue(value);
      break;
    case 14:
      var value = /** @type {!proto.data.WorkflowEvent.WorkflowState} */ (reader.readEnum());
      msg.setWorkflowstate(value);
      break;
    case 15:
      var value = /** @type {!proto.data.WorkflowEvent.EventType} */ (reader.readEnum());
      msg.setEventtype(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLogdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.WorkflowEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.WorkflowEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.WorkflowEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeuuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNodename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUseruuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getResponsibleuuid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getResponsiblename();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTextmessage();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTimeelapsed();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getAttributename();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getOldvalue();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getNewvalue();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getWorkflowstate();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getEventtype();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getLogdate();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.WorkflowEvent.WorkflowState = {
  RUNNING: 0,
  COMPLETED: 1,
  ABORTED: 2,
  TERMINATED: 3,
  SUSPENDED: 4,
  NOT_STARTED: 5
};

/**
 * @enum {number}
 */
proto.data.WorkflowEvent.EventType = {
  PROCESS_CREATED: 0,
  PROCESS_COMPLETED: 1,
  STATE_CHANGED: 2
};

/**
 * optional string nodeUuid = 1;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getNodeuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setNodeuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string nodeName = 2;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getNodename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setNodename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 recordId = 3;
 * @return {number}
 */
proto.data.WorkflowEvent.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string tableName = 4;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string userUuid = 5;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getUseruuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setUseruuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string userName = 6;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string responsibleUuid = 7;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getResponsibleuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setResponsibleuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string responsibleName = 8;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getResponsiblename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setResponsiblename = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string textMessage = 9;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getTextmessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setTextmessage = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 timeElapsed = 10;
 * @return {number}
 */
proto.data.WorkflowEvent.prototype.getTimeelapsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setTimeelapsed = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string attributeName = 11;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getAttributename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setAttributename = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string oldValue = 12;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getOldvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setOldvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string newValue = 13;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getNewvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setNewvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional WorkflowState workflowState = 14;
 * @return {!proto.data.WorkflowEvent.WorkflowState}
 */
proto.data.WorkflowEvent.prototype.getWorkflowstate = function() {
  return /** @type {!proto.data.WorkflowEvent.WorkflowState} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.data.WorkflowEvent.WorkflowState} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setWorkflowstate = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * optional EventType eventType = 15;
 * @return {!proto.data.WorkflowEvent.EventType}
 */
proto.data.WorkflowEvent.prototype.getEventtype = function() {
  return /** @type {!proto.data.WorkflowEvent.EventType} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.data.WorkflowEvent.EventType} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setEventtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional int64 logDate = 16;
 * @return {number}
 */
proto.data.WorkflowEvent.prototype.getLogdate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setLogdate = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListWorkflowLogsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListWorkflowLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListWorkflowLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListWorkflowLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    workflowlogsList: jspb.Message.toObjectList(msg.getWorkflowlogsList(),
    proto.data.WorkflowProcess.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListWorkflowLogsResponse}
 */
proto.data.ListWorkflowLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListWorkflowLogsResponse;
  return proto.data.ListWorkflowLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListWorkflowLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListWorkflowLogsResponse}
 */
proto.data.ListWorkflowLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto.data.WorkflowProcess;
      reader.readMessage(value,proto.data.WorkflowProcess.deserializeBinaryFromReader);
      msg.addWorkflowlogs(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListWorkflowLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListWorkflowLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListWorkflowLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getWorkflowlogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.WorkflowProcess.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListWorkflowLogsResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListWorkflowLogsResponse} returns this
 */
proto.data.ListWorkflowLogsResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated WorkflowProcess workflowLogs = 2;
 * @return {!Array<!proto.data.WorkflowProcess>}
 */
proto.data.ListWorkflowLogsResponse.prototype.getWorkflowlogsList = function() {
  return /** @type{!Array<!proto.data.WorkflowProcess>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.WorkflowProcess, 2));
};


/**
 * @param {!Array<!proto.data.WorkflowProcess>} value
 * @return {!proto.data.ListWorkflowLogsResponse} returns this
*/
proto.data.ListWorkflowLogsResponse.prototype.setWorkflowlogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.WorkflowProcess=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.WorkflowProcess}
 */
proto.data.ListWorkflowLogsResponse.prototype.addWorkflowlogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.WorkflowProcess, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListWorkflowLogsResponse} returns this
 */
proto.data.ListWorkflowLogsResponse.prototype.clearWorkflowlogsList = function() {
  return this.setWorkflowlogsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListWorkflowLogsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListWorkflowLogsResponse} returns this
 */
proto.data.ListWorkflowLogsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListReportViewsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListReportViewsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListReportViewsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReportViewsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    processuuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListReportViewsRequest}
 */
proto.data.ListReportViewsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListReportViewsRequest;
  return proto.data.ListReportViewsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListReportViewsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListReportViewsRequest}
 */
proto.data.ListReportViewsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessuuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListReportViewsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListReportViewsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListReportViewsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReportViewsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProcessuuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListReportViewsRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListReportViewsRequest} returns this
*/
proto.data.ListReportViewsRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListReportViewsRequest} returns this
 */
proto.data.ListReportViewsRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListReportViewsRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.ListReportViewsRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReportViewsRequest} returns this
 */
proto.data.ListReportViewsRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string processUuid = 3;
 * @return {string}
 */
proto.data.ListReportViewsRequest.prototype.getProcessuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReportViewsRequest} returns this
 */
proto.data.ListReportViewsRequest.prototype.setProcessuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListReportViewsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListReportViewsRequest} returns this
 */
proto.data.ListReportViewsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListReportViewsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReportViewsRequest} returns this
 */
proto.data.ListReportViewsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListReportViewsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListReportViewsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListReportViewsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListReportViewsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReportViewsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reportviewsList: jspb.Message.toObjectList(msg.getReportviewsList(),
    proto_base_data_type_pb.ReportView.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListReportViewsResponse}
 */
proto.data.ListReportViewsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListReportViewsResponse;
  return proto.data.ListReportViewsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListReportViewsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListReportViewsResponse}
 */
proto.data.ListReportViewsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.ReportView;
      reader.readMessage(value,proto_base_data_type_pb.ReportView.deserializeBinaryFromReader);
      msg.addReportviews(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListReportViewsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListReportViewsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListReportViewsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReportViewsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getReportviewsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.ReportView.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListReportViewsResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListReportViewsResponse} returns this
 */
proto.data.ListReportViewsResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ReportView reportViews = 2;
 * @return {!Array<!proto.data.ReportView>}
 */
proto.data.ListReportViewsResponse.prototype.getReportviewsList = function() {
  return /** @type{!Array<!proto.data.ReportView>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.ReportView, 2));
};


/**
 * @param {!Array<!proto.data.ReportView>} value
 * @return {!proto.data.ListReportViewsResponse} returns this
*/
proto.data.ListReportViewsResponse.prototype.setReportviewsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.ReportView=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.ReportView}
 */
proto.data.ListReportViewsResponse.prototype.addReportviews = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.ReportView, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListReportViewsResponse} returns this
 */
proto.data.ListReportViewsResponse.prototype.clearReportviewsList = function() {
  return this.setReportviewsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListReportViewsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReportViewsResponse} returns this
 */
proto.data.ListReportViewsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListDrillTablesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDrillTablesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDrillTablesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDrillTablesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListDrillTablesRequest}
 */
proto.data.ListDrillTablesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDrillTablesRequest;
  return proto.data.ListDrillTablesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDrillTablesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDrillTablesRequest}
 */
proto.data.ListDrillTablesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListDrillTablesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDrillTablesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDrillTablesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDrillTablesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest clientRequest = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListDrillTablesRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListDrillTablesRequest} returns this
*/
proto.data.ListDrillTablesRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListDrillTablesRequest} returns this
 */
proto.data.ListDrillTablesRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListDrillTablesRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.ListDrillTablesRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDrillTablesRequest} returns this
 */
proto.data.ListDrillTablesRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.data.ListDrillTablesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDrillTablesRequest} returns this
 */
proto.data.ListDrillTablesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.data.ListDrillTablesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDrillTablesRequest} returns this
 */
proto.data.ListDrillTablesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListDrillTablesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListDrillTablesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDrillTablesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDrillTablesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDrillTablesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    drilltablesList: jspb.Message.toObjectList(msg.getDrilltablesList(),
    proto_base_data_type_pb.DrillTable.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListDrillTablesResponse}
 */
proto.data.ListDrillTablesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDrillTablesResponse;
  return proto.data.ListDrillTablesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDrillTablesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDrillTablesResponse}
 */
proto.data.ListDrillTablesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.DrillTable;
      reader.readMessage(value,proto_base_data_type_pb.DrillTable.deserializeBinaryFromReader);
      msg.addDrilltables(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListDrillTablesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDrillTablesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDrillTablesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDrillTablesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDrilltablesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.DrillTable.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListDrillTablesResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDrillTablesResponse} returns this
 */
proto.data.ListDrillTablesResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DrillTable drillTables = 2;
 * @return {!Array<!proto.data.DrillTable>}
 */
proto.data.ListDrillTablesResponse.prototype.getDrilltablesList = function() {
  return /** @type{!Array<!proto.data.DrillTable>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.DrillTable, 2));
};


/**
 * @param {!Array<!proto.data.DrillTable>} value
 * @return {!proto.data.ListDrillTablesResponse} returns this
*/
proto.data.ListDrillTablesResponse.prototype.setDrilltablesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.DrillTable=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.DrillTable}
 */
proto.data.ListDrillTablesResponse.prototype.addDrilltables = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.DrillTable, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListDrillTablesResponse} returns this
 */
proto.data.ListDrillTablesResponse.prototype.clearDrilltablesList = function() {
  return this.setDrilltablesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListDrillTablesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDrillTablesResponse} returns this
 */
proto.data.ListDrillTablesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListBrowserItemsRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListBrowserItemsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListBrowserItemsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListBrowserItemsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListBrowserItemsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f),
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance),
    pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListBrowserItemsRequest}
 */
proto.data.ListBrowserItemsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListBrowserItemsRequest;
  return proto.data.ListBrowserItemsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListBrowserItemsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListBrowserItemsRequest}
 */
proto.data.ListBrowserItemsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 3:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
      break;
    case 4:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addParameters(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListBrowserItemsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListBrowserItemsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListBrowserItemsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListBrowserItemsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.ListBrowserItemsRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ClientRequest clientRequest = 2;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListBrowserItemsRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 2));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
*/
proto.data.ListBrowserItemsRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListBrowserItemsRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Criteria criteria = 3;
 * @return {?proto.data.Criteria}
 */
proto.data.ListBrowserItemsRequest.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 3));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
*/
proto.data.ListBrowserItemsRequest.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListBrowserItemsRequest.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated KeyValue parameters = 4;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.ListBrowserItemsRequest.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 4));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
*/
proto.data.ListBrowserItemsRequest.prototype.setParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.ListBrowserItemsRequest.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.clearParametersList = function() {
  return this.setParametersList([]);
};


/**
 * optional int32 page_size = 5;
 * @return {number}
 */
proto.data.ListBrowserItemsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.data.ListBrowserItemsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListReferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListReferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListReferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tablename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recordid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    windowuuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientrequest: (f = msg.getClientrequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListReferencesRequest}
 */
proto.data.ListReferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListReferencesRequest;
  return proto.data.ListReferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListReferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListReferencesRequest}
 */
proto.data.ListReferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWindowuuid(value);
      break;
    case 5:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientrequest(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListReferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListReferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListReferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getWindowuuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientrequest();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.ListReferencesRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tableName = 2;
 * @return {string}
 */
proto.data.ListReferencesRequest.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 recordId = 3;
 * @return {number}
 */
proto.data.ListReferencesRequest.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string windowUuid = 4;
 * @return {string}
 */
proto.data.ListReferencesRequest.prototype.getWindowuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setWindowuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional ClientRequest clientRequest = 5;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListReferencesRequest.prototype.getClientrequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 5));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListReferencesRequest} returns this
*/
proto.data.ListReferencesRequest.prototype.setClientrequest = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.clearClientrequest = function() {
  return this.setClientrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListReferencesRequest.prototype.hasClientrequest = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 page_size = 6;
 * @return {number}
 */
proto.data.ListReferencesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string page_token = 7;
 * @return {string}
 */
proto.data.ListReferencesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListReferencesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListReferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListReferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListReferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    referencesList: jspb.Message.toObjectList(msg.getReferencesList(),
    proto_base_data_type_pb.RecordReferenceInfo.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListReferencesResponse}
 */
proto.data.ListReferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListReferencesResponse;
  return proto.data.ListReferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListReferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListReferencesResponse}
 */
proto.data.ListReferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordcount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.RecordReferenceInfo;
      reader.readMessage(value,proto_base_data_type_pb.RecordReferenceInfo.deserializeBinaryFromReader);
      msg.addReferences(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListReferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListReferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListReferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getReferencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.RecordReferenceInfo.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 recordCount = 1;
 * @return {number}
 */
proto.data.ListReferencesResponse.prototype.getRecordcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListReferencesResponse} returns this
 */
proto.data.ListReferencesResponse.prototype.setRecordcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated RecordReferenceInfo references = 2;
 * @return {!Array<!proto.data.RecordReferenceInfo>}
 */
proto.data.ListReferencesResponse.prototype.getReferencesList = function() {
  return /** @type{!Array<!proto.data.RecordReferenceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.RecordReferenceInfo, 2));
};


/**
 * @param {!Array<!proto.data.RecordReferenceInfo>} value
 * @return {!proto.data.ListReferencesResponse} returns this
*/
proto.data.ListReferencesResponse.prototype.setReferencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.RecordReferenceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.RecordReferenceInfo}
 */
proto.data.ListReferencesResponse.prototype.addReferences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.RecordReferenceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListReferencesResponse} returns this
 */
proto.data.ListReferencesResponse.prototype.clearReferencesList = function() {
  return this.setReferencesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListReferencesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReferencesResponse} returns this
 */
proto.data.ListReferencesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.data);
