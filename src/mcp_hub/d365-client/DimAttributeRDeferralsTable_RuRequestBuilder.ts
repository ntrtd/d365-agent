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
import { DimAttributeRDeferralsTable_Ru } from './DimAttributeRDeferralsTable_Ru';

/**
 * Request builder class for operations supported on the {@link DimAttributeRDeferralsTable_Ru} entity.
 */
export class DimAttributeRDeferralsTable_RuRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeRDeferralsTable_Ru<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeRDeferralsTable_Ru` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeRDeferralsTable_Ru` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeRDeferralsTable_Ru<T>, T> {
    return new GetAllRequestBuilder<DimAttributeRDeferralsTable_Ru<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeRDeferralsTable_Ru` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeRDeferralsTable_Ru`.
   */
  create(
    entity: DimAttributeRDeferralsTable_Ru<T>
  ): CreateRequestBuilder<DimAttributeRDeferralsTable_Ru<T>, T> {
    return new CreateRequestBuilder<DimAttributeRDeferralsTable_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeRDeferralsTable_Ru` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeRDeferralsTable_Ru.dataAreaId}.
   * @param value Key property. See {@link DimAttributeRDeferralsTable_Ru.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeRDeferralsTable_Ru` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeRDeferralsTable_Ru<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeRDeferralsTable_Ru<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeRDeferralsTable_Ru`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeRDeferralsTable_Ru`.
   */
  update(
    entity: DimAttributeRDeferralsTable_Ru<T>
  ): UpdateRequestBuilder<DimAttributeRDeferralsTable_Ru<T>, T> {
    return new UpdateRequestBuilder<DimAttributeRDeferralsTable_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeRDeferralsTable_Ru`.
   * @param dataAreaId Key property. See {@link DimAttributeRDeferralsTable_Ru.dataAreaId}.
   * @param value Key property. See {@link DimAttributeRDeferralsTable_Ru.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeRDeferralsTable_Ru`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeRDeferralsTable_Ru<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeRDeferralsTable_Ru`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeRDeferralsTable_Ru` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeRDeferralsTable_Ru<T>
  ): DeleteRequestBuilder<DimAttributeRDeferralsTable_Ru<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeRDeferralsTable_Ru<T>, T> {
    return new DeleteRequestBuilder<DimAttributeRDeferralsTable_Ru<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeRDeferralsTable_Ru
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
