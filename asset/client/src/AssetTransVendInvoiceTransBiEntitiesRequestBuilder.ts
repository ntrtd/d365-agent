/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { AssetTransVendInvoiceTransBiEntities } from './AssetTransVendInvoiceTransBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetTransVendInvoiceTransBiEntities} entity.
 */
export class AssetTransVendInvoiceTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetTransVendInvoiceTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetTransVendInvoiceTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetTransVendInvoiceTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AssetTransVendInvoiceTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<AssetTransVendInvoiceTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetTransVendInvoiceTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetTransVendInvoiceTransBiEntities`.
   */
  create(
    entity: AssetTransVendInvoiceTransBiEntities<T>
  ): CreateRequestBuilder<AssetTransVendInvoiceTransBiEntities<T>, T> {
    return new CreateRequestBuilder<AssetTransVendInvoiceTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetTransVendInvoiceTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetTransVendInvoiceTransBiEntities.dataAreaId}.
   * @param vendInvoiceInfoLine Key property. See {@link AssetTransVendInvoiceTransBiEntities.vendInvoiceInfoLine}.
   * @param assetTransVoucher Key property. See {@link AssetTransVendInvoiceTransBiEntities.assetTransVoucher}.
   * @param assetTransDate Key property. See {@link AssetTransVendInvoiceTransBiEntities.assetTransDate}.
   * @returns A request builder for creating requests to retrieve one `AssetTransVendInvoiceTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendInvoiceInfoLine: DeserializedType<T, 'Edm.Int64'>,
    assetTransVoucher: DeserializedType<T, 'Edm.String'>,
    assetTransDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<AssetTransVendInvoiceTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetTransVendInvoiceTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      VendInvoiceInfoLine: vendInvoiceInfoLine,
      AssetTransVoucher: assetTransVoucher,
      AssetTransDate: assetTransDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetTransVendInvoiceTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetTransVendInvoiceTransBiEntities`.
   */
  update(
    entity: AssetTransVendInvoiceTransBiEntities<T>
  ): UpdateRequestBuilder<AssetTransVendInvoiceTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<AssetTransVendInvoiceTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetTransVendInvoiceTransBiEntities`.
   * @param dataAreaId Key property. See {@link AssetTransVendInvoiceTransBiEntities.dataAreaId}.
   * @param vendInvoiceInfoLine Key property. See {@link AssetTransVendInvoiceTransBiEntities.vendInvoiceInfoLine}.
   * @param assetTransVoucher Key property. See {@link AssetTransVendInvoiceTransBiEntities.assetTransVoucher}.
   * @param assetTransDate Key property. See {@link AssetTransVendInvoiceTransBiEntities.assetTransDate}.
   * @returns A request builder for creating requests that delete an entity of type `AssetTransVendInvoiceTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    vendInvoiceInfoLine: BigNumber,
    assetTransVoucher: string,
    assetTransDate: Moment
  ): DeleteRequestBuilder<AssetTransVendInvoiceTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetTransVendInvoiceTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetTransVendInvoiceTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetTransVendInvoiceTransBiEntities<T>
  ): DeleteRequestBuilder<AssetTransVendInvoiceTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendInvoiceInfoLine?: BigNumber,
    assetTransVoucher?: string,
    assetTransDate?: Moment
  ): DeleteRequestBuilder<AssetTransVendInvoiceTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<AssetTransVendInvoiceTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetTransVendInvoiceTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendInvoiceInfoLine: vendInvoiceInfoLine!,
            AssetTransVoucher: assetTransVoucher!,
            AssetTransDate: assetTransDate!
          }
    );
  }
}
