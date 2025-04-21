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
import type { TableDatasApi } from './TableDatasApi';
import { OffTableAllRu } from './OffTableAllRu';
import { OffInvRelationTypeAllTable_Ru } from './OffInvRelationTypeAllTable_Ru';
import { OffPositionRu } from './OffPositionRu';
import { OffReportTypeRu } from './OffReportTypeRu';

/**
 * This class represents the entity "TableDatas" of service "d365_metadata".
 */
export class TableDatas<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TableDatasType<T>
{
  /**
   * Technical entity name for TableDatas.
   */
  static override _entityName = 'TableDatas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TableDatas entity.
   */
  static _keys = [
    'dataAreaId',
    'AccountCode',
    'AccountRelation',
    'Warehouse',
    'AssociationWithWarehouse',
    'Name',
    'Position',
    'ReportType',
    'JobTitle'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: OffTableAllRu | null;
  /**
   * Account Relation.
   */
  declare accountRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse.
   */
  declare warehouse: DeserializedType<T, 'Edm.String'>;
  /**
   * Association With Warehouse.
   * @nullable
   */
  declare associationWithWarehouse?: OffInvRelationTypeAllTable_Ru | null;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Position.
   * @nullable
   */
  declare position?: OffPositionRu | null;
  /**
   * Report Type.
   * @nullable
   */
  declare reportType?: OffReportTypeRu | null;
  /**
   * Job Title.
   */
  declare jobTitle: DeserializedType<T, 'Edm.String'>;
  /**
   * Repr Title Name.
   * @nullable
   */
  declare reprTitleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Repr Reason.
   * @nullable
   */
  declare reprReason?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TableDatasApi<T>) {
    super(_entityApi);
  }
}

export interface TableDatasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountCode?: OffTableAllRu | null;
  accountRelation: DeserializedType<T, 'Edm.String'>;
  warehouse: DeserializedType<T, 'Edm.String'>;
  associationWithWarehouse?: OffInvRelationTypeAllTable_Ru | null;
  name: DeserializedType<T, 'Edm.String'>;
  position?: OffPositionRu | null;
  reportType?: OffReportTypeRu | null;
  jobTitle: DeserializedType<T, 'Edm.String'>;
  reprTitleName?: DeserializedType<T, 'Edm.String'> | null;
  reprReason?: DeserializedType<T, 'Edm.String'> | null;
}
