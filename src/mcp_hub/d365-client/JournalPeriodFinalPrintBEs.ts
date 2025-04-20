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
import type { JournalPeriodFinalPrintBEsApi } from './JournalPeriodFinalPrintBEsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "JournalPeriodFinalPrintBEs" of service "d365_metadata".
 */
export class JournalPeriodFinalPrintBEs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements JournalPeriodFinalPrintBEsType<T>
{
  /**
   * Technical entity name for JournalPeriodFinalPrintBEs.
   */
  static override _entityName = 'JournalPeriodFinalPrintBEs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JournalPeriodFinalPrintBEs entity.
   */
  static _keys = ['dataAreaId', 'Journal', 'Start', 'End'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal.
   */
  declare journal: DeserializedType<T, 'Edm.String'>;
  /**
   * Start.
   */
  declare start: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End.
   */
  declare end: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Compressed.
   * @nullable
   */
  declare compressed?: NoYes | null;
  /**
   * Number Last Page.
   */
  declare numberLastPage: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: JournalPeriodFinalPrintBEsApi<T>) {
    super(_entityApi);
  }
}

export interface JournalPeriodFinalPrintBEsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journal: DeserializedType<T, 'Edm.String'>;
  start: DeserializedType<T, 'Edm.DateTimeOffset'>;
  end: DeserializedType<T, 'Edm.DateTimeOffset'>;
  compressed?: NoYes | null;
  numberLastPage: DeserializedType<T, 'Edm.Int32'>;
}
