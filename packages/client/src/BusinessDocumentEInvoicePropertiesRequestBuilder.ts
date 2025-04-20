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
import { BusinessDocumentEInvoiceProperties } from './BusinessDocumentEInvoiceProperties';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentEInvoiceProperties} entity.
 */
export class BusinessDocumentEInvoicePropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessDocumentEInvoiceProperties<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessDocumentEInvoiceProperties` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentEInvoiceProperties` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessDocumentEInvoiceProperties<T>, T> {
    return new GetAllRequestBuilder<BusinessDocumentEInvoiceProperties<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentEInvoiceProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentEInvoiceProperties`.
   */
  create(
    entity: BusinessDocumentEInvoiceProperties<T>
  ): CreateRequestBuilder<BusinessDocumentEInvoiceProperties<T>, T> {
    return new CreateRequestBuilder<BusinessDocumentEInvoiceProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentEInvoiceProperties` entity based on its keys.
   * @param propertyTypeRecId Key property. See {@link BusinessDocumentEInvoiceProperties.propertyTypeRecId}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentEInvoiceProperties` entity based on its keys.
   */
  getByKey(
    propertyTypeRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<BusinessDocumentEInvoiceProperties<T>, T> {
    return new GetByKeyRequestBuilder<BusinessDocumentEInvoiceProperties<T>, T>(
      this.entityApi,
      { PropertyTypeRecId: propertyTypeRecId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessDocumentEInvoiceProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentEInvoiceProperties`.
   */
  update(
    entity: BusinessDocumentEInvoiceProperties<T>
  ): UpdateRequestBuilder<BusinessDocumentEInvoiceProperties<T>, T> {
    return new UpdateRequestBuilder<BusinessDocumentEInvoiceProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentEInvoiceProperties`.
   * @param propertyTypeRecId Key property. See {@link BusinessDocumentEInvoiceProperties.propertyTypeRecId}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentEInvoiceProperties`.
   */
  delete(
    propertyTypeRecId: BigNumber
  ): DeleteRequestBuilder<BusinessDocumentEInvoiceProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentEInvoiceProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentEInvoiceProperties` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentEInvoiceProperties<T>
  ): DeleteRequestBuilder<BusinessDocumentEInvoiceProperties<T>, T>;
  delete(
    propertyTypeRecIdOrEntity: any
  ): DeleteRequestBuilder<BusinessDocumentEInvoiceProperties<T>, T> {
    return new DeleteRequestBuilder<BusinessDocumentEInvoiceProperties<T>, T>(
      this.entityApi,
      propertyTypeRecIdOrEntity instanceof BusinessDocumentEInvoiceProperties
        ? propertyTypeRecIdOrEntity
        : { PropertyTypeRecId: propertyTypeRecIdOrEntity! }
    );
  }
}
