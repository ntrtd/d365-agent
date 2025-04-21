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
import type { CompaniesApi } from './CompaniesApi';
import {
  BenefitPeriodEmployees,
  BenefitPeriodEmployeesType
} from './BenefitPeriodEmployees';
import {
  BenefitPeriodEmplLifeEvents,
  BenefitPeriodEmplLifeEventsType
} from './BenefitPeriodEmplLifeEvents';
import {
  BenefitsPeriodEmployeeLifeEventTransactions,
  BenefitsPeriodEmployeeLifeEventTransactionsType
} from './BenefitsPeriodEmployeeLifeEventTransactions';

/**
 * This class represents the entity "Companies" of service "d365_metadata".
 */
export class Companies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CompaniesType<T>
{
  /**
   * Technical entity name for Companies.
   */
  static override _entityName = 'Companies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Companies entity.
   */
  static _keys = ['DataArea'];
  /**
   * Data Area.
   */
  declare dataArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Known As.
   * @nullable
   */
  declare knownAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link BenefitPeriodEmployees} entity.
   */
  declare benefitPeriodEmployee: BenefitPeriodEmployees<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitPeriodEmplLifeEvents} entity.
   */
  declare benefitPeriodEmplLifeEvent: BenefitPeriodEmplLifeEvents<T>[];
  /**
   * One-to-many navigation property to the {@link BenefitsPeriodEmployeeLifeEventTransactions} entity.
   */
  declare benefitsPeriodEmployeeLifeEventTransaction: BenefitsPeriodEmployeeLifeEventTransactions<T>[];

  constructor(_entityApi: CompaniesApi<T>) {
    super(_entityApi);
  }
}

export interface CompaniesType<T extends DeSerializers = DefaultDeSerializers> {
  dataArea: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  knownAs?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  benefitPeriodEmployee: BenefitPeriodEmployeesType<T>[];
  benefitPeriodEmplLifeEvent: BenefitPeriodEmplLifeEventsType<T>[];
  benefitsPeriodEmployeeLifeEventTransaction: BenefitsPeriodEmployeeLifeEventTransactionsType<T>[];
}
