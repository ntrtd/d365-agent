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
import type { VeteranStatusesApi } from './VeteranStatusesApi';
import { NoYes } from './NoYes';
import { Workers, WorkersType } from './Workers';
import { Employees, EmployeesType } from './Employees';
import { Applicants, ApplicantsType } from './Applicants';
import { ContractorsV2, ContractorsV2Type } from './ContractorsV2';
import {
  WorkerPersonDetails,
  WorkerPersonDetailsType
} from './WorkerPersonDetails';
import {
  PayIntV1HcmPersonDetails,
  PayIntV1HcmPersonDetailsType
} from './PayIntV1HcmPersonDetails';
import { PersonDetails, PersonDetailsType } from './PersonDetails';
import { Contractors, ContractorsType } from './Contractors';
import { CandidatesToHire, CandidatesToHireType } from './CandidatesToHire';
import { EmployeesV2, EmployeesV2Type } from './EmployeesV2';

/**
 * This class represents the entity "VeteranStatuses" of service "d365_metadata".
 */
export class VeteranStatuses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VeteranStatusesType<T>
{
  /**
   * Technical entity name for VeteranStatuses.
   */
  static override _entityName = 'VeteranStatuses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VeteranStatuses entity.
   */
  static _keys = ['VeteranStatusId'];
  /**
   * Veteran Status Id.
   */
  declare veteranStatusId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Protected Veteran.
   * @nullable
   */
  declare isProtectedVeteran?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Workers} entity.
   */
  declare workers: Workers<T>[];
  /**
   * One-to-many navigation property to the {@link Employees} entity.
   */
  declare employees: Employees<T>[];
  /**
   * One-to-many navigation property to the {@link Applicants} entity.
   */
  declare applicants: Applicants<T>[];
  /**
   * One-to-many navigation property to the {@link ContractorsV2} entity.
   */
  declare contractorsV2: ContractorsV2<T>[];
  /**
   * One-to-many navigation property to the {@link WorkerPersonDetails} entity.
   */
  declare workerPersonDetails: WorkerPersonDetails<T>[];
  /**
   * One-to-many navigation property to the {@link PayIntV1HcmPersonDetails} entity.
   */
  declare payIntPersonDetails: PayIntV1HcmPersonDetails<T>[];
  /**
   * One-to-many navigation property to the {@link PersonDetails} entity.
   */
  declare personDetails: PersonDetails<T>[];
  /**
   * One-to-many navigation property to the {@link Contractors} entity.
   */
  declare contractors: Contractors<T>[];
  /**
   * One-to-many navigation property to the {@link CandidatesToHire} entity.
   */
  declare candidatesToHire: CandidatesToHire<T>[];
  /**
   * One-to-many navigation property to the {@link EmployeesV2} entity.
   */
  declare employeesV2: EmployeesV2<T>[];

  constructor(_entityApi: VeteranStatusesApi<T>) {
    super(_entityApi);
  }
}

export interface VeteranStatusesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  veteranStatusId: DeserializedType<T, 'Edm.String'>;
  isProtectedVeteran?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  workers: WorkersType<T>[];
  employees: EmployeesType<T>[];
  applicants: ApplicantsType<T>[];
  contractorsV2: ContractorsV2Type<T>[];
  workerPersonDetails: WorkerPersonDetailsType<T>[];
  payIntPersonDetails: PayIntV1HcmPersonDetailsType<T>[];
  personDetails: PersonDetailsType<T>[];
  contractors: ContractorsType<T>[];
  candidatesToHire: CandidatesToHireType<T>[];
  employeesV2: EmployeesV2Type<T>[];
}
