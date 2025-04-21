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
import type { PayIntV1CompFixedPlanTablesApi } from './PayIntV1CompFixedPlanTablesApi';
import { NoYes } from './NoYes';
import { HrmCompHireRule } from './HrmCompHireRule';
import { HcmCompensationType } from './HcmCompensationType';
import { HrmCompTolerance } from './HrmCompTolerance';
import { CompensationGrids, CompensationGridsType } from './CompensationGrids';
import {
  PayRateConversions,
  PayRateConversionsType
} from './PayRateConversions';

/**
 * This class represents the entity "PayIntV1CompFixedPlanTables" of service "d365_metadata".
 */
export class PayIntV1CompFixedPlanTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1CompFixedPlanTablesType<T>
{
  /**
   * Technical entity name for PayIntV1CompFixedPlanTables.
   */
  static override _entityName = 'PayIntV1CompFixedPlanTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1CompFixedPlanTables entity.
   */
  static _keys = ['dataAreaId', 'Plan'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan.
   */
  declare plan: DeserializedType<T, 'Edm.String'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Frequency.
   * @nullable
   */
  declare payFrequency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Control Point.
   * @nullable
   */
  declare controlPoint?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Compensation Structure.
   * @nullable
   */
  declare compensationStructure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Market Price Indicator.
   * @nullable
   */
  declare marketPriceIndicator?: NoYes | null;
  /**
   * Ref Point Setup Id.
   * @nullable
   */
  declare refPointSetupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hire Rule.
   * @nullable
   */
  declare hireRule?: HrmCompHireRule | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: HcmCompensationType | null;
  /**
   * Out Of Range Tolerance.
   * @nullable
   */
  declare outOfRangeTolerance?: HrmCompTolerance | null;
  /**
   * Recommendation Allowed.
   * @nullable
   */
  declare recommendationAllowed?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link CompensationGrids} entity.
   */
  declare compensationGrid?: CompensationGrids<T> | null;
  /**
   * One-to-one navigation property to the {@link PayRateConversions} entity.
   */
  declare payRateConversion?: PayRateConversions<T> | null;

  constructor(_entityApi: PayIntV1CompFixedPlanTablesApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1CompFixedPlanTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  plan: DeserializedType<T, 'Edm.String'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  payFrequency?: DeserializedType<T, 'Edm.String'> | null;
  controlPoint?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  compensationStructure?: DeserializedType<T, 'Edm.String'> | null;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  marketPriceIndicator?: NoYes | null;
  refPointSetupId?: DeserializedType<T, 'Edm.String'> | null;
  hireRule?: HrmCompHireRule | null;
  type?: HcmCompensationType | null;
  outOfRangeTolerance?: HrmCompTolerance | null;
  recommendationAllowed?: NoYes | null;
  compensationGrid?: CompensationGridsType<T> | null;
  payRateConversion?: PayRateConversionsType<T> | null;
}
