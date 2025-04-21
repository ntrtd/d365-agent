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
import { AdvancedWarehouseManagementProcessEnablementRequests } from './AdvancedWarehouseManagementProcessEnablementRequests';

/**
 * Request builder class for operations supported on the {@link AdvancedWarehouseManagementProcessEnablementRequests} entity.
 */
export class AdvancedWarehouseManagementProcessEnablementRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  AdvancedWarehouseManagementProcessEnablementRequests<T>,
  T
> {
  /**
   * Returns a request builder for querying all `AdvancedWarehouseManagementProcessEnablementRequests` entities.
   * @returns A request builder for creating requests to retrieve all `AdvancedWarehouseManagementProcessEnablementRequests` entities.
   */
  getAll(): GetAllRequestBuilder<
    AdvancedWarehouseManagementProcessEnablementRequests<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AdvancedWarehouseManagementProcessEnablementRequests<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AdvancedWarehouseManagementProcessEnablementRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AdvancedWarehouseManagementProcessEnablementRequests`.
   */
  create(
    entity: AdvancedWarehouseManagementProcessEnablementRequests<T>
  ): CreateRequestBuilder<
    AdvancedWarehouseManagementProcessEnablementRequests<T>,
    T
  > {
    return new CreateRequestBuilder<
      AdvancedWarehouseManagementProcessEnablementRequests<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AdvancedWarehouseManagementProcessEnablementRequests` entity based on its keys.
   * @param dataAreaId Key property. See {@link AdvancedWarehouseManagementProcessEnablementRequests.dataAreaId}.
   * @param warehouseId Key property. See {@link AdvancedWarehouseManagementProcessEnablementRequests.warehouseId}.
   * @returns A request builder for creating requests to retrieve one `AdvancedWarehouseManagementProcessEnablementRequests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    warehouseId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AdvancedWarehouseManagementProcessEnablementRequests<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AdvancedWarehouseManagementProcessEnablementRequests<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      WarehouseId: warehouseId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AdvancedWarehouseManagementProcessEnablementRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AdvancedWarehouseManagementProcessEnablementRequests`.
   */
  update(
    entity: AdvancedWarehouseManagementProcessEnablementRequests<T>
  ): UpdateRequestBuilder<
    AdvancedWarehouseManagementProcessEnablementRequests<T>,
    T
  > {
    return new UpdateRequestBuilder<
      AdvancedWarehouseManagementProcessEnablementRequests<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AdvancedWarehouseManagementProcessEnablementRequests`.
   * @param dataAreaId Key property. See {@link AdvancedWarehouseManagementProcessEnablementRequests.dataAreaId}.
   * @param warehouseId Key property. See {@link AdvancedWarehouseManagementProcessEnablementRequests.warehouseId}.
   * @returns A request builder for creating requests that delete an entity of type `AdvancedWarehouseManagementProcessEnablementRequests`.
   */
  delete(
    dataAreaId: string,
    warehouseId: string
  ): DeleteRequestBuilder<
    AdvancedWarehouseManagementProcessEnablementRequests<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `AdvancedWarehouseManagementProcessEnablementRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AdvancedWarehouseManagementProcessEnablementRequests` by taking the entity as a parameter.
   */
  delete(
    entity: AdvancedWarehouseManagementProcessEnablementRequests<T>
  ): DeleteRequestBuilder<
    AdvancedWarehouseManagementProcessEnablementRequests<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    warehouseId?: string
  ): DeleteRequestBuilder<
    AdvancedWarehouseManagementProcessEnablementRequests<T>,
    T
  > {
    return new DeleteRequestBuilder<
      AdvancedWarehouseManagementProcessEnablementRequests<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      AdvancedWarehouseManagementProcessEnablementRequests
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WarehouseId: warehouseId!
          }
    );
  }
}
