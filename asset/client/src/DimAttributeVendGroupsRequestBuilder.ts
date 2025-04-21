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
import { DimAttributeVendGroups } from './DimAttributeVendGroups';

/**
 * Request builder class for operations supported on the {@link DimAttributeVendGroups} entity.
 */
export class DimAttributeVendGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeVendGroups<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeVendGroups` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeVendGroups` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeVendGroups<T>, T> {
    return new GetAllRequestBuilder<DimAttributeVendGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeVendGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeVendGroups`.
   */
  create(
    entity: DimAttributeVendGroups<T>
  ): CreateRequestBuilder<DimAttributeVendGroups<T>, T> {
    return new CreateRequestBuilder<DimAttributeVendGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeVendGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeVendGroups.dataAreaId}.
   * @param value Key property. See {@link DimAttributeVendGroups.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeVendGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeVendGroups<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeVendGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeVendGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeVendGroups`.
   */
  update(
    entity: DimAttributeVendGroups<T>
  ): UpdateRequestBuilder<DimAttributeVendGroups<T>, T> {
    return new UpdateRequestBuilder<DimAttributeVendGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeVendGroups`.
   * @param dataAreaId Key property. See {@link DimAttributeVendGroups.dataAreaId}.
   * @param value Key property. See {@link DimAttributeVendGroups.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeVendGroups`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeVendGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeVendGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeVendGroups` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeVendGroups<T>
  ): DeleteRequestBuilder<DimAttributeVendGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeVendGroups<T>, T> {
    return new DeleteRequestBuilder<DimAttributeVendGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeVendGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
