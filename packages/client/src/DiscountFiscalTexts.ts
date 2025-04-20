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
import type { DiscountFiscalTextsApi } from './DiscountFiscalTextsApi';

/**
 * This class represents the entity "DiscountFiscalTexts" of service "d365_metadata".
 */
export class DiscountFiscalTexts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DiscountFiscalTextsType<T>
{
  /**
   * Technical entity name for DiscountFiscalTexts.
   */
  static override _entityName = 'DiscountFiscalTexts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscountFiscalTexts entity.
   */
  static _keys = ['dataAreaId', 'Discount', 'ConnectorGroupNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Discount.
   */
  declare discount: DeserializedType<T, 'Edm.String'>;
  /**
   * Connector Group Number.
   */
  declare connectorGroupNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Text On Fiscal Receipt.
   * @nullable
   */
  declare textOnFiscalReceipt?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DiscountFiscalTextsApi<T>) {
    super(_entityApi);
  }
}

export interface DiscountFiscalTextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  discount: DeserializedType<T, 'Edm.String'>;
  connectorGroupNumber: DeserializedType<T, 'Edm.String'>;
  textOnFiscalReceipt?: DeserializedType<T, 'Edm.String'> | null;
}
