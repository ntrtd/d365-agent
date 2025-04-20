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
import { CostTransVoyageTables } from './CostTransVoyageTables';

/**
 * Request builder class for operations supported on the {@link CostTransVoyageTables} entity.
 */
export class CostTransVoyageTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostTransVoyageTables<T>, T> {
  /**
   * Returns a request builder for querying all `CostTransVoyageTables` entities.
   * @returns A request builder for creating requests to retrieve all `CostTransVoyageTables` entities.
   */
  getAll(): GetAllRequestBuilder<CostTransVoyageTables<T>, T> {
    return new GetAllRequestBuilder<CostTransVoyageTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CostTransVoyageTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostTransVoyageTables`.
   */
  create(
    entity: CostTransVoyageTables<T>
  ): CreateRequestBuilder<CostTransVoyageTables<T>, T> {
    return new CreateRequestBuilder<CostTransVoyageTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CostTransVoyageTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link CostTransVoyageTables.dataAreaId}.
   * @param shipId Key property. See {@link CostTransVoyageTables.shipId}.
   * @param lineNumber Key property. See {@link CostTransVoyageTables.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CostTransVoyageTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CostTransVoyageTables<T>, T> {
    return new GetByKeyRequestBuilder<CostTransVoyageTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipId: shipId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CostTransVoyageTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostTransVoyageTables`.
   */
  update(
    entity: CostTransVoyageTables<T>
  ): UpdateRequestBuilder<CostTransVoyageTables<T>, T> {
    return new UpdateRequestBuilder<CostTransVoyageTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CostTransVoyageTables`.
   * @param dataAreaId Key property. See {@link CostTransVoyageTables.dataAreaId}.
   * @param shipId Key property. See {@link CostTransVoyageTables.shipId}.
   * @param lineNumber Key property. See {@link CostTransVoyageTables.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CostTransVoyageTables`.
   */
  delete(
    dataAreaId: string,
    shipId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CostTransVoyageTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostTransVoyageTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostTransVoyageTables` by taking the entity as a parameter.
   */
  delete(
    entity: CostTransVoyageTables<T>
  ): DeleteRequestBuilder<CostTransVoyageTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CostTransVoyageTables<T>, T> {
    return new DeleteRequestBuilder<CostTransVoyageTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CostTransVoyageTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipId: shipId!,
            LineNumber: lineNumber!
          }
    );
  }
}
