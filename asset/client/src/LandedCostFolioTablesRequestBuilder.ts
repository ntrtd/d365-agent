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
import { LandedCostFolioTables } from './LandedCostFolioTables';

/**
 * Request builder class for operations supported on the {@link LandedCostFolioTables} entity.
 */
export class LandedCostFolioTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LandedCostFolioTables<T>, T> {
  /**
   * Returns a request builder for querying all `LandedCostFolioTables` entities.
   * @returns A request builder for creating requests to retrieve all `LandedCostFolioTables` entities.
   */
  getAll(): GetAllRequestBuilder<LandedCostFolioTables<T>, T> {
    return new GetAllRequestBuilder<LandedCostFolioTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LandedCostFolioTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LandedCostFolioTables`.
   */
  create(
    entity: LandedCostFolioTables<T>
  ): CreateRequestBuilder<LandedCostFolioTables<T>, T> {
    return new CreateRequestBuilder<LandedCostFolioTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LandedCostFolioTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link LandedCostFolioTables.dataAreaId}.
   * @param shipFolioId Key property. See {@link LandedCostFolioTables.shipFolioId}.
   * @returns A request builder for creating requests to retrieve one `LandedCostFolioTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipFolioId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LandedCostFolioTables<T>, T> {
    return new GetByKeyRequestBuilder<LandedCostFolioTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipFolioId: shipFolioId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LandedCostFolioTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LandedCostFolioTables`.
   */
  update(
    entity: LandedCostFolioTables<T>
  ): UpdateRequestBuilder<LandedCostFolioTables<T>, T> {
    return new UpdateRequestBuilder<LandedCostFolioTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LandedCostFolioTables`.
   * @param dataAreaId Key property. See {@link LandedCostFolioTables.dataAreaId}.
   * @param shipFolioId Key property. See {@link LandedCostFolioTables.shipFolioId}.
   * @returns A request builder for creating requests that delete an entity of type `LandedCostFolioTables`.
   */
  delete(
    dataAreaId: string,
    shipFolioId: string
  ): DeleteRequestBuilder<LandedCostFolioTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LandedCostFolioTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LandedCostFolioTables` by taking the entity as a parameter.
   */
  delete(
    entity: LandedCostFolioTables<T>
  ): DeleteRequestBuilder<LandedCostFolioTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipFolioId?: string
  ): DeleteRequestBuilder<LandedCostFolioTables<T>, T> {
    return new DeleteRequestBuilder<LandedCostFolioTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LandedCostFolioTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipFolioId: shipFolioId!
          }
    );
  }
}
