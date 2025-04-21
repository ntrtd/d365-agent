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
import { CustomerFiscalDocumentTexts } from './CustomerFiscalDocumentTexts';

/**
 * Request builder class for operations supported on the {@link CustomerFiscalDocumentTexts} entity.
 */
export class CustomerFiscalDocumentTextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerFiscalDocumentTexts<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerFiscalDocumentTexts` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerFiscalDocumentTexts` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerFiscalDocumentTexts<T>, T> {
    return new GetAllRequestBuilder<CustomerFiscalDocumentTexts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerFiscalDocumentTexts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerFiscalDocumentTexts`.
   */
  create(
    entity: CustomerFiscalDocumentTexts<T>
  ): CreateRequestBuilder<CustomerFiscalDocumentTexts<T>, T> {
    return new CreateRequestBuilder<CustomerFiscalDocumentTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerFiscalDocumentTexts` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerFiscalDocumentTexts.dataAreaId}.
   * @param customer Key property. See {@link CustomerFiscalDocumentTexts.customer}.
   * @param fiscalDocumentText Key property. See {@link CustomerFiscalDocumentTexts.fiscalDocumentText}.
   * @returns A request builder for creating requests to retrieve one `CustomerFiscalDocumentTexts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customer: DeserializedType<T, 'Edm.String'>,
    fiscalDocumentText: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerFiscalDocumentTexts<T>, T> {
    return new GetByKeyRequestBuilder<CustomerFiscalDocumentTexts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Customer: customer,
        FiscalDocumentText: fiscalDocumentText
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerFiscalDocumentTexts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerFiscalDocumentTexts`.
   */
  update(
    entity: CustomerFiscalDocumentTexts<T>
  ): UpdateRequestBuilder<CustomerFiscalDocumentTexts<T>, T> {
    return new UpdateRequestBuilder<CustomerFiscalDocumentTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerFiscalDocumentTexts`.
   * @param dataAreaId Key property. See {@link CustomerFiscalDocumentTexts.dataAreaId}.
   * @param customer Key property. See {@link CustomerFiscalDocumentTexts.customer}.
   * @param fiscalDocumentText Key property. See {@link CustomerFiscalDocumentTexts.fiscalDocumentText}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerFiscalDocumentTexts`.
   */
  delete(
    dataAreaId: string,
    customer: string,
    fiscalDocumentText: string
  ): DeleteRequestBuilder<CustomerFiscalDocumentTexts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerFiscalDocumentTexts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerFiscalDocumentTexts` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerFiscalDocumentTexts<T>
  ): DeleteRequestBuilder<CustomerFiscalDocumentTexts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customer?: string,
    fiscalDocumentText?: string
  ): DeleteRequestBuilder<CustomerFiscalDocumentTexts<T>, T> {
    return new DeleteRequestBuilder<CustomerFiscalDocumentTexts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerFiscalDocumentTexts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Customer: customer!,
            FiscalDocumentText: fiscalDocumentText!
          }
    );
  }
}
