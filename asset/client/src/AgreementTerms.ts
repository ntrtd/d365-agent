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
import type { AgreementTermsApi } from './AgreementTermsApi';
import { EmploymentTerms, EmploymentTermsType } from './EmploymentTerms';

/**
 * This class represents the entity "AgreementTerms" of service "d365_metadata".
 */
export class AgreementTerms<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AgreementTermsType<T>
{
  /**
   * Technical entity name for AgreementTerms.
   */
  static override _entityName = 'AgreementTerms';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AgreementTerms entity.
   */
  static _keys = ['TermsOfEmployment'];
  /**
   * Terms Of Employment.
   */
  declare termsOfEmployment: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EmploymentTerms} entity.
   */
  declare employmentTerms: EmploymentTerms<T>[];

  constructor(_entityApi: AgreementTermsApi<T>) {
    super(_entityApi);
  }
}

export interface AgreementTermsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  termsOfEmployment: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  employmentTerms: EmploymentTermsType<T>[];
}
