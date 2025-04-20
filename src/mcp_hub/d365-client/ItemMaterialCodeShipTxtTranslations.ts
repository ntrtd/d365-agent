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
import type { ItemMaterialCodeShipTxtTranslationsApi } from './ItemMaterialCodeShipTxtTranslationsApi';

/**
 * This class represents the entity "ItemMaterialCodeShipTxtTranslations" of service "d365_metadata".
 */
export class ItemMaterialCodeShipTxtTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemMaterialCodeShipTxtTranslationsType<T>
{
  /**
   * Technical entity name for ItemMaterialCodeShipTxtTranslations.
   */
  static override _entityName = 'ItemMaterialCodeShipTxtTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemMaterialCodeShipTxtTranslations entity.
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
   * Material Code.
   * @nullable
   */
  declare materialCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Print Text.
   * @nullable
   */
  declare shippingPrintText?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ItemMaterialCodeShipTxtTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface ItemMaterialCodeShipTxtTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  material: DeserializedType<T, 'Edm.Int64'>;
  materialCode?: DeserializedType<T, 'Edm.String'> | null;
  shippingPrintText?: DeserializedType<T, 'Edm.String'> | null;
}
