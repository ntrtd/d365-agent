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
import { KeyboardMappingGroups } from './KeyboardMappingGroups';

/**
 * Request builder class for operations supported on the {@link KeyboardMappingGroups} entity.
 */
export class KeyboardMappingGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<KeyboardMappingGroups<T>, T> {
  /**
   * Returns a request builder for querying all `KeyboardMappingGroups` entities.
   * @returns A request builder for creating requests to retrieve all `KeyboardMappingGroups` entities.
   */
  getAll(): GetAllRequestBuilder<KeyboardMappingGroups<T>, T> {
    return new GetAllRequestBuilder<KeyboardMappingGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `KeyboardMappingGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KeyboardMappingGroups`.
   */
  create(
    entity: KeyboardMappingGroups<T>
  ): CreateRequestBuilder<KeyboardMappingGroups<T>, T> {
    return new CreateRequestBuilder<KeyboardMappingGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `KeyboardMappingGroups` entity based on its keys.
   * @param keyboardMappingGroup Key property. See {@link KeyboardMappingGroups.keyboardMappingGroup}.
   * @returns A request builder for creating requests to retrieve one `KeyboardMappingGroups` entity based on its keys.
   */
  getByKey(
    keyboardMappingGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<KeyboardMappingGroups<T>, T> {
    return new GetByKeyRequestBuilder<KeyboardMappingGroups<T>, T>(
      this.entityApi,
      { KeyboardMappingGroup: keyboardMappingGroup }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `KeyboardMappingGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `KeyboardMappingGroups`.
   */
  update(
    entity: KeyboardMappingGroups<T>
  ): UpdateRequestBuilder<KeyboardMappingGroups<T>, T> {
    return new UpdateRequestBuilder<KeyboardMappingGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `KeyboardMappingGroups`.
   * @param keyboardMappingGroup Key property. See {@link KeyboardMappingGroups.keyboardMappingGroup}.
   * @returns A request builder for creating requests that delete an entity of type `KeyboardMappingGroups`.
   */
  delete(
    keyboardMappingGroup: string
  ): DeleteRequestBuilder<KeyboardMappingGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `KeyboardMappingGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `KeyboardMappingGroups` by taking the entity as a parameter.
   */
  delete(
    entity: KeyboardMappingGroups<T>
  ): DeleteRequestBuilder<KeyboardMappingGroups<T>, T>;
  delete(
    keyboardMappingGroupOrEntity: any
  ): DeleteRequestBuilder<KeyboardMappingGroups<T>, T> {
    return new DeleteRequestBuilder<KeyboardMappingGroups<T>, T>(
      this.entityApi,
      keyboardMappingGroupOrEntity instanceof KeyboardMappingGroups
        ? keyboardMappingGroupOrEntity
        : { KeyboardMappingGroup: keyboardMappingGroupOrEntity! }
    );
  }
}
