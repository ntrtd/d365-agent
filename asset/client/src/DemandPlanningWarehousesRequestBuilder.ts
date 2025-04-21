/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { DemandPlanningWarehouses } from './DemandPlanningWarehouses';

/**
 * Request builder class for operations supported on the {@link DemandPlanningWarehouses} entity.
 */
export class DemandPlanningWarehousesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DemandPlanningWarehouses<T>, T> {
  /**
   * Returns a request builder for querying all `DemandPlanningWarehouses` entities.
   * @returns A request builder for creating requests to retrieve all `DemandPlanningWarehouses` entities.
   */
  getAll(): GetAllRequestBuilder<DemandPlanningWarehouses<T>, T> {
    return new GetAllRequestBuilder<DemandPlanningWarehouses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DemandPlanningWarehouses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DemandPlanningWarehouses`.
   */
  create(
    entity: DemandPlanningWarehouses<T>
  ): CreateRequestBuilder<DemandPlanningWarehouses<T>, T> {
    return new CreateRequestBuilder<DemandPlanningWarehouses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DemandPlanningWarehouses` entity based on its keys.
   * @param warehouseId Key property. See {@link DemandPlanningWarehouses.warehouseId}.
   * @param dataAreaPartyId Key property. See {@link DemandPlanningWarehouses.dataAreaPartyId}.
   * @returns A request builder for creating requests to retrieve one `DemandPlanningWarehouses` entity based on its keys.
   */
  getByKey(
    warehouseId: DeserializedType<T, 'Edm.String'>,
    dataAreaPartyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DemandPlanningWarehouses<T>, T> {
    return new GetByKeyRequestBuilder<DemandPlanningWarehouses<T>, T>(
      this.entityApi,
      {
        WarehouseId: warehouseId,
        DataAreaPartyId: dataAreaPartyId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DemandPlanningWarehouses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DemandPlanningWarehouses`.
   */
  update(
    entity: DemandPlanningWarehouses<T>
  ): UpdateRequestBuilder<DemandPlanningWarehouses<T>, T> {
    return new UpdateRequestBuilder<DemandPlanningWarehouses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DemandPlanningWarehouses`.
   * @param warehouseId Key property. See {@link DemandPlanningWarehouses.warehouseId}.
   * @param dataAreaPartyId Key property. See {@link DemandPlanningWarehouses.dataAreaPartyId}.
   * @returns A request builder for creating requests that delete an entity of type `DemandPlanningWarehouses`.
   */
  delete(
    warehouseId: string,
    dataAreaPartyId: string
  ): DeleteRequestBuilder<DemandPlanningWarehouses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DemandPlanningWarehouses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DemandPlanningWarehouses` by taking the entity as a parameter.
   */
  delete(
    entity: DemandPlanningWarehouses<T>
  ): DeleteRequestBuilder<DemandPlanningWarehouses<T>, T>;
  delete(
    warehouseIdOrEntity: any,
    dataAreaPartyId?: string
  ): DeleteRequestBuilder<DemandPlanningWarehouses<T>, T> {
    return new DeleteRequestBuilder<DemandPlanningWarehouses<T>, T>(
      this.entityApi,
      warehouseIdOrEntity instanceof DemandPlanningWarehouses
        ? warehouseIdOrEntity
        : {
            WarehouseId: warehouseIdOrEntity!,
            DataAreaPartyId: dataAreaPartyId!
          }
    );
  }
}
