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
import { DimAttributeProjGroups } from './DimAttributeProjGroups';

/**
 * Request builder class for operations supported on the {@link DimAttributeProjGroups} entity.
 */
export class DimAttributeProjGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeProjGroups<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeProjGroups` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeProjGroups` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeProjGroups<T>, T> {
    return new GetAllRequestBuilder<DimAttributeProjGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeProjGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeProjGroups`.
   */
  create(
    entity: DimAttributeProjGroups<T>
  ): CreateRequestBuilder<DimAttributeProjGroups<T>, T> {
    return new CreateRequestBuilder<DimAttributeProjGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeProjGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeProjGroups.dataAreaId}.
   * @param value Key property. See {@link DimAttributeProjGroups.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeProjGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeProjGroups<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeProjGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeProjGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeProjGroups`.
   */
  update(
    entity: DimAttributeProjGroups<T>
  ): UpdateRequestBuilder<DimAttributeProjGroups<T>, T> {
    return new UpdateRequestBuilder<DimAttributeProjGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeProjGroups`.
   * @param dataAreaId Key property. See {@link DimAttributeProjGroups.dataAreaId}.
   * @param value Key property. See {@link DimAttributeProjGroups.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeProjGroups`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeProjGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeProjGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeProjGroups` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeProjGroups<T>
  ): DeleteRequestBuilder<DimAttributeProjGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeProjGroups<T>, T> {
    return new DeleteRequestBuilder<DimAttributeProjGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeProjGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
