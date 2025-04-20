/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { MaterialHandlingSubscriptions } from './MaterialHandlingSubscriptions';

/**
 * Request builder class for operations supported on the {@link MaterialHandlingSubscriptions} entity.
 */
export class MaterialHandlingSubscriptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaterialHandlingSubscriptions<T>, T> {
  /**
   * Returns a request builder for querying all `MaterialHandlingSubscriptions` entities.
   * @returns A request builder for creating requests to retrieve all `MaterialHandlingSubscriptions` entities.
   */
  getAll(): GetAllRequestBuilder<MaterialHandlingSubscriptions<T>, T> {
    return new GetAllRequestBuilder<MaterialHandlingSubscriptions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaterialHandlingSubscriptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaterialHandlingSubscriptions`.
   */
  create(
    entity: MaterialHandlingSubscriptions<T>
  ): CreateRequestBuilder<MaterialHandlingSubscriptions<T>, T> {
    return new CreateRequestBuilder<MaterialHandlingSubscriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaterialHandlingSubscriptions` entity based on its keys.
   * @param dataAreaId Key property. See {@link MaterialHandlingSubscriptions.dataAreaId}.
   * @param subscription Key property. See {@link MaterialHandlingSubscriptions.subscription}.
   * @returns A request builder for creating requests to retrieve one `MaterialHandlingSubscriptions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    subscription: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<MaterialHandlingSubscriptions<T>, T> {
    return new GetByKeyRequestBuilder<MaterialHandlingSubscriptions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Subscription: subscription
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaterialHandlingSubscriptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaterialHandlingSubscriptions`.
   */
  update(
    entity: MaterialHandlingSubscriptions<T>
  ): UpdateRequestBuilder<MaterialHandlingSubscriptions<T>, T> {
    return new UpdateRequestBuilder<MaterialHandlingSubscriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaterialHandlingSubscriptions`.
   * @param dataAreaId Key property. See {@link MaterialHandlingSubscriptions.dataAreaId}.
   * @param subscription Key property. See {@link MaterialHandlingSubscriptions.subscription}.
   * @returns A request builder for creating requests that delete an entity of type `MaterialHandlingSubscriptions`.
   */
  delete(
    dataAreaId: string,
    subscription: BigNumber
  ): DeleteRequestBuilder<MaterialHandlingSubscriptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaterialHandlingSubscriptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaterialHandlingSubscriptions` by taking the entity as a parameter.
   */
  delete(
    entity: MaterialHandlingSubscriptions<T>
  ): DeleteRequestBuilder<MaterialHandlingSubscriptions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    subscription?: BigNumber
  ): DeleteRequestBuilder<MaterialHandlingSubscriptions<T>, T> {
    return new DeleteRequestBuilder<MaterialHandlingSubscriptions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MaterialHandlingSubscriptions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Subscription: subscription!
          }
    );
  }
}
