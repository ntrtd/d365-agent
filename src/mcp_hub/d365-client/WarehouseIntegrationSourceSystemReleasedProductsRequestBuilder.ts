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
import { WarehouseIntegrationSourceSystemReleasedProducts } from './WarehouseIntegrationSourceSystemReleasedProducts';

/**
 * Request builder class for operations supported on the {@link WarehouseIntegrationSourceSystemReleasedProducts} entity.
 */
export class WarehouseIntegrationSourceSystemReleasedProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  WarehouseIntegrationSourceSystemReleasedProducts<T>,
  T
> {
  /**
   * Returns a request builder for querying all `WarehouseIntegrationSourceSystemReleasedProducts` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseIntegrationSourceSystemReleasedProducts` entities.
   */
  getAll(): GetAllRequestBuilder<
    WarehouseIntegrationSourceSystemReleasedProducts<T>,
    T
  > {
    return new GetAllRequestBuilder<
      WarehouseIntegrationSourceSystemReleasedProducts<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WarehouseIntegrationSourceSystemReleasedProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseIntegrationSourceSystemReleasedProducts`.
   */
  create(
    entity: WarehouseIntegrationSourceSystemReleasedProducts<T>
  ): CreateRequestBuilder<
    WarehouseIntegrationSourceSystemReleasedProducts<T>,
    T
  > {
    return new CreateRequestBuilder<
      WarehouseIntegrationSourceSystemReleasedProducts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `WarehouseIntegrationSourceSystemReleasedProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseIntegrationSourceSystemReleasedProducts.dataAreaId}.
   * @param itemNumber Key property. See {@link WarehouseIntegrationSourceSystemReleasedProducts.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `WarehouseIntegrationSourceSystemReleasedProducts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    WarehouseIntegrationSourceSystemReleasedProducts<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      WarehouseIntegrationSourceSystemReleasedProducts<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemNumber: itemNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseIntegrationSourceSystemReleasedProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseIntegrationSourceSystemReleasedProducts`.
   */
  update(
    entity: WarehouseIntegrationSourceSystemReleasedProducts<T>
  ): UpdateRequestBuilder<
    WarehouseIntegrationSourceSystemReleasedProducts<T>,
    T
  > {
    return new UpdateRequestBuilder<
      WarehouseIntegrationSourceSystemReleasedProducts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseIntegrationSourceSystemReleasedProducts`.
   * @param dataAreaId Key property. See {@link WarehouseIntegrationSourceSystemReleasedProducts.dataAreaId}.
   * @param itemNumber Key property. See {@link WarehouseIntegrationSourceSystemReleasedProducts.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseIntegrationSourceSystemReleasedProducts`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string
  ): DeleteRequestBuilder<
    WarehouseIntegrationSourceSystemReleasedProducts<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseIntegrationSourceSystemReleasedProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseIntegrationSourceSystemReleasedProducts` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseIntegrationSourceSystemReleasedProducts<T>
  ): DeleteRequestBuilder<
    WarehouseIntegrationSourceSystemReleasedProducts<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string
  ): DeleteRequestBuilder<
    WarehouseIntegrationSourceSystemReleasedProducts<T>,
    T
  > {
    return new DeleteRequestBuilder<
      WarehouseIntegrationSourceSystemReleasedProducts<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      WarehouseIntegrationSourceSystemReleasedProducts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!
          }
    );
  }
}
