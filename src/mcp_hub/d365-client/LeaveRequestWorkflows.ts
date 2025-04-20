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
import type { LeaveRequestWorkflowsApi } from './LeaveRequestWorkflowsApi';

/**
 * This class represents the entity "LeaveRequestWorkflows" of service "d365_metadata".
 */
export class LeaveRequestWorkflows<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaveRequestWorkflowsType<T>
{
  /**
   * Technical entity name for LeaveRequestWorkflows.
   */
  static override _entityName = 'LeaveRequestWorkflows';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveRequestWorkflows entity.
   */
  static _keys = ['SequenceNumber'];
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Table Name.
   * @nullable
   */
  declare documentTableName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LeaveRequestWorkflowsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaveRequestWorkflowsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sequenceNumber: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  documentTableName?: DeserializedType<T, 'Edm.String'> | null;
}
