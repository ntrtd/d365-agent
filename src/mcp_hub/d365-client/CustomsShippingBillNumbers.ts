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
import type { CustomsShippingBillNumbersApi } from './CustomsShippingBillNumbersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CustomsShippingBillNumbers" of service "d365_metadata".
 */
export class CustomsShippingBillNumbers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomsShippingBillNumbersType<T>
{
  /**
   * Technical entity name for CustomsShippingBillNumbers.
   */
  static override _entityName = 'CustomsShippingBillNumbers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomsShippingBillNumbers entity.
   */
  static _keys = ['dataAreaId', 'ShippingBill'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipping Bill.
   */
  declare shippingBill: DeserializedType<T, 'Edm.String'>;
  /**
   * Closed.
   * @nullable
   */
  declare closed?: NoYes | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustomsShippingBillNumbersApi<T>) {
    super(_entityApi);
  }
}

export interface CustomsShippingBillNumbersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shippingBill: DeserializedType<T, 'Edm.String'>;
  closed?: NoYes | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
