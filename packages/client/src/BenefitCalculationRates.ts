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
import type { BenefitCalculationRatesApi } from './BenefitCalculationRatesApi';
import { PayrollTierType } from './PayrollTierType';
import {
  BenefitCalculationRateDetailsDualWrite,
  BenefitCalculationRateDetailsDualWriteType
} from './BenefitCalculationRateDetailsDualWrite';
import {
  BenefitCalculationRateDetails,
  BenefitCalculationRateDetailsType
} from './BenefitCalculationRateDetails';

/**
 * This class represents the entity "BenefitCalculationRates" of service "d365_metadata".
 */
export class BenefitCalculationRates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitCalculationRatesType<T>
{
  /**
   * Technical entity name for BenefitCalculationRates.
   */
  static override _entityName = 'BenefitCalculationRates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitCalculationRates entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Tier Type.
   * @nullable
   */
  declare tierType?: PayrollTierType | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link BenefitCalculationRateDetailsDualWrite} entity.
   */
  declare benefitCalculationRateDetailDualWrite: BenefitCalculationRateDetailsDualWrite<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitCalculationRateDetails} entity.
   */
  declare benefitCalculationRateDetail: BenefitCalculationRateDetails<T>[];

  constructor(_entityApi: BenefitCalculationRatesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitCalculationRatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  tierType?: PayrollTierType | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  benefitCalculationRateDetailDualWrite: BenefitCalculationRateDetailsDualWriteType<T>[];
  benefitCalculationRateDetail: BenefitCalculationRateDetailsType<T>[];
}
