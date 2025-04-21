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
import type { PositionWorkerAssignmentsV2Api } from './PositionWorkerAssignmentsV2Api';
import { NoYes } from './NoYes';
import { Workers, WorkersType } from './Workers';
import { PositionsV2, PositionsV2Type } from './PositionsV2';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';
import {
  PayIntV1PayrollPositions,
  PayIntV1PayrollPositionsType
} from './PayIntV1PayrollPositions';
import { PayrollPositions, PayrollPositionsType } from './PayrollPositions';

/**
 * This class represents the entity "PositionWorkerAssignmentsV2" of service "d365_metadata".
 */
export class PositionWorkerAssignmentsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PositionWorkerAssignmentsV2Type<T>
{
  /**
   * Technical entity name for PositionWorkerAssignmentsV2.
   */
  static override _entityName = 'PositionWorkerAssignmentsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PositionWorkerAssignmentsV2 entity.
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
   * Reason Code Id.
   * @nullable
   */
  declare reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare position?: PositionsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare baseWorker?: BaseWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link PayIntV1PayrollPositions} entity.
   */
  declare payIntV1PayrollPosition?: PayIntV1PayrollPositions<T> | null;
  /**
   * One-to-one navigation property to the {@link PayrollPositions} entity.
   */
  declare payrollPosition?: PayrollPositions<T> | null;

  constructor(_entityApi: PositionWorkerAssignmentsV2Api<T>) {
    super(_entityApi);
  }
}

export interface PositionWorkerAssignmentsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isPrimaryPosition?: NoYes | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  worker?: WorkersType<T> | null;
  position?: PositionsV2Type<T> | null;
  baseWorker?: BaseWorkersType<T> | null;
  payIntV1PayrollPosition?: PayIntV1PayrollPositionsType<T> | null;
  payrollPosition?: PayrollPositionsType<T> | null;
}
