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
import type { CreditCardCodesApi } from './CreditCardCodesApi';

/**
 * This class represents the entity "CreditCardCodes" of service "d365_metadata".
 */
export class CreditCardCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CreditCardCodesType<T>
{
  /**
   * Technical entity name for CreditCardCodes.
   */
  static override _entityName = 'CreditCardCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CreditCardCodes entity.
   */
  static _keys = ['dataAreaId', 'Category', 'CardType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category.
   */
  declare category: DeserializedType<T, 'Edm.String'>;
  /**
   * Card Type.
   */
  declare cardType: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Category.
   * @nullable
   */
  declare expenseCategory?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CreditCardCodesApi<T>) {
    super(_entityApi);
  }
}

export interface CreditCardCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  category: DeserializedType<T, 'Edm.String'>;
  cardType: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  expenseCategory?: DeserializedType<T, 'Edm.String'> | null;
}
