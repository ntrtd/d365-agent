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
import type { AssetTransReportingCurrencyAmountsApi } from './AssetTransReportingCurrencyAmountsApi';
import { AssetTransType } from './AssetTransType';

/**
 * This class represents the entity "AssetTransReportingCurrencyAmounts" of service "d365_metadata".
 */
export class AssetTransReportingCurrencyAmounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetTransReportingCurrencyAmountsType<T>
{
  /**
   * Technical entity name for AssetTransReportingCurrencyAmounts.
   */
  static override _entityName = 'AssetTransReportingCurrencyAmounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetTransReportingCurrencyAmounts entity.
   */
  static _keys = ['dataAreaId', 'AssetTrans'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Asset Trans.
   */
  declare assetTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reporting Currency Exch Rate.
   */
  declare reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Book Id.
   * @nullable
   */
  declare bookId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Type.
   * @nullable
   */
  declare transType?: AssetTransType | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount Reporting Currency.
   */
  declare amountReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: AssetTransReportingCurrencyAmountsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetTransReportingCurrencyAmountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  assetTrans: DeserializedType<T, 'Edm.Int64'>;
  reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  bookId?: DeserializedType<T, 'Edm.String'> | null;
  transType?: AssetTransType | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amountReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
}
