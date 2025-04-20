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
import type { PositionWorkerAssignmentsApi } from './PositionWorkerAssignmentsApi';
import { NoYes } from './NoYes';
import { Workers, WorkersType } from './Workers';
import { PositionsV2, PositionsV2Type } from './PositionsV2';

/**
 * This class represents the entity "PositionWorkerAssignments" of service "d365_metadata".
 */
export class PositionWorkerAssignments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PositionWorkerAssignmentsType<T>
{
  /**
   * Technical entity name for PositionWorkerAssignments.
   */
  static override _entityName = 'PositionWorkerAssignments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PositionWorkerAssignments entity.
   */
  static _keys = ['PositionId', 'ValidFrom', 'ValidTo'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare position?: PositionsV2<T> | null;

  constructor(_entityApi: PositionWorkerAssignmentsApi<T>) {
    super(_entityApi);
  }
}

export interface PositionWorkerAssignmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  isPrimaryPosition?: NoYes | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  worker?: WorkersType<T> | null;
  position?: PositionsV2Type<T> | null;
}
