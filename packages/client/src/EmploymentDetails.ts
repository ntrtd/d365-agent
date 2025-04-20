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
import type { EmploymentDetailsApi } from './EmploymentDetailsApi';
import { HcmEmploymentType } from './HcmEmploymentType';
import { HcmUnitOfNotice } from './HcmUnitOfNotice';
import { BenefitEmploymentStatus } from './BenefitEmploymentStatus';
import { EmploymentsV2, EmploymentsV2Type } from './EmploymentsV2';
import { ReasonCodes, ReasonCodesType } from './ReasonCodes';
import {
  EmploymentCategories,
  EmploymentCategoriesType
} from './EmploymentCategories';
import {
  PayrollEmployeesV2,
  PayrollEmployeesV2Type
} from './PayrollEmployeesV2';
import { PayrollEmployees, PayrollEmployeesType } from './PayrollEmployees';

/**
 * This class represents the entity "EmploymentDetails" of service "d365_metadata".
 */
export class EmploymentDetails<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmploymentDetailsType<T>
{
  /**
   * Technical entity name for EmploymentDetails.
   */
  static override _entityName = 'EmploymentDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmploymentDetails entity.
   */
  static _keys = [
    'PersonnelNumber',
    'LegalEntityId',
    'EmploymentStartDate',
    'EmploymentEndDate',
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
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reason Code Id.
   * @nullable
   */
  declare reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Type.
   * @nullable
   */
  declare employmentType?: HcmEmploymentType | null;
  /**
   * Employer Unit Of Notice.
   * @nullable
   */
  declare employerUnitOfNotice?: HcmUnitOfNotice | null;
  /**
   * Worker Start Date.
   */
  declare workerStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transition Date.
   */
  declare transitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Unit Of Notice.
   * @nullable
   */
  declare workerUnitOfNotice?: HcmUnitOfNotice | null;
  /**
   * Employer Notice Amount.
   */
  declare employerNoticeAmount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Adjusted Worker Start Date.
   */
  declare adjustedWorkerStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Notice Amount.
   */
  declare workerNoticeAmount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Benefit Employment Status.
   * @nullable
   */
  declare benefitEmploymentStatus?: BenefitEmploymentStatus | null;
  /**
   * Last Date Worked.
   */
  declare lastDateWorked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employment Category Id.
   * @nullable
   */
  declare employmentCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Type Id.
   * @nullable
   */
  declare employmentTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Frequency Id.
   * @nullable
   */
  declare payFrequencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link EmploymentsV2} entity.
   */
  declare employment?: EmploymentsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare reasonCode?: ReasonCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link EmploymentCategories} entity.
   */
  declare employmentCategory?: EmploymentCategories<T> | null;
  /**
   * One-to-one navigation property to the {@link PayrollEmployeesV2} entity.
   */
  declare payrollEmployeeV2?: PayrollEmployeesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link PayrollEmployees} entity.
   */
  declare payrollEmployee?: PayrollEmployees<T> | null;

  constructor(_entityApi: EmploymentDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface EmploymentDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  employmentType?: HcmEmploymentType | null;
  employerUnitOfNotice?: HcmUnitOfNotice | null;
  workerStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerUnitOfNotice?: HcmUnitOfNotice | null;
  employerNoticeAmount: DeserializedType<T, 'Edm.Int32'>;
  adjustedWorkerStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerNoticeAmount: DeserializedType<T, 'Edm.Int32'>;
  benefitEmploymentStatus?: BenefitEmploymentStatus | null;
  lastDateWorked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  employmentTypeId?: DeserializedType<T, 'Edm.String'> | null;
  payFrequencyId?: DeserializedType<T, 'Edm.String'> | null;
  employment?: EmploymentsV2Type<T> | null;
  reasonCode?: ReasonCodesType<T> | null;
  employmentCategory?: EmploymentCategoriesType<T> | null;
  payrollEmployeeV2?: PayrollEmployeesV2Type<T> | null;
  payrollEmployee?: PayrollEmployeesType<T> | null;
}
