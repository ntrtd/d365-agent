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
import { CostTransShippingContainerTables } from './CostTransShippingContainerTables';

/**
 * Request builder class for operations supported on the {@link CostTransShippingContainerTables} entity.
 */
export class CostTransShippingContainerTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostTransShippingContainerTables<T>, T> {
  /**
   * Returns a request builder for querying all `CostTransShippingContainerTables` entities.
   * @returns A request builder for creating requests to retrieve all `CostTransShippingContainerTables` entities.
   */
  getAll(): GetAllRequestBuilder<CostTransShippingContainerTables<T>, T> {
    return new GetAllRequestBuilder<CostTransShippingContainerTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CostTransShippingContainerTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostTransShippingContainerTables`.
   */
  create(
    entity: CostTransShippingContainerTables<T>
  ): CreateRequestBuilder<CostTransShippingContainerTables<T>, T> {
    return new CreateRequestBuilder<CostTransShippingContainerTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CostTransShippingContainerTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link CostTransShippingContainerTables.dataAreaId}.
   * @param shipId Key property. See {@link CostTransShippingContainerTables.shipId}.
   * @param shipContainerId Key property. See {@link CostTransShippingContainerTables.shipContainerId}.
   * @param lineNumber Key property. See {@link CostTransShippingContainerTables.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CostTransShippingContainerTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipId: DeserializedType<T, 'Edm.String'>,
    shipContainerId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CostTransShippingContainerTables<T>, T> {
    return new GetByKeyRequestBuilder<CostTransShippingContainerTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipId: shipId,
        ShipContainerId: shipContainerId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CostTransShippingContainerTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostTransShippingContainerTables`.
   */
  update(
    entity: CostTransShippingContainerTables<T>
  ): UpdateRequestBuilder<CostTransShippingContainerTables<T>, T> {
    return new UpdateRequestBuilder<CostTransShippingContainerTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CostTransShippingContainerTables`.
   * @param dataAreaId Key property. See {@link CostTransShippingContainerTables.dataAreaId}.
   * @param shipId Key property. See {@link CostTransShippingContainerTables.shipId}.
   * @param shipContainerId Key property. See {@link CostTransShippingContainerTables.shipContainerId}.
   * @param lineNumber Key property. See {@link CostTransShippingContainerTables.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CostTransShippingContainerTables`.
   */
  delete(
    dataAreaId: string,
    shipId: string,
    shipContainerId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CostTransShippingContainerTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostTransShippingContainerTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostTransShippingContainerTables` by taking the entity as a parameter.
   */
  delete(
    entity: CostTransShippingContainerTables<T>
  ): DeleteRequestBuilder<CostTransShippingContainerTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipId?: string,
    shipContainerId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CostTransShippingContainerTables<T>, T> {
    return new DeleteRequestBuilder<CostTransShippingContainerTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CostTransShippingContainerTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipId: shipId!,
            ShipContainerId: shipContainerId!,
            LineNumber: lineNumber!
          }
    );
  }
}
