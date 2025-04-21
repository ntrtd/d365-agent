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
import { AssetTransReportingCurrencyAmounts } from './AssetTransReportingCurrencyAmounts';

/**
 * Request builder class for operations supported on the {@link AssetTransReportingCurrencyAmounts} entity.
 */
export class AssetTransReportingCurrencyAmountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetTransReportingCurrencyAmounts<T>, T> {
  /**
   * Returns a request builder for querying all `AssetTransReportingCurrencyAmounts` entities.
   * @returns A request builder for creating requests to retrieve all `AssetTransReportingCurrencyAmounts` entities.
   */
  getAll(): GetAllRequestBuilder<AssetTransReportingCurrencyAmounts<T>, T> {
    return new GetAllRequestBuilder<AssetTransReportingCurrencyAmounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetTransReportingCurrencyAmounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetTransReportingCurrencyAmounts`.
   */
  create(
    entity: AssetTransReportingCurrencyAmounts<T>
  ): CreateRequestBuilder<AssetTransReportingCurrencyAmounts<T>, T> {
    return new CreateRequestBuilder<AssetTransReportingCurrencyAmounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetTransReportingCurrencyAmounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetTransReportingCurrencyAmounts.dataAreaId}.
   * @param assetTrans Key property. See {@link AssetTransReportingCurrencyAmounts.assetTrans}.
   * @returns A request builder for creating requests to retrieve one `AssetTransReportingCurrencyAmounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    assetTrans: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AssetTransReportingCurrencyAmounts<T>, T> {
    return new GetByKeyRequestBuilder<AssetTransReportingCurrencyAmounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AssetTrans: assetTrans
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetTransReportingCurrencyAmounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetTransReportingCurrencyAmounts`.
   */
  update(
    entity: AssetTransReportingCurrencyAmounts<T>
  ): UpdateRequestBuilder<AssetTransReportingCurrencyAmounts<T>, T> {
    return new UpdateRequestBuilder<AssetTransReportingCurrencyAmounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetTransReportingCurrencyAmounts`.
   * @param dataAreaId Key property. See {@link AssetTransReportingCurrencyAmounts.dataAreaId}.
   * @param assetTrans Key property. See {@link AssetTransReportingCurrencyAmounts.assetTrans}.
   * @returns A request builder for creating requests that delete an entity of type `AssetTransReportingCurrencyAmounts`.
   */
  delete(
    dataAreaId: string,
    assetTrans: BigNumber
  ): DeleteRequestBuilder<AssetTransReportingCurrencyAmounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetTransReportingCurrencyAmounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetTransReportingCurrencyAmounts` by taking the entity as a parameter.
   */
  delete(
    entity: AssetTransReportingCurrencyAmounts<T>
  ): DeleteRequestBuilder<AssetTransReportingCurrencyAmounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    assetTrans?: BigNumber
  ): DeleteRequestBuilder<AssetTransReportingCurrencyAmounts<T>, T> {
    return new DeleteRequestBuilder<AssetTransReportingCurrencyAmounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetTransReportingCurrencyAmounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AssetTrans: assetTrans!
          }
    );
  }
}
