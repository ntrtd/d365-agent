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
import type { PayIntV1PositionWorkerAssignmentsApi } from './PayIntV1PositionWorkerAssignmentsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PayIntV1PositionWorkerAssignments" of service "d365_metadata".
 */
export class PayIntV1PositionWorkerAssignments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1PositionWorkerAssignmentsType<T>
{
  /**
   * Technical entity name for PayIntV1PositionWorkerAssignments.
   */
  static override _entityName = 'PayIntV1PositionWorkerAssignments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1PositionWorkerAssignments entity.
   */
  static _keys = ['PositionId', 'ValidFrom'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reason Code Id.
   * @nullable
   */
  declare reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary Position.
   * @nullable
   */
  declare isPrimaryPosition?: NoYes | null;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: PayIntV1PositionWorkerAssignmentsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1PositionWorkerAssignmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  isPrimaryPosition?: NoYes | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
