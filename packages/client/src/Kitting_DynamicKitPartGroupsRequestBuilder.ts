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
import { Kitting_DynamicKitPartGroups } from './Kitting_DynamicKitPartGroups';

/**
 * Request builder class for operations supported on the {@link Kitting_DynamicKitPartGroups} entity.
 */
export class Kitting_DynamicKitPartGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Kitting_DynamicKitPartGroups<T>, T> {
  /**
   * Returns a request builder for querying all `Kitting_DynamicKitPartGroups` entities.
   * @returns A request builder for creating requests to retrieve all `Kitting_DynamicKitPartGroups` entities.
   */
  getAll(): GetAllRequestBuilder<Kitting_DynamicKitPartGroups<T>, T> {
    return new GetAllRequestBuilder<Kitting_DynamicKitPartGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `Kitting_DynamicKitPartGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Kitting_DynamicKitPartGroups`.
   */
  create(
    entity: Kitting_DynamicKitPartGroups<T>
  ): CreateRequestBuilder<Kitting_DynamicKitPartGroups<T>, T> {
    return new CreateRequestBuilder<Kitting_DynamicKitPartGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Kitting_DynamicKitPartGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link Kitting_DynamicKitPartGroups.dataAreaId}.
   * @param dynamicKitId Key property. See {@link Kitting_DynamicKitPartGroups.dynamicKitId}.
   * @param dynamicPartGroup Key property. See {@link Kitting_DynamicKitPartGroups.dynamicPartGroup}.
   * @returns A request builder for creating requests to retrieve one `Kitting_DynamicKitPartGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    dynamicKitId: DeserializedType<T, 'Edm.String'>,
    dynamicPartGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Kitting_DynamicKitPartGroups<T>, T> {
    return new GetByKeyRequestBuilder<Kitting_DynamicKitPartGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DynamicKitId: dynamicKitId,
        DynamicPartGroup: dynamicPartGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `Kitting_DynamicKitPartGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Kitting_DynamicKitPartGroups`.
   */
  update(
    entity: Kitting_DynamicKitPartGroups<T>
  ): UpdateRequestBuilder<Kitting_DynamicKitPartGroups<T>, T> {
    return new UpdateRequestBuilder<Kitting_DynamicKitPartGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Kitting_DynamicKitPartGroups`.
   * @param dataAreaId Key property. See {@link Kitting_DynamicKitPartGroups.dataAreaId}.
   * @param dynamicKitId Key property. See {@link Kitting_DynamicKitPartGroups.dynamicKitId}.
   * @param dynamicPartGroup Key property. See {@link Kitting_DynamicKitPartGroups.dynamicPartGroup}.
   * @returns A request builder for creating requests that delete an entity of type `Kitting_DynamicKitPartGroups`.
   */
  delete(
    dataAreaId: string,
    dynamicKitId: string,
    dynamicPartGroup: string
  ): DeleteRequestBuilder<Kitting_DynamicKitPartGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Kitting_DynamicKitPartGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Kitting_DynamicKitPartGroups` by taking the entity as a parameter.
   */
  delete(
    entity: Kitting_DynamicKitPartGroups<T>
  ): DeleteRequestBuilder<Kitting_DynamicKitPartGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    dynamicKitId?: string,
    dynamicPartGroup?: string
  ): DeleteRequestBuilder<Kitting_DynamicKitPartGroups<T>, T> {
    return new DeleteRequestBuilder<Kitting_DynamicKitPartGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Kitting_DynamicKitPartGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DynamicKitId: dynamicKitId!,
            DynamicPartGroup: dynamicPartGroup!
          }
    );
  }
}
