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
import { LandedCostContainersTables } from './LandedCostContainersTables';

/**
 * Request builder class for operations supported on the {@link LandedCostContainersTables} entity.
 */
export class LandedCostContainersTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LandedCostContainersTables<T>, T> {
  /**
   * Returns a request builder for querying all `LandedCostContainersTables` entities.
   * @returns A request builder for creating requests to retrieve all `LandedCostContainersTables` entities.
   */
  getAll(): GetAllRequestBuilder<LandedCostContainersTables<T>, T> {
    return new GetAllRequestBuilder<LandedCostContainersTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LandedCostContainersTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LandedCostContainersTables`.
   */
  create(
    entity: LandedCostContainersTables<T>
  ): CreateRequestBuilder<LandedCostContainersTables<T>, T> {
    return new CreateRequestBuilder<LandedCostContainersTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LandedCostContainersTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link LandedCostContainersTables.dataAreaId}.
   * @param shipId Key property. See {@link LandedCostContainersTables.shipId}.
   * @param shipContainerId Key property. See {@link LandedCostContainersTables.shipContainerId}.
   * @returns A request builder for creating requests to retrieve one `LandedCostContainersTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipId: DeserializedType<T, 'Edm.String'>,
    shipContainerId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LandedCostContainersTables<T>, T> {
    return new GetByKeyRequestBuilder<LandedCostContainersTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipId: shipId,
        ShipContainerId: shipContainerId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LandedCostContainersTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LandedCostContainersTables`.
   */
  update(
    entity: LandedCostContainersTables<T>
  ): UpdateRequestBuilder<LandedCostContainersTables<T>, T> {
    return new UpdateRequestBuilder<LandedCostContainersTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LandedCostContainersTables`.
   * @param dataAreaId Key property. See {@link LandedCostContainersTables.dataAreaId}.
   * @param shipId Key property. See {@link LandedCostContainersTables.shipId}.
   * @param shipContainerId Key property. See {@link LandedCostContainersTables.shipContainerId}.
   * @returns A request builder for creating requests that delete an entity of type `LandedCostContainersTables`.
   */
  delete(
    dataAreaId: string,
    shipId: string,
    shipContainerId: string
  ): DeleteRequestBuilder<LandedCostContainersTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LandedCostContainersTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LandedCostContainersTables` by taking the entity as a parameter.
   */
  delete(
    entity: LandedCostContainersTables<T>
  ): DeleteRequestBuilder<LandedCostContainersTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipId?: string,
    shipContainerId?: string
  ): DeleteRequestBuilder<LandedCostContainersTables<T>, T> {
    return new DeleteRequestBuilder<LandedCostContainersTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LandedCostContainersTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipId: shipId!,
            ShipContainerId: shipContainerId!
          }
    );
  }
}
