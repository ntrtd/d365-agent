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
import type { LeaseIndexRevaluationsApi } from './LeaseIndexRevaluationsApi';

/**
 * This class represents the entity "LeaseIndexRevaluations" of service "d365_metadata".
 */
export class LeaseIndexRevaluations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaseIndexRevaluationsType<T>
{
  /**
   * Technical entity name for LeaseIndexRevaluations.
   */
  static override _entityName = 'LeaseIndexRevaluations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseIndexRevaluations entity.
   */
  static _keys = ['ProcessId'];
  /**
   * Process Id.
   */
  declare processId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Variable Payment.
   */
  declare variablePayment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Legal Entity.
   * @nullable
   */
  declare legalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Liability Adjusted.
   */
  declare liabilityAdjusted: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lease Adjusted.
   */
  declare leaseAdjusted: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Revalue Process Id.
   * @nullable
   */
  declare revalueProcessId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LeaseIndexRevaluationsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseIndexRevaluationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  processId: DeserializedType<T, 'Edm.Guid'>;
  variablePayment: DeserializedType<T, 'Edm.Decimal'>;
  legalEntity?: DeserializedType<T, 'Edm.String'> | null;
  liabilityAdjusted: DeserializedType<T, 'Edm.Decimal'>;
  leaseAdjusted: DeserializedType<T, 'Edm.Int32'>;
  revalueProcessId?: DeserializedType<T, 'Edm.String'> | null;
}
