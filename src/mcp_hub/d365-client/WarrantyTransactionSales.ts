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
import type { WarrantyTransactionSalesApi } from './WarrantyTransactionSalesApi';
import { WarrantySalesAction } from './WarrantySalesAction';

/**
 * This class represents the entity "WarrantyTransactionSales" of service "d365_metadata".
 */
export class WarrantyTransactionSales<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarrantyTransactionSalesType<T>
{
  /**
   * Technical entity name for WarrantyTransactionSales.
   */
  static override _entityName = 'WarrantyTransactionSales';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarrantyTransactionSales entity.
   */
  static _keys = [
    'dataAreaId',
    'WarrantablePartyNumber',
    'WarrantableStore',
    'WarrantableTerminalId',
    'WarrantableTransactionId',
    'WarrantableLineNum',
    'TransactionDateTime',
    'Action',
    'WarrantyPartyNumber',
    'WarrantyStore',
    'WarrantyTerminalId',
    'WarrantyTransactionId',
    'WarrantyLineNum'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warrantable Party Number.
   */
  declare warrantablePartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Warrantable Store.
   */
  declare warrantableStore: DeserializedType<T, 'Edm.String'>;
  /**
   * Warrantable Terminal Id.
   */
  declare warrantableTerminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warrantable Transaction Id.
   */
  declare warrantableTransactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warrantable Line Num.
   */
  declare warrantableLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Date Time.
   */
  declare transactionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Action.
   * @nullable
   */
  declare action?: WarrantySalesAction | null;
  /**
   * Warranty Party Number.
   */
  declare warrantyPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Warranty Store.
   */
  declare warrantyStore: DeserializedType<T, 'Edm.String'>;
  /**
   * Warranty Terminal Id.
   */
  declare warrantyTerminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warranty Transaction Id.
   */
  declare warrantyTransactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warranty Line Num.
   */
  declare warrantyLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warrantable Om Operating Unit Number.
   * @nullable
   */
  declare warrantableOmOperatingUnitNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Warranty Om Operating Unit Number.
   * @nullable
   */
  declare warrantyOmOperatingUnitNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Warrantable Serial Id.
   * @nullable
   */
  declare warrantableSerialId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WarrantyTransactionSalesApi<T>) {
    super(_entityApi);
  }
}

export interface WarrantyTransactionSalesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  warrantablePartyNumber: DeserializedType<T, 'Edm.String'>;
  warrantableStore: DeserializedType<T, 'Edm.String'>;
  warrantableTerminalId: DeserializedType<T, 'Edm.String'>;
  warrantableTransactionId: DeserializedType<T, 'Edm.String'>;
  warrantableLineNum: DeserializedType<T, 'Edm.Decimal'>;
  transactionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  action?: WarrantySalesAction | null;
  warrantyPartyNumber: DeserializedType<T, 'Edm.String'>;
  warrantyStore: DeserializedType<T, 'Edm.String'>;
  warrantyTerminalId: DeserializedType<T, 'Edm.String'>;
  warrantyTransactionId: DeserializedType<T, 'Edm.String'>;
  warrantyLineNum: DeserializedType<T, 'Edm.Decimal'>;
  warrantableOmOperatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  warrantyOmOperatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  warrantableSerialId?: DeserializedType<T, 'Edm.String'> | null;
}
