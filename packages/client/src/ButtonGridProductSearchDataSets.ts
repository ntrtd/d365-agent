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
import type { ButtonGridProductSearchDataSetsApi } from './ButtonGridProductSearchDataSetsApi';

/**
 * This class represents the entity "ButtonGridProductSearchDataSets" of service "d365_metadata".
 */
export class ButtonGridProductSearchDataSets<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ButtonGridProductSearchDataSetsType<T>
{
  /**
   * Technical entity name for ButtonGridProductSearchDataSets.
   */
  static override _entityName = 'ButtonGridProductSearchDataSets';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ButtonGridProductSearchDataSets entity.
   */
  static _keys = ['dataAreaId', 'ItemId', 'LanguageId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ButtonGridProductSearchDataSetsApi<T>) {
    super(_entityApi);
  }
}

export interface ButtonGridProductSearchDataSetsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
}
