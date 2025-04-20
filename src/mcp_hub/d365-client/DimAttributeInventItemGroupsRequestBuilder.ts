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
import { DimAttributeInventItemGroups } from './DimAttributeInventItemGroups';

/**
 * Request builder class for operations supported on the {@link DimAttributeInventItemGroups} entity.
 */
export class DimAttributeInventItemGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeInventItemGroups<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeInventItemGroups` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeInventItemGroups` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeInventItemGroups<T>, T> {
    return new GetAllRequestBuilder<DimAttributeInventItemGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeInventItemGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeInventItemGroups`.
   */
  create(
    entity: DimAttributeInventItemGroups<T>
  ): CreateRequestBuilder<DimAttributeInventItemGroups<T>, T> {
    return new CreateRequestBuilder<DimAttributeInventItemGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeInventItemGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeInventItemGroups.dataAreaId}.
   * @param value Key property. See {@link DimAttributeInventItemGroups.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeInventItemGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeInventItemGroups<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeInventItemGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeInventItemGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeInventItemGroups`.
   */
  update(
    entity: DimAttributeInventItemGroups<T>
  ): UpdateRequestBuilder<DimAttributeInventItemGroups<T>, T> {
    return new UpdateRequestBuilder<DimAttributeInventItemGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeInventItemGroups`.
   * @param dataAreaId Key property. See {@link DimAttributeInventItemGroups.dataAreaId}.
   * @param value Key property. See {@link DimAttributeInventItemGroups.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeInventItemGroups`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeInventItemGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeInventItemGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeInventItemGroups` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeInventItemGroups<T>
  ): DeleteRequestBuilder<DimAttributeInventItemGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeInventItemGroups<T>, T> {
    return new DeleteRequestBuilder<DimAttributeInventItemGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeInventItemGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
