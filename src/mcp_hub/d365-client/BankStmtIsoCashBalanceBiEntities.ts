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
import type { BankStmtIsoCashBalanceBiEntitiesApi } from './BankStmtIsoCashBalanceBiEntitiesApi';
import { DebitCredit } from './DebitCredit';
import { BankStatementBalanceType } from './BankStatementBalanceType';

/**
 * This class represents the entity "BankStmtISOCashBalanceBiEntities" of service "d365_metadata".
 */
export class BankStmtIsoCashBalanceBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankStmtIsoCashBalanceBiEntitiesType<T>
{
  /**
   * Technical entity name for BankStmtIsoCashBalanceBiEntities.
   */
  static override _entityName = 'BankStmtISOCashBalanceBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankStmtIsoCashBalanceBiEntities entity.
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
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Item Count.
   */
  declare itemCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Amount Credit Debit Indicator.
   * @nullable
   */
  declare amountCreditDebitIndicator?: DebitCredit | null;
  /**
   * Cash Balance Amount.
   */
  declare cashBalanceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Stmt Iso Account Statement.
   */
  declare bankStmtIsoAccountStatement: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bank Statement Balance Type.
   * @nullable
   */
  declare bankStatementBalanceType?: BankStatementBalanceType | null;
  /**
   * Funds Type.
   * @nullable
   */
  declare fundsType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type Code.
   * @nullable
   */
  declare typeCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BankStmtIsoCashBalanceBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface BankStmtIsoCashBalanceBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  itemCount: DeserializedType<T, 'Edm.Int32'>;
  amountCreditDebitIndicator?: DebitCredit | null;
  cashBalanceAmount: DeserializedType<T, 'Edm.Decimal'>;
  bankStmtIsoAccountStatement: DeserializedType<T, 'Edm.Int64'>;
  bankStatementBalanceType?: BankStatementBalanceType | null;
  fundsType?: DeserializedType<T, 'Edm.String'> | null;
  typeCode?: DeserializedType<T, 'Edm.String'> | null;
}
