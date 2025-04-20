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
import type { PayIntV1EmploymentDetailApi } from './PayIntV1EmploymentDetailApi';
import { HcmEmploymentType } from './HcmEmploymentType';
import { BenefitEmploymentStatus } from './BenefitEmploymentStatus';
import { HcmUnitOfNotice } from './HcmUnitOfNotice';

/**
 * This class represents the entity "PayIntV1EmploymentDetail" of service "d365_metadata".
 */
export class PayIntV1EmploymentDetail<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1EmploymentDetailType<T>
{
  /**
   * Technical entity name for PayIntV1EmploymentDetail.
   */
  static override _entityName = 'PayIntV1EmploymentDetail';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1EmploymentDetail entity.
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
   * Worker Notice Amount.
   */
  declare workerNoticeAmount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pay Frequency.
   */
  declare payFrequency: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Employment Type.
   * @nullable
   */
  declare employmentType?: HcmEmploymentType | null;
  /**
   * Employment Category Id.
   * @nullable
   */
  declare employmentCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Date Worked.
   */
  declare lastDateWorked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pay Frequency Id.
   * @nullable
   */
  declare payFrequencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employer Notice Amount.
   */
  declare employerNoticeAmount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reason Code Id.
   */
  declare reasonCodeId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Employment Type Id.
   * @nullable
   */
  declare employmentTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transistion Date.
   */
  declare transistionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Benefit Employment Status.
   * @nullable
   */
  declare benefitEmploymentStatus?: BenefitEmploymentStatus | null;
  /**
   * Employer Unit Of Notice.
   * @nullable
   */
  declare employerUnitOfNotice?: HcmUnitOfNotice | null;
  /**
   * Adjusted Worker Start Date.
   */
  declare adjustedWorkerStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Start Date.
   */
  declare workerStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Unit Of Notice.
   * @nullable
   */
  declare workerUnitOfNotice?: HcmUnitOfNotice | null;

  constructor(_entityApi: PayIntV1EmploymentDetailApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1EmploymentDetailType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerNoticeAmount: DeserializedType<T, 'Edm.Int32'>;
  payFrequency: DeserializedType<T, 'Edm.Int64'>;
  employmentType?: HcmEmploymentType | null;
  employmentCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  lastDateWorked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  payFrequencyId?: DeserializedType<T, 'Edm.String'> | null;
  employerNoticeAmount: DeserializedType<T, 'Edm.Int32'>;
  reasonCodeId: DeserializedType<T, 'Edm.Int64'>;
  employmentTypeId?: DeserializedType<T, 'Edm.String'> | null;
  transistionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  benefitEmploymentStatus?: BenefitEmploymentStatus | null;
  employerUnitOfNotice?: HcmUnitOfNotice | null;
  adjustedWorkerStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerUnitOfNotice?: HcmUnitOfNotice | null;
}
