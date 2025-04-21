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
import type { AssetLeaseLedgerToLeaseRelationBiEntitiesApi } from './AssetLeaseLedgerToLeaseRelationBiEntitiesApi';
import { LedgerJournalType } from './LedgerJournalType';
import { NoYes } from './NoYes';
import { AssetLeaseJournalType } from './AssetLeaseJournalType';

/**
 * This class represents the entity "AssetLeaseLedgerToLeaseRelationBiEntities" of service "d365_metadata".
 */
export class AssetLeaseLedgerToLeaseRelationBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeaseLedgerToLeaseRelationBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeaseLedgerToLeaseRelationBiEntities.
   */
  static override _entityName = 'AssetLeaseLedgerToLeaseRelationBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeaseLedgerToLeaseRelationBiEntities entity.
   */
  static _keys = ['dataAreaId', 'JournalNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Num.
   */
  declare journalNum: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Line Rec Id.
   */
  declare paymentLineRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
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
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Journal Type.
   * @nullable
   */
  declare journalType?: LedgerJournalType | null;
  /**
   * Sys Created Transaction Id.
   */
  declare sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Lease Version.
   */
  declare leaseVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reversed.
   * @nullable
   */
  declare reversed?: NoYes | null;
  /**
   * Lease Id.
   * @nullable
   */
  declare leaseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lease Journal Type.
   * @nullable
   */
  declare leaseJournalType?: AssetLeaseJournalType | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: AssetLeaseLedgerToLeaseRelationBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetLeaseLedgerToLeaseRelationBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNum: DeserializedType<T, 'Edm.String'>;
  paymentLineRecId: DeserializedType<T, 'Edm.Int64'>;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  journalType?: LedgerJournalType | null;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  leaseVersion: DeserializedType<T, 'Edm.Int32'>;
  reversed?: NoYes | null;
  leaseId?: DeserializedType<T, 'Edm.String'> | null;
  leaseJournalType?: AssetLeaseJournalType | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
