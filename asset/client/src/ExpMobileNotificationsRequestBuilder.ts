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
import { ExpMobileNotifications } from './ExpMobileNotifications';

/**
 * Request builder class for operations supported on the {@link ExpMobileNotifications} entity.
 */
export class ExpMobileNotificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileNotifications<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileNotifications` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileNotifications` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileNotifications<T>, T> {
    return new GetAllRequestBuilder<ExpMobileNotifications<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpMobileNotifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileNotifications`.
   */
  create(
    entity: ExpMobileNotifications<T>
  ): CreateRequestBuilder<ExpMobileNotifications<T>, T> {
    return new CreateRequestBuilder<ExpMobileNotifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileNotifications` entity based on its keys.
   * @param entRecId Key property. See {@link ExpMobileNotifications.entRecId}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileNotifications` entity based on its keys.
   */
  getByKey(
    entRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExpMobileNotifications<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobileNotifications<T>, T>(
      this.entityApi,
      { EntRecId: entRecId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileNotifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileNotifications`.
   */
  update(
    entity: ExpMobileNotifications<T>
  ): UpdateRequestBuilder<ExpMobileNotifications<T>, T> {
    return new UpdateRequestBuilder<ExpMobileNotifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileNotifications`.
   * @param entRecId Key property. See {@link ExpMobileNotifications.entRecId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileNotifications`.
   */
  delete(
    entRecId: BigNumber
  ): DeleteRequestBuilder<ExpMobileNotifications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileNotifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileNotifications` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileNotifications<T>
  ): DeleteRequestBuilder<ExpMobileNotifications<T>, T>;
  delete(
    entRecIdOrEntity: any
  ): DeleteRequestBuilder<ExpMobileNotifications<T>, T> {
    return new DeleteRequestBuilder<ExpMobileNotifications<T>, T>(
      this.entityApi,
      entRecIdOrEntity instanceof ExpMobileNotifications
        ? entRecIdOrEntity
        : { EntRecId: entRecIdOrEntity! }
    );
  }
}
