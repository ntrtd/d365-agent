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
import type { DeferralsFactorCalculationsApi } from './DeferralsFactorCalculationsApi';
import { RTax25PeriodType } from './RTax25PeriodType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "DeferralsFactorCalculations" of service "d365_metadata".
 */
export class DeferralsFactorCalculations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DeferralsFactorCalculationsType<T>
{
  /**
   * Technical entity name for DeferralsFactorCalculations.
   */
  static override _entityName = 'DeferralsFactorCalculations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DeferralsFactorCalculations entity.
   */
  static _keys = ['dataAreaId', 'StartDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Period Type.
   * @nullable
   */
  declare periodType?: RTax25PeriodType | null;
  /**
   * Calculated.
   * @nullable
   */
  declare calculated?: NoYes | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: DeferralsFactorCalculationsApi<T>) {
    super(_entityApi);
  }
}

export interface DeferralsFactorCalculationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  periodType?: RTax25PeriodType | null;
  calculated?: NoYes | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
