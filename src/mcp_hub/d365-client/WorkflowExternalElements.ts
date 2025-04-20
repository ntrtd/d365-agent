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
import type { WorkflowExternalElementsApi } from './WorkflowExternalElementsApi';

/**
 * This class represents the entity "WorkflowExternalElements" of service "d365_metadata".
 */
export class WorkflowExternalElements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkflowExternalElementsType<T>
{
  /**
   * Technical entity name for WorkflowExternalElements.
   */
  static override _entityName = 'WorkflowExternalElements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkflowExternalElements entity.
   */
  static _keys = ['CorrelationId', 'ElementId'];
  /**
   * Correlation Id.
   */
  declare correlationId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Element Id.
   */
  declare elementId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Element Started Date Time.
   */
  declare elementStartedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: WorkflowExternalElementsApi<T>) {
    super(_entityApi);
  }
}

export interface WorkflowExternalElementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  correlationId: DeserializedType<T, 'Edm.Guid'>;
  elementId: DeserializedType<T, 'Edm.Guid'>;
  elementStartedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
