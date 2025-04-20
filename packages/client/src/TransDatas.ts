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
import type { TransDatasApi } from './TransDatasApi';
import { OffTableAllRu } from './OffTableAllRu';
import { ModuleCustVend } from './ModuleCustVend';
import { OffInvRelationTypeAllTable_Ru } from './OffInvRelationTypeAllTable_Ru';
import { OffPositionRu } from './OffPositionRu';
import { OffReportTypeRu } from './OffReportTypeRu';

/**
 * This class represents the entity "TransDatas" of service "d365_metadata".
 */
export class TransDatas<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TransDatasType<T>
{
  /**
   * Technical entity name for TransDatas.
   */
  static override _entityName = 'TransDatas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransDatas entity.
   */
  static _keys = [
    'dataAreaId',
    'AccountCode',
    'Module',
    'AccountRelation',
    'Warehouse',
    'AssociationWithWarehouse',
    'EmployeeName',
    'OfficialSession',
    'Position',
    'ReportType',
    'Title'
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
   * Module.
   * @nullable
   */
  declare module?: ModuleCustVend | null;
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
   * Employee Name.
   */
  declare employeeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Official Session.
   */
  declare officialSession: DeserializedType<T, 'Edm.String'>;
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
   * Title.
   */
  declare title: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: TransDatasApi<T>) {
    super(_entityApi);
  }
}

export interface TransDatasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  accountCode?: OffTableAllRu | null;
  module?: ModuleCustVend | null;
  accountRelation: DeserializedType<T, 'Edm.String'>;
  warehouse: DeserializedType<T, 'Edm.String'>;
  associationWithWarehouse?: OffInvRelationTypeAllTable_Ru | null;
  employeeName: DeserializedType<T, 'Edm.String'>;
  officialSession: DeserializedType<T, 'Edm.String'>;
  position?: OffPositionRu | null;
  reportType?: OffReportTypeRu | null;
  title: DeserializedType<T, 'Edm.String'>;
}
