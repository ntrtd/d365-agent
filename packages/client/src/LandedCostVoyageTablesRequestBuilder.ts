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
import { LandedCostVoyageTables } from './LandedCostVoyageTables';

/**
 * Request builder class for operations supported on the {@link LandedCostVoyageTables} entity.
 */
export class LandedCostVoyageTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LandedCostVoyageTables<T>, T> {
  /**
   * Returns a request builder for querying all `LandedCostVoyageTables` entities.
   * @returns A request builder for creating requests to retrieve all `LandedCostVoyageTables` entities.
   */
  getAll(): GetAllRequestBuilder<LandedCostVoyageTables<T>, T> {
    return new GetAllRequestBuilder<LandedCostVoyageTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LandedCostVoyageTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LandedCostVoyageTables`.
   */
  create(
    entity: LandedCostVoyageTables<T>
  ): CreateRequestBuilder<LandedCostVoyageTables<T>, T> {
    return new CreateRequestBuilder<LandedCostVoyageTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LandedCostVoyageTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link LandedCostVoyageTables.dataAreaId}.
   * @param shipId Key property. See {@link LandedCostVoyageTables.shipId}.
   * @returns A request builder for creating requests to retrieve one `LandedCostVoyageTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LandedCostVoyageTables<T>, T> {
    return new GetByKeyRequestBuilder<LandedCostVoyageTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipId: shipId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LandedCostVoyageTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LandedCostVoyageTables`.
   */
  update(
    entity: LandedCostVoyageTables<T>
  ): UpdateRequestBuilder<LandedCostVoyageTables<T>, T> {
    return new UpdateRequestBuilder<LandedCostVoyageTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LandedCostVoyageTables`.
   * @param dataAreaId Key property. See {@link LandedCostVoyageTables.dataAreaId}.
   * @param shipId Key property. See {@link LandedCostVoyageTables.shipId}.
   * @returns A request builder for creating requests that delete an entity of type `LandedCostVoyageTables`.
   */
  delete(
    dataAreaId: string,
    shipId: string
  ): DeleteRequestBuilder<LandedCostVoyageTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LandedCostVoyageTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LandedCostVoyageTables` by taking the entity as a parameter.
   */
  delete(
    entity: LandedCostVoyageTables<T>
  ): DeleteRequestBuilder<LandedCostVoyageTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipId?: string
  ): DeleteRequestBuilder<LandedCostVoyageTables<T>, T> {
    return new DeleteRequestBuilder<LandedCostVoyageTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LandedCostVoyageTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipId: shipId!
          }
    );
  }
}
