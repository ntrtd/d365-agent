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
import { InventoryOnHandMobileRequests } from './InventoryOnHandMobileRequests';

/**
 * Request builder class for operations supported on the {@link InventoryOnHandMobileRequests} entity.
 */
export class InventoryOnHandMobileRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryOnHandMobileRequests<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryOnHandMobileRequests` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryOnHandMobileRequests` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryOnHandMobileRequests<T>, T> {
    return new GetAllRequestBuilder<InventoryOnHandMobileRequests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryOnHandMobileRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryOnHandMobileRequests`.
   */
  create(
    entity: InventoryOnHandMobileRequests<T>
  ): CreateRequestBuilder<InventoryOnHandMobileRequests<T>, T> {
    return new CreateRequestBuilder<InventoryOnHandMobileRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryOnHandMobileRequests` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryOnHandMobileRequests.dataAreaId}.
   * @param productNumber Key property. See {@link InventoryOnHandMobileRequests.productNumber}.
   * @returns A request builder for creating requests to retrieve one `InventoryOnHandMobileRequests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryOnHandMobileRequests<T>, T> {
    return new GetByKeyRequestBuilder<InventoryOnHandMobileRequests<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductNumber: productNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryOnHandMobileRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryOnHandMobileRequests`.
   */
  update(
    entity: InventoryOnHandMobileRequests<T>
  ): UpdateRequestBuilder<InventoryOnHandMobileRequests<T>, T> {
    return new UpdateRequestBuilder<InventoryOnHandMobileRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryOnHandMobileRequests`.
   * @param dataAreaId Key property. See {@link InventoryOnHandMobileRequests.dataAreaId}.
   * @param productNumber Key property. See {@link InventoryOnHandMobileRequests.productNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryOnHandMobileRequests`.
   */
  delete(
    dataAreaId: string,
    productNumber: string
  ): DeleteRequestBuilder<InventoryOnHandMobileRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryOnHandMobileRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryOnHandMobileRequests` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryOnHandMobileRequests<T>
  ): DeleteRequestBuilder<InventoryOnHandMobileRequests<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productNumber?: string
  ): DeleteRequestBuilder<InventoryOnHandMobileRequests<T>, T> {
    return new DeleteRequestBuilder<InventoryOnHandMobileRequests<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryOnHandMobileRequests
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductNumber: productNumber!
          }
    );
  }
}
