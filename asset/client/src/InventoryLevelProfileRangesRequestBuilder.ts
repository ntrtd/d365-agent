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
import { InventoryLevelProfileRanges } from './InventoryLevelProfileRanges';

/**
 * Request builder class for operations supported on the {@link InventoryLevelProfileRanges} entity.
 */
export class InventoryLevelProfileRangesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryLevelProfileRanges<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryLevelProfileRanges` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryLevelProfileRanges` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryLevelProfileRanges<T>, T> {
    return new GetAllRequestBuilder<InventoryLevelProfileRanges<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryLevelProfileRanges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryLevelProfileRanges`.
   */
  create(
    entity: InventoryLevelProfileRanges<T>
  ): CreateRequestBuilder<InventoryLevelProfileRanges<T>, T> {
    return new CreateRequestBuilder<InventoryLevelProfileRanges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryLevelProfileRanges` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryLevelProfileRanges.dataAreaId}.
   * @param profileId Key property. See {@link InventoryLevelProfileRanges.profileId}.
   * @param code Key property. See {@link InventoryLevelProfileRanges.code}.
   * @returns A request builder for creating requests to retrieve one `InventoryLevelProfileRanges` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    profileId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryLevelProfileRanges<T>, T> {
    return new GetByKeyRequestBuilder<InventoryLevelProfileRanges<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProfileId: profileId,
        Code: code
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryLevelProfileRanges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryLevelProfileRanges`.
   */
  update(
    entity: InventoryLevelProfileRanges<T>
  ): UpdateRequestBuilder<InventoryLevelProfileRanges<T>, T> {
    return new UpdateRequestBuilder<InventoryLevelProfileRanges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryLevelProfileRanges`.
   * @param dataAreaId Key property. See {@link InventoryLevelProfileRanges.dataAreaId}.
   * @param profileId Key property. See {@link InventoryLevelProfileRanges.profileId}.
   * @param code Key property. See {@link InventoryLevelProfileRanges.code}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryLevelProfileRanges`.
   */
  delete(
    dataAreaId: string,
    profileId: string,
    code: string
  ): DeleteRequestBuilder<InventoryLevelProfileRanges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryLevelProfileRanges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryLevelProfileRanges` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryLevelProfileRanges<T>
  ): DeleteRequestBuilder<InventoryLevelProfileRanges<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    profileId?: string,
    code?: string
  ): DeleteRequestBuilder<InventoryLevelProfileRanges<T>, T> {
    return new DeleteRequestBuilder<InventoryLevelProfileRanges<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryLevelProfileRanges
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProfileId: profileId!,
            Code: code!
          }
    );
  }
}
