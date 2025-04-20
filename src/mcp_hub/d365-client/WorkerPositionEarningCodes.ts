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
import type { WorkerPositionEarningCodesApi } from './WorkerPositionEarningCodesApi';
import {
  PayrollCalculationFrequencies,
  PayrollCalculationFrequenciesType
} from './PayrollCalculationFrequencies';
import { Workers, WorkersType } from './Workers';
import { PositionsV2, PositionsV2Type } from './PositionsV2';

/**
 * This class represents the entity "WorkerPositionEarningCodes" of service "d365_metadata".
 */
export class WorkerPositionEarningCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerPositionEarningCodesType<T>
{
  /**
   * Technical entity name for WorkerPositionEarningCodes.
   */
  static override _entityName = 'WorkerPositionEarningCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerPositionEarningCodes entity.
   */
  static _keys = [
    'PersonnelNumber',
    'EarningCodeId',
    'PositionId',
    'ValidFrom',
    'ValidTo'
  ];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Earning Code Id.
   */
  declare earningCodeId: DeserializedType<T, 'Edm.String'>;
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
   * Frequency Id.
   * @nullable
   */
  declare frequencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link PayrollCalculationFrequencies} entity.
   */
  declare payrollCalculationFrequency?: PayrollCalculationFrequencies<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare positionV2?: PositionsV2<T> | null;

  constructor(_entityApi: WorkerPositionEarningCodesApi<T>) {
    super(_entityApi);
  }
}

export interface WorkerPositionEarningCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  earningCodeId: DeserializedType<T, 'Edm.String'>;
  positionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  frequencyId?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  payrollCalculationFrequency?: PayrollCalculationFrequenciesType<T> | null;
  worker?: WorkersType<T> | null;
  positionV2?: PositionsV2Type<T> | null;
}
