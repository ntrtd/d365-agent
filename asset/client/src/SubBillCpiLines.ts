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
import type { SubBillCpiLinesApi } from './SubBillCpiLinesApi';
import { SubBillCpiTables, SubBillCpiTablesType } from './SubBillCpiTables';

/**
 * This class represents the entity "SubBillCPILines" of service "d365_metadata".
 */
export class SubBillCpiLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SubBillCpiLinesType<T>
{
  /**
   * Technical entity name for SubBillCpiLines.
   */
  static override _entityName = 'SubBillCPILines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillCpiLines entity.
   */
  static _keys = ['dataAreaId', 'CPISchedule', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cpi Schedule.
   */
  declare cpiSchedule: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cpi Index.
   */
  declare cpiIndex: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cpi Date.
   */
  declare cpiDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link SubBillCpiTables} entity.
   */
  declare subBillCpiTableEntity?: SubBillCpiTables<T> | null;

  constructor(_entityApi: SubBillCpiLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillCpiLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cpiSchedule: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  cpiIndex: DeserializedType<T, 'Edm.Decimal'>;
  cpiDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  subBillCpiTableEntity?: SubBillCpiTablesType<T> | null;
}
