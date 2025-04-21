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
import type { ExternalWarehouseSourceSystemRelationsApi } from './ExternalWarehouseSourceSystemRelationsApi';
import {
  WarehouseIntegrationSourceSystems,
  WarehouseIntegrationSourceSystemsType
} from './WarehouseIntegrationSourceSystems';
import {
  ExternalWarehouseManagementSystems,
  ExternalWarehouseManagementSystemsType
} from './ExternalWarehouseManagementSystems';

/**
 * This class represents the entity "ExternalWarehouseSourceSystemRelations" of service "d365_metadata".
 */
export class ExternalWarehouseSourceSystemRelations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExternalWarehouseSourceSystemRelationsType<T>
{
  /**
   * Technical entity name for ExternalWarehouseSourceSystemRelations.
   */
  static override _entityName = 'ExternalWarehouseSourceSystemRelations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExternalWarehouseSourceSystemRelations entity.
   */
  static _keys = ['SourceSystemId', 'WarehouseLegalEntityId'];
  /**
   * Source System Id.
   */
  declare sourceSystemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Legal Entity Id.
   */
  declare warehouseLegalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Documents Legal Entity Id.
   * @nullable
   */
  declare sourceDocumentsLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * External Warehouse Management System Id.
   * @nullable
   */
  declare externalWarehouseManagementSystemId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link WarehouseIntegrationSourceSystems} entity.
   */
  declare sourceSystem?: WarehouseIntegrationSourceSystems<T> | null;
  /**
   * One-to-one navigation property to the {@link ExternalWarehouseManagementSystems} entity.
   */
  declare externalWarehouseManagementSytem?: ExternalWarehouseManagementSystems<T> | null;

  constructor(_entityApi: ExternalWarehouseSourceSystemRelationsApi<T>) {
    super(_entityApi);
  }
}

export interface ExternalWarehouseSourceSystemRelationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceSystemId: DeserializedType<T, 'Edm.String'>;
  warehouseLegalEntityId: DeserializedType<T, 'Edm.String'>;
  sourceDocumentsLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  externalWarehouseManagementSystemId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  sourceSystem?: WarehouseIntegrationSourceSystemsType<T> | null;
  externalWarehouseManagementSytem?: ExternalWarehouseManagementSystemsType<T> | null;
}
