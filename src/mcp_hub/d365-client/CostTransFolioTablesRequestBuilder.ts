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
import { CostTransFolioTables } from './CostTransFolioTables';

/**
 * Request builder class for operations supported on the {@link CostTransFolioTables} entity.
 */
export class CostTransFolioTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostTransFolioTables<T>, T> {
  /**
   * Returns a request builder for querying all `CostTransFolioTables` entities.
   * @returns A request builder for creating requests to retrieve all `CostTransFolioTables` entities.
   */
  getAll(): GetAllRequestBuilder<CostTransFolioTables<T>, T> {
    return new GetAllRequestBuilder<CostTransFolioTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostTransFolioTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostTransFolioTables`.
   */
  create(
    entity: CostTransFolioTables<T>
  ): CreateRequestBuilder<CostTransFolioTables<T>, T> {
    return new CreateRequestBuilder<CostTransFolioTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CostTransFolioTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link CostTransFolioTables.dataAreaId}.
   * @param shipFolioId Key property. See {@link CostTransFolioTables.shipFolioId}.
   * @param lineNumber Key property. See {@link CostTransFolioTables.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CostTransFolioTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipFolioId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CostTransFolioTables<T>, T> {
    return new GetByKeyRequestBuilder<CostTransFolioTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipFolioId: shipFolioId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CostTransFolioTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostTransFolioTables`.
   */
  update(
    entity: CostTransFolioTables<T>
  ): UpdateRequestBuilder<CostTransFolioTables<T>, T> {
    return new UpdateRequestBuilder<CostTransFolioTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CostTransFolioTables`.
   * @param dataAreaId Key property. See {@link CostTransFolioTables.dataAreaId}.
   * @param shipFolioId Key property. See {@link CostTransFolioTables.shipFolioId}.
   * @param lineNumber Key property. See {@link CostTransFolioTables.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CostTransFolioTables`.
   */
  delete(
    dataAreaId: string,
    shipFolioId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CostTransFolioTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostTransFolioTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostTransFolioTables` by taking the entity as a parameter.
   */
  delete(
    entity: CostTransFolioTables<T>
  ): DeleteRequestBuilder<CostTransFolioTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipFolioId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CostTransFolioTables<T>, T> {
    return new DeleteRequestBuilder<CostTransFolioTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CostTransFolioTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipFolioId: shipFolioId!,
            LineNumber: lineNumber!
          }
    );
  }
}
