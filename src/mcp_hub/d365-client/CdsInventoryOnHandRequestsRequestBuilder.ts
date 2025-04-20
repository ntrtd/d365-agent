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
import { CdsInventoryOnHandRequests } from './CdsInventoryOnHandRequests';

/**
 * Request builder class for operations supported on the {@link CdsInventoryOnHandRequests} entity.
 */
export class CdsInventoryOnHandRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsInventoryOnHandRequests<T>, T> {
  /**
   * Returns a request builder for querying all `CdsInventoryOnHandRequests` entities.
   * @returns A request builder for creating requests to retrieve all `CdsInventoryOnHandRequests` entities.
   */
  getAll(): GetAllRequestBuilder<CdsInventoryOnHandRequests<T>, T> {
    return new GetAllRequestBuilder<CdsInventoryOnHandRequests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsInventoryOnHandRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsInventoryOnHandRequests`.
   */
  create(
    entity: CdsInventoryOnHandRequests<T>
  ): CreateRequestBuilder<CdsInventoryOnHandRequests<T>, T> {
    return new CreateRequestBuilder<CdsInventoryOnHandRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsInventoryOnHandRequests` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsInventoryOnHandRequests.dataAreaId}.
   * @param requestId Key property. See {@link CdsInventoryOnHandRequests.requestId}.
   * @returns A request builder for creating requests to retrieve one `CdsInventoryOnHandRequests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsInventoryOnHandRequests<T>, T> {
    return new GetByKeyRequestBuilder<CdsInventoryOnHandRequests<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequestId: requestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsInventoryOnHandRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsInventoryOnHandRequests`.
   */
  update(
    entity: CdsInventoryOnHandRequests<T>
  ): UpdateRequestBuilder<CdsInventoryOnHandRequests<T>, T> {
    return new UpdateRequestBuilder<CdsInventoryOnHandRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsInventoryOnHandRequests`.
   * @param dataAreaId Key property. See {@link CdsInventoryOnHandRequests.dataAreaId}.
   * @param requestId Key property. See {@link CdsInventoryOnHandRequests.requestId}.
   * @returns A request builder for creating requests that delete an entity of type `CdsInventoryOnHandRequests`.
   */
  delete(
    dataAreaId: string,
    requestId: string
  ): DeleteRequestBuilder<CdsInventoryOnHandRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsInventoryOnHandRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsInventoryOnHandRequests` by taking the entity as a parameter.
   */
  delete(
    entity: CdsInventoryOnHandRequests<T>
  ): DeleteRequestBuilder<CdsInventoryOnHandRequests<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string
  ): DeleteRequestBuilder<CdsInventoryOnHandRequests<T>, T> {
    return new DeleteRequestBuilder<CdsInventoryOnHandRequests<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsInventoryOnHandRequests
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!
          }
    );
  }
}
