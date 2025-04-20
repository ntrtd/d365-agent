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
import { LtmSalesPoints } from './LtmSalesPoints';

/**
 * Request builder class for operations supported on the {@link LtmSalesPoints} entity.
 */
export class LtmSalesPointsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmSalesPoints<T>, T> {
  /**
   * Returns a request builder for querying all `LtmSalesPoints` entities.
   * @returns A request builder for creating requests to retrieve all `LtmSalesPoints` entities.
   */
  getAll(): GetAllRequestBuilder<LtmSalesPoints<T>, T> {
    return new GetAllRequestBuilder<LtmSalesPoints<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmSalesPoints` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmSalesPoints`.
   */
  create(
    entity: LtmSalesPoints<T>
  ): CreateRequestBuilder<LtmSalesPoints<T>, T> {
    return new CreateRequestBuilder<LtmSalesPoints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmSalesPoints` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmSalesPoints.dataAreaId}.
   * @param salesPointId Key property. See {@link LtmSalesPoints.salesPointId}.
   * @returns A request builder for creating requests to retrieve one `LtmSalesPoints` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesPointId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmSalesPoints<T>, T> {
    return new GetByKeyRequestBuilder<LtmSalesPoints<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SalesPointId: salesPointId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmSalesPoints`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmSalesPoints`.
   */
  update(
    entity: LtmSalesPoints<T>
  ): UpdateRequestBuilder<LtmSalesPoints<T>, T> {
    return new UpdateRequestBuilder<LtmSalesPoints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmSalesPoints`.
   * @param dataAreaId Key property. See {@link LtmSalesPoints.dataAreaId}.
   * @param salesPointId Key property. See {@link LtmSalesPoints.salesPointId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmSalesPoints`.
   */
  delete(
    dataAreaId: string,
    salesPointId: string
  ): DeleteRequestBuilder<LtmSalesPoints<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmSalesPoints`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmSalesPoints` by taking the entity as a parameter.
   */
  delete(entity: LtmSalesPoints<T>): DeleteRequestBuilder<LtmSalesPoints<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesPointId?: string
  ): DeleteRequestBuilder<LtmSalesPoints<T>, T> {
    return new DeleteRequestBuilder<LtmSalesPoints<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmSalesPoints
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesPointId: salesPointId!
          }
    );
  }
}
