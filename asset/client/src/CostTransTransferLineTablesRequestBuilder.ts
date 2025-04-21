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
import { CostTransTransferLineTables } from './CostTransTransferLineTables';

/**
 * Request builder class for operations supported on the {@link CostTransTransferLineTables} entity.
 */
export class CostTransTransferLineTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostTransTransferLineTables<T>, T> {
  /**
   * Returns a request builder for querying all `CostTransTransferLineTables` entities.
   * @returns A request builder for creating requests to retrieve all `CostTransTransferLineTables` entities.
   */
  getAll(): GetAllRequestBuilder<CostTransTransferLineTables<T>, T> {
    return new GetAllRequestBuilder<CostTransTransferLineTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CostTransTransferLineTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostTransTransferLineTables`.
   */
  create(
    entity: CostTransTransferLineTables<T>
  ): CreateRequestBuilder<CostTransTransferLineTables<T>, T> {
    return new CreateRequestBuilder<CostTransTransferLineTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CostTransTransferLineTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link CostTransTransferLineTables.dataAreaId}.
   * @param shipDataArea Key property. See {@link CostTransTransferLineTables.shipDataArea}.
   * @param transferId Key property. See {@link CostTransTransferLineTables.transferId}.
   * @param transferLineNumber Key property. See {@link CostTransTransferLineTables.transferLineNumber}.
   * @param lineNumber Key property. See {@link CostTransTransferLineTables.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CostTransTransferLineTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipDataArea: DeserializedType<T, 'Edm.String'>,
    transferId: DeserializedType<T, 'Edm.String'>,
    transferLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CostTransTransferLineTables<T>, T> {
    return new GetByKeyRequestBuilder<CostTransTransferLineTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipDataArea: shipDataArea,
        TransferId: transferId,
        TransferLineNumber: transferLineNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CostTransTransferLineTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostTransTransferLineTables`.
   */
  update(
    entity: CostTransTransferLineTables<T>
  ): UpdateRequestBuilder<CostTransTransferLineTables<T>, T> {
    return new UpdateRequestBuilder<CostTransTransferLineTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CostTransTransferLineTables`.
   * @param dataAreaId Key property. See {@link CostTransTransferLineTables.dataAreaId}.
   * @param shipDataArea Key property. See {@link CostTransTransferLineTables.shipDataArea}.
   * @param transferId Key property. See {@link CostTransTransferLineTables.transferId}.
   * @param transferLineNumber Key property. See {@link CostTransTransferLineTables.transferLineNumber}.
   * @param lineNumber Key property. See {@link CostTransTransferLineTables.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CostTransTransferLineTables`.
   */
  delete(
    dataAreaId: string,
    shipDataArea: string,
    transferId: string,
    transferLineNumber: BigNumber,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CostTransTransferLineTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostTransTransferLineTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostTransTransferLineTables` by taking the entity as a parameter.
   */
  delete(
    entity: CostTransTransferLineTables<T>
  ): DeleteRequestBuilder<CostTransTransferLineTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipDataArea?: string,
    transferId?: string,
    transferLineNumber?: BigNumber,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CostTransTransferLineTables<T>, T> {
    return new DeleteRequestBuilder<CostTransTransferLineTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CostTransTransferLineTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipDataArea: shipDataArea!,
            TransferId: transferId!,
            TransferLineNumber: transferLineNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
