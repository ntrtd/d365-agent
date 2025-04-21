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
import type { ExternalWarehouseManagementSystemsApi } from './ExternalWarehouseManagementSystemsApi';
import { WhsewManagementSystemType } from './WhsewManagementSystemType';
import { Warehouses, WarehousesType } from './Warehouses';
import {
  ExternalWarehouseSourceSystemRelations,
  ExternalWarehouseSourceSystemRelationsType
} from './ExternalWarehouseSourceSystemRelations';

/**
 * This class represents the entity "ExternalWarehouseManagementSystems" of service "d365_metadata".
 */
export class ExternalWarehouseManagementSystems<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExternalWarehouseManagementSystemsType<T>
{
  /**
   * Technical entity name for ExternalWarehouseManagementSystems.
   */
  static override _entityName = 'ExternalWarehouseManagementSystems';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExternalWarehouseManagementSystems entity.
   */
  static _keys = ['dataAreaId', 'ExternalWarehouseManagementSystemId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * External Warehouse Management System Id.
   */
  declare externalWarehouseManagementSystemId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * External Warehouse Management System Type.
   * @nullable
   */
  declare externalWarehouseManagementSystemType?: WhsewManagementSystemType | null;
  /**
   * One-to-many navigation property to the {@link Warehouses} entity.
   */
  declare warehouse: Warehouses<T>[];
  /**
   * One-to-many navigation property to the {@link ExternalWarehouseSourceSystemRelations} entity.
   */
  declare externalWarehouseSourceSystemRelation: ExternalWarehouseSourceSystemRelations<T>[];

  constructor(_entityApi: ExternalWarehouseManagementSystemsApi<T>) {
    super(_entityApi);
  }
}

export interface ExternalWarehouseManagementSystemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  externalWarehouseManagementSystemId: DeserializedType<T, 'Edm.String'>;
  externalWarehouseManagementSystemType?: WhsewManagementSystemType | null;
  warehouse: WarehousesType<T>[];
  externalWarehouseSourceSystemRelation: ExternalWarehouseSourceSystemRelationsType<T>[];
}
