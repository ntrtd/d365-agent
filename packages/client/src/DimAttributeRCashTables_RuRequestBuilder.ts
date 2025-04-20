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
import { DimAttributeRCashTables_Ru } from './DimAttributeRCashTables_Ru';

/**
 * Request builder class for operations supported on the {@link DimAttributeRCashTables_Ru} entity.
 */
export class DimAttributeRCashTables_RuRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeRCashTables_Ru<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeRCashTables_Ru` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeRCashTables_Ru` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeRCashTables_Ru<T>, T> {
    return new GetAllRequestBuilder<DimAttributeRCashTables_Ru<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeRCashTables_Ru` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeRCashTables_Ru`.
   */
  create(
    entity: DimAttributeRCashTables_Ru<T>
  ): CreateRequestBuilder<DimAttributeRCashTables_Ru<T>, T> {
    return new CreateRequestBuilder<DimAttributeRCashTables_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeRCashTables_Ru` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeRCashTables_Ru.dataAreaId}.
   * @param value Key property. See {@link DimAttributeRCashTables_Ru.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeRCashTables_Ru` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeRCashTables_Ru<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeRCashTables_Ru<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeRCashTables_Ru`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeRCashTables_Ru`.
   */
  update(
    entity: DimAttributeRCashTables_Ru<T>
  ): UpdateRequestBuilder<DimAttributeRCashTables_Ru<T>, T> {
    return new UpdateRequestBuilder<DimAttributeRCashTables_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeRCashTables_Ru`.
   * @param dataAreaId Key property. See {@link DimAttributeRCashTables_Ru.dataAreaId}.
   * @param value Key property. See {@link DimAttributeRCashTables_Ru.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeRCashTables_Ru`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeRCashTables_Ru<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeRCashTables_Ru`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeRCashTables_Ru` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeRCashTables_Ru<T>
  ): DeleteRequestBuilder<DimAttributeRCashTables_Ru<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeRCashTables_Ru<T>, T> {
    return new DeleteRequestBuilder<DimAttributeRCashTables_Ru<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeRCashTables_Ru
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
