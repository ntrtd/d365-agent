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
import { ConfiguratorDefinitionGroups } from './ConfiguratorDefinitionGroups';

/**
 * Request builder class for operations supported on the {@link ConfiguratorDefinitionGroups} entity.
 */
export class ConfiguratorDefinitionGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConfiguratorDefinitionGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ConfiguratorDefinitionGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ConfiguratorDefinitionGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ConfiguratorDefinitionGroups<T>, T> {
    return new GetAllRequestBuilder<ConfiguratorDefinitionGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ConfiguratorDefinitionGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConfiguratorDefinitionGroups`.
   */
  create(
    entity: ConfiguratorDefinitionGroups<T>
  ): CreateRequestBuilder<ConfiguratorDefinitionGroups<T>, T> {
    return new CreateRequestBuilder<ConfiguratorDefinitionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ConfiguratorDefinitionGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConfiguratorDefinitionGroups.dataAreaId}.
   * @param definitionGroupId Key property. See {@link ConfiguratorDefinitionGroups.definitionGroupId}.
   * @returns A request builder for creating requests to retrieve one `ConfiguratorDefinitionGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    definitionGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ConfiguratorDefinitionGroups<T>, T> {
    return new GetByKeyRequestBuilder<ConfiguratorDefinitionGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DefinitionGroupId: definitionGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ConfiguratorDefinitionGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConfiguratorDefinitionGroups`.
   */
  update(
    entity: ConfiguratorDefinitionGroups<T>
  ): UpdateRequestBuilder<ConfiguratorDefinitionGroups<T>, T> {
    return new UpdateRequestBuilder<ConfiguratorDefinitionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorDefinitionGroups`.
   * @param dataAreaId Key property. See {@link ConfiguratorDefinitionGroups.dataAreaId}.
   * @param definitionGroupId Key property. See {@link ConfiguratorDefinitionGroups.definitionGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorDefinitionGroups`.
   */
  delete(
    dataAreaId: string,
    definitionGroupId: string
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConfiguratorDefinitionGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConfiguratorDefinitionGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ConfiguratorDefinitionGroups<T>
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    definitionGroupId?: string
  ): DeleteRequestBuilder<ConfiguratorDefinitionGroups<T>, T> {
    return new DeleteRequestBuilder<ConfiguratorDefinitionGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConfiguratorDefinitionGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DefinitionGroupId: definitionGroupId!
          }
    );
  }
}
