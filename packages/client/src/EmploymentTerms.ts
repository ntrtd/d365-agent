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
import type { EmploymentTermsApi } from './EmploymentTermsApi';
import { EmploymentsV2, EmploymentsV2Type } from './EmploymentsV2';
import { AgreementTerms, AgreementTermsType } from './AgreementTerms';

/**
 * This class represents the entity "EmploymentTerms" of service "d365_metadata".
 */
export class EmploymentTerms<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmploymentTermsType<T>
{
  /**
   * Technical entity name for EmploymentTerms.
   */
  static override _entityName = 'EmploymentTerms';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmploymentTerms entity.
   */
  static _keys = [
    'PersonnelNumber',
    'LegalEntityId',
    'EmploymentStartDate',
    'EmploymentEndDate',
    'AgreementTermId',
    'ValidFrom',
    'ValidTo'
  ];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Employment Start Date.
   */
  declare employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employment End Date.
   */
  declare employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Agreement Term Id.
   */
  declare agreementTermId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link EmploymentsV2} entity.
   */
  declare employment?: EmploymentsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link AgreementTerms} entity.
   */
  declare agreementTerm?: AgreementTerms<T> | null;

  constructor(_entityApi: EmploymentTermsApi<T>) {
    super(_entityApi);
  }
}

export interface EmploymentTermsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  agreementTermId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employment?: EmploymentsV2Type<T> | null;
  agreementTerm?: AgreementTermsType<T> | null;
}
