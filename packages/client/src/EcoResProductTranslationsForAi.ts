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
import type { EcoResProductTranslationsForAiApi } from './EcoResProductTranslationsForAiApi';
import {
  ReleasedProductsForAi,
  ReleasedProductsForAiType
} from './ReleasedProductsForAi';

/**
 * This class represents the entity "EcoResProductTranslationsForAI" of service "d365_metadata".
 */
export class EcoResProductTranslationsForAi<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EcoResProductTranslationsForAiType<T>
{
  /**
   * Technical entity name for EcoResProductTranslationsForAi.
   */
  static override _entityName = 'EcoResProductTranslationsForAI';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EcoResProductTranslationsForAi entity.
   */
  static _keys = ['ProductKey', 'LanguageId'];
  /**
   * Product Key.
   */
  declare productKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsForAi} entity.
   */
  declare releasedProductAiEntity?: ReleasedProductsForAi<T> | null;

  constructor(_entityApi: EcoResProductTranslationsForAiApi<T>) {
    super(_entityApi);
  }
}

export interface EcoResProductTranslationsForAiType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productKey: DeserializedType<T, 'Edm.Int64'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  releasedProductAiEntity?: ReleasedProductsForAiType<T> | null;
}
