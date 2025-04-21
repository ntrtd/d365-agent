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
import { DimAttributeAssetGroups } from './DimAttributeAssetGroups';

/**
 * Request builder class for operations supported on the {@link DimAttributeAssetGroups} entity.
 */
export class DimAttributeAssetGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeAssetGroups<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeAssetGroups` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeAssetGroups` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeAssetGroups<T>, T> {
    return new GetAllRequestBuilder<DimAttributeAssetGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeAssetGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeAssetGroups`.
   */
  create(
    entity: DimAttributeAssetGroups<T>
  ): CreateRequestBuilder<DimAttributeAssetGroups<T>, T> {
    return new CreateRequestBuilder<DimAttributeAssetGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeAssetGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeAssetGroups.dataAreaId}.
   * @param value Key property. See {@link DimAttributeAssetGroups.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeAssetGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeAssetGroups<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeAssetGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeAssetGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeAssetGroups`.
   */
  update(
    entity: DimAttributeAssetGroups<T>
  ): UpdateRequestBuilder<DimAttributeAssetGroups<T>, T> {
    return new UpdateRequestBuilder<DimAttributeAssetGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeAssetGroups`.
   * @param dataAreaId Key property. See {@link DimAttributeAssetGroups.dataAreaId}.
   * @param value Key property. See {@link DimAttributeAssetGroups.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeAssetGroups`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeAssetGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeAssetGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeAssetGroups` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeAssetGroups<T>
  ): DeleteRequestBuilder<DimAttributeAssetGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeAssetGroups<T>, T> {
    return new DeleteRequestBuilder<DimAttributeAssetGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeAssetGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
