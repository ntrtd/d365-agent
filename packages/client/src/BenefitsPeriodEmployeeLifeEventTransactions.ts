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
import type { BenefitsPeriodEmployeeLifeEventTransactionsApi } from './BenefitsPeriodEmployeeLifeEventTransactionsApi';
import { EventLogType } from './EventLogType';
import { BenefitLifeEventStatus } from './BenefitLifeEventStatus';
import { BenefitLifeEventTypes } from './BenefitLifeEventTypes';
import { BenefitsPeriods, BenefitsPeriodsType } from './BenefitsPeriods';
import { Workers, WorkersType } from './Workers';
import {
  BenefitsLifeEventTypes,
  BenefitsLifeEventTypesType
} from './BenefitsLifeEventTypes';
import { Companies, CompaniesType } from './Companies';

/**
 * This class represents the entity "BenefitsPeriodEmployeeLifeEventTransactions" of service "d365_metadata".
 */
export class BenefitsPeriodEmployeeLifeEventTransactions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsPeriodEmployeeLifeEventTransactionsType<T>
{
  /**
   * Technical entity name for BenefitsPeriodEmployeeLifeEventTransactions.
   */
  static override _entityName = 'BenefitsPeriodEmployeeLifeEventTransactions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsPeriodEmployeeLifeEventTransactions entity.
   */
  static _keys = [
    'LegalEntityId',
    'LineNum',
    'PeriodId',
    'LifeEventTypeId',
    'PersonnelNumber',
    'LifeEventDate'
  ];
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Period Id.
   */
  declare periodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Life Event Type Id.
   */
  declare lifeEventTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Life Event Date.
   */
  declare lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Life Event Origin.
   * @nullable
   */
  declare lifeEventOrigin?: EventLogType | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: BenefitLifeEventStatus | null;
  /**
   * Life Event Date Time.
   */
  declare lifeEventDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Life Event Types.
   * @nullable
   */
  declare lifeEventTypes?: BenefitLifeEventTypes | null;
  /**
   * One-to-one navigation property to the {@link BenefitsPeriods} entity.
   */
  declare benefitsPeriod?: BenefitsPeriods<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsLifeEventTypes} entity.
   */
  declare benefitsLifeEventType?: BenefitsLifeEventTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link Companies} entity.
   */
  declare company?: Companies<T> | null;

  constructor(_entityApi: BenefitsPeriodEmployeeLifeEventTransactionsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsPeriodEmployeeLifeEventTransactionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Int32'>;
  periodId: DeserializedType<T, 'Edm.String'>;
  lifeEventTypeId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  lifeEventDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lifeEventOrigin?: EventLogType | null;
  status?: BenefitLifeEventStatus | null;
  lifeEventDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lifeEventTypes?: BenefitLifeEventTypes | null;
  benefitsPeriod?: BenefitsPeriodsType<T> | null;
  worker?: WorkersType<T> | null;
  benefitsLifeEventType?: BenefitsLifeEventTypesType<T> | null;
  company?: CompaniesType<T> | null;
}
