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
import type { BenefitsWorkerAnnualSalariesApi } from './BenefitsWorkerAnnualSalariesApi';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';

/**
 * This class represents the entity "BenefitsWorkerAnnualSalaries" of service "d365_metadata".
 */
export class BenefitsWorkerAnnualSalaries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsWorkerAnnualSalariesType<T>
{
  /**
   * Technical entity name for BenefitsWorkerAnnualSalaries.
   */
  static override _entityName = 'BenefitsWorkerAnnualSalaries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsWorkerAnnualSalaries entity.
   */
  static _keys = ['dataAreaId', 'PersonnelNumber', 'ValidFrom'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Annual Salary Amount.
   */
  declare annualSalaryAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare baseWorker?: BaseWorkers<T> | null;

  constructor(_entityApi: BenefitsWorkerAnnualSalariesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsWorkerAnnualSalariesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  annualSalaryAmount: DeserializedType<T, 'Edm.Decimal'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  baseWorker?: BaseWorkersType<T> | null;
}
