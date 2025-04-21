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
import { LeaveBuySellRequests } from './LeaveBuySellRequests';

/**
 * Request builder class for operations supported on the {@link LeaveBuySellRequests} entity.
 */
export class LeaveBuySellRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveBuySellRequests<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveBuySellRequests` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveBuySellRequests` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveBuySellRequests<T>, T> {
    return new GetAllRequestBuilder<LeaveBuySellRequests<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaveBuySellRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveBuySellRequests`.
   */
  create(
    entity: LeaveBuySellRequests<T>
  ): CreateRequestBuilder<LeaveBuySellRequests<T>, T> {
    return new CreateRequestBuilder<LeaveBuySellRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveBuySellRequests` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveBuySellRequests.dataAreaId}.
   * @param requestId Key property. See {@link LeaveBuySellRequests.requestId}.
   * @returns A request builder for creating requests to retrieve one `LeaveBuySellRequests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaveBuySellRequests<T>, T> {
    return new GetByKeyRequestBuilder<LeaveBuySellRequests<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequestId: requestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveBuySellRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveBuySellRequests`.
   */
  update(
    entity: LeaveBuySellRequests<T>
  ): UpdateRequestBuilder<LeaveBuySellRequests<T>, T> {
    return new UpdateRequestBuilder<LeaveBuySellRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveBuySellRequests`.
   * @param dataAreaId Key property. See {@link LeaveBuySellRequests.dataAreaId}.
   * @param requestId Key property. See {@link LeaveBuySellRequests.requestId}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveBuySellRequests`.
   */
  delete(
    dataAreaId: string,
    requestId: string
  ): DeleteRequestBuilder<LeaveBuySellRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveBuySellRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveBuySellRequests` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveBuySellRequests<T>
  ): DeleteRequestBuilder<LeaveBuySellRequests<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requestId?: string
  ): DeleteRequestBuilder<LeaveBuySellRequests<T>, T> {
    return new DeleteRequestBuilder<LeaveBuySellRequests<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveBuySellRequests
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequestId: requestId!
          }
    );
  }
}
