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
import { DimAttributeWrkCtrTables } from './DimAttributeWrkCtrTables';

/**
 * Request builder class for operations supported on the {@link DimAttributeWrkCtrTables} entity.
 */
export class DimAttributeWrkCtrTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeWrkCtrTables<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeWrkCtrTables` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeWrkCtrTables` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeWrkCtrTables<T>, T> {
    return new GetAllRequestBuilder<DimAttributeWrkCtrTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeWrkCtrTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeWrkCtrTables`.
   */
  create(
    entity: DimAttributeWrkCtrTables<T>
  ): CreateRequestBuilder<DimAttributeWrkCtrTables<T>, T> {
    return new CreateRequestBuilder<DimAttributeWrkCtrTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeWrkCtrTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeWrkCtrTables.dataAreaId}.
   * @param value Key property. See {@link DimAttributeWrkCtrTables.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeWrkCtrTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeWrkCtrTables<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeWrkCtrTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeWrkCtrTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeWrkCtrTables`.
   */
  update(
    entity: DimAttributeWrkCtrTables<T>
  ): UpdateRequestBuilder<DimAttributeWrkCtrTables<T>, T> {
    return new UpdateRequestBuilder<DimAttributeWrkCtrTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeWrkCtrTables`.
   * @param dataAreaId Key property. See {@link DimAttributeWrkCtrTables.dataAreaId}.
   * @param value Key property. See {@link DimAttributeWrkCtrTables.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeWrkCtrTables`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeWrkCtrTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeWrkCtrTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeWrkCtrTables` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeWrkCtrTables<T>
  ): DeleteRequestBuilder<DimAttributeWrkCtrTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeWrkCtrTables<T>, T> {
    return new DeleteRequestBuilder<DimAttributeWrkCtrTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeWrkCtrTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
