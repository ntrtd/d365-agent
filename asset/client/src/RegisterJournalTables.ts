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
import type { RegisterJournalTablesApi } from './RegisterJournalTablesApi';
import { RTax25PeriodType } from './RTax25PeriodType';
import { RTax25RegisterJournalType } from './RTax25RegisterJournalType';

/**
 * This class represents the entity "RegisterJournalTables" of service "d365_metadata".
 */
export class RegisterJournalTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RegisterJournalTablesType<T>
{
  /**
   * Technical entity name for RegisterJournalTables.
   */
  static override _entityName = 'RegisterJournalTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RegisterJournalTables entity.
   */
  static _keys = [
    'dataAreaId',
    'JournalNumber',
    'PeriodNumber',
    'PeriodTypes',
    'Years',
    'JournalType'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Number.
   */
  declare journalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Number.
   */
  declare periodNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Period Types.
   * @nullable
   */
  declare periodTypes?: RTax25PeriodType | null;
  /**
   * Years.
   */
  declare years: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Journal Type.
   * @nullable
   */
  declare journalType?: RTax25RegisterJournalType | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Finish Date.
   */
  declare finishDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Calculation Date.
   */
  declare calculationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: RegisterJournalTablesApi<T>) {
    super(_entityApi);
  }
}

export interface RegisterJournalTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNumber: DeserializedType<T, 'Edm.String'>;
  periodNumber: DeserializedType<T, 'Edm.Int32'>;
  periodTypes?: RTax25PeriodType | null;
  years: DeserializedType<T, 'Edm.Int32'>;
  journalType?: RTax25RegisterJournalType | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  finishDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  calculationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
