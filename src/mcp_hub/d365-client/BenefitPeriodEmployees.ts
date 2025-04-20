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
import type { BenefitPeriodEmployeesApi } from './BenefitPeriodEmployeesApi';
import { BenefitPeriodEmployeeStatus } from './BenefitPeriodEmployeeStatus';
import { NoYes } from './NoYes';
import { BenefitsPeriods, BenefitsPeriodsType } from './BenefitsPeriods';
import { Workers, WorkersType } from './Workers';
import { Companies, CompaniesType } from './Companies';

/**
 * This class represents the entity "BenefitPeriodEmployees" of service "d365_metadata".
 */
export class BenefitPeriodEmployees<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitPeriodEmployeesType<T>
{
  /**
   * Technical entity name for BenefitPeriodEmployees.
   */
  static override _entityName = 'BenefitPeriodEmployees';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitPeriodEmployees entity.
   */
  static _keys = ['PeriodId', 'PersonnelNumber', 'LegalEntityId'];
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
   * Status.
   * @nullable
   */
  declare status?: BenefitPeriodEmployeeStatus | null;
  /**
   * Life Event.
   * @nullable
   */
  declare lifeEvent?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link BenefitsPeriods} entity.
   */
  declare benefitsPeriod?: BenefitsPeriods<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link Companies} entity.
   */
  declare company?: Companies<T> | null;

  constructor(_entityApi: BenefitPeriodEmployeesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitPeriodEmployeesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  periodId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  status?: BenefitPeriodEmployeeStatus | null;
  lifeEvent?: NoYes | null;
  benefitsPeriod?: BenefitsPeriodsType<T> | null;
  worker?: WorkersType<T> | null;
  company?: CompaniesType<T> | null;
}
