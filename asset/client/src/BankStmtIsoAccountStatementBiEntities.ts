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
import type { BankStmtIsoAccountStatementBiEntitiesApi } from './BankStmtIsoAccountStatementBiEntitiesApi';
import { BankStatementType } from './BankStatementType';
import { BankStatementStatus } from './BankStatementStatus';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BankStmtISOAccountStatementBiEntities" of service "d365_metadata".
 */
export class BankStmtIsoAccountStatementBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankStmtIsoAccountStatementBiEntitiesType<T>
{
  /**
   * Technical entity name for BankStmtIsoAccountStatementBiEntities.
   */
  static override _entityName = 'BankStmtISOAccountStatementBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankStmtIsoAccountStatementBiEntities entity.
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
   * Bank Account Table.
   * @nullable
   */
  declare bankAccountTable?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Accounts In Group.
   */
  declare totalAccountsInGroup: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Account Id Other Id.
   * @nullable
   */
  declare accountIdOtherId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Records In Group.
   */
  declare totalRecordsInGroup: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bank Stmt Iso Document.
   */
  declare bankStmtIsoDocument: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bank Statement Type.
   * @nullable
   */
  declare bankStatementType?: BankStatementType | null;
  /**
   * Group Control Total.
   */
  declare groupControlTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Currency.
   * @nullable
   */
  declare accountCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: BankStatementStatus | null;
  /**
   * Manual.
   * @nullable
   */
  declare manual?: NoYes | null;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Accounting Distribution Template.
   */
  declare accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  /**
   * As Of Date Modifier.
   */
  declare asOfDateModifier: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Additional Statement Info.
   * @nullable
   */
  declare additionalStatementInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Swift No.
   * @nullable
   */
  declare swiftNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ultimate Receiver Id.
   */
  declare ultimateReceiverId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Identification.
   * @nullable
   */
  declare identification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Document Header.
   */
  declare sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Validated By.
   * @nullable
   */
  declare validatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Group Status.
   */
  declare groupStatus: DeserializedType<T, 'Edm.Int32'>;
  /**
   * From Date Time.
   */
  declare fromDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Validated Date.
   */
  declare validatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Registration Id.
   * @nullable
   */
  declare registrationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iban.
   * @nullable
   */
  declare iban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * Originator Id.
   */
  declare originatorId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sequence Number.
   * @nullable
   */
  declare sequenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Date Time.
   */
  declare toDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Total Entries Number Of Entries.
   */
  declare totalEntriesNumberOfEntries: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: BankStmtIsoAccountStatementBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface BankStmtIsoAccountStatementBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  bankAccountTable?: DeserializedType<T, 'Edm.String'> | null;
  totalAccountsInGroup: DeserializedType<T, 'Edm.Int32'>;
  accountIdOtherId?: DeserializedType<T, 'Edm.String'> | null;
  totalRecordsInGroup: DeserializedType<T, 'Edm.Int32'>;
  bankStmtIsoDocument: DeserializedType<T, 'Edm.Int64'>;
  bankStatementType?: BankStatementType | null;
  groupControlTotal: DeserializedType<T, 'Edm.Decimal'>;
  accountCurrency?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  status?: BankStatementStatus | null;
  manual?: NoYes | null;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  asOfDateModifier: DeserializedType<T, 'Edm.Int32'>;
  additionalStatementInfo?: DeserializedType<T, 'Edm.String'> | null;
  swiftNo?: DeserializedType<T, 'Edm.String'> | null;
  ultimateReceiverId: DeserializedType<T, 'Edm.Int64'>;
  identification?: DeserializedType<T, 'Edm.String'> | null;
  sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  validatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  groupStatus: DeserializedType<T, 'Edm.Int32'>;
  fromDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  registrationId?: DeserializedType<T, 'Edm.String'> | null;
  iban?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  posted?: NoYes | null;
  originatorId: DeserializedType<T, 'Edm.Int64'>;
  sequenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  toDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  totalEntriesNumberOfEntries: DeserializedType<T, 'Edm.Int32'>;
}
