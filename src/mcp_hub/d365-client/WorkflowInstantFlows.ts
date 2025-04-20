/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { WorkflowInstantFlowsApi } from './WorkflowInstantFlowsApi';

/**
 * This class represents the entity "WorkflowInstantFlows" of service "d365_metadata".
 */
export class WorkflowInstantFlows<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkflowInstantFlowsType<T>
{
  /**
   * Technical entity name for WorkflowInstantFlows.
   */
  static override _entityName = 'WorkflowInstantFlows';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkflowInstantFlows entity.
   */
  static _keys = ['FlowEndpointURL'];
  /**
   * Flow Endpoint Url.
   */
  declare flowEndpointUrl: DeserializedType<T, 'Edm.String'>;
  /**
   * Data Area.
   * @nullable
   */
  declare dataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instant Flow Name.
   * @nullable
   */
  declare instantFlowName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Entity Name.
   * @nullable
   */
  declare dataEntityName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WorkflowInstantFlowsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkflowInstantFlowsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  flowEndpointUrl: DeserializedType<T, 'Edm.String'>;
  dataArea?: DeserializedType<T, 'Edm.String'> | null;
  instantFlowName?: DeserializedType<T, 'Edm.String'> | null;
  dataEntityName?: DeserializedType<T, 'Edm.String'> | null;
}
