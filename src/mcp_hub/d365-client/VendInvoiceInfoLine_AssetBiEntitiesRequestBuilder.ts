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
import { VendInvoiceInfoLine_AssetBiEntities } from './VendInvoiceInfoLine_AssetBiEntities';

/**
 * Request builder class for operations supported on the {@link VendInvoiceInfoLine_AssetBiEntities} entity.
 */
export class VendInvoiceInfoLine_AssetBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoiceInfoLine_AssetBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoiceInfoLine_AssetBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoiceInfoLine_AssetBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoiceInfoLine_AssetBiEntities<T>, T> {
    return new GetAllRequestBuilder<VendInvoiceInfoLine_AssetBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendInvoiceInfoLine_AssetBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoiceInfoLine_AssetBiEntities`.
   */
  create(
    entity: VendInvoiceInfoLine_AssetBiEntities<T>
  ): CreateRequestBuilder<VendInvoiceInfoLine_AssetBiEntities<T>, T> {
    return new CreateRequestBuilder<VendInvoiceInfoLine_AssetBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendInvoiceInfoLine_AssetBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendInvoiceInfoLine_AssetBiEntities.dataAreaId}.
   * @param vendInvoiceInfoLineRecId Key property. See {@link VendInvoiceInfoLine_AssetBiEntities.vendInvoiceInfoLineRecId}.
   * @returns A request builder for creating requests to retrieve one `VendInvoiceInfoLine_AssetBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendInvoiceInfoLineRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<VendInvoiceInfoLine_AssetBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      VendInvoiceInfoLine_AssetBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      VendInvoiceInfoLineRecId: vendInvoiceInfoLineRecId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoiceInfoLine_AssetBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoiceInfoLine_AssetBiEntities`.
   */
  update(
    entity: VendInvoiceInfoLine_AssetBiEntities<T>
  ): UpdateRequestBuilder<VendInvoiceInfoLine_AssetBiEntities<T>, T> {
    return new UpdateRequestBuilder<VendInvoiceInfoLine_AssetBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceInfoLine_AssetBiEntities`.
   * @param dataAreaId Key property. See {@link VendInvoiceInfoLine_AssetBiEntities.dataAreaId}.
   * @param vendInvoiceInfoLineRecId Key property. See {@link VendInvoiceInfoLine_AssetBiEntities.vendInvoiceInfoLineRecId}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceInfoLine_AssetBiEntities`.
   */
  delete(
    dataAreaId: string,
    vendInvoiceInfoLineRecId: BigNumber
  ): DeleteRequestBuilder<VendInvoiceInfoLine_AssetBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceInfoLine_AssetBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceInfoLine_AssetBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoiceInfoLine_AssetBiEntities<T>
  ): DeleteRequestBuilder<VendInvoiceInfoLine_AssetBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendInvoiceInfoLineRecId?: BigNumber
  ): DeleteRequestBuilder<VendInvoiceInfoLine_AssetBiEntities<T>, T> {
    return new DeleteRequestBuilder<VendInvoiceInfoLine_AssetBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendInvoiceInfoLine_AssetBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendInvoiceInfoLineRecId: vendInvoiceInfoLineRecId!
          }
    );
  }
}
