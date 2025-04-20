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
import { RAssetMainGroups } from './RAssetMainGroups';

/**
 * Request builder class for operations supported on the {@link RAssetMainGroups} entity.
 */
export class RAssetMainGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetMainGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetMainGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetMainGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetMainGroups<T>, T> {
    return new GetAllRequestBuilder<RAssetMainGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RAssetMainGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetMainGroups`.
   */
  create(
    entity: RAssetMainGroups<T>
  ): CreateRequestBuilder<RAssetMainGroups<T>, T> {
    return new CreateRequestBuilder<RAssetMainGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RAssetMainGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetMainGroups.dataAreaId}.
   * @param faGroup Key property. See {@link RAssetMainGroups.faGroup}.
   * @returns A request builder for creating requests to retrieve one `RAssetMainGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    faGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RAssetMainGroups<T>, T> {
    return new GetByKeyRequestBuilder<RAssetMainGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FAGroup: faGroup
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetMainGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetMainGroups`.
   */
  update(
    entity: RAssetMainGroups<T>
  ): UpdateRequestBuilder<RAssetMainGroups<T>, T> {
    return new UpdateRequestBuilder<RAssetMainGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetMainGroups`.
   * @param dataAreaId Key property. See {@link RAssetMainGroups.dataAreaId}.
   * @param faGroup Key property. See {@link RAssetMainGroups.faGroup}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetMainGroups`.
   */
  delete(
    dataAreaId: string,
    faGroup: string
  ): DeleteRequestBuilder<RAssetMainGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetMainGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetMainGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RAssetMainGroups<T>
  ): DeleteRequestBuilder<RAssetMainGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    faGroup?: string
  ): DeleteRequestBuilder<RAssetMainGroups<T>, T> {
    return new DeleteRequestBuilder<RAssetMainGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetMainGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FAGroup: faGroup!
          }
    );
  }
}
