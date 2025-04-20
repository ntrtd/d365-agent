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
import { WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests } from './WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests';

/**
 * Request builder class for operations supported on the {@link WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests} entity.
 */
export class WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<T>,
  T
> {
  /**
   * Returns a request builder for querying all `WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests` entities.
   */
  getAll(): GetAllRequestBuilder<
    WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<T>,
    T
  > {
    return new GetAllRequestBuilder<
      WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests`.
   */
  create(
    entity: WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<T>
  ): CreateRequestBuilder<
    WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<T>,
    T
  > {
    return new CreateRequestBuilder<
      WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests.dataAreaId}.
   * @param warehouseId Key property. See {@link WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests.warehouseId}.
   * @param warehouseLocationId Key property. See {@link WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests.warehouseLocationId}.
   * @returns A request builder for creating requests to retrieve one `WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    warehouseId: DeserializedType<T, 'Edm.String'>,
    warehouseLocationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WarehouseId: warehouseId,
      WarehouseLocationId: warehouseLocationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests`.
   */
  update(
    entity: WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<T>
  ): UpdateRequestBuilder<
    WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<T>,
    T
  > {
    return new UpdateRequestBuilder<
      WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests`.
   * @param dataAreaId Key property. See {@link WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests.dataAreaId}.
   * @param warehouseId Key property. See {@link WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests.warehouseId}.
   * @param warehouseLocationId Key property. See {@link WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests.warehouseLocationId}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests`.
   */
  delete(
    dataAreaId: string,
    warehouseId: string,
    warehouseLocationId: string
  ): DeleteRequestBuilder<
    WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<T>
  ): DeleteRequestBuilder<
    WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    warehouseId?: string,
    warehouseLocationId?: string
  ): DeleteRequestBuilder<
    WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<T>,
    T
  > {
    return new DeleteRequestBuilder<
      WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WarehouseId: warehouseId!,
            WarehouseLocationId: warehouseLocationId!
          }
    );
  }
}
