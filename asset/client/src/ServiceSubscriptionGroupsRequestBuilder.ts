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
import { ServiceSubscriptionGroups } from './ServiceSubscriptionGroups';

/**
 * Request builder class for operations supported on the {@link ServiceSubscriptionGroups} entity.
 */
export class ServiceSubscriptionGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceSubscriptionGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceSubscriptionGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceSubscriptionGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceSubscriptionGroups<T>, T> {
    return new GetAllRequestBuilder<ServiceSubscriptionGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ServiceSubscriptionGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceSubscriptionGroups`.
   */
  create(
    entity: ServiceSubscriptionGroups<T>
  ): CreateRequestBuilder<ServiceSubscriptionGroups<T>, T> {
    return new CreateRequestBuilder<ServiceSubscriptionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServiceSubscriptionGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ServiceSubscriptionGroups.dataAreaId}.
   * @param groupId Key property. See {@link ServiceSubscriptionGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `ServiceSubscriptionGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceSubscriptionGroups<T>, T> {
    return new GetByKeyRequestBuilder<ServiceSubscriptionGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceSubscriptionGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceSubscriptionGroups`.
   */
  update(
    entity: ServiceSubscriptionGroups<T>
  ): UpdateRequestBuilder<ServiceSubscriptionGroups<T>, T> {
    return new UpdateRequestBuilder<ServiceSubscriptionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceSubscriptionGroups`.
   * @param dataAreaId Key property. See {@link ServiceSubscriptionGroups.dataAreaId}.
   * @param groupId Key property. See {@link ServiceSubscriptionGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceSubscriptionGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<ServiceSubscriptionGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceSubscriptionGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceSubscriptionGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceSubscriptionGroups<T>
  ): DeleteRequestBuilder<ServiceSubscriptionGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<ServiceSubscriptionGroups<T>, T> {
    return new DeleteRequestBuilder<ServiceSubscriptionGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ServiceSubscriptionGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
