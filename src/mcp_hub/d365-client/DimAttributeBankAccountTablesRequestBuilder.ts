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
import { DimAttributeBankAccountTables } from './DimAttributeBankAccountTables';

/**
 * Request builder class for operations supported on the {@link DimAttributeBankAccountTables} entity.
 */
export class DimAttributeBankAccountTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeBankAccountTables<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeBankAccountTables` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeBankAccountTables` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeBankAccountTables<T>, T> {
    return new GetAllRequestBuilder<DimAttributeBankAccountTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeBankAccountTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeBankAccountTables`.
   */
  create(
    entity: DimAttributeBankAccountTables<T>
  ): CreateRequestBuilder<DimAttributeBankAccountTables<T>, T> {
    return new CreateRequestBuilder<DimAttributeBankAccountTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeBankAccountTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeBankAccountTables.dataAreaId}.
   * @param value Key property. See {@link DimAttributeBankAccountTables.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeBankAccountTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeBankAccountTables<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeBankAccountTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeBankAccountTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeBankAccountTables`.
   */
  update(
    entity: DimAttributeBankAccountTables<T>
  ): UpdateRequestBuilder<DimAttributeBankAccountTables<T>, T> {
    return new UpdateRequestBuilder<DimAttributeBankAccountTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeBankAccountTables`.
   * @param dataAreaId Key property. See {@link DimAttributeBankAccountTables.dataAreaId}.
   * @param value Key property. See {@link DimAttributeBankAccountTables.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeBankAccountTables`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeBankAccountTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeBankAccountTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeBankAccountTables` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeBankAccountTables<T>
  ): DeleteRequestBuilder<DimAttributeBankAccountTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeBankAccountTables<T>, T> {
    return new DeleteRequestBuilder<DimAttributeBankAccountTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeBankAccountTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
