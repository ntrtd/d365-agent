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
import { AssetStatementRows } from './AssetStatementRows';

/**
 * Request builder class for operations supported on the {@link AssetStatementRows} entity.
 */
export class AssetStatementRowsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetStatementRows<T>, T> {
  /**
   * Returns a request builder for querying all `AssetStatementRows` entities.
   * @returns A request builder for creating requests to retrieve all `AssetStatementRows` entities.
   */
  getAll(): GetAllRequestBuilder<AssetStatementRows<T>, T> {
    return new GetAllRequestBuilder<AssetStatementRows<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetStatementRows` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetStatementRows`.
   */
  create(
    entity: AssetStatementRows<T>
  ): CreateRequestBuilder<AssetStatementRows<T>, T> {
    return new CreateRequestBuilder<AssetStatementRows<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetStatementRows` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetStatementRows.dataAreaId}.
   * @param lineNumber Key property. See {@link AssetStatementRows.lineNumber}.
   * @param fromFixedAssetNumber Key property. See {@link AssetStatementRows.fromFixedAssetNumber}.
   * @param toFixedAssetNumber Key property. See {@link AssetStatementRows.toFixedAssetNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetStatementRows` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    fromFixedAssetNumber: DeserializedType<T, 'Edm.String'>,
    toFixedAssetNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetStatementRows<T>, T> {
    return new GetByKeyRequestBuilder<AssetStatementRows<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineNumber: lineNumber,
        FromFixedAssetNumber: fromFixedAssetNumber,
        ToFixedAssetNumber: toFixedAssetNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetStatementRows`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetStatementRows`.
   */
  update(
    entity: AssetStatementRows<T>
  ): UpdateRequestBuilder<AssetStatementRows<T>, T> {
    return new UpdateRequestBuilder<AssetStatementRows<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetStatementRows`.
   * @param dataAreaId Key property. See {@link AssetStatementRows.dataAreaId}.
   * @param lineNumber Key property. See {@link AssetStatementRows.lineNumber}.
   * @param fromFixedAssetNumber Key property. See {@link AssetStatementRows.fromFixedAssetNumber}.
   * @param toFixedAssetNumber Key property. See {@link AssetStatementRows.toFixedAssetNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetStatementRows`.
   */
  delete(
    dataAreaId: string,
    lineNumber: BigNumber,
    fromFixedAssetNumber: string,
    toFixedAssetNumber: string
  ): DeleteRequestBuilder<AssetStatementRows<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetStatementRows`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetStatementRows` by taking the entity as a parameter.
   */
  delete(
    entity: AssetStatementRows<T>
  ): DeleteRequestBuilder<AssetStatementRows<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNumber?: BigNumber,
    fromFixedAssetNumber?: string,
    toFixedAssetNumber?: string
  ): DeleteRequestBuilder<AssetStatementRows<T>, T> {
    return new DeleteRequestBuilder<AssetStatementRows<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetStatementRows
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNumber: lineNumber!,
            FromFixedAssetNumber: fromFixedAssetNumber!,
            ToFixedAssetNumber: toFixedAssetNumber!
          }
    );
  }
}
