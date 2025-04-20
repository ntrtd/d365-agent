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
import type { RecruitingProjectsApi } from './RecruitingProjectsApi';
import { HrmRecruitingStatus } from './HrmRecruitingStatus';
import { NoYes } from './NoYes';
import { Workers, WorkersType } from './Workers';
import { Jobs, JobsType } from './Jobs';
import { Departments, DepartmentsType } from './Departments';
import { OperatingUnits, OperatingUnitsType } from './OperatingUnits';
import { RecruitingMedias, RecruitingMediasType } from './RecruitingMedias';

/**
 * This class represents the entity "RecruitingProjects" of service "d365_metadata".
 */
export class RecruitingProjects<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RecruitingProjectsType<T>
{
  /**
   * Technical entity name for RecruitingProjects.
   */
  static override _entityName = 'RecruitingProjects';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RecruitingProjects entity.
   */
  static _keys = ['dataAreaId', 'RecruitmentProject'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Recruitment Project.
   */
  declare recruitmentProject: DeserializedType<T, 'Edm.String'>;
  /**
   * Requisition Approved On.
   */
  declare requisitionApprovedOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Application Deadline.
   */
  declare applicationDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Project Status.
   * @nullable
   */
  declare projectStatus?: HrmRecruitingStatus | null;
  /**
   * Department Number.
   * @nullable
   */
  declare departmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Id.
   * @nullable
   */
  declare jobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative Contact Personnel Number.
   * @nullable
   */
  declare alternativeContactPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Number Of Openings.
   */
  declare numberOfOpenings: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Estimated Start Date.
   */
  declare estimatedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Recruiter Personnel Number.
   * @nullable
   */
  declare recruiterPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hiring Manager Personnel Number.
   * @nullable
   */
  declare hiringManagerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Display On Employe Self Service.
   * @nullable
   */
  declare displayOnEmployeSelfService?: NoYes | null;
  /**
   * Close Date.
   */
  declare closeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Job Ad Text.
   * @nullable
   */
  declare jobAdText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Open Date.
   */
  declare openDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare hiringManagerWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link Jobs} entity.
   */
  declare job?: Jobs<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare recruiterWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link Departments} entity.
   */
  declare department?: Departments<T> | null;
  /**
   * One-to-one navigation property to the {@link OperatingUnits} entity.
   */
  declare omOperatingUnit?: OperatingUnits<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare alternateWorkerContact?: Workers<T> | null;
  /**
   * One-to-many navigation property to the {@link RecruitingMedias} entity.
   */
  declare recruitingMedia: RecruitingMedias<T>[];

  constructor(_entityApi: RecruitingProjectsApi<T>) {
    super(_entityApi);
  }
}

export interface RecruitingProjectsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recruitmentProject: DeserializedType<T, 'Edm.String'>;
  requisitionApprovedOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  applicationDeadline: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectStatus?: HrmRecruitingStatus | null;
  departmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  jobId?: DeserializedType<T, 'Edm.String'> | null;
  alternativeContactPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  numberOfOpenings: DeserializedType<T, 'Edm.Decimal'>;
  estimatedStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  recruiterPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  hiringManagerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  displayOnEmployeSelfService?: NoYes | null;
  closeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  jobAdText?: DeserializedType<T, 'Edm.String'> | null;
  openDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  hiringManagerWorker?: WorkersType<T> | null;
  job?: JobsType<T> | null;
  recruiterWorker?: WorkersType<T> | null;
  department?: DepartmentsType<T> | null;
  omOperatingUnit?: OperatingUnitsType<T> | null;
  alternateWorkerContact?: WorkersType<T> | null;
  recruitingMedia: RecruitingMediasType<T>[];
}
