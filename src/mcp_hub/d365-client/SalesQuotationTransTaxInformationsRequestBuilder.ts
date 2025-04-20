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
import { SalesQuotationTransTaxInformations } from './SalesQuotationTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link SalesQuotationTransTaxInformations} entity.
 */
export class SalesQuotationTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesQuotationTransTaxInformations<T>, T> {
  /**
   * Returns a request builder for querying all `SalesQuotationTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `SalesQuotationTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<SalesQuotationTransTaxInformations<T>, T> {
    return new GetAllRequestBuilder<SalesQuotationTransTaxInformations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesQuotationTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesQuotationTransTaxInformations`.
   */
  create(
    entity: SalesQuotationTransTaxInformations<T>
  ): CreateRequestBuilder<SalesQuotationTransTaxInformations<T>, T> {
    return new CreateRequestBuilder<SalesQuotationTransTaxInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesQuotationTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesQuotationTransTaxInformations.dataAreaId}.
   * @param quotationId Key property. See {@link SalesQuotationTransTaxInformations.quotationId}.
   * @param lineCreationSequenceNumber Key property. See {@link SalesQuotationTransTaxInformations.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesQuotationTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    quotationId: DeserializedType<T, 'Edm.String'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SalesQuotationTransTaxInformations<T>, T> {
    return new GetByKeyRequestBuilder<SalesQuotationTransTaxInformations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        QuotationId: quotationId,
        LineCreationSequenceNumber: lineCreationSequenceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesQuotationTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesQuotationTransTaxInformations`.
   */
  update(
    entity: SalesQuotationTransTaxInformations<T>
  ): UpdateRequestBuilder<SalesQuotationTransTaxInformations<T>, T> {
    return new UpdateRequestBuilder<SalesQuotationTransTaxInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesQuotationTransTaxInformations`.
   * @param dataAreaId Key property. See {@link SalesQuotationTransTaxInformations.dataAreaId}.
   * @param quotationId Key property. See {@link SalesQuotationTransTaxInformations.quotationId}.
   * @param lineCreationSequenceNumber Key property. See {@link SalesQuotationTransTaxInformations.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesQuotationTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    quotationId: string,
    lineCreationSequenceNumber: number
  ): DeleteRequestBuilder<SalesQuotationTransTaxInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesQuotationTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesQuotationTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: SalesQuotationTransTaxInformations<T>
  ): DeleteRequestBuilder<SalesQuotationTransTaxInformations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    quotationId?: string,
    lineCreationSequenceNumber?: number
  ): DeleteRequestBuilder<SalesQuotationTransTaxInformations<T>, T> {
    return new DeleteRequestBuilder<SalesQuotationTransTaxInformations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesQuotationTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            QuotationId: quotationId!,
            LineCreationSequenceNumber: lineCreationSequenceNumber!
          }
    );
  }
}
