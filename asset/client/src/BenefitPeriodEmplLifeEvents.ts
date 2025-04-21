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
import type { BenefitPeriodEmplLifeEventsApi } from './BenefitPeriodEmplLifeEventsApi';
import { BenefitsPeriods, BenefitsPeriodsType } from './BenefitsPeriods';
import { Companies, CompaniesType } from './Companies';

/**
 * This class represents the entity "BenefitPeriodEmplLifeEvents" of service "d365_metadata".
 */
export class BenefitPeriodEmplLifeEvents<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitPeriodEmplLifeEventsType<T>
{
  /**
   * Technical entity name for BenefitPeriodEmplLifeEvents.
   */
  static override _entityName = 'BenefitPeriodEmplLifeEvents';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitPeriodEmplLifeEvents entity.
   */
  static _keys = [
    'PeriodId',
    'PersonnelNumber',
    'LegalEntityId',
    'LifeEventDate'
  ];
  /**
   * Period Id.
   */
  declare periodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Life Event Date.
   */
  declare lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link BenefitsPeriods} entity.
   */
  declare benefitsPeriod?: BenefitsPeriods<T> | null;
  /**
   * One-to-one navigation property to the {@link Companies} entity.
   */
  declare company?: Companies<T> | null;

  constructor(_entityApi: BenefitPeriodEmplLifeEventsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitPeriodEmplLifeEventsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  periodId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  benefitsPeriod?: BenefitsPeriodsType<T> | null;
  company?: CompaniesType<T> | null;
}
