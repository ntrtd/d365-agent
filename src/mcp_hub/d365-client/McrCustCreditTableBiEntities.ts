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
import type { McrCustCreditTableBiEntitiesApi } from './McrCustCreditTableBiEntitiesApi';
import { McrCustPaymType } from './McrCustPaymType';
import { McrCustCreditStatus } from './McrCustCreditStatus';

/**
 * This class represents the entity "MCRCustCreditTableBiEntities" of service "d365_metadata".
 */
export class McrCustCreditTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements McrCustCreditTableBiEntitiesType<T>
{
  /**
   * Technical entity name for McrCustCreditTableBiEntities.
   */
  static override _entityName = 'MCRCustCreditTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the McrCustCreditTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
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
   * Credit Qty.
   */
  declare creditQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reason Code.
   * @nullable
   */
  declare reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Currency.
   * @nullable
   */
  declare orderCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Credit.
   */
  declare totalCredit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Orig Paym Id.
   */
  declare origPaymId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Parent Credit Id.
   * @nullable
   */
  declare parentCreditId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credited Qty.
   */
  declare creditedQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Credit Type.
   * @nullable
   */
  declare creditType?: McrCustPaymType | null;
  /**
   * Retail Infocode Id.
   * @nullable
   */
  declare retailInfocodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Code Description.
   * @nullable
   */
  declare reasonCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Num.
   * @nullable
   */
  declare journalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Orig Sales Id.
   * @nullable
   */
  declare origSalesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cc Settlement Rec Id.
   */
  declare ccSettlementRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cust Credit Status.
   * @nullable
   */
  declare custCreditStatus?: McrCustCreditStatus | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Credit Id.
   * @nullable
   */
  declare creditId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * New Price.
   */
  declare newPrice: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: McrCustCreditTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface McrCustCreditTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  creditQty: DeserializedType<T, 'Edm.Decimal'>;
  reasonCode?: DeserializedType<T, 'Edm.String'> | null;
  orderCurrency?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  totalCredit: DeserializedType<T, 'Edm.Decimal'>;
  origPaymId: DeserializedType<T, 'Edm.Int64'>;
  parentCreditId?: DeserializedType<T, 'Edm.String'> | null;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  creditedQty: DeserializedType<T, 'Edm.Decimal'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  creditType?: McrCustPaymType | null;
  retailInfocodeId?: DeserializedType<T, 'Edm.String'> | null;
  reasonCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  journalNum?: DeserializedType<T, 'Edm.String'> | null;
  origSalesId?: DeserializedType<T, 'Edm.String'> | null;
  ccSettlementRecId: DeserializedType<T, 'Edm.Int64'>;
  custCreditStatus?: McrCustCreditStatus | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  creditId?: DeserializedType<T, 'Edm.String'> | null;
  newPrice: DeserializedType<T, 'Edm.Decimal'>;
}
