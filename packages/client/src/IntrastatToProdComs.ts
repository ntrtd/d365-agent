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
import type { IntrastatToProdComsApi } from './IntrastatToProdComsApi';

/**
 * This class represents the entity "IntrastatToProdComs" of service "d365_metadata".
 */
export class IntrastatToProdComs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IntrastatToProdComsType<T>
{
  /**
   * Technical entity name for IntrastatToProdComs.
   */
  static override _entityName = 'IntrastatToProdComs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntrastatToProdComs entity.
   */
  static _keys = [
    'dataAreaId',
    'CommodityHierarchyName',
    'CommodityName',
    'FromYear',
    'ToYear'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Commodity Hierarchy Name.
   */
  declare commodityHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Commodity Name.
   */
  declare commodityName: DeserializedType<T, 'Edm.String'>;
  /**
   * From Year.
   */
  declare fromYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * To Year.
   */
  declare toYear: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Prod Com Code.
   * @nullable
   */
  declare prodComCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variable.
   * @nullable
   */
  declare variable?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: IntrastatToProdComsApi<T>) {
    super(_entityApi);
  }
}

export interface IntrastatToProdComsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  commodityHierarchyName: DeserializedType<T, 'Edm.String'>;
  commodityName: DeserializedType<T, 'Edm.String'>;
  fromYear: DeserializedType<T, 'Edm.Int32'>;
  toYear: DeserializedType<T, 'Edm.Int32'>;
  prodComCode?: DeserializedType<T, 'Edm.String'> | null;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  variable?: DeserializedType<T, 'Edm.String'> | null;
}
