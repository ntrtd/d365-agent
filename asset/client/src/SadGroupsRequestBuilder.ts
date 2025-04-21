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
import { SadGroups } from './SadGroups';

/**
 * Request builder class for operations supported on the {@link SadGroups} entity.
 */
export class SadGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SadGroups<T>, T> {
  /**
   * Returns a request builder for querying all `SadGroups` entities.
   * @returns A request builder for creating requests to retrieve all `SadGroups` entities.
   */
  getAll(): GetAllRequestBuilder<SadGroups<T>, T> {
    return new GetAllRequestBuilder<SadGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SadGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SadGroups`.
   */
  create(entity: SadGroups<T>): CreateRequestBuilder<SadGroups<T>, T> {
    return new CreateRequestBuilder<SadGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SadGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link SadGroups.dataAreaId}.
   * @param sadGroup Key property. See {@link SadGroups.sadGroup}.
   * @returns A request builder for creating requests to retrieve one `SadGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sadGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SadGroups<T>, T> {
    return new GetByKeyRequestBuilder<SadGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SADGroup: sadGroup
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SadGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SadGroups`.
   */
  update(entity: SadGroups<T>): UpdateRequestBuilder<SadGroups<T>, T> {
    return new UpdateRequestBuilder<SadGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SadGroups`.
   * @param dataAreaId Key property. See {@link SadGroups.dataAreaId}.
   * @param sadGroup Key property. See {@link SadGroups.sadGroup}.
   * @returns A request builder for creating requests that delete an entity of type `SadGroups`.
   */
  delete(
    dataAreaId: string,
    sadGroup: string
  ): DeleteRequestBuilder<SadGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SadGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SadGroups` by taking the entity as a parameter.
   */
  delete(entity: SadGroups<T>): DeleteRequestBuilder<SadGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sadGroup?: string
  ): DeleteRequestBuilder<SadGroups<T>, T> {
    return new DeleteRequestBuilder<SadGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SadGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SADGroup: sadGroup!
          }
    );
  }
}
