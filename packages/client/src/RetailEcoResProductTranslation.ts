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
import type { RetailEcoResProductTranslationApi } from './RetailEcoResProductTranslationApi';

/**
 * This class represents the entity "RetailEcoResProductTranslation" of service "d365_metadata".
 */
export class RetailEcoResProductTranslation<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailEcoResProductTranslationType<T>
{
  /**
   * Technical entity name for RetailEcoResProductTranslation.
   */
  static override _entityName = 'RetailEcoResProductTranslation';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailEcoResProductTranslation entity.
   */
  static _keys = ['EcoResProduct_DisplayProductNumber', 'LanguageId'];
  /**
   * Eco Res Product Display Product Number.
   */
  declare ecoResProductDisplayProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product.
   */
  declare product: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailEcoResProductTranslationApi<T>) {
    super(_entityApi);
  }
}

export interface RetailEcoResProductTranslationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  ecoResProductDisplayProductNumber: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  product: DeserializedType<T, 'Edm.Int64'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
