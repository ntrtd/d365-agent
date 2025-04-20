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
import type { OnboardingWorkerChecklistHeadersApi } from './OnboardingWorkerChecklistHeadersApi';
import { BusinessProcessHeaderStatus } from './BusinessProcessHeaderStatus';
import {
  OnboardingWorkerChecklistTasks,
  OnboardingWorkerChecklistTasksType
} from './OnboardingWorkerChecklistTasks';
import { Employments, EmploymentsType } from './Employments';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "OnboardingWorkerChecklistHeaders" of service "d365_metadata".
 */
export class OnboardingWorkerChecklistHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OnboardingWorkerChecklistHeadersType<T>
{
  /**
   * Technical entity name for OnboardingWorkerChecklistHeaders.
   */
  static override _entityName = 'OnboardingWorkerChecklistHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OnboardingWorkerChecklistHeaders entity.
   */
  static _keys = ['ChecklistId'];
  /**
   * Checklist Id.
   */
  declare checklistId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Checklist End Date.
   */
  declare checklistEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Personnel Number.
   * @nullable
   */
  declare employeePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment End Date.
   */
  declare employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employment Company.
   * @nullable
   */
  declare employmentCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Checklist Start Date.
   */
  declare checklistStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Employment Start Date.
   */
  declare employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Checklist Status.
   * @nullable
   */
  declare checklistStatus?: BusinessProcessHeaderStatus | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Checklist Resolved By.
   * @nullable
   */
  declare checklistResolvedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Owner Personnel Number.
   * @nullable
   */
  declare ownerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link OnboardingWorkerChecklistTasks} entity.
   */
  declare checklistTasks: OnboardingWorkerChecklistTasks<T>[];
  /**
   * One-to-one navigation property to the {@link Employments} entity.
   */
  declare workerEmployment?: Employments<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare checklistOwner?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare resolvingWorker?: Workers<T> | null;

  constructor(_entityApi: OnboardingWorkerChecklistHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface OnboardingWorkerChecklistHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  checklistId: DeserializedType<T, 'Edm.Guid'>;
  checklistEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  employeePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentCompany?: DeserializedType<T, 'Edm.String'> | null;
  checklistStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  checklistStatus?: BusinessProcessHeaderStatus | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  checklistResolvedBy?: DeserializedType<T, 'Edm.String'> | null;
  ownerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  checklistTasks: OnboardingWorkerChecklistTasksType<T>[];
  workerEmployment?: EmploymentsType<T> | null;
  checklistOwner?: WorkersType<T> | null;
  resolvingWorker?: WorkersType<T> | null;
}
