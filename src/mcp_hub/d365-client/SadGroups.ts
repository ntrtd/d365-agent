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
import type { SadGroupsApi } from './SadGroupsApi';

/**
 * This class represents the entity "SADGroups" of service "d365_metadata".
 */
export class SadGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SadGroupsType<T>
{
  /**
   * Technical entity name for SadGroups.
   */
  static override _entityName = 'SADGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SadGroups entity.
   */
  static _keys = ['dataAreaId', 'SADGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sad Group.
   */
  declare sadGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Duty.
   */
  declare duty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vat Code.
   * @nullable
   */
  declare vatCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excise.
   */
  declare excise: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SadGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface SadGroupsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sadGroup: DeserializedType<T, 'Edm.String'>;
  duty: DeserializedType<T, 'Edm.Decimal'>;
  vatCode?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  excise: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
}
