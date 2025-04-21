/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { CdsFreeTextInvoiceHeaders } from './CdsFreeTextInvoiceHeaders';

/**
 * Request builder class for operations supported on the {@link CdsFreeTextInvoiceHeaders} entity.
 */
export class CdsFreeTextInvoiceHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsFreeTextInvoiceHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `CdsFreeTextInvoiceHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `CdsFreeTextInvoiceHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<CdsFreeTextInvoiceHeaders<T>, T> {
    return new GetAllRequestBuilder<CdsFreeTextInvoiceHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsFreeTextInvoiceHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsFreeTextInvoiceHeaders`.
   */
  create(
    entity: CdsFreeTextInvoiceHeaders<T>
  ): CreateRequestBuilder<CdsFreeTextInvoiceHeaders<T>, T> {
    return new CreateRequestBuilder<CdsFreeTextInvoiceHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsFreeTextInvoiceHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsFreeTextInvoiceHeaders.dataAreaId}.
   * @param externalInvoiceId Key property. See {@link CdsFreeTextInvoiceHeaders.externalInvoiceId}.
   * @returns A request builder for creating requests to retrieve one `CdsFreeTextInvoiceHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    externalInvoiceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsFreeTextInvoiceHeaders<T>, T> {
    return new GetByKeyRequestBuilder<CdsFreeTextInvoiceHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ExternalInvoiceId: externalInvoiceId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsFreeTextInvoiceHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsFreeTextInvoiceHeaders`.
   */
  update(
    entity: CdsFreeTextInvoiceHeaders<T>
  ): UpdateRequestBuilder<CdsFreeTextInvoiceHeaders<T>, T> {
    return new UpdateRequestBuilder<CdsFreeTextInvoiceHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsFreeTextInvoiceHeaders`.
   * @param dataAreaId Key property. See {@link CdsFreeTextInvoiceHeaders.dataAreaId}.
   * @param externalInvoiceId Key property. See {@link CdsFreeTextInvoiceHeaders.externalInvoiceId}.
   * @returns A request builder for creating requests that delete an entity of type `CdsFreeTextInvoiceHeaders`.
   */
  delete(
    dataAreaId: string,
    externalInvoiceId: string
  ): DeleteRequestBuilder<CdsFreeTextInvoiceHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsFreeTextInvoiceHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsFreeTextInvoiceHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: CdsFreeTextInvoiceHeaders<T>
  ): DeleteRequestBuilder<CdsFreeTextInvoiceHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    externalInvoiceId?: string
  ): DeleteRequestBuilder<CdsFreeTextInvoiceHeaders<T>, T> {
    return new DeleteRequestBuilder<CdsFreeTextInvoiceHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsFreeTextInvoiceHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExternalInvoiceId: externalInvoiceId!
          }
    );
  }
}
