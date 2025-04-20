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
import type { WhsMobileWorkMenusApi } from './WhsMobileWorkMenusApi';
import {
  WhsMobileWorkMenuItems,
  WhsMobileWorkMenuItemsType
} from './WhsMobileWorkMenuItems';
import {
  WhsMobileWorkSessions,
  WhsMobileWorkSessionsType
} from './WhsMobileWorkSessions';

/**
 * This class represents the entity "WHSMobileWorkMenus" of service "d365_metadata".
 */
export class WhsMobileWorkMenus<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WhsMobileWorkMenusType<T>
{
  /**
   * Technical entity name for WhsMobileWorkMenus.
   */
  static override _entityName = 'WHSMobileWorkMenus';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WhsMobileWorkMenus entity.
   */
  static _keys = ['RecordId'];
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Session Rec Id.
   */
  declare sessionRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Submission Type.
   * @nullable
   */
  declare submissionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label.
   * @nullable
   */
  declare label?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link WhsMobileWorkMenuItems} entity.
   */
  declare menuItems: WhsMobileWorkMenuItems<T>[];
  /**
   * One-to-one navigation property to the {@link WhsMobileWorkSessions} entity.
   */
  declare session?: WhsMobileWorkSessions<T> | null;

  constructor(_entityApi: WhsMobileWorkMenusApi<T>) {
    super(_entityApi);
  }
}

export interface WhsMobileWorkMenusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  recordId: DeserializedType<T, 'Edm.Int64'>;
  sessionRecId: DeserializedType<T, 'Edm.Int64'>;
  submissionType?: DeserializedType<T, 'Edm.String'> | null;
  label?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  menuItems: WhsMobileWorkMenuItemsType<T>[];
  session?: WhsMobileWorkSessionsType<T> | null;
}
