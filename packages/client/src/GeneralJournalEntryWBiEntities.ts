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
import type { GeneralJournalEntryWBiEntitiesApi } from './GeneralJournalEntryWBiEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "GeneralJournalEntryWBiEntities" of service "d365_metadata".
 */
export class GeneralJournalEntryWBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GeneralJournalEntryWBiEntitiesType<T>
{
  /**
   * Technical entity name for GeneralJournalEntryWBiEntities.
   */
  static override _entityName = 'GeneralJournalEntryWBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GeneralJournalEntryWBiEntities entity.
   */
  static _keys = ['SourceKey'];
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
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
   * Reversed Cn.
   * @nullable
   */
  declare reversedCn?: NoYes | null;
  /**
   * Voucher Cn.
   * @nullable
   */
  declare voucherCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * General Journal Entry.
   */
  declare generalJournalEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Created Transaction Id.
   */
  declare sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Extemporaneous Type Br.
   * @nullable
   */
  declare isExtemporaneousTypeBr?: NoYes | null;
  /**
   * Ledger Voucher Type Cn.
   */
  declare ledgerVoucherTypeCn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: GeneralJournalEntryWBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface GeneralJournalEntryWBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  reversedCn?: NoYes | null;
  voucherCn?: DeserializedType<T, 'Edm.String'> | null;
  generalJournalEntry: DeserializedType<T, 'Edm.Int64'>;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  isExtemporaneousTypeBr?: NoYes | null;
  ledgerVoucherTypeCn: DeserializedType<T, 'Edm.Int64'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
