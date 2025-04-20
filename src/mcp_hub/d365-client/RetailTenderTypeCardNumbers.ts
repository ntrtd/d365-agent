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
import type { RetailTenderTypeCardNumbersApi } from './RetailTenderTypeCardNumbersApi';

/**
 * This class represents the entity "RetailTenderTypeCardNumbers" of service "d365_metadata".
 */
export class RetailTenderTypeCardNumbers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTenderTypeCardNumbersType<T>
{
  /**
   * Technical entity name for RetailTenderTypeCardNumbers.
   */
  static override _entityName = 'RetailTenderTypeCardNumbers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTenderTypeCardNumbers entity.
   */
  static _keys = [
    'CardTypeId',
    'CardNumberFrom',
    'CardNumberTo',
    'CardNumberLength'
  ];
  /**
   * Card Type Id.
   */
  declare cardTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Card Number From.
   */
  declare cardNumberFrom: DeserializedType<T, 'Edm.String'>;
  /**
   * Card Number To.
   */
  declare cardNumberTo: DeserializedType<T, 'Edm.String'>;
  /**
   * Card Number Length.
   */
  declare cardNumberLength: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailTenderTypeCardNumbersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTenderTypeCardNumbersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  cardTypeId: DeserializedType<T, 'Edm.String'>;
  cardNumberFrom: DeserializedType<T, 'Edm.String'>;
  cardNumberTo: DeserializedType<T, 'Edm.String'>;
  cardNumberLength: DeserializedType<T, 'Edm.Int32'>;
}
