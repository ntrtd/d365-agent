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
import { VendInvoiceMatchingLineBiEntities } from './VendInvoiceMatchingLineBiEntities';

/**
 * Request builder class for operations supported on the {@link VendInvoiceMatchingLineBiEntities} entity.
 */
export class VendInvoiceMatchingLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoiceMatchingLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoiceMatchingLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoiceMatchingLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoiceMatchingLineBiEntities<T>, T> {
    return new GetAllRequestBuilder<VendInvoiceMatchingLineBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendInvoiceMatchingLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoiceMatchingLineBiEntities`.
   */
  create(
    entity: VendInvoiceMatchingLineBiEntities<T>
  ): CreateRequestBuilder<VendInvoiceMatchingLineBiEntities<T>, T> {
    return new CreateRequestBuilder<VendInvoiceMatchingLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendInvoiceMatchingLineBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendInvoiceMatchingLineBiEntities.dataAreaId}.
   * @param refTableId Key property. See {@link VendInvoiceMatchingLineBiEntities.refTableId}.
   * @param refRecId Key property. See {@link VendInvoiceMatchingLineBiEntities.refRecId}.
   * @returns A request builder for creating requests to retrieve one `VendInvoiceMatchingLineBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    refTableId: DeserializedType<T, 'Edm.Int32'>,
    refRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<VendInvoiceMatchingLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<VendInvoiceMatchingLineBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RefTableId: refTableId,
        RefRecId: refRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoiceMatchingLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoiceMatchingLineBiEntities`.
   */
  update(
    entity: VendInvoiceMatchingLineBiEntities<T>
  ): UpdateRequestBuilder<VendInvoiceMatchingLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<VendInvoiceMatchingLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceMatchingLineBiEntities`.
   * @param dataAreaId Key property. See {@link VendInvoiceMatchingLineBiEntities.dataAreaId}.
   * @param refTableId Key property. See {@link VendInvoiceMatchingLineBiEntities.refTableId}.
   * @param refRecId Key property. See {@link VendInvoiceMatchingLineBiEntities.refRecId}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceMatchingLineBiEntities`.
   */
  delete(
    dataAreaId: string,
    refTableId: number,
    refRecId: BigNumber
  ): DeleteRequestBuilder<VendInvoiceMatchingLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceMatchingLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceMatchingLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoiceMatchingLineBiEntities<T>
  ): DeleteRequestBuilder<VendInvoiceMatchingLineBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    refTableId?: number,
    refRecId?: BigNumber
  ): DeleteRequestBuilder<VendInvoiceMatchingLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<VendInvoiceMatchingLineBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendInvoiceMatchingLineBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RefTableId: refTableId!,
            RefRecId: refRecId!
          }
    );
  }
}
