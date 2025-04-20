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
import type { PayrollEmployeesV2Api } from './PayrollEmployeesV2Api';
import { HcmPersonGender } from './HcmPersonGender';
import { HcmEmploymentType } from './HcmEmploymentType';
import { NoYes } from './NoYes';
import {
  PersonIdentificationNumbers,
  PersonIdentificationNumbersType
} from './PersonIdentificationNumbers';
import { EmployeesV2, EmployeesV2Type } from './EmployeesV2';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';
import { EmploymentDetails, EmploymentDetailsType } from './EmploymentDetails';

/**
 * This class represents the entity "PayrollEmployeesV2" of service "d365_metadata".
 */
export class PayrollEmployeesV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayrollEmployeesV2Type<T>
{
  /**
   * Technical entity name for PayrollEmployeesV2.
   */
  static override _entityName = 'PayrollEmployeesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayrollEmployeesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'PersonnelNumber',
    'LegalEntityId',
    'EmploymentStartDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
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
   * Birth Date.
   */
  declare birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ready To Pay.
   * @nullable
   */
  declare readyToPay?: NoYes | null;
  /**
   * Employment Id.
   * @nullable
   */
  declare employmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identification Type Id.
   * @nullable
   */
  declare identificationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link PersonIdentificationNumbers} entity.
   */
  declare personIdentificationNumber?: PersonIdentificationNumbers<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeesV2} entity.
   */
  declare employeeV2?: EmployeesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link BaseWorkers} entity.
   */
  declare baseWorker?: BaseWorkers<T> | null;
  /**
   * One-to-many navigation property to the {@link EmploymentDetails} entity.
   */
  declare employmentDetail: EmploymentDetails<T>[];

  constructor(_entityApi: PayrollEmployeesV2Api<T>) {
    super(_entityApi);
  }
}

export interface PayrollEmployeesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  gender?: HcmPersonGender | null;
  identificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  employmentType?: HcmEmploymentType | null;
  employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  birthDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  readyToPay?: NoYes | null;
  employmentId?: DeserializedType<T, 'Edm.String'> | null;
  identificationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  personIdentificationNumber?: PersonIdentificationNumbersType<T> | null;
  employeeV2?: EmployeesV2Type<T> | null;
  baseWorker?: BaseWorkersType<T> | null;
  employmentDetail: EmploymentDetailsType<T>[];
}
