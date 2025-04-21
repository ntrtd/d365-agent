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
import { Kitting_PartGroups } from './Kitting_PartGroups';

/**
 * Request builder class for operations supported on the {@link Kitting_PartGroups} entity.
 */
export class Kitting_PartGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Kitting_PartGroups<T>, T> {
  /**
   * Returns a request builder for querying all `Kitting_PartGroups` entities.
   * @returns A request builder for creating requests to retrieve all `Kitting_PartGroups` entities.
   */
  getAll(): GetAllRequestBuilder<Kitting_PartGroups<T>, T> {
    return new GetAllRequestBuilder<Kitting_PartGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Kitting_PartGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Kitting_PartGroups`.
   */
  create(
    entity: Kitting_PartGroups<T>
  ): CreateRequestBuilder<Kitting_PartGroups<T>, T> {
    return new CreateRequestBuilder<Kitting_PartGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Kitting_PartGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link Kitting_PartGroups.dataAreaId}.
   * @param dynamicPartGroup Key property. See {@link Kitting_PartGroups.dynamicPartGroup}.
   * @returns A request builder for creating requests to retrieve one `Kitting_PartGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    dynamicPartGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Kitting_PartGroups<T>, T> {
    return new GetByKeyRequestBuilder<Kitting_PartGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DynamicPartGroup: dynamicPartGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `Kitting_PartGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Kitting_PartGroups`.
   */
  update(
    entity: Kitting_PartGroups<T>
  ): UpdateRequestBuilder<Kitting_PartGroups<T>, T> {
    return new UpdateRequestBuilder<Kitting_PartGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Kitting_PartGroups`.
   * @param dataAreaId Key property. See {@link Kitting_PartGroups.dataAreaId}.
   * @param dynamicPartGroup Key property. See {@link Kitting_PartGroups.dynamicPartGroup}.
   * @returns A request builder for creating requests that delete an entity of type `Kitting_PartGroups`.
   */
  delete(
    dataAreaId: string,
    dynamicPartGroup: string
  ): DeleteRequestBuilder<Kitting_PartGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Kitting_PartGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Kitting_PartGroups` by taking the entity as a parameter.
   */
  delete(
    entity: Kitting_PartGroups<T>
  ): DeleteRequestBuilder<Kitting_PartGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    dynamicPartGroup?: string
  ): DeleteRequestBuilder<Kitting_PartGroups<T>, T> {
    return new DeleteRequestBuilder<Kitting_PartGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Kitting_PartGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DynamicPartGroup: dynamicPartGroup!
          }
    );
  }
}
