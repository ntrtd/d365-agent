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
import type { SubBillCpiTablesApi } from './SubBillCpiTablesApi';
import { SubBillCpiLines, SubBillCpiLinesType } from './SubBillCpiLines';

/**
 * This class represents the entity "SubBillCPITables" of service "d365_metadata".
 */
export class SubBillCpiTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SubBillCpiTablesType<T>
{
  /**
   * Technical entity name for SubBillCpiTables.
   */
  static override _entityName = 'SubBillCPITables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillCpiTables entity.
   */
  static _keys = ['dataAreaId', 'CPISchedule'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cpi Schedule.
   */
  declare cpiSchedule: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SubBillCpiLines} entity.
   */
  declare relatedToSubBillCpiTableEntity: SubBillCpiLines<T>[];

  constructor(_entityApi: SubBillCpiTablesApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillCpiTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  cpiSchedule: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  relatedToSubBillCpiTableEntity: SubBillCpiLinesType<T>[];
}
