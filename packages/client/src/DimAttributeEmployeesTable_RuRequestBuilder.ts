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
import { DimAttributeEmployeesTable_Ru } from './DimAttributeEmployeesTable_Ru';

/**
 * Request builder class for operations supported on the {@link DimAttributeEmployeesTable_Ru} entity.
 */
export class DimAttributeEmployeesTable_RuRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeEmployeesTable_Ru<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeEmployeesTable_Ru` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeEmployeesTable_Ru` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeEmployeesTable_Ru<T>, T> {
    return new GetAllRequestBuilder<DimAttributeEmployeesTable_Ru<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeEmployeesTable_Ru` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeEmployeesTable_Ru`.
   */
  create(
    entity: DimAttributeEmployeesTable_Ru<T>
  ): CreateRequestBuilder<DimAttributeEmployeesTable_Ru<T>, T> {
    return new CreateRequestBuilder<DimAttributeEmployeesTable_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeEmployeesTable_Ru` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeEmployeesTable_Ru.dataAreaId}.
   * @param value Key property. See {@link DimAttributeEmployeesTable_Ru.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeEmployeesTable_Ru` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeEmployeesTable_Ru<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeEmployeesTable_Ru<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeEmployeesTable_Ru`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeEmployeesTable_Ru`.
   */
  update(
    entity: DimAttributeEmployeesTable_Ru<T>
  ): UpdateRequestBuilder<DimAttributeEmployeesTable_Ru<T>, T> {
    return new UpdateRequestBuilder<DimAttributeEmployeesTable_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeEmployeesTable_Ru`.
   * @param dataAreaId Key property. See {@link DimAttributeEmployeesTable_Ru.dataAreaId}.
   * @param value Key property. See {@link DimAttributeEmployeesTable_Ru.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeEmployeesTable_Ru`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeEmployeesTable_Ru<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeEmployeesTable_Ru`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeEmployeesTable_Ru` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeEmployeesTable_Ru<T>
  ): DeleteRequestBuilder<DimAttributeEmployeesTable_Ru<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeEmployeesTable_Ru<T>, T> {
    return new DeleteRequestBuilder<DimAttributeEmployeesTable_Ru<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeEmployeesTable_Ru
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
