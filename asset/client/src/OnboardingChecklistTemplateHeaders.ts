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
import type { OnboardingChecklistTemplateHeadersApi } from './OnboardingChecklistTemplateHeadersApi';
import { Workers, WorkersType } from './Workers';
import {
  BusinessProcessCalendars,
  BusinessProcessCalendarsType
} from './BusinessProcessCalendars';
import {
  OnboardingChecklistTemplateTasks,
  OnboardingChecklistTemplateTasksType
} from './OnboardingChecklistTemplateTasks';

/**
 * This class represents the entity "OnboardingChecklistTemplateHeaders" of service "d365_metadata".
 */
export class OnboardingChecklistTemplateHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OnboardingChecklistTemplateHeadersType<T>
{
  /**
   * Technical entity name for OnboardingChecklistTemplateHeaders.
   */
  static override _entityName = 'OnboardingChecklistTemplateHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OnboardingChecklistTemplateHeaders entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Owner Personnel Number.
   * @nullable
   */
  declare ownerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare checklistTemplateOwner?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessProcessCalendars} entity.
   */
  declare checklistCalendar?: BusinessProcessCalendars<T> | null;
  /**
   * One-to-many navigation property to the {@link OnboardingChecklistTemplateTasks} entity.
   */
  declare checklistTemplateTasks: OnboardingChecklistTemplateTasks<T>[];

  constructor(_entityApi: OnboardingChecklistTemplateHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface OnboardingChecklistTemplateHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  ownerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  calendarId?: DeserializedType<T, 'Edm.String'> | null;
  checklistTemplateOwner?: WorkersType<T> | null;
  checklistCalendar?: BusinessProcessCalendarsType<T> | null;
  checklistTemplateTasks: OnboardingChecklistTemplateTasksType<T>[];
}
