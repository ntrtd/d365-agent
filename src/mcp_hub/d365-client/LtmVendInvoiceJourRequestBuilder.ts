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
import { LtmVendInvoiceJour } from './LtmVendInvoiceJour';

/**
 * Request builder class for operations supported on the {@link LtmVendInvoiceJour} entity.
 */
export class LtmVendInvoiceJourRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmVendInvoiceJour<T>, T> {
  /**
   * Returns a request builder for querying all `LtmVendInvoiceJour` entities.
   * @returns A request builder for creating requests to retrieve all `LtmVendInvoiceJour` entities.
   */
  getAll(): GetAllRequestBuilder<LtmVendInvoiceJour<T>, T> {
    return new GetAllRequestBuilder<LtmVendInvoiceJour<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmVendInvoiceJour` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmVendInvoiceJour`.
   */
  create(
    entity: LtmVendInvoiceJour<T>
  ): CreateRequestBuilder<LtmVendInvoiceJour<T>, T> {
    return new CreateRequestBuilder<LtmVendInvoiceJour<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmVendInvoiceJour` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmVendInvoiceJour.dataAreaId}.
   * @param refRecId Key property. See {@link LtmVendInvoiceJour.refRecId}.
   * @returns A request builder for creating requests to retrieve one `LtmVendInvoiceJour` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    refRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<LtmVendInvoiceJour<T>, T> {
    return new GetByKeyRequestBuilder<LtmVendInvoiceJour<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RefRecId: refRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmVendInvoiceJour`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmVendInvoiceJour`.
   */
  update(
    entity: LtmVendInvoiceJour<T>
  ): UpdateRequestBuilder<LtmVendInvoiceJour<T>, T> {
    return new UpdateRequestBuilder<LtmVendInvoiceJour<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmVendInvoiceJour`.
   * @param dataAreaId Key property. See {@link LtmVendInvoiceJour.dataAreaId}.
   * @param refRecId Key property. See {@link LtmVendInvoiceJour.refRecId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmVendInvoiceJour`.
   */
  delete(
    dataAreaId: string,
    refRecId: BigNumber
  ): DeleteRequestBuilder<LtmVendInvoiceJour<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmVendInvoiceJour`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmVendInvoiceJour` by taking the entity as a parameter.
   */
  delete(
    entity: LtmVendInvoiceJour<T>
  ): DeleteRequestBuilder<LtmVendInvoiceJour<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    refRecId?: BigNumber
  ): DeleteRequestBuilder<LtmVendInvoiceJour<T>, T> {
    return new DeleteRequestBuilder<LtmVendInvoiceJour<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmVendInvoiceJour
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RefRecId: refRecId!
          }
    );
  }
}
