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
import type { PayIntV1PayrollEmployeesApi } from './PayIntV1PayrollEmployeesApi';
import { HcmPersonGender } from './HcmPersonGender';
import { HcmEmploymentType } from './HcmEmploymentType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PayIntV1PayrollEmployees" of service "d365_metadata".
 */
export class PayIntV1PayrollEmployees<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1PayrollEmployeesType<T>
{
  /**
   * Technical entity name for PayIntV1PayrollEmployees.
   */
  static override _entityName = 'PayIntV1PayrollEmployees';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1PayrollEmployees entity.
   */
  static _keys = ['PersonnelNumber', 'LegalEntityId', 'EmploymentStartDate'];
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
   * Gender.
   * @nullable
   */
  declare gender?: HcmPersonGender | null;
  /**
   * Person.
   */
  declare person: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Identification Number.
   * @nullable
   */
  declare identificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Type.
   * @nullable
   */
  declare employmentType?: HcmEmploymentType | null;
  /**
   * Employment End Date.
   */
  declare employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Birth Date.
   */
  declare birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ready To Pay.
   * @nullable
   */
  declare readyToPay?: NoYes | null;
  /**
   * Identification Type Id.
   * @nullable
   */
  declare identificationTypeId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PayIntV1PayrollEmployeesApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1PayrollEmployeesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  gender?: HcmPersonGender | null;
  person: DeserializedType<T, 'Edm.Int64'>;
  identificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  employmentType?: HcmEmploymentType | null;
  employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  legalEntity: DeserializedType<T, 'Edm.Int64'>;
  birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  readyToPay?: NoYes | null;
  identificationTypeId?: DeserializedType<T, 'Edm.String'> | null;
}
