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
import type { ItemShipTxtTranslationsApi } from './ItemShipTxtTranslationsApi';

/**
 * This class represents the entity "ItemShipTxtTranslations" of service "d365_metadata".
 */
export class ItemShipTxtTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemShipTxtTranslationsType<T>
{
  /**
   * Technical entity name for ItemShipTxtTranslations.
   */
  static override _entityName = 'ItemShipTxtTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemShipTxtTranslations entity.
   */
  static _keys = ['dataAreaId', 'LanguageId', 'Material'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Material.
   */
  declare material: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Shipping Print Text.
   * @nullable
   */
  declare shippingPrintText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reg Code.
   * @nullable
   */
  declare regCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ItemShipTxtTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface ItemShipTxtTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  material: DeserializedType<T, 'Edm.Int64'>;
  shippingPrintText?: DeserializedType<T, 'Edm.String'> | null;
  regCode?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
}
