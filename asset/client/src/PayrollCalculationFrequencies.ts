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
import type { PayrollCalculationFrequenciesApi } from './PayrollCalculationFrequenciesApi';
import { PayrollCalculationBasis } from './PayrollCalculationBasis';
import { NoYes } from './NoYes';
import {
  PremiumEarningCodes,
  PremiumEarningCodesType
} from './PremiumEarningCodes';
import {
  WorkerPositionEarningCodesV2,
  WorkerPositionEarningCodesV2Type
} from './WorkerPositionEarningCodesV2';
import {
  WorkerPositionEarningCodes,
  WorkerPositionEarningCodesType
} from './WorkerPositionEarningCodes';
import {
  PayrollCalculationFrequencyPayPeriods,
  PayrollCalculationFrequencyPayPeriodsType
} from './PayrollCalculationFrequencyPayPeriods';

/**
 * This class represents the entity "PayrollCalculationFrequencies" of service "d365_metadata".
 */
export class PayrollCalculationFrequencies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayrollCalculationFrequenciesType<T>
{
  /**
   * Technical entity name for PayrollCalculationFrequencies.
   */
  static override _entityName = 'PayrollCalculationFrequencies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayrollCalculationFrequencies entity.
   */
  static _keys = ['Frequency'];
  /**
   * Frequency.
   */
  declare frequency: DeserializedType<T, 'Edm.String'>;
  /**
   * Frequency Control.
   * @nullable
   */
  declare frequencyControl?: PayrollCalculationBasis | null;
  /**
   * Is Immutable.
   * @nullable
   */
  declare isImmutable?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PremiumEarningCodes} entity.
   */
  declare premiumEarnings: PremiumEarningCodes<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerPositionEarningCodesV2} entity.
   */
  declare workerPositionEarningCodeV2: WorkerPositionEarningCodesV2<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerPositionEarningCodes} entity.
   */
  declare workerPositionEarningCode: WorkerPositionEarningCodes<T>[];
  /**
   * One-to-many navigation property to the {@link PayrollCalculationFrequencyPayPeriods} entity.
   */
  declare payrollCalculationFrequencyPayPeriod: PayrollCalculationFrequencyPayPeriods<T>[];

  constructor(_entityApi: PayrollCalculationFrequenciesApi<T>) {
    super(_entityApi);
  }
}

export interface PayrollCalculationFrequenciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  frequency: DeserializedType<T, 'Edm.String'>;
  frequencyControl?: PayrollCalculationBasis | null;
  isImmutable?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  premiumEarnings: PremiumEarningCodesType<T>[];
  workerPositionEarningCodeV2: WorkerPositionEarningCodesV2Type<T>[];
  workerPositionEarningCode: WorkerPositionEarningCodesType<T>[];
  payrollCalculationFrequencyPayPeriod: PayrollCalculationFrequencyPayPeriodsType<T>[];
}
