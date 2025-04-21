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
import type { CardTypesApi } from './CardTypesApi';

/**
 * This class represents the entity "CardTypes" of service "d365_metadata".
 */
export class CardTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CardTypesType<T>
{
  /**
   * Technical entity name for CardTypes.
   */
  static override _entityName = 'CardTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CardTypes entity.
   */
  static _keys = ['dataAreaId', 'TrvCreditCardType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trv Credit Card Type.
   */
  declare trvCreditCardType: DeserializedType<T, 'Edm.String'>;
  /**
   * Trv Credit Card Desc.
   * @nullable
   */
  declare trvCreditCardDesc?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CardTypesApi<T>) {
    super(_entityApi);
  }
}

export interface CardTypesType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  trvCreditCardType: DeserializedType<T, 'Edm.String'>;
  trvCreditCardDesc?: DeserializedType<T, 'Edm.String'> | null;
}
