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
import { DimAttributeWrkCtrResourceGroups } from './DimAttributeWrkCtrResourceGroups';

/**
 * Request builder class for operations supported on the {@link DimAttributeWrkCtrResourceGroups} entity.
 */
export class DimAttributeWrkCtrResourceGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeWrkCtrResourceGroups<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeWrkCtrResourceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeWrkCtrResourceGroups` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeWrkCtrResourceGroups<T>, T> {
    return new GetAllRequestBuilder<DimAttributeWrkCtrResourceGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeWrkCtrResourceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeWrkCtrResourceGroups`.
   */
  create(
    entity: DimAttributeWrkCtrResourceGroups<T>
  ): CreateRequestBuilder<DimAttributeWrkCtrResourceGroups<T>, T> {
    return new CreateRequestBuilder<DimAttributeWrkCtrResourceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeWrkCtrResourceGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeWrkCtrResourceGroups.dataAreaId}.
   * @param value Key property. See {@link DimAttributeWrkCtrResourceGroups.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeWrkCtrResourceGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeWrkCtrResourceGroups<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeWrkCtrResourceGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeWrkCtrResourceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeWrkCtrResourceGroups`.
   */
  update(
    entity: DimAttributeWrkCtrResourceGroups<T>
  ): UpdateRequestBuilder<DimAttributeWrkCtrResourceGroups<T>, T> {
    return new UpdateRequestBuilder<DimAttributeWrkCtrResourceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeWrkCtrResourceGroups`.
   * @param dataAreaId Key property. See {@link DimAttributeWrkCtrResourceGroups.dataAreaId}.
   * @param value Key property. See {@link DimAttributeWrkCtrResourceGroups.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeWrkCtrResourceGroups`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeWrkCtrResourceGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeWrkCtrResourceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeWrkCtrResourceGroups` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeWrkCtrResourceGroups<T>
  ): DeleteRequestBuilder<DimAttributeWrkCtrResourceGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeWrkCtrResourceGroups<T>, T> {
    return new DeleteRequestBuilder<DimAttributeWrkCtrResourceGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeWrkCtrResourceGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
