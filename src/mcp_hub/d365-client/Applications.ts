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
import type { ApplicationsApi } from './ApplicationsApi';
import { HrmApplicationStatus } from './HrmApplicationStatus';
import { HrmApplicantRating } from './HrmApplicantRating';
import { HrmApplicationBasketCreatedSource } from './HrmApplicationBasketCreatedSource';
import { HrmApplicationCorrespondanceAction } from './HrmApplicationCorrespondanceAction';
import { Applicants, ApplicantsType } from './Applicants';
import { Jobs, JobsType } from './Jobs';
import { Departments, DepartmentsType } from './Departments';
import { ReasonCodes, ReasonCodesType } from './ReasonCodes';
import { Workers, WorkersType } from './Workers';
import { Media, MediaType } from './Media';

/**
 * This class represents the entity "Applications" of service "d365_metadata".
 */
export class Applications<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApplicationsType<T>
{
  /**
   * Technical entity name for Applications.
   */
  static override _entityName = 'Applications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Applications entity.
   */
  static _keys = ['dataAreaId', 'Application'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Application.
   */
  declare application: DeserializedType<T, 'Edm.String'>;
  /**
   * Travel Cost.
   */
  declare travelCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Other Cost.
   */
  declare otherCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Date Of Receipt.
   */
  declare dateOfReceipt: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Department Id.
   * @nullable
   */
  declare departmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: HrmApplicationStatus | null;
  /**
   * Recruitment Project.
   * @nullable
   */
  declare recruitmentProject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Id.
   * @nullable
   */
  declare contactId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Id.
   * @nullable
   */
  declare jobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Applicant Id.
   * @nullable
   */
  declare applicantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Media.
   * @nullable
   */
  declare media?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rating.
   * @nullable
   */
  declare rating?: HrmApplicantRating | null;
  /**
   * Expire Date.
   */
  declare expireDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created Source.
   * @nullable
   */
  declare createdSource?: HrmApplicationBasketCreatedSource | null;
  /**
   * Reason Code Id.
   * @nullable
   */
  declare reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correspondence Action.
   * @nullable
   */
  declare correspondenceAction?: HrmApplicationCorrespondanceAction | null;
  /**
   * Start Date And Time.
   */
  declare startDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Lodging Cost.
   */
  declare lodgingCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link Applicants} entity.
   */
  declare hcmApplicant?: Applicants<T> | null;
  /**
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;
  /**
   * One-to-one navigation property to the {@link Departments} entity.
   */
  declare department?: Departments<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare reasonCode?: ReasonCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare hiringManager?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link Media} entity.
   */
  declare sourceMedia?: Media<T> | null;

  constructor(_entityApi: ApplicationsApi<T>) {
    super(_entityApi);
  }
}

export interface ApplicationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  application: DeserializedType<T, 'Edm.String'>;
  travelCost: DeserializedType<T, 'Edm.Decimal'>;
  otherCost: DeserializedType<T, 'Edm.Decimal'>;
  dateOfReceipt: DeserializedType<T, 'Edm.DateTimeOffset'>;
  departmentId?: DeserializedType<T, 'Edm.String'> | null;
  status?: HrmApplicationStatus | null;
  recruitmentProject?: DeserializedType<T, 'Edm.String'> | null;
  contactId?: DeserializedType<T, 'Edm.String'> | null;
  jobId?: DeserializedType<T, 'Edm.String'> | null;
  applicantId?: DeserializedType<T, 'Edm.String'> | null;
  media?: DeserializedType<T, 'Edm.String'> | null;
  rating?: HrmApplicantRating | null;
  expireDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdSource?: HrmApplicationBasketCreatedSource | null;
  reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  correspondenceAction?: HrmApplicationCorrespondanceAction | null;
  startDateAndTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lodgingCost: DeserializedType<T, 'Edm.Decimal'>;
  hcmApplicant?: ApplicantsType<T> | null;
  job?: JobsType<T> | null;
  department?: DepartmentsType<T> | null;
  reasonCode?: ReasonCodesType<T> | null;
  hiringManager?: WorkersType<T> | null;
  sourceMedia?: MediaType<T> | null;
}
