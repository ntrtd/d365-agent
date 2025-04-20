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
import type { VendPriceAdmTablesApi } from './VendPriceAdmTablesApi';
import { TableGroupAll } from './TableGroupAll';
import { GupDisabledEnabled } from './GupDisabledEnabled';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "VendPriceAdmTables" of service "d365_metadata".
 */
export class VendPriceAdmTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VendPriceAdmTablesType<T>
{
  /**
   * Technical entity name for VendPriceAdmTables.
   */
  static override _entityName = 'VendPriceAdmTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendPriceAdmTables entity.
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
   * Site.
   * @nullable
   */
  declare site?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: TableGroupAll | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: GupDisabledEnabled | null;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Export Current Price.
   * @nullable
   */
  declare exportCurrentPrice?: NoYes | null;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Account Relation.
   * @nullable
   */
  declare accountRelation?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VendPriceAdmTablesApi<T>) {
    super(_entityApi);
  }
}

export interface VendPriceAdmTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalNum: DeserializedType<T, 'Edm.String'>;
  site?: DeserializedType<T, 'Edm.String'> | null;
  accountCode?: TableGroupAll | null;
  status?: GupDisabledEnabled | null;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  exportCurrentPrice?: NoYes | null;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accountRelation?: DeserializedType<T, 'Edm.String'> | null;
}
