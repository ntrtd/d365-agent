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
import { DimAttributeRTax25ProfitTables_Ru } from './DimAttributeRTax25ProfitTables_Ru';

/**
 * Request builder class for operations supported on the {@link DimAttributeRTax25ProfitTables_Ru} entity.
 */
export class DimAttributeRTax25ProfitTables_RuRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeRTax25ProfitTables_Ru<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeRTax25ProfitTables_Ru` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeRTax25ProfitTables_Ru` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeRTax25ProfitTables_Ru<T>, T> {
    return new GetAllRequestBuilder<DimAttributeRTax25ProfitTables_Ru<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeRTax25ProfitTables_Ru` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeRTax25ProfitTables_Ru`.
   */
  create(
    entity: DimAttributeRTax25ProfitTables_Ru<T>
  ): CreateRequestBuilder<DimAttributeRTax25ProfitTables_Ru<T>, T> {
    return new CreateRequestBuilder<DimAttributeRTax25ProfitTables_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeRTax25ProfitTables_Ru` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeRTax25ProfitTables_Ru.dataAreaId}.
   * @param value Key property. See {@link DimAttributeRTax25ProfitTables_Ru.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeRTax25ProfitTables_Ru` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeRTax25ProfitTables_Ru<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeRTax25ProfitTables_Ru<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeRTax25ProfitTables_Ru`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeRTax25ProfitTables_Ru`.
   */
  update(
    entity: DimAttributeRTax25ProfitTables_Ru<T>
  ): UpdateRequestBuilder<DimAttributeRTax25ProfitTables_Ru<T>, T> {
    return new UpdateRequestBuilder<DimAttributeRTax25ProfitTables_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeRTax25ProfitTables_Ru`.
   * @param dataAreaId Key property. See {@link DimAttributeRTax25ProfitTables_Ru.dataAreaId}.
   * @param value Key property. See {@link DimAttributeRTax25ProfitTables_Ru.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeRTax25ProfitTables_Ru`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeRTax25ProfitTables_Ru<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeRTax25ProfitTables_Ru`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeRTax25ProfitTables_Ru` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeRTax25ProfitTables_Ru<T>
  ): DeleteRequestBuilder<DimAttributeRTax25ProfitTables_Ru<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeRTax25ProfitTables_Ru<T>, T> {
    return new DeleteRequestBuilder<DimAttributeRTax25ProfitTables_Ru<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeRTax25ProfitTables_Ru
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
