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
import type { WhsMobileWorkMenuItemsApi } from './WhsMobileWorkMenuItemsApi';
import {
  WhsMobileWorkMenus,
  WhsMobileWorkMenusType
} from './WhsMobileWorkMenus';

/**
 * This class represents the entity "WHSMobileWorkMenuItems" of service "d365_metadata".
 */
export class WhsMobileWorkMenuItems<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WhsMobileWorkMenuItemsType<T>
{
  /**
   * Technical entity name for WhsMobileWorkMenuItems.
   */
  static override _entityName = 'WHSMobileWorkMenuItems';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WhsMobileWorkMenuItems entity.
   */
  static _keys = ['RecordId'];
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Label.
   * @nullable
   */
  declare label?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Menu Rec Id.
   */
  declare menuRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link WhsMobileWorkMenus} entity.
   */
  declare menu?: WhsMobileWorkMenus<T> | null;

  constructor(_entityApi: WhsMobileWorkMenuItemsApi<T>) {
    super(_entityApi);
  }
}

export interface WhsMobileWorkMenuItemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  recordId: DeserializedType<T, 'Edm.Int64'>;
  label?: DeserializedType<T, 'Edm.String'> | null;
  menuRecId: DeserializedType<T, 'Edm.Int64'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  menu?: WhsMobileWorkMenusType<T> | null;
}
