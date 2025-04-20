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
import { DimAttributeTrvTravelTxts } from './DimAttributeTrvTravelTxts';

/**
 * Request builder class for operations supported on the {@link DimAttributeTrvTravelTxts} entity.
 */
export class DimAttributeTrvTravelTxtsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeTrvTravelTxts<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeTrvTravelTxts` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeTrvTravelTxts` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeTrvTravelTxts<T>, T> {
    return new GetAllRequestBuilder<DimAttributeTrvTravelTxts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeTrvTravelTxts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeTrvTravelTxts`.
   */
  create(
    entity: DimAttributeTrvTravelTxts<T>
  ): CreateRequestBuilder<DimAttributeTrvTravelTxts<T>, T> {
    return new CreateRequestBuilder<DimAttributeTrvTravelTxts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeTrvTravelTxts` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeTrvTravelTxts.dataAreaId}.
   * @param value Key property. See {@link DimAttributeTrvTravelTxts.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeTrvTravelTxts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeTrvTravelTxts<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeTrvTravelTxts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeTrvTravelTxts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeTrvTravelTxts`.
   */
  update(
    entity: DimAttributeTrvTravelTxts<T>
  ): UpdateRequestBuilder<DimAttributeTrvTravelTxts<T>, T> {
    return new UpdateRequestBuilder<DimAttributeTrvTravelTxts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeTrvTravelTxts`.
   * @param dataAreaId Key property. See {@link DimAttributeTrvTravelTxts.dataAreaId}.
   * @param value Key property. See {@link DimAttributeTrvTravelTxts.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeTrvTravelTxts`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeTrvTravelTxts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeTrvTravelTxts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeTrvTravelTxts` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeTrvTravelTxts<T>
  ): DeleteRequestBuilder<DimAttributeTrvTravelTxts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeTrvTravelTxts<T>, T> {
    return new DeleteRequestBuilder<DimAttributeTrvTravelTxts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeTrvTravelTxts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
