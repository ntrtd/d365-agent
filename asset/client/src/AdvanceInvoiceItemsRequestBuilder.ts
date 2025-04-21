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
import { AdvanceInvoiceItems } from './AdvanceInvoiceItems';

/**
 * Request builder class for operations supported on the {@link AdvanceInvoiceItems} entity.
 */
export class AdvanceInvoiceItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AdvanceInvoiceItems<T>, T> {
  /**
   * Returns a request builder for querying all `AdvanceInvoiceItems` entities.
   * @returns A request builder for creating requests to retrieve all `AdvanceInvoiceItems` entities.
   */
  getAll(): GetAllRequestBuilder<AdvanceInvoiceItems<T>, T> {
    return new GetAllRequestBuilder<AdvanceInvoiceItems<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AdvanceInvoiceItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AdvanceInvoiceItems`.
   */
  create(
    entity: AdvanceInvoiceItems<T>
  ): CreateRequestBuilder<AdvanceInvoiceItems<T>, T> {
    return new CreateRequestBuilder<AdvanceInvoiceItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AdvanceInvoiceItems` entity based on its keys.
   * @param dataAreaId Key property. See {@link AdvanceInvoiceItems.dataAreaId}.
   * @param parentRecId Key property. See {@link AdvanceInvoiceItems.parentRecId}.
   * @param refRecId Key property. See {@link AdvanceInvoiceItems.refRecId}.
   * @param refTableId Key property. See {@link AdvanceInvoiceItems.refTableId}.
   * @returns A request builder for creating requests to retrieve one `AdvanceInvoiceItems` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    parentRecId: DeserializedType<T, 'Edm.Int64'>,
    refRecId: DeserializedType<T, 'Edm.Int64'>,
    refTableId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<AdvanceInvoiceItems<T>, T> {
    return new GetByKeyRequestBuilder<AdvanceInvoiceItems<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ParentRecId: parentRecId,
        RefRecId: refRecId,
        RefTableId: refTableId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AdvanceInvoiceItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AdvanceInvoiceItems`.
   */
  update(
    entity: AdvanceInvoiceItems<T>
  ): UpdateRequestBuilder<AdvanceInvoiceItems<T>, T> {
    return new UpdateRequestBuilder<AdvanceInvoiceItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AdvanceInvoiceItems`.
   * @param dataAreaId Key property. See {@link AdvanceInvoiceItems.dataAreaId}.
   * @param parentRecId Key property. See {@link AdvanceInvoiceItems.parentRecId}.
   * @param refRecId Key property. See {@link AdvanceInvoiceItems.refRecId}.
   * @param refTableId Key property. See {@link AdvanceInvoiceItems.refTableId}.
   * @returns A request builder for creating requests that delete an entity of type `AdvanceInvoiceItems`.
   */
  delete(
    dataAreaId: string,
    parentRecId: BigNumber,
    refRecId: BigNumber,
    refTableId: number
  ): DeleteRequestBuilder<AdvanceInvoiceItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AdvanceInvoiceItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AdvanceInvoiceItems` by taking the entity as a parameter.
   */
  delete(
    entity: AdvanceInvoiceItems<T>
  ): DeleteRequestBuilder<AdvanceInvoiceItems<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    parentRecId?: BigNumber,
    refRecId?: BigNumber,
    refTableId?: number
  ): DeleteRequestBuilder<AdvanceInvoiceItems<T>, T> {
    return new DeleteRequestBuilder<AdvanceInvoiceItems<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AdvanceInvoiceItems
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ParentRecId: parentRecId!,
            RefRecId: refRecId!,
            RefTableId: refTableId!
          }
    );
  }
}
