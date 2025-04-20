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
import type { RetailTransPriceOverridesMetaApi } from './RetailTransPriceOverridesMetaApi';

/**
 * This class represents the entity "RetailTransPriceOverridesMeta" of service "d365_metadata".
 */
export class RetailTransPriceOverridesMeta<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransPriceOverridesMetaType<T>
{
  /**
   * Technical entity name for RetailTransPriceOverridesMeta.
   */
  static override _entityName = 'RetailTransPriceOverridesMeta';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransPriceOverridesMeta entity.
   */
  static _keys = [
    'EmployeeId',
    'YearOffset',
    'RetailChannelId',
    'LegalEntityId',
    'MonthGregorianId',
    'ProductNumber',
    'TerminalId'
  ];
  /**
   * Employee Id.
   */
  declare employeeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Year Offset.
   */
  declare yearOffset: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Retail Channel Id.
   */
  declare retailChannelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Month Gregorian Id.
   */
  declare monthGregorianId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Overrides Amount.
   */
  declare priceOverridesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Num Of Goods.
   */
  declare numOfGoods: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Num Of Item Lines.
   */
  declare numOfItemLines: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: RetailTransPriceOverridesMetaApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransPriceOverridesMetaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  employeeId: DeserializedType<T, 'Edm.String'>;
  yearOffset: DeserializedType<T, 'Edm.Int64'>;
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  monthGregorianId: DeserializedType<T, 'Edm.Int64'>;
  productNumber: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  priceOverridesAmount: DeserializedType<T, 'Edm.Decimal'>;
  numOfGoods: DeserializedType<T, 'Edm.Int64'>;
  numOfItemLines: DeserializedType<T, 'Edm.Int64'>;
}
