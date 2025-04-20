/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { CustInvoiceTransBiEntities } from './CustInvoiceTransBiEntities';

/**
 * Request builder class for operations supported on the {@link CustInvoiceTransBiEntities} entity.
 */
export class CustInvoiceTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustInvoiceTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `CustInvoiceTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `CustInvoiceTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<CustInvoiceTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<CustInvoiceTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustInvoiceTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustInvoiceTransBiEntities`.
   */
  create(
    entity: CustInvoiceTransBiEntities<T>
  ): CreateRequestBuilder<CustInvoiceTransBiEntities<T>, T> {
    return new CreateRequestBuilder<CustInvoiceTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustInvoiceTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustInvoiceTransBiEntities.dataAreaId}.
   * @param invoiceId Key property. See {@link CustInvoiceTransBiEntities.invoiceId}.
   * @param invoiceDate Key property. See {@link CustInvoiceTransBiEntities.invoiceDate}.
   * @param lineCreationSequenceNumber Key property. See {@link CustInvoiceTransBiEntities.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `CustInvoiceTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceId: DeserializedType<T, 'Edm.String'>,
    invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CustInvoiceTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<CustInvoiceTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InvoiceId: invoiceId,
        InvoiceDate: invoiceDate,
        LineCreationSequenceNumber: lineCreationSequenceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustInvoiceTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustInvoiceTransBiEntities`.
   */
  update(
    entity: CustInvoiceTransBiEntities<T>
  ): UpdateRequestBuilder<CustInvoiceTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<CustInvoiceTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustInvoiceTransBiEntities`.
   * @param dataAreaId Key property. See {@link CustInvoiceTransBiEntities.dataAreaId}.
   * @param invoiceId Key property. See {@link CustInvoiceTransBiEntities.invoiceId}.
   * @param invoiceDate Key property. See {@link CustInvoiceTransBiEntities.invoiceDate}.
   * @param lineCreationSequenceNumber Key property. See {@link CustInvoiceTransBiEntities.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CustInvoiceTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    invoiceId: string,
    invoiceDate: Moment,
    lineCreationSequenceNumber: number
  ): DeleteRequestBuilder<CustInvoiceTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustInvoiceTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustInvoiceTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: CustInvoiceTransBiEntities<T>
  ): DeleteRequestBuilder<CustInvoiceTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceId?: string,
    invoiceDate?: Moment,
    lineCreationSequenceNumber?: number
  ): DeleteRequestBuilder<CustInvoiceTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<CustInvoiceTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustInvoiceTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InvoiceId: invoiceId!,
            InvoiceDate: invoiceDate!,
            LineCreationSequenceNumber: lineCreationSequenceNumber!
          }
    );
  }
}
