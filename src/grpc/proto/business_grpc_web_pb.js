/**
 * @fileoverview gRPC-Web generated client stub for data
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var proto_core_functionality_pb = require('@adempiere/grpc-core-client/src/grpc/proto/core_functionality_pb.js');

var proto_base_data_type_pb = require('@adempiere/grpc-core-client/src/grpc/proto/base_data_type_pb.js');
const proto = {};
proto.data = require('./business_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.data.BusinessDataClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.data.BusinessDataPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.GetEntityRequest,
 *   !proto.data.Entity>}
 */
const methodDescriptor_BusinessData_GetEntity = new grpc.web.MethodDescriptor(
  '/data.BusinessData/GetEntity',
  grpc.web.MethodType.UNARY,
  proto.data.GetEntityRequest,
  proto_base_data_type_pb.Entity,
  /**
   * @param {!proto.data.GetEntityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.Entity.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.GetEntityRequest,
 *   !proto.data.Entity>}
 */
const methodInfo_BusinessData_GetEntity = new grpc.web.AbstractClientBase.MethodInfo(
  proto_base_data_type_pb.Entity,
  /**
   * @param {!proto.data.GetEntityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.Entity.deserializeBinary
);


/**
 * @param {!proto.data.GetEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Entity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Entity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataClient.prototype.getEntity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessData/GetEntity',
      request,
      metadata || {},
      methodDescriptor_BusinessData_GetEntity,
      callback);
};


/**
 * @param {!proto.data.GetEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Entity>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataPromiseClient.prototype.getEntity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessData/GetEntity',
      request,
      metadata || {},
      methodDescriptor_BusinessData_GetEntity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.CreateEntityRequest,
 *   !proto.data.Entity>}
 */
const methodDescriptor_BusinessData_CreateEntity = new grpc.web.MethodDescriptor(
  '/data.BusinessData/CreateEntity',
  grpc.web.MethodType.UNARY,
  proto.data.CreateEntityRequest,
  proto_base_data_type_pb.Entity,
  /**
   * @param {!proto.data.CreateEntityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.Entity.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.CreateEntityRequest,
 *   !proto.data.Entity>}
 */
const methodInfo_BusinessData_CreateEntity = new grpc.web.AbstractClientBase.MethodInfo(
  proto_base_data_type_pb.Entity,
  /**
   * @param {!proto.data.CreateEntityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.Entity.deserializeBinary
);


/**
 * @param {!proto.data.CreateEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Entity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Entity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataClient.prototype.createEntity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessData/CreateEntity',
      request,
      metadata || {},
      methodDescriptor_BusinessData_CreateEntity,
      callback);
};


/**
 * @param {!proto.data.CreateEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Entity>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataPromiseClient.prototype.createEntity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessData/CreateEntity',
      request,
      metadata || {},
      methodDescriptor_BusinessData_CreateEntity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.UpdateEntityRequest,
 *   !proto.data.Entity>}
 */
const methodDescriptor_BusinessData_UpdateEntity = new grpc.web.MethodDescriptor(
  '/data.BusinessData/UpdateEntity',
  grpc.web.MethodType.UNARY,
  proto.data.UpdateEntityRequest,
  proto_base_data_type_pb.Entity,
  /**
   * @param {!proto.data.UpdateEntityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.Entity.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.UpdateEntityRequest,
 *   !proto.data.Entity>}
 */
const methodInfo_BusinessData_UpdateEntity = new grpc.web.AbstractClientBase.MethodInfo(
  proto_base_data_type_pb.Entity,
  /**
   * @param {!proto.data.UpdateEntityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.Entity.deserializeBinary
);


/**
 * @param {!proto.data.UpdateEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Entity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Entity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataClient.prototype.updateEntity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessData/UpdateEntity',
      request,
      metadata || {},
      methodDescriptor_BusinessData_UpdateEntity,
      callback);
};


/**
 * @param {!proto.data.UpdateEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Entity>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataPromiseClient.prototype.updateEntity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessData/UpdateEntity',
      request,
      metadata || {},
      methodDescriptor_BusinessData_UpdateEntity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.DeleteEntityRequest,
 *   !proto.data.Empty>}
 */
const methodDescriptor_BusinessData_DeleteEntity = new grpc.web.MethodDescriptor(
  '/data.BusinessData/DeleteEntity',
  grpc.web.MethodType.UNARY,
  proto.data.DeleteEntityRequest,
  proto_base_data_type_pb.Empty,
  /**
   * @param {!proto.data.DeleteEntityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.DeleteEntityRequest,
 *   !proto.data.Empty>}
 */
const methodInfo_BusinessData_DeleteEntity = new grpc.web.AbstractClientBase.MethodInfo(
  proto_base_data_type_pb.Empty,
  /**
   * @param {!proto.data.DeleteEntityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.data.DeleteEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataClient.prototype.deleteEntity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessData/DeleteEntity',
      request,
      metadata || {},
      methodDescriptor_BusinessData_DeleteEntity,
      callback);
};


/**
 * @param {!proto.data.DeleteEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Empty>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataPromiseClient.prototype.deleteEntity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessData/DeleteEntity',
      request,
      metadata || {},
      methodDescriptor_BusinessData_DeleteEntity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListEntitiesRequest,
 *   !proto.data.ListEntitiesResponse>}
 */
const methodDescriptor_BusinessData_ListEntities = new grpc.web.MethodDescriptor(
  '/data.BusinessData/ListEntities',
  grpc.web.MethodType.UNARY,
  proto.data.ListEntitiesRequest,
  proto.data.ListEntitiesResponse,
  /**
   * @param {!proto.data.ListEntitiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListEntitiesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListEntitiesRequest,
 *   !proto.data.ListEntitiesResponse>}
 */
const methodInfo_BusinessData_ListEntities = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListEntitiesResponse,
  /**
   * @param {!proto.data.ListEntitiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListEntitiesResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListEntitiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListEntitiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataClient.prototype.listEntities =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessData/ListEntities',
      request,
      metadata || {},
      methodDescriptor_BusinessData_ListEntities,
      callback);
};


/**
 * @param {!proto.data.ListEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListEntitiesResponse>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataPromiseClient.prototype.listEntities =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessData/ListEntities',
      request,
      metadata || {},
      methodDescriptor_BusinessData_ListEntities);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.RunBusinessProcessRequest,
 *   !proto.data.ProcessLog>}
 */
const methodDescriptor_BusinessData_RunBusinessProcess = new grpc.web.MethodDescriptor(
  '/data.BusinessData/RunBusinessProcess',
  grpc.web.MethodType.UNARY,
  proto.data.RunBusinessProcessRequest,
  proto_base_data_type_pb.ProcessLog,
  /**
   * @param {!proto.data.RunBusinessProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.ProcessLog.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.RunBusinessProcessRequest,
 *   !proto.data.ProcessLog>}
 */
const methodInfo_BusinessData_RunBusinessProcess = new grpc.web.AbstractClientBase.MethodInfo(
  proto_base_data_type_pb.ProcessLog,
  /**
   * @param {!proto.data.RunBusinessProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.ProcessLog.deserializeBinary
);


/**
 * @param {!proto.data.RunBusinessProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ProcessLog)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ProcessLog>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataClient.prototype.runBusinessProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.BusinessData/RunBusinessProcess',
      request,
      metadata || {},
      methodDescriptor_BusinessData_RunBusinessProcess,
      callback);
};


/**
 * @param {!proto.data.RunBusinessProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ProcessLog>}
 *     A native promise that resolves to the response
 */
proto.data.BusinessDataPromiseClient.prototype.runBusinessProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.BusinessData/RunBusinessProcess',
      request,
      metadata || {},
      methodDescriptor_BusinessData_RunBusinessProcess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.DownloadResourceRequest,
 *   !proto.data.ResourceChunk>}
 */
const methodDescriptor_BusinessData_DownloadResource = new grpc.web.MethodDescriptor(
  '/data.BusinessData/DownloadResource',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.data.DownloadResourceRequest,
  proto.data.ResourceChunk,
  /**
   * @param {!proto.data.DownloadResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ResourceChunk.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.DownloadResourceRequest,
 *   !proto.data.ResourceChunk>}
 */
const methodInfo_BusinessData_DownloadResource = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ResourceChunk,
  /**
   * @param {!proto.data.DownloadResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ResourceChunk.deserializeBinary
);


/**
 * @param {!proto.data.DownloadResourceRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.data.ResourceChunk>}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataClient.prototype.downloadResource =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/data.BusinessData/DownloadResource',
      request,
      metadata || {},
      methodDescriptor_BusinessData_DownloadResource);
};


/**
 * @param {!proto.data.DownloadResourceRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.data.ResourceChunk>}
 *     The XHR Node Readable Stream
 */
proto.data.BusinessDataPromiseClient.prototype.downloadResource =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/data.BusinessData/DownloadResource',
      request,
      metadata || {},
      methodDescriptor_BusinessData_DownloadResource);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.data.UserInterfaceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.data.UserInterfacePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.RollbackEntityRequest,
 *   !proto.data.Entity>}
 */
const methodDescriptor_UserInterface_RollbackEntity = new grpc.web.MethodDescriptor(
  '/data.UserInterface/RollbackEntity',
  grpc.web.MethodType.UNARY,
  proto.data.RollbackEntityRequest,
  proto_base_data_type_pb.Entity,
  /**
   * @param {!proto.data.RollbackEntityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.Entity.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.RollbackEntityRequest,
 *   !proto.data.Entity>}
 */
const methodInfo_UserInterface_RollbackEntity = new grpc.web.AbstractClientBase.MethodInfo(
  proto_base_data_type_pb.Entity,
  /**
   * @param {!proto.data.RollbackEntityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.Entity.deserializeBinary
);


/**
 * @param {!proto.data.RollbackEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Entity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Entity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.UserInterfaceClient.prototype.rollbackEntity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.UserInterface/RollbackEntity',
      request,
      metadata || {},
      methodDescriptor_UserInterface_RollbackEntity,
      callback);
};


/**
 * @param {!proto.data.RollbackEntityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Entity>}
 *     A native promise that resolves to the response
 */
proto.data.UserInterfacePromiseClient.prototype.rollbackEntity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.UserInterface/RollbackEntity',
      request,
      metadata || {},
      methodDescriptor_UserInterface_RollbackEntity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.RunCalloutRequest,
 *   !proto.data.Callout>}
 */
const methodDescriptor_UserInterface_RunCallout = new grpc.web.MethodDescriptor(
  '/data.UserInterface/RunCallout',
  grpc.web.MethodType.UNARY,
  proto.data.RunCalloutRequest,
  proto.data.Callout,
  /**
   * @param {!proto.data.RunCalloutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.Callout.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.RunCalloutRequest,
 *   !proto.data.Callout>}
 */
const methodInfo_UserInterface_RunCallout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.Callout,
  /**
   * @param {!proto.data.RunCalloutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.Callout.deserializeBinary
);


/**
 * @param {!proto.data.RunCalloutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Callout)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Callout>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.UserInterfaceClient.prototype.runCallout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.UserInterface/RunCallout',
      request,
      metadata || {},
      methodDescriptor_UserInterface_RunCallout,
      callback);
};


/**
 * @param {!proto.data.RunCalloutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Callout>}
 *     A native promise that resolves to the response
 */
proto.data.UserInterfacePromiseClient.prototype.runCallout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.UserInterface/RunCallout',
      request,
      metadata || {},
      methodDescriptor_UserInterface_RunCallout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListTranslationsRequest,
 *   !proto.data.ListTranslationsResponse>}
 */
const methodDescriptor_UserInterface_ListTranslations = new grpc.web.MethodDescriptor(
  '/data.UserInterface/ListTranslations',
  grpc.web.MethodType.UNARY,
  proto.data.ListTranslationsRequest,
  proto.data.ListTranslationsResponse,
  /**
   * @param {!proto.data.ListTranslationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListTranslationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListTranslationsRequest,
 *   !proto.data.ListTranslationsResponse>}
 */
const methodInfo_UserInterface_ListTranslations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListTranslationsResponse,
  /**
   * @param {!proto.data.ListTranslationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListTranslationsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListTranslationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListTranslationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListTranslationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.UserInterfaceClient.prototype.listTranslations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.UserInterface/ListTranslations',
      request,
      metadata || {},
      methodDescriptor_UserInterface_ListTranslations,
      callback);
};


/**
 * @param {!proto.data.ListTranslationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListTranslationsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.UserInterfacePromiseClient.prototype.listTranslations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.UserInterface/ListTranslations',
      request,
      metadata || {},
      methodDescriptor_UserInterface_ListTranslations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.GetDefaultValueRequest,
 *   !proto.data.Value>}
 */
const methodDescriptor_UserInterface_GetDefaultValue = new grpc.web.MethodDescriptor(
  '/data.UserInterface/GetDefaultValue',
  grpc.web.MethodType.UNARY,
  proto.data.GetDefaultValueRequest,
  proto_base_data_type_pb.Value,
  /**
   * @param {!proto.data.GetDefaultValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.Value.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.GetDefaultValueRequest,
 *   !proto.data.Value>}
 */
const methodInfo_UserInterface_GetDefaultValue = new grpc.web.AbstractClientBase.MethodInfo(
  proto_base_data_type_pb.Value,
  /**
   * @param {!proto.data.GetDefaultValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.Value.deserializeBinary
);


/**
 * @param {!proto.data.GetDefaultValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.Value)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.Value>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.UserInterfaceClient.prototype.getDefaultValue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.UserInterface/GetDefaultValue',
      request,
      metadata || {},
      methodDescriptor_UserInterface_GetDefaultValue,
      callback);
};


/**
 * @param {!proto.data.GetDefaultValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.Value>}
 *     A native promise that resolves to the response
 */
proto.data.UserInterfacePromiseClient.prototype.getDefaultValue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.UserInterface/GetDefaultValue',
      request,
      metadata || {},
      methodDescriptor_UserInterface_GetDefaultValue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.GetLookupItemRequest,
 *   !proto.data.LookupItem>}
 */
const methodDescriptor_UserInterface_GetLookupItem = new grpc.web.MethodDescriptor(
  '/data.UserInterface/GetLookupItem',
  grpc.web.MethodType.UNARY,
  proto.data.GetLookupItemRequest,
  proto.data.LookupItem,
  /**
   * @param {!proto.data.GetLookupItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.LookupItem.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.GetLookupItemRequest,
 *   !proto.data.LookupItem>}
 */
const methodInfo_UserInterface_GetLookupItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.LookupItem,
  /**
   * @param {!proto.data.GetLookupItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.LookupItem.deserializeBinary
);


/**
 * @param {!proto.data.GetLookupItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.LookupItem)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.LookupItem>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.UserInterfaceClient.prototype.getLookupItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.UserInterface/GetLookupItem',
      request,
      metadata || {},
      methodDescriptor_UserInterface_GetLookupItem,
      callback);
};


/**
 * @param {!proto.data.GetLookupItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.LookupItem>}
 *     A native promise that resolves to the response
 */
proto.data.UserInterfacePromiseClient.prototype.getLookupItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.UserInterface/GetLookupItem',
      request,
      metadata || {},
      methodDescriptor_UserInterface_GetLookupItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListLookupItemsRequest,
 *   !proto.data.ListLookupItemsResponse>}
 */
const methodDescriptor_UserInterface_ListLookupItems = new grpc.web.MethodDescriptor(
  '/data.UserInterface/ListLookupItems',
  grpc.web.MethodType.UNARY,
  proto.data.ListLookupItemsRequest,
  proto.data.ListLookupItemsResponse,
  /**
   * @param {!proto.data.ListLookupItemsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListLookupItemsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListLookupItemsRequest,
 *   !proto.data.ListLookupItemsResponse>}
 */
const methodInfo_UserInterface_ListLookupItems = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListLookupItemsResponse,
  /**
   * @param {!proto.data.ListLookupItemsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListLookupItemsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListLookupItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListLookupItemsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListLookupItemsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.UserInterfaceClient.prototype.listLookupItems =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.UserInterface/ListLookupItems',
      request,
      metadata || {},
      methodDescriptor_UserInterface_ListLookupItems,
      callback);
};


/**
 * @param {!proto.data.ListLookupItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListLookupItemsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.UserInterfacePromiseClient.prototype.listLookupItems =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.UserInterface/ListLookupItems',
      request,
      metadata || {},
      methodDescriptor_UserInterface_ListLookupItems);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListBrowserItemsRequest,
 *   !proto.data.ListBrowserItemsResponse>}
 */
const methodDescriptor_UserInterface_ListBrowserItems = new grpc.web.MethodDescriptor(
  '/data.UserInterface/ListBrowserItems',
  grpc.web.MethodType.UNARY,
  proto.data.ListBrowserItemsRequest,
  proto.data.ListBrowserItemsResponse,
  /**
   * @param {!proto.data.ListBrowserItemsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListBrowserItemsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListBrowserItemsRequest,
 *   !proto.data.ListBrowserItemsResponse>}
 */
const methodInfo_UserInterface_ListBrowserItems = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListBrowserItemsResponse,
  /**
   * @param {!proto.data.ListBrowserItemsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListBrowserItemsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListBrowserItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListBrowserItemsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListBrowserItemsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.UserInterfaceClient.prototype.listBrowserItems =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.UserInterface/ListBrowserItems',
      request,
      metadata || {},
      methodDescriptor_UserInterface_ListBrowserItems,
      callback);
};


/**
 * @param {!proto.data.ListBrowserItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListBrowserItemsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.UserInterfacePromiseClient.prototype.listBrowserItems =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.UserInterface/ListBrowserItems',
      request,
      metadata || {},
      methodDescriptor_UserInterface_ListBrowserItems);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListReferencesRequest,
 *   !proto.data.ListReferencesResponse>}
 */
const methodDescriptor_UserInterface_ListReferences = new grpc.web.MethodDescriptor(
  '/data.UserInterface/ListReferences',
  grpc.web.MethodType.UNARY,
  proto.data.ListReferencesRequest,
  proto.data.ListReferencesResponse,
  /**
   * @param {!proto.data.ListReferencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListReferencesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListReferencesRequest,
 *   !proto.data.ListReferencesResponse>}
 */
const methodInfo_UserInterface_ListReferences = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListReferencesResponse,
  /**
   * @param {!proto.data.ListReferencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListReferencesResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListReferencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListReferencesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListReferencesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.UserInterfaceClient.prototype.listReferences =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.UserInterface/ListReferences',
      request,
      metadata || {},
      methodDescriptor_UserInterface_ListReferences,
      callback);
};


/**
 * @param {!proto.data.ListReferencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListReferencesResponse>}
 *     A native promise that resolves to the response
 */
proto.data.UserInterfacePromiseClient.prototype.listReferences =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.UserInterface/ListReferences',
      request,
      metadata || {},
      methodDescriptor_UserInterface_ListReferences);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.GetContextInfoValueRequest,
 *   !proto.data.ContextInfoValue>}
 */
const methodDescriptor_UserInterface_GetContextInfoValue = new grpc.web.MethodDescriptor(
  '/data.UserInterface/GetContextInfoValue',
  grpc.web.MethodType.UNARY,
  proto.data.GetContextInfoValueRequest,
  proto.data.ContextInfoValue,
  /**
   * @param {!proto.data.GetContextInfoValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ContextInfoValue.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.GetContextInfoValueRequest,
 *   !proto.data.ContextInfoValue>}
 */
const methodInfo_UserInterface_GetContextInfoValue = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ContextInfoValue,
  /**
   * @param {!proto.data.GetContextInfoValueRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ContextInfoValue.deserializeBinary
);


/**
 * @param {!proto.data.GetContextInfoValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ContextInfoValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ContextInfoValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.UserInterfaceClient.prototype.getContextInfoValue =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.UserInterface/GetContextInfoValue',
      request,
      metadata || {},
      methodDescriptor_UserInterface_GetContextInfoValue,
      callback);
};


/**
 * @param {!proto.data.GetContextInfoValueRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ContextInfoValue>}
 *     A native promise that resolves to the response
 */
proto.data.UserInterfacePromiseClient.prototype.getContextInfoValue =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.UserInterface/GetContextInfoValue',
      request,
      metadata || {},
      methodDescriptor_UserInterface_GetContextInfoValue);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.GetPrivateAccessRequest,
 *   !proto.data.PrivateAccess>}
 */
const methodDescriptor_UserInterface_GetPrivateAccess = new grpc.web.MethodDescriptor(
  '/data.UserInterface/GetPrivateAccess',
  grpc.web.MethodType.UNARY,
  proto.data.GetPrivateAccessRequest,
  proto.data.PrivateAccess,
  /**
   * @param {!proto.data.GetPrivateAccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.PrivateAccess.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.GetPrivateAccessRequest,
 *   !proto.data.PrivateAccess>}
 */
const methodInfo_UserInterface_GetPrivateAccess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.PrivateAccess,
  /**
   * @param {!proto.data.GetPrivateAccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.PrivateAccess.deserializeBinary
);


/**
 * @param {!proto.data.GetPrivateAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.PrivateAccess)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.PrivateAccess>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.UserInterfaceClient.prototype.getPrivateAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.UserInterface/GetPrivateAccess',
      request,
      metadata || {},
      methodDescriptor_UserInterface_GetPrivateAccess,
      callback);
};


/**
 * @param {!proto.data.GetPrivateAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.PrivateAccess>}
 *     A native promise that resolves to the response
 */
proto.data.UserInterfacePromiseClient.prototype.getPrivateAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.UserInterface/GetPrivateAccess',
      request,
      metadata || {},
      methodDescriptor_UserInterface_GetPrivateAccess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.LockPrivateAccessRequest,
 *   !proto.data.PrivateAccess>}
 */
const methodDescriptor_UserInterface_LockPrivateAccess = new grpc.web.MethodDescriptor(
  '/data.UserInterface/LockPrivateAccess',
  grpc.web.MethodType.UNARY,
  proto.data.LockPrivateAccessRequest,
  proto.data.PrivateAccess,
  /**
   * @param {!proto.data.LockPrivateAccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.PrivateAccess.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.LockPrivateAccessRequest,
 *   !proto.data.PrivateAccess>}
 */
const methodInfo_UserInterface_LockPrivateAccess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.PrivateAccess,
  /**
   * @param {!proto.data.LockPrivateAccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.PrivateAccess.deserializeBinary
);


/**
 * @param {!proto.data.LockPrivateAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.PrivateAccess)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.PrivateAccess>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.UserInterfaceClient.prototype.lockPrivateAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.UserInterface/LockPrivateAccess',
      request,
      metadata || {},
      methodDescriptor_UserInterface_LockPrivateAccess,
      callback);
};


/**
 * @param {!proto.data.LockPrivateAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.PrivateAccess>}
 *     A native promise that resolves to the response
 */
proto.data.UserInterfacePromiseClient.prototype.lockPrivateAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.UserInterface/LockPrivateAccess',
      request,
      metadata || {},
      methodDescriptor_UserInterface_LockPrivateAccess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.UnlockPrivateAccessRequest,
 *   !proto.data.PrivateAccess>}
 */
const methodDescriptor_UserInterface_UnlockPrivateAccess = new grpc.web.MethodDescriptor(
  '/data.UserInterface/UnlockPrivateAccess',
  grpc.web.MethodType.UNARY,
  proto.data.UnlockPrivateAccessRequest,
  proto.data.PrivateAccess,
  /**
   * @param {!proto.data.UnlockPrivateAccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.PrivateAccess.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.UnlockPrivateAccessRequest,
 *   !proto.data.PrivateAccess>}
 */
const methodInfo_UserInterface_UnlockPrivateAccess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.PrivateAccess,
  /**
   * @param {!proto.data.UnlockPrivateAccessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.PrivateAccess.deserializeBinary
);


/**
 * @param {!proto.data.UnlockPrivateAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.PrivateAccess)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.PrivateAccess>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.UserInterfaceClient.prototype.unlockPrivateAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.UserInterface/UnlockPrivateAccess',
      request,
      metadata || {},
      methodDescriptor_UserInterface_UnlockPrivateAccess,
      callback);
};


/**
 * @param {!proto.data.UnlockPrivateAccessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.PrivateAccess>}
 *     A native promise that resolves to the response
 */
proto.data.UserInterfacePromiseClient.prototype.unlockPrivateAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.UserInterface/UnlockPrivateAccess',
      request,
      metadata || {},
      methodDescriptor_UserInterface_UnlockPrivateAccess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListPrintFormatsRequest,
 *   !proto.data.ListPrintFormatsResponse>}
 */
const methodDescriptor_UserInterface_ListPrintFormats = new grpc.web.MethodDescriptor(
  '/data.UserInterface/ListPrintFormats',
  grpc.web.MethodType.UNARY,
  proto.data.ListPrintFormatsRequest,
  proto.data.ListPrintFormatsResponse,
  /**
   * @param {!proto.data.ListPrintFormatsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListPrintFormatsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListPrintFormatsRequest,
 *   !proto.data.ListPrintFormatsResponse>}
 */
const methodInfo_UserInterface_ListPrintFormats = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListPrintFormatsResponse,
  /**
   * @param {!proto.data.ListPrintFormatsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListPrintFormatsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListPrintFormatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListPrintFormatsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListPrintFormatsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.UserInterfaceClient.prototype.listPrintFormats =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.UserInterface/ListPrintFormats',
      request,
      metadata || {},
      methodDescriptor_UserInterface_ListPrintFormats,
      callback);
};


/**
 * @param {!proto.data.ListPrintFormatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListPrintFormatsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.UserInterfacePromiseClient.prototype.listPrintFormats =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.UserInterface/ListPrintFormats',
      request,
      metadata || {},
      methodDescriptor_UserInterface_ListPrintFormats);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListReportViewsRequest,
 *   !proto.data.ListReportViewsResponse>}
 */
const methodDescriptor_UserInterface_ListReportViews = new grpc.web.MethodDescriptor(
  '/data.UserInterface/ListReportViews',
  grpc.web.MethodType.UNARY,
  proto.data.ListReportViewsRequest,
  proto.data.ListReportViewsResponse,
  /**
   * @param {!proto.data.ListReportViewsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListReportViewsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListReportViewsRequest,
 *   !proto.data.ListReportViewsResponse>}
 */
const methodInfo_UserInterface_ListReportViews = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListReportViewsResponse,
  /**
   * @param {!proto.data.ListReportViewsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListReportViewsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListReportViewsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListReportViewsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListReportViewsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.UserInterfaceClient.prototype.listReportViews =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.UserInterface/ListReportViews',
      request,
      metadata || {},
      methodDescriptor_UserInterface_ListReportViews,
      callback);
};


/**
 * @param {!proto.data.ListReportViewsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListReportViewsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.UserInterfacePromiseClient.prototype.listReportViews =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.UserInterface/ListReportViews',
      request,
      metadata || {},
      methodDescriptor_UserInterface_ListReportViews);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListDrillTablesRequest,
 *   !proto.data.ListDrillTablesResponse>}
 */
const methodDescriptor_UserInterface_ListDrillTables = new grpc.web.MethodDescriptor(
  '/data.UserInterface/ListDrillTables',
  grpc.web.MethodType.UNARY,
  proto.data.ListDrillTablesRequest,
  proto.data.ListDrillTablesResponse,
  /**
   * @param {!proto.data.ListDrillTablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListDrillTablesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListDrillTablesRequest,
 *   !proto.data.ListDrillTablesResponse>}
 */
const methodInfo_UserInterface_ListDrillTables = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListDrillTablesResponse,
  /**
   * @param {!proto.data.ListDrillTablesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListDrillTablesResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListDrillTablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListDrillTablesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListDrillTablesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.UserInterfaceClient.prototype.listDrillTables =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.UserInterface/ListDrillTables',
      request,
      metadata || {},
      methodDescriptor_UserInterface_ListDrillTables,
      callback);
};


/**
 * @param {!proto.data.ListDrillTablesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListDrillTablesResponse>}
 *     A native promise that resolves to the response
 */
proto.data.UserInterfacePromiseClient.prototype.listDrillTables =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.UserInterface/ListDrillTables',
      request,
      metadata || {},
      methodDescriptor_UserInterface_ListDrillTables);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.GetReportOutputRequest,
 *   !proto.data.ReportOutput>}
 */
const methodDescriptor_UserInterface_GetReportOutput = new grpc.web.MethodDescriptor(
  '/data.UserInterface/GetReportOutput',
  grpc.web.MethodType.UNARY,
  proto.data.GetReportOutputRequest,
  proto_base_data_type_pb.ReportOutput,
  /**
   * @param {!proto.data.GetReportOutputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.ReportOutput.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.GetReportOutputRequest,
 *   !proto.data.ReportOutput>}
 */
const methodInfo_UserInterface_GetReportOutput = new grpc.web.AbstractClientBase.MethodInfo(
  proto_base_data_type_pb.ReportOutput,
  /**
   * @param {!proto.data.GetReportOutputRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto_base_data_type_pb.ReportOutput.deserializeBinary
);


/**
 * @param {!proto.data.GetReportOutputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ReportOutput)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ReportOutput>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.UserInterfaceClient.prototype.getReportOutput =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.UserInterface/GetReportOutput',
      request,
      metadata || {},
      methodDescriptor_UserInterface_GetReportOutput,
      callback);
};


/**
 * @param {!proto.data.GetReportOutputRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ReportOutput>}
 *     A native promise that resolves to the response
 */
proto.data.UserInterfacePromiseClient.prototype.getReportOutput =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.UserInterface/GetReportOutput',
      request,
      metadata || {},
      methodDescriptor_UserInterface_GetReportOutput);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.CreateChatEntryRequest,
 *   !proto.data.ChatEntry>}
 */
const methodDescriptor_UserInterface_CreateChatEntry = new grpc.web.MethodDescriptor(
  '/data.UserInterface/CreateChatEntry',
  grpc.web.MethodType.UNARY,
  proto.data.CreateChatEntryRequest,
  proto.data.ChatEntry,
  /**
   * @param {!proto.data.CreateChatEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ChatEntry.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.CreateChatEntryRequest,
 *   !proto.data.ChatEntry>}
 */
const methodInfo_UserInterface_CreateChatEntry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ChatEntry,
  /**
   * @param {!proto.data.CreateChatEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ChatEntry.deserializeBinary
);


/**
 * @param {!proto.data.CreateChatEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ChatEntry)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ChatEntry>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.UserInterfaceClient.prototype.createChatEntry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.UserInterface/CreateChatEntry',
      request,
      metadata || {},
      methodDescriptor_UserInterface_CreateChatEntry,
      callback);
};


/**
 * @param {!proto.data.CreateChatEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ChatEntry>}
 *     A native promise that resolves to the response
 */
proto.data.UserInterfacePromiseClient.prototype.createChatEntry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.UserInterface/CreateChatEntry',
      request,
      metadata || {},
      methodDescriptor_UserInterface_CreateChatEntry);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.data.WorkflowClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.data.WorkflowPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListWorkflowsRequest,
 *   !proto.data.ListWorkflowsResponse>}
 */
const methodDescriptor_Workflow_ListWorkflows = new grpc.web.MethodDescriptor(
  '/data.Workflow/ListWorkflows',
  grpc.web.MethodType.UNARY,
  proto.data.ListWorkflowsRequest,
  proto.data.ListWorkflowsResponse,
  /**
   * @param {!proto.data.ListWorkflowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListWorkflowsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListWorkflowsRequest,
 *   !proto.data.ListWorkflowsResponse>}
 */
const methodInfo_Workflow_ListWorkflows = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListWorkflowsResponse,
  /**
   * @param {!proto.data.ListWorkflowsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListWorkflowsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListWorkflowsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListWorkflowsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListWorkflowsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.WorkflowClient.prototype.listWorkflows =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Workflow/ListWorkflows',
      request,
      metadata || {},
      methodDescriptor_Workflow_ListWorkflows,
      callback);
};


/**
 * @param {!proto.data.ListWorkflowsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListWorkflowsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.WorkflowPromiseClient.prototype.listWorkflows =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Workflow/ListWorkflows',
      request,
      metadata || {},
      methodDescriptor_Workflow_ListWorkflows);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListDocumentActionsRequest,
 *   !proto.data.ListDocumentActionsResponse>}
 */
const methodDescriptor_Workflow_ListDocumentActions = new grpc.web.MethodDescriptor(
  '/data.Workflow/ListDocumentActions',
  grpc.web.MethodType.UNARY,
  proto.data.ListDocumentActionsRequest,
  proto.data.ListDocumentActionsResponse,
  /**
   * @param {!proto.data.ListDocumentActionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListDocumentActionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListDocumentActionsRequest,
 *   !proto.data.ListDocumentActionsResponse>}
 */
const methodInfo_Workflow_ListDocumentActions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListDocumentActionsResponse,
  /**
   * @param {!proto.data.ListDocumentActionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListDocumentActionsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListDocumentActionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListDocumentActionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListDocumentActionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.WorkflowClient.prototype.listDocumentActions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Workflow/ListDocumentActions',
      request,
      metadata || {},
      methodDescriptor_Workflow_ListDocumentActions,
      callback);
};


/**
 * @param {!proto.data.ListDocumentActionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListDocumentActionsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.WorkflowPromiseClient.prototype.listDocumentActions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Workflow/ListDocumentActions',
      request,
      metadata || {},
      methodDescriptor_Workflow_ListDocumentActions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListDocumentStatusesRequest,
 *   !proto.data.ListDocumentStatusesResponse>}
 */
const methodDescriptor_Workflow_ListDocumentStatuses = new grpc.web.MethodDescriptor(
  '/data.Workflow/ListDocumentStatuses',
  grpc.web.MethodType.UNARY,
  proto.data.ListDocumentStatusesRequest,
  proto.data.ListDocumentStatusesResponse,
  /**
   * @param {!proto.data.ListDocumentStatusesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListDocumentStatusesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListDocumentStatusesRequest,
 *   !proto.data.ListDocumentStatusesResponse>}
 */
const methodInfo_Workflow_ListDocumentStatuses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListDocumentStatusesResponse,
  /**
   * @param {!proto.data.ListDocumentStatusesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListDocumentStatusesResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListDocumentStatusesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListDocumentStatusesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListDocumentStatusesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.WorkflowClient.prototype.listDocumentStatuses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Workflow/ListDocumentStatuses',
      request,
      metadata || {},
      methodDescriptor_Workflow_ListDocumentStatuses,
      callback);
};


/**
 * @param {!proto.data.ListDocumentStatusesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListDocumentStatusesResponse>}
 *     A native promise that resolves to the response
 */
proto.data.WorkflowPromiseClient.prototype.listDocumentStatuses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Workflow/ListDocumentStatuses',
      request,
      metadata || {},
      methodDescriptor_Workflow_ListDocumentStatuses);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.data.DashboardingClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.data.DashboardingPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListDashboardsRequest,
 *   !proto.data.ListDashboardsResponse>}
 */
const methodDescriptor_Dashboarding_ListDashboards = new grpc.web.MethodDescriptor(
  '/data.Dashboarding/ListDashboards',
  grpc.web.MethodType.UNARY,
  proto.data.ListDashboardsRequest,
  proto.data.ListDashboardsResponse,
  /**
   * @param {!proto.data.ListDashboardsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListDashboardsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListDashboardsRequest,
 *   !proto.data.ListDashboardsResponse>}
 */
const methodInfo_Dashboarding_ListDashboards = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListDashboardsResponse,
  /**
   * @param {!proto.data.ListDashboardsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListDashboardsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListDashboardsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListDashboardsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListDashboardsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.DashboardingClient.prototype.listDashboards =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Dashboarding/ListDashboards',
      request,
      metadata || {},
      methodDescriptor_Dashboarding_ListDashboards,
      callback);
};


/**
 * @param {!proto.data.ListDashboardsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListDashboardsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.DashboardingPromiseClient.prototype.listDashboards =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Dashboarding/ListDashboards',
      request,
      metadata || {},
      methodDescriptor_Dashboarding_ListDashboards);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListFavoritesRequest,
 *   !proto.data.ListFavoritesResponse>}
 */
const methodDescriptor_Dashboarding_ListFavorites = new grpc.web.MethodDescriptor(
  '/data.Dashboarding/ListFavorites',
  grpc.web.MethodType.UNARY,
  proto.data.ListFavoritesRequest,
  proto.data.ListFavoritesResponse,
  /**
   * @param {!proto.data.ListFavoritesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListFavoritesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListFavoritesRequest,
 *   !proto.data.ListFavoritesResponse>}
 */
const methodInfo_Dashboarding_ListFavorites = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListFavoritesResponse,
  /**
   * @param {!proto.data.ListFavoritesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListFavoritesResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListFavoritesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListFavoritesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListFavoritesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.DashboardingClient.prototype.listFavorites =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Dashboarding/ListFavorites',
      request,
      metadata || {},
      methodDescriptor_Dashboarding_ListFavorites,
      callback);
};


/**
 * @param {!proto.data.ListFavoritesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListFavoritesResponse>}
 *     A native promise that resolves to the response
 */
proto.data.DashboardingPromiseClient.prototype.listFavorites =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Dashboarding/ListFavorites',
      request,
      metadata || {},
      methodDescriptor_Dashboarding_ListFavorites);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListPendingDocumentsRequest,
 *   !proto.data.ListPendingDocumentsResponse>}
 */
const methodDescriptor_Dashboarding_ListPendingDocuments = new grpc.web.MethodDescriptor(
  '/data.Dashboarding/ListPendingDocuments',
  grpc.web.MethodType.UNARY,
  proto.data.ListPendingDocumentsRequest,
  proto.data.ListPendingDocumentsResponse,
  /**
   * @param {!proto.data.ListPendingDocumentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListPendingDocumentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListPendingDocumentsRequest,
 *   !proto.data.ListPendingDocumentsResponse>}
 */
const methodInfo_Dashboarding_ListPendingDocuments = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListPendingDocumentsResponse,
  /**
   * @param {!proto.data.ListPendingDocumentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListPendingDocumentsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListPendingDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListPendingDocumentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListPendingDocumentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.DashboardingClient.prototype.listPendingDocuments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.Dashboarding/ListPendingDocuments',
      request,
      metadata || {},
      methodDescriptor_Dashboarding_ListPendingDocuments,
      callback);
};


/**
 * @param {!proto.data.ListPendingDocumentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListPendingDocumentsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.DashboardingPromiseClient.prototype.listPendingDocuments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.Dashboarding/ListPendingDocuments',
      request,
      metadata || {},
      methodDescriptor_Dashboarding_ListPendingDocuments);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.data.EntityLogClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.data.EntityLogPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListProcessLogsRequest,
 *   !proto.data.ListProcessLogsResponse>}
 */
const methodDescriptor_EntityLog_ListProcessLogs = new grpc.web.MethodDescriptor(
  '/data.EntityLog/ListProcessLogs',
  grpc.web.MethodType.UNARY,
  proto.data.ListProcessLogsRequest,
  proto.data.ListProcessLogsResponse,
  /**
   * @param {!proto.data.ListProcessLogsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListProcessLogsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListProcessLogsRequest,
 *   !proto.data.ListProcessLogsResponse>}
 */
const methodInfo_EntityLog_ListProcessLogs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListProcessLogsResponse,
  /**
   * @param {!proto.data.ListProcessLogsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListProcessLogsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListProcessLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListProcessLogsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListProcessLogsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.EntityLogClient.prototype.listProcessLogs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.EntityLog/ListProcessLogs',
      request,
      metadata || {},
      methodDescriptor_EntityLog_ListProcessLogs,
      callback);
};


/**
 * @param {!proto.data.ListProcessLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListProcessLogsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.EntityLogPromiseClient.prototype.listProcessLogs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.EntityLog/ListProcessLogs',
      request,
      metadata || {},
      methodDescriptor_EntityLog_ListProcessLogs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListRecordLogsRequest,
 *   !proto.data.ListRecordLogsResponse>}
 */
const methodDescriptor_EntityLog_ListRecordLogs = new grpc.web.MethodDescriptor(
  '/data.EntityLog/ListRecordLogs',
  grpc.web.MethodType.UNARY,
  proto.data.ListRecordLogsRequest,
  proto.data.ListRecordLogsResponse,
  /**
   * @param {!proto.data.ListRecordLogsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListRecordLogsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListRecordLogsRequest,
 *   !proto.data.ListRecordLogsResponse>}
 */
const methodInfo_EntityLog_ListRecordLogs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListRecordLogsResponse,
  /**
   * @param {!proto.data.ListRecordLogsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListRecordLogsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListRecordLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListRecordLogsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListRecordLogsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.EntityLogClient.prototype.listRecordLogs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.EntityLog/ListRecordLogs',
      request,
      metadata || {},
      methodDescriptor_EntityLog_ListRecordLogs,
      callback);
};


/**
 * @param {!proto.data.ListRecordLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListRecordLogsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.EntityLogPromiseClient.prototype.listRecordLogs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.EntityLog/ListRecordLogs',
      request,
      metadata || {},
      methodDescriptor_EntityLog_ListRecordLogs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListRecordChatsRequest,
 *   !proto.data.ListRecordChatsResponse>}
 */
const methodDescriptor_EntityLog_ListRecordChats = new grpc.web.MethodDescriptor(
  '/data.EntityLog/ListRecordChats',
  grpc.web.MethodType.UNARY,
  proto.data.ListRecordChatsRequest,
  proto.data.ListRecordChatsResponse,
  /**
   * @param {!proto.data.ListRecordChatsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListRecordChatsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListRecordChatsRequest,
 *   !proto.data.ListRecordChatsResponse>}
 */
const methodInfo_EntityLog_ListRecordChats = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListRecordChatsResponse,
  /**
   * @param {!proto.data.ListRecordChatsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListRecordChatsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListRecordChatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListRecordChatsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListRecordChatsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.EntityLogClient.prototype.listRecordChats =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.EntityLog/ListRecordChats',
      request,
      metadata || {},
      methodDescriptor_EntityLog_ListRecordChats,
      callback);
};


/**
 * @param {!proto.data.ListRecordChatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListRecordChatsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.EntityLogPromiseClient.prototype.listRecordChats =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.EntityLog/ListRecordChats',
      request,
      metadata || {},
      methodDescriptor_EntityLog_ListRecordChats);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListChatEntriesRequest,
 *   !proto.data.ListChatEntriesResponse>}
 */
const methodDescriptor_EntityLog_ListChatEntries = new grpc.web.MethodDescriptor(
  '/data.EntityLog/ListChatEntries',
  grpc.web.MethodType.UNARY,
  proto.data.ListChatEntriesRequest,
  proto.data.ListChatEntriesResponse,
  /**
   * @param {!proto.data.ListChatEntriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListChatEntriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListChatEntriesRequest,
 *   !proto.data.ListChatEntriesResponse>}
 */
const methodInfo_EntityLog_ListChatEntries = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListChatEntriesResponse,
  /**
   * @param {!proto.data.ListChatEntriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListChatEntriesResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListChatEntriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListChatEntriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListChatEntriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.EntityLogClient.prototype.listChatEntries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.EntityLog/ListChatEntries',
      request,
      metadata || {},
      methodDescriptor_EntityLog_ListChatEntries,
      callback);
};


/**
 * @param {!proto.data.ListChatEntriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListChatEntriesResponse>}
 *     A native promise that resolves to the response
 */
proto.data.EntityLogPromiseClient.prototype.listChatEntries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.EntityLog/ListChatEntries',
      request,
      metadata || {},
      methodDescriptor_EntityLog_ListChatEntries);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListWorkflowLogsRequest,
 *   !proto.data.ListWorkflowLogsResponse>}
 */
const methodDescriptor_EntityLog_ListWorkflowLogs = new grpc.web.MethodDescriptor(
  '/data.EntityLog/ListWorkflowLogs',
  grpc.web.MethodType.UNARY,
  proto.data.ListWorkflowLogsRequest,
  proto.data.ListWorkflowLogsResponse,
  /**
   * @param {!proto.data.ListWorkflowLogsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListWorkflowLogsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListWorkflowLogsRequest,
 *   !proto.data.ListWorkflowLogsResponse>}
 */
const methodInfo_EntityLog_ListWorkflowLogs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListWorkflowLogsResponse,
  /**
   * @param {!proto.data.ListWorkflowLogsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListWorkflowLogsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListWorkflowLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListWorkflowLogsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListWorkflowLogsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.EntityLogClient.prototype.listWorkflowLogs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.EntityLog/ListWorkflowLogs',
      request,
      metadata || {},
      methodDescriptor_EntityLog_ListWorkflowLogs,
      callback);
};


/**
 * @param {!proto.data.ListWorkflowLogsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListWorkflowLogsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.EntityLogPromiseClient.prototype.listWorkflowLogs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.EntityLog/ListWorkflowLogs',
      request,
      metadata || {},
      methodDescriptor_EntityLog_ListWorkflowLogs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.data.ListRecentItemsRequest,
 *   !proto.data.ListRecentItemsResponse>}
 */
const methodDescriptor_EntityLog_ListRecentItems = new grpc.web.MethodDescriptor(
  '/data.EntityLog/ListRecentItems',
  grpc.web.MethodType.UNARY,
  proto.data.ListRecentItemsRequest,
  proto.data.ListRecentItemsResponse,
  /**
   * @param {!proto.data.ListRecentItemsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListRecentItemsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ListRecentItemsRequest,
 *   !proto.data.ListRecentItemsResponse>}
 */
const methodInfo_EntityLog_ListRecentItems = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ListRecentItemsResponse,
  /**
   * @param {!proto.data.ListRecentItemsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ListRecentItemsResponse.deserializeBinary
);


/**
 * @param {!proto.data.ListRecentItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ListRecentItemsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ListRecentItemsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.EntityLogClient.prototype.listRecentItems =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.EntityLog/ListRecentItems',
      request,
      metadata || {},
      methodDescriptor_EntityLog_ListRecentItems,
      callback);
};


/**
 * @param {!proto.data.ListRecentItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ListRecentItemsResponse>}
 *     A native promise that resolves to the response
 */
proto.data.EntityLogPromiseClient.prototype.listRecentItems =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/data.EntityLog/ListRecentItems',
      request,
      metadata || {},
      methodDescriptor_EntityLog_ListRecentItems);
};


module.exports = proto.data;

