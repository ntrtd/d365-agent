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
import type { EmploymentsPerCompanyApi } from './EmploymentsPerCompanyApi';
import { HcmUnitOfNotice } from './HcmUnitOfNotice';
import { HcmEmploymentType } from './HcmEmploymentType';
import {
  RegulatoryEstablishmentDetails,
  RegulatoryEstablishmentDetailsType
} from './RegulatoryEstablishmentDetails';
import { ReasonCodes, ReasonCodesType } from './ReasonCodes';
import { Workers, WorkersType } from './Workers';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "EmploymentsPerCompany" of service "d365_metadata".
 */
export class EmploymentsPerCompany<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EmploymentsPerCompanyType<T>
{
  /**
   * Technical entity name for EmploymentsPerCompany.
   */
  static override _entityName = 'EmploymentsPerCompany';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmploymentsPerCompany entity.
   */
  static _keys = ['dataAreaId', 'PersonnelNumber', 'EmploymentStartDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Employment Start Date.
   */
  declare employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Notice Amount.
   */
  declare workerNoticeAmount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Employment Employee Valid From.
   */
  declare employmentEmployeeValidFrom: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Employment Employee Valid To.
   */
  declare employmentEmployeeValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transition Reason Code.
   */
  declare transitionReasonCode: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employment End Date.
   */
  declare employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transition Date.
   */
  declare transitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Last Date Worked.
   */
  declare lastDateWorked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transition Reason Code Name.
   * @nullable
   */
  declare transitionReasonCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employer Notice Amount.
   */
  declare employerNoticeAmount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Regulatory Establishment Id.
   * @nullable
   */
  declare regulatoryEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Probation End Date.
   */
  declare probationEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Worker Type.
   * @nullable
   */
  declare workerType?: HcmEmploymentType | null;
  /**
   * Worker Unit Of Notice.
   * @nullable
   */
  declare workerUnitOfNotice?: HcmUnitOfNotice | null;
  /**
   * One-to-one navigation property to the {@link RegulatoryEstablishmentDetails} entity.
   */
  declare regulatoryEstablishmentDetail?: RegulatoryEstablishmentDetails<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare reasonCodes?: ReasonCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: EmploymentsPerCompanyApi<T>) {
    super(_entityApi);
  }
}

export interface EmploymentsPerCompanyType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerNoticeAmount: DeserializedType<T, 'Edm.Int32'>;
  employmentEmployeeValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentEmployeeValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transitionReasonCode: DeserializedType<T, 'Edm.Int64'>;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transitionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lastDateWorked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transitionReasonCodeName?: DeserializedType<T, 'Edm.String'> | null;
  employerNoticeAmount: DeserializedType<T, 'Edm.Int32'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  regulatoryEstablishmentId?: DeserializedType<T, 'Edm.String'> | null;
  employerUnitOfNotice?: HcmUnitOfNotice | null;
  adjustedWorkerStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  probationEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workerType?: HcmEmploymentType | null;
  workerUnitOfNotice?: HcmUnitOfNotice | null;
  regulatoryEstablishmentDetail?: RegulatoryEstablishmentDetailsType<T> | null;
  reasonCodes?: ReasonCodesType<T> | null;
  worker?: WorkersType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
