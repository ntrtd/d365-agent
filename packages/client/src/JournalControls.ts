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
import type { JournalControlsApi } from './JournalControlsApi';
import { LedgerJournalAcTypeAll } from './LedgerJournalAcTypeAll';

/**
 * This class represents the entity "JournalControls" of service "d365_metadata".
 */
export class JournalControls<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JournalControlsType<T>
{
  /**
   * Technical entity name for JournalControls.
   */
  static override _entityName = 'JournalControls';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JournalControls entity.
   */
  static _keys = [
    'dataAreaId',
    'JournalName',
    'AccountType',
    'JournalLegalEntity',
    'LedgerLegalEntity',
    'AccountStructure'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Name.
   */
  declare journalName: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcTypeAll | null;
  /**
   * Journal Legal Entity.
   */
  declare journalLegalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger Legal Entity.
   */
  declare ledgerLegalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Structure.
   */
  declare accountStructure: DeserializedType<T, 'Edm.String'>;
  /**
   * Segment.
   * @nullable
   */
  declare segment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Value.
   * @nullable
   */
  declare toValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Value.
   * @nullable
   */
  declare fromValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: JournalControlsApi<T>) {
    super(_entityApi);
  }
}

export interface JournalControlsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalName: DeserializedType<T, 'Edm.String'>;
  accountType?: LedgerJournalAcTypeAll | null;
  journalLegalEntity: DeserializedType<T, 'Edm.String'>;
  ledgerLegalEntity: DeserializedType<T, 'Edm.String'>;
  accountStructure: DeserializedType<T, 'Edm.String'>;
  segment?: DeserializedType<T, 'Edm.String'> | null;
  toValue?: DeserializedType<T, 'Edm.String'> | null;
  fromValue?: DeserializedType<T, 'Edm.String'> | null;
}
