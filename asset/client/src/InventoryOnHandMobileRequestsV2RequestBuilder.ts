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
import { InventoryOnHandMobileRequestsV2 } from './InventoryOnHandMobileRequestsV2';

/**
 * Request builder class for operations supported on the {@link InventoryOnHandMobileRequestsV2} entity.
 */
export class InventoryOnHandMobileRequestsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryOnHandMobileRequestsV2<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryOnHandMobileRequestsV2` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryOnHandMobileRequestsV2` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryOnHandMobileRequestsV2<T>, T> {
    return new GetAllRequestBuilder<InventoryOnHandMobileRequestsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryOnHandMobileRequestsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryOnHandMobileRequestsV2`.
   */
  create(
    entity: InventoryOnHandMobileRequestsV2<T>
  ): CreateRequestBuilder<InventoryOnHandMobileRequestsV2<T>, T> {
    return new CreateRequestBuilder<InventoryOnHandMobileRequestsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryOnHandMobileRequestsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryOnHandMobileRequestsV2.dataAreaId}.
   * @param requestId Key property. See {@link InventoryOnHandMobileRequestsV2.requestId}.
   * @returns A request builder for creating requests to retrieve one `InventoryOnHandMobileRequestsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryOnHandMobileRequestsV2<T>, T> {
    return new GetByKeyRequestBuilder<InventoryOnHandMobileRequestsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequestId: requestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryOnHandMobileRequestsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryOnHandMobileRequestsV2`.
   */
  update(
    entity: InventoryOnHandMobileRequestsV2<T>
  ): UpdateRequestBuilder<InventoryOnHandMobileRequestsV2<T>, T> {
    return new UpdateRequestBuilder<InventoryOnHandMobileRequestsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryOnHandMobileRequestsV2`.
   * @param dataAreaId Key property. See {@link InventoryOnHandMobileRequestsV2.dataAreaId}.
   * @param requestId Key property. See {@link InventoryOnHandMobileRequestsV2.requestId}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryOnHandMobileRequestsV2`.
   */
  delete(
    dataAreaId: string,
    requestId: string
  ): DeleteRequestBuilder<InventoryOnHandMobileRequestsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryOnHandMobileRequestsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryOnHandMobileRequestsV2` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryOnHandMobileRequestsV2<T>
  ): DeleteRequestBuilder<InventoryOnHandMobileRequestsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string
  ): DeleteRequestBuilder<InventoryOnHandMobileRequestsV2<T>, T> {
    return new DeleteRequestBuilder<InventoryOnHandMobileRequestsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryOnHandMobileRequestsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!
          }
    );
  }
}
