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
import type { MssLoaRequestWorkflowsApi } from './MssLoaRequestWorkflowsApi';

/**
 * This class represents the entity "MssLoaRequestWorkflows" of service "d365_metadata".
 */
export class MssLoaRequestWorkflows<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MssLoaRequestWorkflowsType<T>
{
  /**
   * Technical entity name for MssLoaRequestWorkflows.
   */
  static override _entityName = 'MssLoaRequestWorkflows';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MssLoaRequestWorkflows entity.
   */
  static _keys = ['dataAreaId', 'RequestId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Id.
   */
  declare requestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Network Alias.
   * @nullable
   */
  declare networkAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Submission Date.
   */
  declare submissionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Workflow Owner.
   * @nullable
   */
  declare workflowOwner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reason Code.
   */
  declare reasonCode: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: MssLoaRequestWorkflowsApi<T>) {
    super(_entityApi);
  }
}

export interface MssLoaRequestWorkflowsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  networkAlias?: DeserializedType<T, 'Edm.String'> | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.Guid'>;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  submissionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workflowOwner?: DeserializedType<T, 'Edm.String'> | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  reasonCode: DeserializedType<T, 'Edm.Int64'>;
  type?: DeserializedType<T, 'Edm.String'> | null;
}
