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
import type { InventSettlementBiEntitiesApi } from './InventSettlementBiEntitiesApi';
import { InventSettleType } from './InventSettleType';
import { InventSettleModel } from './InventSettleModel';
import { LedgerPostingType } from './LedgerPostingType';
import { NoYes } from './NoYes';
import { InventTransCurrencyRu } from './InventTransCurrencyRu';

/**
 * This class represents the entity "InventSettlementBiEntities" of service "d365_metadata".
 */
export class InventSettlementBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventSettlementBiEntitiesType<T>
{
  /**
   * Technical entity name for InventSettlementBiEntities.
   */
  static override _entityName = 'InventSettlementBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventSettlementBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'SourceKey',
    'TransRecId',
    'SettleType',
    'TransDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Trans Rec Id.
   */
  declare transRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Settle Type.
   * @nullable
   */
  declare settleType?: InventSettleType | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Invoice Id Markup Ru.
   * @nullable
   */
  declare vendInvoiceIdMarkupRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Model.
   * @nullable
   */
  declare settleModel?: InventSettleModel | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Amount Adjustment.
   */
  declare costAmountAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operations Posting.
   * @nullable
   */
  declare operationsPosting?: LedgerPostingType | null;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty Settled.
   */
  declare qtySettled: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Balance Sheet Posting.
   * @nullable
   */
  declare balanceSheetPosting?: LedgerPostingType | null;
  /**
   * Cost Amount Settled.
   */
  declare costAmountSettled: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pds Cw Settled.
   */
  declare pdsCwSettled: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vend Account Markup Ru.
   * @nullable
   */
  declare vendAccountMarkupRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cancelled.
   * @nullable
   */
  declare cancelled?: NoYes | null;
  /**
   * Trans Begin Time.
   */
  declare transBeginTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invent Trans Currency Ru.
   * @nullable
   */
  declare inventTransCurrencyRu?: InventTransCurrencyRu | null;
  /**
   * Settle Trans Id.
   * @nullable
   */
  declare settleTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Group Id.
   * @nullable
   */
  declare itemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * Markup Code Ru.
   * @nullable
   */
  declare markupCodeRu?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InventSettlementBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventSettlementBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  transRecId: DeserializedType<T, 'Edm.Int64'>;
  settleType?: InventSettleType | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  vendInvoiceIdMarkupRu?: DeserializedType<T, 'Edm.String'> | null;
  settleModel?: InventSettleModel | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  costAmountAdjustment: DeserializedType<T, 'Edm.Decimal'>;
  operationsPosting?: LedgerPostingType | null;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  qtySettled: DeserializedType<T, 'Edm.Decimal'>;
  balanceSheetPosting?: LedgerPostingType | null;
  costAmountSettled: DeserializedType<T, 'Edm.Decimal'>;
  pdsCwSettled: DeserializedType<T, 'Edm.Decimal'>;
  vendAccountMarkupRu?: DeserializedType<T, 'Edm.String'> | null;
  cancelled?: NoYes | null;
  transBeginTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventTransCurrencyRu?: InventTransCurrencyRu | null;
  settleTransId?: DeserializedType<T, 'Edm.String'> | null;
  itemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  posted?: NoYes | null;
  markupCodeRu?: DeserializedType<T, 'Edm.String'> | null;
}
