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
import { WarehouseWorkPolicyProducts } from './WarehouseWorkPolicyProducts';

/**
 * Request builder class for operations supported on the {@link WarehouseWorkPolicyProducts} entity.
 */
export class WarehouseWorkPolicyProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseWorkPolicyProducts<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseWorkPolicyProducts` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseWorkPolicyProducts` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseWorkPolicyProducts<T>, T> {
    return new GetAllRequestBuilder<WarehouseWorkPolicyProducts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarehouseWorkPolicyProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseWorkPolicyProducts`.
   */
  create(
    entity: WarehouseWorkPolicyProducts<T>
  ): CreateRequestBuilder<WarehouseWorkPolicyProducts<T>, T> {
    return new CreateRequestBuilder<WarehouseWorkPolicyProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseWorkPolicyProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseWorkPolicyProducts.dataAreaId}.
   * @param workPolicyName Key property. See {@link WarehouseWorkPolicyProducts.workPolicyName}.
   * @param itemNumber Key property. See {@link WarehouseWorkPolicyProducts.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `WarehouseWorkPolicyProducts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workPolicyName: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehouseWorkPolicyProducts<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseWorkPolicyProducts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkPolicyName: workPolicyName,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseWorkPolicyProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseWorkPolicyProducts`.
   */
  update(
    entity: WarehouseWorkPolicyProducts<T>
  ): UpdateRequestBuilder<WarehouseWorkPolicyProducts<T>, T> {
    return new UpdateRequestBuilder<WarehouseWorkPolicyProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseWorkPolicyProducts`.
   * @param dataAreaId Key property. See {@link WarehouseWorkPolicyProducts.dataAreaId}.
   * @param workPolicyName Key property. See {@link WarehouseWorkPolicyProducts.workPolicyName}.
   * @param itemNumber Key property. See {@link WarehouseWorkPolicyProducts.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseWorkPolicyProducts`.
   */
  delete(
    dataAreaId: string,
    workPolicyName: string,
    itemNumber: string
  ): DeleteRequestBuilder<WarehouseWorkPolicyProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseWorkPolicyProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseWorkPolicyProducts` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseWorkPolicyProducts<T>
  ): DeleteRequestBuilder<WarehouseWorkPolicyProducts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workPolicyName?: string,
    itemNumber?: string
  ): DeleteRequestBuilder<WarehouseWorkPolicyProducts<T>, T> {
    return new DeleteRequestBuilder<WarehouseWorkPolicyProducts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseWorkPolicyProducts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkPolicyName: workPolicyName!,
            ItemNumber: itemNumber!
          }
    );
  }
}
