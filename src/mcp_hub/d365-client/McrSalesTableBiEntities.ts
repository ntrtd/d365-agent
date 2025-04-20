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
import type { McrSalesTableBiEntitiesApi } from './McrSalesTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { McrPaymOutOfBalance } from './McrPaymOutOfBalance';
import { McrsoAllocPriority } from './McrsoAllocPriority';
import { McrOutOfBalanceReleaseType } from './McrOutOfBalanceReleaseType';
import { McrContinuityLineEval } from './McrContinuityLineEval';

/**
 * This class represents the entity "MCRSalesTableBiEntities" of service "d365_metadata".
 */
export class McrSalesTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements McrSalesTableBiEntitiesType<T>
{
  /**
   * Technical entity name for McrSalesTableBiEntities.
   */
  static override _entityName = 'MCRSalesTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the McrSalesTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SalesTable'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Table.
   */
  declare salesTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Catalog Up Sell Shown.
   * @nullable
   */
  declare catalogUpSellShown?: NoYes | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paym Out Of Balance.
   * @nullable
   */
  declare paymOutOfBalance?: McrPaymOutOfBalance | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * So Alloc Priority.
   * @nullable
   */
  declare soAllocPriority?: McrsoAllocPriority | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Price Override.
   * @nullable
   */
  declare priceOverride?: NoYes | null;
  /**
   * Smm Tm Call List Id.
   * @nullable
   */
  declare smmTmCallListId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Out Of Balance Released.
   * @nullable
   */
  declare outOfBalanceReleased?: McrOutOfBalanceReleaseType | null;
  /**
   * Continuity Order.
   * @nullable
   */
  declare continuityOrder?: NoYes | null;
  /**
   * Continuity Child.
   * @nullable
   */
  declare continuityChild?: NoYes | null;
  /**
   * Continuity Line Eval.
   * @nullable
   */
  declare continuityLineEval?: McrContinuityLineEval | null;
  /**
   * Prompted For Inst Billing Option.
   * @nullable
   */
  declare promptedForInstBillingOption?: NoYes | null;
  /**
   * Source Id.
   * @nullable
   */
  declare sourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Date.
   */
  declare receiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Postage Group Id.
   * @nullable
   */
  declare postageGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Installment Order Submitted.
   * @nullable
   */
  declare installmentOrderSubmitted?: NoYes | null;
  /**
   * Ftc Exempt.
   * @nullable
   */
  declare ftcExempt?: NoYes | null;

  constructor(_entityApi: McrSalesTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface McrSalesTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesTable: DeserializedType<T, 'Edm.Int64'>;
  catalogUpSellShown?: NoYes | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  paymOutOfBalance?: McrPaymOutOfBalance | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  soAllocPriority?: McrsoAllocPriority | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  priceOverride?: NoYes | null;
  smmTmCallListId?: DeserializedType<T, 'Edm.String'> | null;
  outOfBalanceReleased?: McrOutOfBalanceReleaseType | null;
  continuityOrder?: NoYes | null;
  continuityChild?: NoYes | null;
  continuityLineEval?: McrContinuityLineEval | null;
  promptedForInstBillingOption?: NoYes | null;
  sourceId?: DeserializedType<T, 'Edm.String'> | null;
  receiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  postageGroupId?: DeserializedType<T, 'Edm.String'> | null;
  installmentOrderSubmitted?: NoYes | null;
  ftcExempt?: NoYes | null;
}
