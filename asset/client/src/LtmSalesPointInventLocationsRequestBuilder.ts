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
import { LtmSalesPointInventLocations } from './LtmSalesPointInventLocations';

/**
 * Request builder class for operations supported on the {@link LtmSalesPointInventLocations} entity.
 */
export class LtmSalesPointInventLocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmSalesPointInventLocations<T>, T> {
  /**
   * Returns a request builder for querying all `LtmSalesPointInventLocations` entities.
   * @returns A request builder for creating requests to retrieve all `LtmSalesPointInventLocations` entities.
   */
  getAll(): GetAllRequestBuilder<LtmSalesPointInventLocations<T>, T> {
    return new GetAllRequestBuilder<LtmSalesPointInventLocations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmSalesPointInventLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmSalesPointInventLocations`.
   */
  create(
    entity: LtmSalesPointInventLocations<T>
  ): CreateRequestBuilder<LtmSalesPointInventLocations<T>, T> {
    return new CreateRequestBuilder<LtmSalesPointInventLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmSalesPointInventLocations` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmSalesPointInventLocations.dataAreaId}.
   * @param inventLocationId Key property. See {@link LtmSalesPointInventLocations.inventLocationId}.
   * @param salesPointId Key property. See {@link LtmSalesPointInventLocations.salesPointId}.
   * @returns A request builder for creating requests to retrieve one `LtmSalesPointInventLocations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventLocationId: DeserializedType<T, 'Edm.String'>,
    salesPointId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmSalesPointInventLocations<T>, T> {
    return new GetByKeyRequestBuilder<LtmSalesPointInventLocations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventLocationId: inventLocationId,
        SalesPointId: salesPointId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmSalesPointInventLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmSalesPointInventLocations`.
   */
  update(
    entity: LtmSalesPointInventLocations<T>
  ): UpdateRequestBuilder<LtmSalesPointInventLocations<T>, T> {
    return new UpdateRequestBuilder<LtmSalesPointInventLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmSalesPointInventLocations`.
   * @param dataAreaId Key property. See {@link LtmSalesPointInventLocations.dataAreaId}.
   * @param inventLocationId Key property. See {@link LtmSalesPointInventLocations.inventLocationId}.
   * @param salesPointId Key property. See {@link LtmSalesPointInventLocations.salesPointId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmSalesPointInventLocations`.
   */
  delete(
    dataAreaId: string,
    inventLocationId: string,
    salesPointId: string
  ): DeleteRequestBuilder<LtmSalesPointInventLocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmSalesPointInventLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmSalesPointInventLocations` by taking the entity as a parameter.
   */
  delete(
    entity: LtmSalesPointInventLocations<T>
  ): DeleteRequestBuilder<LtmSalesPointInventLocations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventLocationId?: string,
    salesPointId?: string
  ): DeleteRequestBuilder<LtmSalesPointInventLocations<T>, T> {
    return new DeleteRequestBuilder<LtmSalesPointInventLocations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmSalesPointInventLocations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventLocationId: inventLocationId!,
            SalesPointId: salesPointId!
          }
    );
  }
}
