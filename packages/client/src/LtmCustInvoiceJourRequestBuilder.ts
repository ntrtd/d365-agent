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
import { LtmCustInvoiceJour } from './LtmCustInvoiceJour';

/**
 * Request builder class for operations supported on the {@link LtmCustInvoiceJour} entity.
 */
export class LtmCustInvoiceJourRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmCustInvoiceJour<T>, T> {
  /**
   * Returns a request builder for querying all `LtmCustInvoiceJour` entities.
   * @returns A request builder for creating requests to retrieve all `LtmCustInvoiceJour` entities.
   */
  getAll(): GetAllRequestBuilder<LtmCustInvoiceJour<T>, T> {
    return new GetAllRequestBuilder<LtmCustInvoiceJour<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmCustInvoiceJour` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmCustInvoiceJour`.
   */
  create(
    entity: LtmCustInvoiceJour<T>
  ): CreateRequestBuilder<LtmCustInvoiceJour<T>, T> {
    return new CreateRequestBuilder<LtmCustInvoiceJour<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmCustInvoiceJour` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmCustInvoiceJour.dataAreaId}.
   * @param refRecId Key property. See {@link LtmCustInvoiceJour.refRecId}.
   * @returns A request builder for creating requests to retrieve one `LtmCustInvoiceJour` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    refRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<LtmCustInvoiceJour<T>, T> {
    return new GetByKeyRequestBuilder<LtmCustInvoiceJour<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RefRecId: refRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmCustInvoiceJour`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmCustInvoiceJour`.
   */
  update(
    entity: LtmCustInvoiceJour<T>
  ): UpdateRequestBuilder<LtmCustInvoiceJour<T>, T> {
    return new UpdateRequestBuilder<LtmCustInvoiceJour<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmCustInvoiceJour`.
   * @param dataAreaId Key property. See {@link LtmCustInvoiceJour.dataAreaId}.
   * @param refRecId Key property. See {@link LtmCustInvoiceJour.refRecId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmCustInvoiceJour`.
   */
  delete(
    dataAreaId: string,
    refRecId: BigNumber
  ): DeleteRequestBuilder<LtmCustInvoiceJour<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmCustInvoiceJour`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmCustInvoiceJour` by taking the entity as a parameter.
   */
  delete(
    entity: LtmCustInvoiceJour<T>
  ): DeleteRequestBuilder<LtmCustInvoiceJour<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    refRecId?: BigNumber
  ): DeleteRequestBuilder<LtmCustInvoiceJour<T>, T> {
    return new DeleteRequestBuilder<LtmCustInvoiceJour<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmCustInvoiceJour
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RefRecId: refRecId!
          }
    );
  }
}
