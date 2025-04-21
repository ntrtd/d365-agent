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
import { LandedCostTransferLines } from './LandedCostTransferLines';

/**
 * Request builder class for operations supported on the {@link LandedCostTransferLines} entity.
 */
export class LandedCostTransferLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LandedCostTransferLines<T>, T> {
  /**
   * Returns a request builder for querying all `LandedCostTransferLines` entities.
   * @returns A request builder for creating requests to retrieve all `LandedCostTransferLines` entities.
   */
  getAll(): GetAllRequestBuilder<LandedCostTransferLines<T>, T> {
    return new GetAllRequestBuilder<LandedCostTransferLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LandedCostTransferLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LandedCostTransferLines`.
   */
  create(
    entity: LandedCostTransferLines<T>
  ): CreateRequestBuilder<LandedCostTransferLines<T>, T> {
    return new CreateRequestBuilder<LandedCostTransferLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LandedCostTransferLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link LandedCostTransferLines.dataAreaId}.
   * @param shipDataArea Key property. See {@link LandedCostTransferLines.shipDataArea}.
   * @param transferLineNumber Key property. See {@link LandedCostTransferLines.transferLineNumber}.
   * @param transferOrderId Key property. See {@link LandedCostTransferLines.transferOrderId}.
   * @param shipId Key property. See {@link LandedCostTransferLines.shipId}.
   * @returns A request builder for creating requests to retrieve one `LandedCostTransferLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipDataArea: DeserializedType<T, 'Edm.String'>,
    transferLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    transferOrderId: DeserializedType<T, 'Edm.String'>,
    shipId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LandedCostTransferLines<T>, T> {
    return new GetByKeyRequestBuilder<LandedCostTransferLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipDataArea: shipDataArea,
        TransferLineNumber: transferLineNumber,
        TransferOrderId: transferOrderId,
        ShipId: shipId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LandedCostTransferLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LandedCostTransferLines`.
   */
  update(
    entity: LandedCostTransferLines<T>
  ): UpdateRequestBuilder<LandedCostTransferLines<T>, T> {
    return new UpdateRequestBuilder<LandedCostTransferLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LandedCostTransferLines`.
   * @param dataAreaId Key property. See {@link LandedCostTransferLines.dataAreaId}.
   * @param shipDataArea Key property. See {@link LandedCostTransferLines.shipDataArea}.
   * @param transferLineNumber Key property. See {@link LandedCostTransferLines.transferLineNumber}.
   * @param transferOrderId Key property. See {@link LandedCostTransferLines.transferOrderId}.
   * @param shipId Key property. See {@link LandedCostTransferLines.shipId}.
   * @returns A request builder for creating requests that delete an entity of type `LandedCostTransferLines`.
   */
  delete(
    dataAreaId: string,
    shipDataArea: string,
    transferLineNumber: BigNumber,
    transferOrderId: string,
    shipId: string
  ): DeleteRequestBuilder<LandedCostTransferLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LandedCostTransferLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LandedCostTransferLines` by taking the entity as a parameter.
   */
  delete(
    entity: LandedCostTransferLines<T>
  ): DeleteRequestBuilder<LandedCostTransferLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipDataArea?: string,
    transferLineNumber?: BigNumber,
    transferOrderId?: string,
    shipId?: string
  ): DeleteRequestBuilder<LandedCostTransferLines<T>, T> {
    return new DeleteRequestBuilder<LandedCostTransferLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LandedCostTransferLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipDataArea: shipDataArea!,
            TransferLineNumber: transferLineNumber!,
            TransferOrderId: transferOrderId!,
            ShipId: shipId!
          }
    );
  }
}
