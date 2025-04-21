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
import type { WorkerPositionEarningCodesV2Api } from './WorkerPositionEarningCodesV2Api';
import {
  PayrollCalculationFrequencies,
  PayrollCalculationFrequenciesType
} from './PayrollCalculationFrequencies';
import { Workers, WorkersType } from './Workers';
import { PositionsV2, PositionsV2Type } from './PositionsV2';

/**
 * This class represents the entity "WorkerPositionEarningCodesV2" of service "d365_metadata".
 */
export class WorkerPositionEarningCodesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkerPositionEarningCodesV2Type<T>
{
  /**
   * Technical entity name for WorkerPositionEarningCodesV2.
   */
  static override _entityName = 'WorkerPositionEarningCodesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkerPositionEarningCodesV2 entity.
   */
  static _keys = [
    'PersonnelNumber',
    'EarningCodeId',
    'PositionId',
    'ValidFrom'
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
   * Frequency Id.
   * @nullable
   */
  declare frequencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
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

  constructor(_entityApi: WorkerPositionEarningCodesV2Api<T>) {
    super(_entityApi);
  }
}

export interface WorkerPositionEarningCodesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  earningCodeId: DeserializedType<T, 'Edm.String'>;
  positionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  frequencyId?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  payrollCalculationFrequency?: PayrollCalculationFrequenciesType<T> | null;
  worker?: WorkersType<T> | null;
  positionV2?: PositionsV2Type<T> | null;
}
