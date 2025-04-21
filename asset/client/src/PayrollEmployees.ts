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
import type { PayrollEmployeesApi } from './PayrollEmployeesApi';
import { HcmPersonGender } from './HcmPersonGender';
import { HcmEmploymentType } from './HcmEmploymentType';
import { NoYes } from './NoYes';
import {
  PayrollFixedCompensationPlans,
  PayrollFixedCompensationPlansType
} from './PayrollFixedCompensationPlans';
import { EmploymentDetails, EmploymentDetailsType } from './EmploymentDetails';
import {
  IntV1PayrollFixedCompensationPlans,
  IntV1PayrollFixedCompensationPlansType
} from './IntV1PayrollFixedCompensationPlans';
import {
  WorkerBankAccounts,
  WorkerBankAccountsType
} from './WorkerBankAccounts';
import {
  PayrollVariableCompensationAwards,
  PayrollVariableCompensationAwardsType
} from './PayrollVariableCompensationAwards';
import {
  PayrollWorkerAddresses,
  PayrollWorkerAddressesType
} from './PayrollWorkerAddresses';
import { BaseWorkers, BaseWorkersType } from './BaseWorkers';
import {
  PersonIdentificationNumbers,
  PersonIdentificationNumbersType
} from './PersonIdentificationNumbers';
import {
  PersonHistoricalNames,
  PersonHistoricalNamesType
} from './PersonHistoricalNames';
import { EmployeesV2, EmployeesV2Type } from './EmployeesV2';

/**
 * This class represents the entity "PayrollEmployees" of service "d365_metadata".
 */
export class PayrollEmployees<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayrollEmployeesType<T>
{
  /**
   * Technical entity name for PayrollEmployees.
   */
  static override _entityName = 'PayrollEmployees';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayrollEmployees entity.
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
   * Identification Type Id.
   * @nullable
   */
  declare identificationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PayrollFixedCompensationPlans} entity.
   */
  declare payrollFixedCompensationPlan: PayrollFixedCompensationPlans<T>[];
  /**
   * One-to-many navigation property to the {@link EmploymentDetails} entity.
   */
  declare employmentDetail: EmploymentDetails<T>[];
  /**
   * One-to-many navigation property to the {@link IntV1PayrollFixedCompensationPlans} entity.
   */
  declare intV1PayrollFixedCompensationPlan: IntV1PayrollFixedCompensationPlans<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerBankAccounts} entity.
   */
  declare workerBankAccount: WorkerBankAccounts<T>[];
  /**
   * One-to-one navigation property to the {@link PayrollVariableCompensationAwards} entity.
   */
  declare payrollVariableCompensationAward?: PayrollVariableCompensationAwards<T> | null;
  /**
   * One-to-many navigation property to the {@link PayrollWorkerAddresses} entity.
   */
  declare payrollWorkerAddress: PayrollWorkerAddresses<T>[];
  /**
   * One-to-many navigation property to the {@link BaseWorkers} entity.
   */
  declare baseWorker: BaseWorkers<T>[];
  /**
   * One-to-one navigation property to the {@link PersonIdentificationNumbers} entity.
   */
  declare personIdentificationNumber?: PersonIdentificationNumbers<T> | null;
  /**
   * One-to-one navigation property to the {@link PersonHistoricalNames} entity.
   */
  declare personHistoricalName?: PersonHistoricalNames<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeesV2} entity.
   */
  declare employeeV2?: EmployeesV2<T> | null;

  constructor(_entityApi: PayrollEmployeesApi<T>) {
    super(_entityApi);
  }
}

export interface PayrollEmployeesType<
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
  identificationTypeId?: DeserializedType<T, 'Edm.String'> | null;
  payrollFixedCompensationPlan: PayrollFixedCompensationPlansType<T>[];
  employmentDetail: EmploymentDetailsType<T>[];
  intV1PayrollFixedCompensationPlan: IntV1PayrollFixedCompensationPlansType<T>[];
  workerBankAccount: WorkerBankAccountsType<T>[];
  payrollVariableCompensationAward?: PayrollVariableCompensationAwardsType<T> | null;
  payrollWorkerAddress: PayrollWorkerAddressesType<T>[];
  baseWorker: BaseWorkersType<T>[];
  personIdentificationNumber?: PersonIdentificationNumbersType<T> | null;
  personHistoricalName?: PersonHistoricalNamesType<T> | null;
  employeeV2?: EmployeesV2Type<T> | null;
}
