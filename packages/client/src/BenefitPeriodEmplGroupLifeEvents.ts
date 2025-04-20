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
import type { BenefitPeriodEmplGroupLifeEventsApi } from './BenefitPeriodEmplGroupLifeEventsApi';
import { BenefitsPeriods, BenefitsPeriodsType } from './BenefitsPeriods';

/**
 * This class represents the entity "BenefitPeriodEmplGroupLifeEvents" of service "d365_metadata".
 */
export class BenefitPeriodEmplGroupLifeEvents<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitPeriodEmplGroupLifeEventsType<T>
{
  /**
   * Technical entity name for BenefitPeriodEmplGroupLifeEvents.
   */
  static override _entityName = 'BenefitPeriodEmplGroupLifeEvents';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitPeriodEmplGroupLifeEvents entity.
   */
  static _keys = ['PeriodId', 'LifeEventDate'];
  /**
   * Period Id.
   */
  declare periodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Life Event Date.
   */
  declare lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link BenefitsPeriods} entity.
   */
  declare benefitsPeriod?: BenefitsPeriods<T> | null;

  constructor(_entityApi: BenefitPeriodEmplGroupLifeEventsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitPeriodEmplGroupLifeEventsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  periodId: DeserializedType<T, 'Edm.String'>;
  lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  benefitsPeriod?: BenefitsPeriodsType<T> | null;
}
