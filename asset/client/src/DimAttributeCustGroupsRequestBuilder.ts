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
import { DimAttributeCustGroups } from './DimAttributeCustGroups';

/**
 * Request builder class for operations supported on the {@link DimAttributeCustGroups} entity.
 */
export class DimAttributeCustGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeCustGroups<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeCustGroups` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeCustGroups` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeCustGroups<T>, T> {
    return new GetAllRequestBuilder<DimAttributeCustGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeCustGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeCustGroups`.
   */
  create(
    entity: DimAttributeCustGroups<T>
  ): CreateRequestBuilder<DimAttributeCustGroups<T>, T> {
    return new CreateRequestBuilder<DimAttributeCustGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeCustGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeCustGroups.dataAreaId}.
   * @param value Key property. See {@link DimAttributeCustGroups.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeCustGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeCustGroups<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeCustGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeCustGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeCustGroups`.
   */
  update(
    entity: DimAttributeCustGroups<T>
  ): UpdateRequestBuilder<DimAttributeCustGroups<T>, T> {
    return new UpdateRequestBuilder<DimAttributeCustGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeCustGroups`.
   * @param dataAreaId Key property. See {@link DimAttributeCustGroups.dataAreaId}.
   * @param value Key property. See {@link DimAttributeCustGroups.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeCustGroups`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeCustGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeCustGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeCustGroups` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeCustGroups<T>
  ): DeleteRequestBuilder<DimAttributeCustGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeCustGroups<T>, T> {
    return new DeleteRequestBuilder<DimAttributeCustGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeCustGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
