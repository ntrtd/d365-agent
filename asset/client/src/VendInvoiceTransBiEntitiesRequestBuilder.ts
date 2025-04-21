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
import { VendInvoiceTransBiEntities } from './VendInvoiceTransBiEntities';

/**
 * Request builder class for operations supported on the {@link VendInvoiceTransBiEntities} entity.
 */
export class VendInvoiceTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoiceTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoiceTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoiceTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoiceTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<VendInvoiceTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendInvoiceTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoiceTransBiEntities`.
   */
  create(
    entity: VendInvoiceTransBiEntities<T>
  ): CreateRequestBuilder<VendInvoiceTransBiEntities<T>, T> {
    return new CreateRequestBuilder<VendInvoiceTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendInvoiceTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendInvoiceTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link VendInvoiceTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `VendInvoiceTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<VendInvoiceTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<VendInvoiceTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoiceTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoiceTransBiEntities`.
   */
  update(
    entity: VendInvoiceTransBiEntities<T>
  ): UpdateRequestBuilder<VendInvoiceTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<VendInvoiceTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceTransBiEntities`.
   * @param dataAreaId Key property. See {@link VendInvoiceTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link VendInvoiceTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<VendInvoiceTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoiceTransBiEntities<T>
  ): DeleteRequestBuilder<VendInvoiceTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<VendInvoiceTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<VendInvoiceTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendInvoiceTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
