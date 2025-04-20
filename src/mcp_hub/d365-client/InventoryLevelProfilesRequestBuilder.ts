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
import { InventoryLevelProfiles } from './InventoryLevelProfiles';

/**
 * Request builder class for operations supported on the {@link InventoryLevelProfiles} entity.
 */
export class InventoryLevelProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryLevelProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryLevelProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryLevelProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryLevelProfiles<T>, T> {
    return new GetAllRequestBuilder<InventoryLevelProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryLevelProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryLevelProfiles`.
   */
  create(
    entity: InventoryLevelProfiles<T>
  ): CreateRequestBuilder<InventoryLevelProfiles<T>, T> {
    return new CreateRequestBuilder<InventoryLevelProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryLevelProfiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryLevelProfiles.dataAreaId}.
   * @param profileId Key property. See {@link InventoryLevelProfiles.profileId}.
   * @returns A request builder for creating requests to retrieve one `InventoryLevelProfiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    profileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryLevelProfiles<T>, T> {
    return new GetByKeyRequestBuilder<InventoryLevelProfiles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProfileId: profileId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryLevelProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryLevelProfiles`.
   */
  update(
    entity: InventoryLevelProfiles<T>
  ): UpdateRequestBuilder<InventoryLevelProfiles<T>, T> {
    return new UpdateRequestBuilder<InventoryLevelProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryLevelProfiles`.
   * @param dataAreaId Key property. See {@link InventoryLevelProfiles.dataAreaId}.
   * @param profileId Key property. See {@link InventoryLevelProfiles.profileId}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryLevelProfiles`.
   */
  delete(
    dataAreaId: string,
    profileId: string
  ): DeleteRequestBuilder<InventoryLevelProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryLevelProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryLevelProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryLevelProfiles<T>
  ): DeleteRequestBuilder<InventoryLevelProfiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    profileId?: string
  ): DeleteRequestBuilder<InventoryLevelProfiles<T>, T> {
    return new DeleteRequestBuilder<InventoryLevelProfiles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryLevelProfiles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProfileId: profileId!
          }
    );
  }
}
