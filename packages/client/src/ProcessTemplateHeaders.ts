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
import type { ProcessTemplateHeadersApi } from './ProcessTemplateHeadersApi';
import { BusinessProcessType } from './BusinessProcessType';
import { BusinessProcessGenericSubtype } from './BusinessProcessGenericSubtype';
import { NoYes } from './NoYes';
import {
  BusinessProcessCalendars,
  BusinessProcessCalendarsType
} from './BusinessProcessCalendars';
import {
  ProcessTemplateTasks,
  ProcessTemplateTasksType
} from './ProcessTemplateTasks';

/**
 * This class represents the entity "ProcessTemplateHeaders" of service "d365_metadata".
 */
export class ProcessTemplateHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProcessTemplateHeadersType<T>
{
  /**
   * Technical entity name for ProcessTemplateHeaders.
   */
  static override _entityName = 'ProcessTemplateHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessTemplateHeaders entity.
   */
  static _keys = ['ProcessType', 'GenericSubtype', 'Name'];
  /**
   * Process Type.
   * @nullable
   */
  declare processType?: BusinessProcessType | null;
  /**
   * Generic Subtype.
   * @nullable
   */
  declare genericSubtype?: BusinessProcessGenericSubtype | null;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calendar Id.
   * @nullable
   */
  declare calendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessProcessCalendars} entity.
   */
  declare businessCalendar?: BusinessProcessCalendars<T> | null;
  /**
   * One-to-many navigation property to the {@link ProcessTemplateTasks} entity.
   */
  declare tasks: ProcessTemplateTasks<T>[];

  constructor(_entityApi: ProcessTemplateHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessTemplateHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  processType?: BusinessProcessType | null;
  genericSubtype?: BusinessProcessGenericSubtype | null;
  name: DeserializedType<T, 'Edm.String'>;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isActive?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  calendarId?: DeserializedType<T, 'Edm.String'> | null;
  businessCalendar?: BusinessProcessCalendarsType<T> | null;
  tasks: ProcessTemplateTasksType<T>[];
}
