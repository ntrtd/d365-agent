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
import { PositionNotificationSubscriptions } from './PositionNotificationSubscriptions';

/**
 * Request builder class for operations supported on the {@link PositionNotificationSubscriptions} entity.
 */
export class PositionNotificationSubscriptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PositionNotificationSubscriptions<T>, T> {
  /**
   * Returns a request builder for querying all `PositionNotificationSubscriptions` entities.
   * @returns A request builder for creating requests to retrieve all `PositionNotificationSubscriptions` entities.
   */
  getAll(): GetAllRequestBuilder<PositionNotificationSubscriptions<T>, T> {
    return new GetAllRequestBuilder<PositionNotificationSubscriptions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PositionNotificationSubscriptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionNotificationSubscriptions`.
   */
  create(
    entity: PositionNotificationSubscriptions<T>
  ): CreateRequestBuilder<PositionNotificationSubscriptions<T>, T> {
    return new CreateRequestBuilder<PositionNotificationSubscriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PositionNotificationSubscriptions` entity based on its keys.
   * @param retailOperationOperationId Key property. See {@link PositionNotificationSubscriptions.retailOperationOperationId}.
   * @param hcmPositionPositionId Key property. See {@link PositionNotificationSubscriptions.hcmPositionPositionId}.
   * @returns A request builder for creating requests to retrieve one `PositionNotificationSubscriptions` entity based on its keys.
   */
  getByKey(
    retailOperationOperationId: DeserializedType<T, 'Edm.Int32'>,
    hcmPositionPositionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PositionNotificationSubscriptions<T>, T> {
    return new GetByKeyRequestBuilder<PositionNotificationSubscriptions<T>, T>(
      this.entityApi,
      {
        RetailOperation_OperationId: retailOperationOperationId,
        HcmPosition_PositionId: hcmPositionPositionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PositionNotificationSubscriptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionNotificationSubscriptions`.
   */
  update(
    entity: PositionNotificationSubscriptions<T>
  ): UpdateRequestBuilder<PositionNotificationSubscriptions<T>, T> {
    return new UpdateRequestBuilder<PositionNotificationSubscriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionNotificationSubscriptions`.
   * @param retailOperationOperationId Key property. See {@link PositionNotificationSubscriptions.retailOperationOperationId}.
   * @param hcmPositionPositionId Key property. See {@link PositionNotificationSubscriptions.hcmPositionPositionId}.
   * @returns A request builder for creating requests that delete an entity of type `PositionNotificationSubscriptions`.
   */
  delete(
    retailOperationOperationId: number,
    hcmPositionPositionId: string
  ): DeleteRequestBuilder<PositionNotificationSubscriptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PositionNotificationSubscriptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionNotificationSubscriptions` by taking the entity as a parameter.
   */
  delete(
    entity: PositionNotificationSubscriptions<T>
  ): DeleteRequestBuilder<PositionNotificationSubscriptions<T>, T>;
  delete(
    retailOperationOperationIdOrEntity: any,
    hcmPositionPositionId?: string
  ): DeleteRequestBuilder<PositionNotificationSubscriptions<T>, T> {
    return new DeleteRequestBuilder<PositionNotificationSubscriptions<T>, T>(
      this.entityApi,
      retailOperationOperationIdOrEntity instanceof
      PositionNotificationSubscriptions
        ? retailOperationOperationIdOrEntity
        : {
            RetailOperation_OperationId: retailOperationOperationIdOrEntity!,
            HcmPosition_PositionId: hcmPositionPositionId!
          }
    );
  }
}
