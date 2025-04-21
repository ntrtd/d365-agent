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
import { ConfiguratorLayoutGroups } from './ConfiguratorLayoutGroups';

/**
 * Request builder class for operations supported on the {@link ConfiguratorLayoutGroups} entity.
 */
export class ConfiguratorLayoutGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConfiguratorLayoutGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ConfiguratorLayoutGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ConfiguratorLayoutGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ConfiguratorLayoutGroups<T>, T> {
    return new GetAllRequestBuilder<ConfiguratorLayoutGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ConfiguratorLayoutGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConfiguratorLayoutGroups`.
   */
  create(
    entity: ConfiguratorLayoutGroups<T>
  ): CreateRequestBuilder<ConfiguratorLayoutGroups<T>, T> {
    return new CreateRequestBuilder<ConfiguratorLayoutGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ConfiguratorLayoutGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConfiguratorLayoutGroups.dataAreaId}.
   * @param layoutGroupId Key property. See {@link ConfiguratorLayoutGroups.layoutGroupId}.
   * @returns A request builder for creating requests to retrieve one `ConfiguratorLayoutGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    layoutGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ConfiguratorLayoutGroups<T>, T> {
    return new GetByKeyRequestBuilder<ConfiguratorLayoutGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LayoutGroupId: layoutGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ConfiguratorLayoutGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConfiguratorLayoutGroups`.
   */
  update(
    entity: ConfiguratorLayoutGroups<T>
  ): UpdateRequestBuilder<ConfiguratorLayoutGroups<T>, T> {
    return new UpdateRequestBuilder<ConfiguratorLayoutGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorLayoutGroups`.
   * @param dataAreaId Key property. See {@link ConfiguratorLayoutGroups.dataAreaId}.
   * @param layoutGroupId Key property. See {@link ConfiguratorLayoutGroups.layoutGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorLayoutGroups`.
   */
  delete(
    dataAreaId: string,
    layoutGroupId: string
  ): DeleteRequestBuilder<ConfiguratorLayoutGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorLayoutGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorLayoutGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ConfiguratorLayoutGroups<T>
  ): DeleteRequestBuilder<ConfiguratorLayoutGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    layoutGroupId?: string
  ): DeleteRequestBuilder<ConfiguratorLayoutGroups<T>, T> {
    return new DeleteRequestBuilder<ConfiguratorLayoutGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConfiguratorLayoutGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LayoutGroupId: layoutGroupId!
          }
    );
  }
}
