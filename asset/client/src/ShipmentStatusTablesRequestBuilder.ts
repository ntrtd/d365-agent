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
import { ShipmentStatusTables } from './ShipmentStatusTables';
import { ItmCostArea } from './ItmCostArea';

/**
 * Request builder class for operations supported on the {@link ShipmentStatusTables} entity.
 */
export class ShipmentStatusTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipmentStatusTables<T>, T> {
  /**
   * Returns a request builder for querying all `ShipmentStatusTables` entities.
   * @returns A request builder for creating requests to retrieve all `ShipmentStatusTables` entities.
   */
  getAll(): GetAllRequestBuilder<ShipmentStatusTables<T>, T> {
    return new GetAllRequestBuilder<ShipmentStatusTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ShipmentStatusTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipmentStatusTables`.
   */
  create(
    entity: ShipmentStatusTables<T>
  ): CreateRequestBuilder<ShipmentStatusTables<T>, T> {
    return new CreateRequestBuilder<ShipmentStatusTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShipmentStatusTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipmentStatusTables.dataAreaId}.
   * @param costArea Key property. See {@link ShipmentStatusTables.costArea}.
   * @param statusId Key property. See {@link ShipmentStatusTables.statusId}.
   * @returns A request builder for creating requests to retrieve one `ShipmentStatusTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    costArea: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ITMCostArea'
    >,
    statusId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipmentStatusTables<T>, T> {
    return new GetByKeyRequestBuilder<ShipmentStatusTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CostArea: costArea,
        StatusId: statusId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShipmentStatusTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipmentStatusTables`.
   */
  update(
    entity: ShipmentStatusTables<T>
  ): UpdateRequestBuilder<ShipmentStatusTables<T>, T> {
    return new UpdateRequestBuilder<ShipmentStatusTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipmentStatusTables`.
   * @param dataAreaId Key property. See {@link ShipmentStatusTables.dataAreaId}.
   * @param costArea Key property. See {@link ShipmentStatusTables.costArea}.
   * @param statusId Key property. See {@link ShipmentStatusTables.statusId}.
   * @returns A request builder for creating requests that delete an entity of type `ShipmentStatusTables`.
   */
  delete(
    dataAreaId: string,
    costArea: ItmCostArea,
    statusId: string
  ): DeleteRequestBuilder<ShipmentStatusTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipmentStatusTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipmentStatusTables` by taking the entity as a parameter.
   */
  delete(
    entity: ShipmentStatusTables<T>
  ): DeleteRequestBuilder<ShipmentStatusTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    costArea?: ItmCostArea,
    statusId?: string
  ): DeleteRequestBuilder<ShipmentStatusTables<T>, T> {
    return new DeleteRequestBuilder<ShipmentStatusTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipmentStatusTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CostArea: costArea!,
            StatusId: statusId!
          }
    );
  }
}
