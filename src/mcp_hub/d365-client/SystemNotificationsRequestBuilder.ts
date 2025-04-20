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
import { SystemNotifications } from './SystemNotifications';

/**
 * Request builder class for operations supported on the {@link SystemNotifications} entity.
 */
export class SystemNotificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SystemNotifications<T>, T> {
  /**
   * Returns a request builder for querying all `SystemNotifications` entities.
   * @returns A request builder for creating requests to retrieve all `SystemNotifications` entities.
   */
  getAll(): GetAllRequestBuilder<SystemNotifications<T>, T> {
    return new GetAllRequestBuilder<SystemNotifications<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SystemNotifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SystemNotifications`.
   */
  create(
    entity: SystemNotifications<T>
  ): CreateRequestBuilder<SystemNotifications<T>, T> {
    return new CreateRequestBuilder<SystemNotifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SystemNotifications` entity based on its keys.
   * @param ruleId Key property. See {@link SystemNotifications.ruleId}.
   * @returns A request builder for creating requests to retrieve one `SystemNotifications` entity based on its keys.
   */
  getByKey(
    ruleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SystemNotifications<T>, T> {
    return new GetByKeyRequestBuilder<SystemNotifications<T>, T>(
      this.entityApi,
      { RuleId: ruleId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SystemNotifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SystemNotifications`.
   */
  update(
    entity: SystemNotifications<T>
  ): UpdateRequestBuilder<SystemNotifications<T>, T> {
    return new UpdateRequestBuilder<SystemNotifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SystemNotifications`.
   * @param ruleId Key property. See {@link SystemNotifications.ruleId}.
   * @returns A request builder for creating requests that delete an entity of type `SystemNotifications`.
   */
  delete(ruleId: string): DeleteRequestBuilder<SystemNotifications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SystemNotifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SystemNotifications` by taking the entity as a parameter.
   */
  delete(
    entity: SystemNotifications<T>
  ): DeleteRequestBuilder<SystemNotifications<T>, T>;
  delete(ruleIdOrEntity: any): DeleteRequestBuilder<SystemNotifications<T>, T> {
    return new DeleteRequestBuilder<SystemNotifications<T>, T>(
      this.entityApi,
      ruleIdOrEntity instanceof SystemNotifications
        ? ruleIdOrEntity
        : { RuleId: ruleIdOrEntity! }
    );
  }
}
