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
import type { FiscalYearsApi } from './FiscalYearsApi';
import { FiscalYearStatus } from './FiscalYearStatus';

/**
 * This class represents the entity "FiscalYears" of service "d365_metadata".
 */
export class FiscalYears<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FiscalYearsType<T>
{
  /**
   * Technical entity name for FiscalYears.
   */
  static override _entityName = 'FiscalYears';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalYears entity.
   */
  static _keys = ['LegalEntityId', 'Calendar', 'FiscalYear'];
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Calendar.
   */
  declare calendar: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Year.
   */
  declare fiscalYear: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: FiscalYearStatus | null;
  /**
   * Legal Entity Name.
   * @nullable
   */
  declare legalEntityName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FiscalYearsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalYearsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  calendar: DeserializedType<T, 'Edm.String'>;
  fiscalYear: DeserializedType<T, 'Edm.String'>;
  status?: FiscalYearStatus | null;
  legalEntityName?: DeserializedType<T, 'Edm.String'> | null;
}
