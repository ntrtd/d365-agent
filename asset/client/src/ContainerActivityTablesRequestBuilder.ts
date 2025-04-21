/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { ContainerActivityTables } from './ContainerActivityTables';

/**
 * Request builder class for operations supported on the {@link ContainerActivityTables} entity.
 */
export class ContainerActivityTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ContainerActivityTables<T>, T> {
  /**
   * Returns a request builder for querying all `ContainerActivityTables` entities.
   * @returns A request builder for creating requests to retrieve all `ContainerActivityTables` entities.
   */
  getAll(): GetAllRequestBuilder<ContainerActivityTables<T>, T> {
    return new GetAllRequestBuilder<ContainerActivityTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ContainerActivityTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ContainerActivityTables`.
   */
  create(
    entity: ContainerActivityTables<T>
  ): CreateRequestBuilder<ContainerActivityTables<T>, T> {
    return new CreateRequestBuilder<ContainerActivityTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ContainerActivityTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ContainerActivityTables.dataAreaId}.
   * @param shipId Key property. See {@link ContainerActivityTables.shipId}.
   * @param shipContainerId Key property. See {@link ContainerActivityTables.shipContainerId}.
   * @param lineNum Key property. See {@link ContainerActivityTables.lineNum}.
   * @returns A request builder for creating requests to retrieve one `ContainerActivityTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipId: DeserializedType<T, 'Edm.String'>,
    shipContainerId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ContainerActivityTables<T>, T> {
    return new GetByKeyRequestBuilder<ContainerActivityTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipId: shipId,
        ShipContainerId: shipContainerId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ContainerActivityTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ContainerActivityTables`.
   */
  update(
    entity: ContainerActivityTables<T>
  ): UpdateRequestBuilder<ContainerActivityTables<T>, T> {
    return new UpdateRequestBuilder<ContainerActivityTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ContainerActivityTables`.
   * @param dataAreaId Key property. See {@link ContainerActivityTables.dataAreaId}.
   * @param shipId Key property. See {@link ContainerActivityTables.shipId}.
   * @param shipContainerId Key property. See {@link ContainerActivityTables.shipContainerId}.
   * @param lineNum Key property. See {@link ContainerActivityTables.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `ContainerActivityTables`.
   */
  delete(
    dataAreaId: string,
    shipId: string,
    shipContainerId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<ContainerActivityTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ContainerActivityTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ContainerActivityTables` by taking the entity as a parameter.
   */
  delete(
    entity: ContainerActivityTables<T>
  ): DeleteRequestBuilder<ContainerActivityTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipId?: string,
    shipContainerId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<ContainerActivityTables<T>, T> {
    return new DeleteRequestBuilder<ContainerActivityTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ContainerActivityTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipId: shipId!,
            ShipContainerId: shipContainerId!,
            LineNum: lineNum!
          }
    );
  }
}
