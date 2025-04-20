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
import { LtmTaxPayerDocumentClassLetters } from './LtmTaxPayerDocumentClassLetters';

/**
 * Request builder class for operations supported on the {@link LtmTaxPayerDocumentClassLetters} entity.
 */
export class LtmTaxPayerDocumentClassLettersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmTaxPayerDocumentClassLetters<T>, T> {
  /**
   * Returns a request builder for querying all `LtmTaxPayerDocumentClassLetters` entities.
   * @returns A request builder for creating requests to retrieve all `LtmTaxPayerDocumentClassLetters` entities.
   */
  getAll(): GetAllRequestBuilder<LtmTaxPayerDocumentClassLetters<T>, T> {
    return new GetAllRequestBuilder<LtmTaxPayerDocumentClassLetters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmTaxPayerDocumentClassLetters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmTaxPayerDocumentClassLetters`.
   */
  create(
    entity: LtmTaxPayerDocumentClassLetters<T>
  ): CreateRequestBuilder<LtmTaxPayerDocumentClassLetters<T>, T> {
    return new CreateRequestBuilder<LtmTaxPayerDocumentClassLetters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmTaxPayerDocumentClassLetters` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmTaxPayerDocumentClassLetters.dataAreaId}.
   * @param documentClassificationLetterId Key property. See {@link LtmTaxPayerDocumentClassLetters.documentClassificationLetterId}.
   * @param taxPayerTypeId Key property. See {@link LtmTaxPayerDocumentClassLetters.taxPayerTypeId}.
   * @returns A request builder for creating requests to retrieve one `LtmTaxPayerDocumentClassLetters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentClassificationLetterId: DeserializedType<T, 'Edm.String'>,
    taxPayerTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmTaxPayerDocumentClassLetters<T>, T> {
    return new GetByKeyRequestBuilder<LtmTaxPayerDocumentClassLetters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocumentClassificationLetterId: documentClassificationLetterId,
        TaxPayerTypeId: taxPayerTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmTaxPayerDocumentClassLetters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmTaxPayerDocumentClassLetters`.
   */
  update(
    entity: LtmTaxPayerDocumentClassLetters<T>
  ): UpdateRequestBuilder<LtmTaxPayerDocumentClassLetters<T>, T> {
    return new UpdateRequestBuilder<LtmTaxPayerDocumentClassLetters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmTaxPayerDocumentClassLetters`.
   * @param dataAreaId Key property. See {@link LtmTaxPayerDocumentClassLetters.dataAreaId}.
   * @param documentClassificationLetterId Key property. See {@link LtmTaxPayerDocumentClassLetters.documentClassificationLetterId}.
   * @param taxPayerTypeId Key property. See {@link LtmTaxPayerDocumentClassLetters.taxPayerTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmTaxPayerDocumentClassLetters`.
   */
  delete(
    dataAreaId: string,
    documentClassificationLetterId: string,
    taxPayerTypeId: string
  ): DeleteRequestBuilder<LtmTaxPayerDocumentClassLetters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmTaxPayerDocumentClassLetters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmTaxPayerDocumentClassLetters` by taking the entity as a parameter.
   */
  delete(
    entity: LtmTaxPayerDocumentClassLetters<T>
  ): DeleteRequestBuilder<LtmTaxPayerDocumentClassLetters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentClassificationLetterId?: string,
    taxPayerTypeId?: string
  ): DeleteRequestBuilder<LtmTaxPayerDocumentClassLetters<T>, T> {
    return new DeleteRequestBuilder<LtmTaxPayerDocumentClassLetters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmTaxPayerDocumentClassLetters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentClassificationLetterId: documentClassificationLetterId!,
            TaxPayerTypeId: taxPayerTypeId!
          }
    );
  }
}
