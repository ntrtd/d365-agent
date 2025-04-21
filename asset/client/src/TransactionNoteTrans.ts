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
import type { TransactionNoteTransApi } from './TransactionNoteTransApi';
import { DocuRestriction } from './DocuRestriction';

/**
 * This class represents the entity "TransactionNoteTrans" of service "d365_metadata".
 */
export class TransactionNoteTrans<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransactionNoteTransType<T>
{
  /**
   * Technical entity name for TransactionNoteTrans.
   */
  static override _entityName = 'TransactionNoteTrans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransactionNoteTrans entity.
   */
  static _keys = [
    'dataAreaId',
    'OMOperatingUnit_OperatingUnitNumber',
    'Store',
    'Terminal',
    'TransactionId',
    'LineNum'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Operating Unit Operating Unit Number.
   */
  declare omOperatingUnitOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Docu Ref Rec Id.
   */
  declare docuRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Staff Id.
   * @nullable
   */
  declare staffId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Restriction.
   * @nullable
   */
  declare restriction?: DocuRestriction | null;
  /**
   * Channel.
   */
  declare channel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TransactionNoteTransApi<T>) {
    super(_entityApi);
  }
}

export interface TransactionNoteTransType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  omOperatingUnitOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  docuRefRecId: DeserializedType<T, 'Edm.Int64'>;
  staffId?: DeserializedType<T, 'Edm.String'> | null;
  restriction?: DocuRestriction | null;
  channel: DeserializedType<T, 'Edm.Int64'>;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  notes?: DeserializedType<T, 'Edm.String'> | null;
}
