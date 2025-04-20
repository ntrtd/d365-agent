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
import { RrgDimensionInterval_Ru } from './RrgDimensionInterval_Ru';

/**
 * Request builder class for operations supported on the {@link RrgDimensionInterval_Ru} entity.
 */
export class RrgDimensionInterval_RuRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RrgDimensionInterval_Ru<T>, T> {
  /**
   * Returns a request builder for querying all `RrgDimensionInterval_Ru` entities.
   * @returns A request builder for creating requests to retrieve all `RrgDimensionInterval_Ru` entities.
   */
  getAll(): GetAllRequestBuilder<RrgDimensionInterval_Ru<T>, T> {
    return new GetAllRequestBuilder<RrgDimensionInterval_Ru<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RrgDimensionInterval_Ru` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RrgDimensionInterval_Ru`.
   */
  create(
    entity: RrgDimensionInterval_Ru<T>
  ): CreateRequestBuilder<RrgDimensionInterval_Ru<T>, T> {
    return new CreateRequestBuilder<RrgDimensionInterval_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RrgDimensionInterval_Ru` entity based on its keys.
   * @param dataAreaId Key property. See {@link RrgDimensionInterval_Ru.dataAreaId}.
   * @param dimensionAttributeName Key property. See {@link RrgDimensionInterval_Ru.dimensionAttributeName}.
   * @param dimensionFromValue Key property. See {@link RrgDimensionInterval_Ru.dimensionFromValue}.
   * @param dimensionToValue Key property. See {@link RrgDimensionInterval_Ru.dimensionToValue}.
   * @param refLineId Key property. See {@link RrgDimensionInterval_Ru.refLineId}.
   * @param refTableName Key property. See {@link RrgDimensionInterval_Ru.refTableName}.
   * @returns A request builder for creating requests to retrieve one `RrgDimensionInterval_Ru` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    dimensionAttributeName: DeserializedType<T, 'Edm.String'>,
    dimensionFromValue: DeserializedType<T, 'Edm.String'>,
    dimensionToValue: DeserializedType<T, 'Edm.String'>,
    refLineId: DeserializedType<T, 'Edm.String'>,
    refTableName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RrgDimensionInterval_Ru<T>, T> {
    return new GetByKeyRequestBuilder<RrgDimensionInterval_Ru<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DimensionAttributeName: dimensionAttributeName,
        DimensionFromValue: dimensionFromValue,
        DimensionToValue: dimensionToValue,
        RefLineId: refLineId,
        RefTableName: refTableName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RrgDimensionInterval_Ru`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RrgDimensionInterval_Ru`.
   */
  update(
    entity: RrgDimensionInterval_Ru<T>
  ): UpdateRequestBuilder<RrgDimensionInterval_Ru<T>, T> {
    return new UpdateRequestBuilder<RrgDimensionInterval_Ru<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RrgDimensionInterval_Ru`.
   * @param dataAreaId Key property. See {@link RrgDimensionInterval_Ru.dataAreaId}.
   * @param dimensionAttributeName Key property. See {@link RrgDimensionInterval_Ru.dimensionAttributeName}.
   * @param dimensionFromValue Key property. See {@link RrgDimensionInterval_Ru.dimensionFromValue}.
   * @param dimensionToValue Key property. See {@link RrgDimensionInterval_Ru.dimensionToValue}.
   * @param refLineId Key property. See {@link RrgDimensionInterval_Ru.refLineId}.
   * @param refTableName Key property. See {@link RrgDimensionInterval_Ru.refTableName}.
   * @returns A request builder for creating requests that delete an entity of type `RrgDimensionInterval_Ru`.
   */
  delete(
    dataAreaId: string,
    dimensionAttributeName: string,
    dimensionFromValue: string,
    dimensionToValue: string,
    refLineId: string,
    refTableName: string
  ): DeleteRequestBuilder<RrgDimensionInterval_Ru<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RrgDimensionInterval_Ru`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RrgDimensionInterval_Ru` by taking the entity as a parameter.
   */
  delete(
    entity: RrgDimensionInterval_Ru<T>
  ): DeleteRequestBuilder<RrgDimensionInterval_Ru<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    dimensionAttributeName?: string,
    dimensionFromValue?: string,
    dimensionToValue?: string,
    refLineId?: string,
    refTableName?: string
  ): DeleteRequestBuilder<RrgDimensionInterval_Ru<T>, T> {
    return new DeleteRequestBuilder<RrgDimensionInterval_Ru<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RrgDimensionInterval_Ru
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DimensionAttributeName: dimensionAttributeName!,
            DimensionFromValue: dimensionFromValue!,
            DimensionToValue: dimensionToValue!,
            RefLineId: refLineId!,
            RefTableName: refTableName!
          }
    );
  }
}
