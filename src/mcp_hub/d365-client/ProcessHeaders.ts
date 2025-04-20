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
import type { ProcessHeadersApi } from './ProcessHeadersApi';
import { BusinessProcessType } from './BusinessProcessType';
import { BusinessProcessGenericSubtype } from './BusinessProcessGenericSubtype';
import { BusinessProcessHeaderStatus } from './BusinessProcessHeaderStatus';
import {
  OnboardProcessHeadersDualWrite,
  OnboardProcessHeadersDualWriteType
} from './OnboardProcessHeadersDualWrite';
import { ProcessTasks, ProcessTasksType } from './ProcessTasks';

/**
 * This class represents the entity "ProcessHeaders" of service "d365_metadata".
 */
export class ProcessHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProcessHeadersType<T>
{
  /**
   * Technical entity name for ProcessHeaders.
   */
  static override _entityName = 'ProcessHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessHeaders entity.
   */
  static _keys = ['ProcessId'];
  /**
   * Process Id.
   */
  declare processId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resolved By Personnel Number.
   * @nullable
   */
  declare resolvedByPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Template Process Type.
   * @nullable
   */
  declare sourceTemplateProcessType?: BusinessProcessType | null;
  /**
   * Start Date Time.
   */
  declare startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Process Type.
   * @nullable
   */
  declare processType?: BusinessProcessType | null;
  /**
   * End Date Time.
   */
  declare endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Process Owner Personnel Number.
   * @nullable
   */
  declare processOwnerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Target Date.
   */
  declare targetDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Template Name.
   * @nullable
   */
  declare sourceTemplateName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Template Generic Subtype.
   * @nullable
   */
  declare sourceTemplateGenericSubtype?: BusinessProcessGenericSubtype | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: BusinessProcessHeaderStatus | null;
  /**
   * Generic Subtype.
   * @nullable
   */
  declare genericSubtype?: BusinessProcessGenericSubtype | null;
  /**
   * One-to-one navigation property to the {@link OnboardProcessHeadersDualWrite} entity.
   */
  declare processes?: OnboardProcessHeadersDualWrite<T> | null;
  /**
   * One-to-many navigation property to the {@link ProcessTasks} entity.
   */
  declare tasks: ProcessTasks<T>[];

  constructor(_entityApi: ProcessHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  processId: DeserializedType<T, 'Edm.Guid'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  resolvedByPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  sourceTemplateProcessType?: BusinessProcessType | null;
  startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  processType?: BusinessProcessType | null;
  endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  processOwnerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  targetDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceTemplateName?: DeserializedType<T, 'Edm.String'> | null;
  sourceTemplateGenericSubtype?: BusinessProcessGenericSubtype | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  status?: BusinessProcessHeaderStatus | null;
  genericSubtype?: BusinessProcessGenericSubtype | null;
  processes?: OnboardProcessHeadersDualWriteType<T> | null;
  tasks: ProcessTasksType<T>[];
}
