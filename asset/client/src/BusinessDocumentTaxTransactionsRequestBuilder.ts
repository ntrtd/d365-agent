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
import { BusinessDocumentTaxTransactions } from './BusinessDocumentTaxTransactions';

/**
 * Request builder class for operations supported on the {@link BusinessDocumentTaxTransactions} entity.
 */
export class BusinessDocumentTaxTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessDocumentTaxTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessDocumentTaxTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessDocumentTaxTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessDocumentTaxTransactions<T>, T> {
    return new GetAllRequestBuilder<BusinessDocumentTaxTransactions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessDocumentTaxTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessDocumentTaxTransactions`.
   */
  create(
    entity: BusinessDocumentTaxTransactions<T>
  ): CreateRequestBuilder<BusinessDocumentTaxTransactions<T>, T> {
    return new CreateRequestBuilder<BusinessDocumentTaxTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessDocumentTaxTransactions` entity based on its keys.
   * @param dataAreaId Key property. See {@link BusinessDocumentTaxTransactions.dataAreaId}.
   * @param taxTransRecId Key property. See {@link BusinessDocumentTaxTransactions.taxTransRecId}.
   * @returns A request builder for creating requests to retrieve one `BusinessDocumentTaxTransactions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxTransRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<BusinessDocumentTaxTransactions<T>, T> {
    return new GetByKeyRequestBuilder<BusinessDocumentTaxTransactions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxTransRecId: taxTransRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessDocumentTaxTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessDocumentTaxTransactions`.
   */
  update(
    entity: BusinessDocumentTaxTransactions<T>
  ): UpdateRequestBuilder<BusinessDocumentTaxTransactions<T>, T> {
    return new UpdateRequestBuilder<BusinessDocumentTaxTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentTaxTransactions`.
   * @param dataAreaId Key property. See {@link BusinessDocumentTaxTransactions.dataAreaId}.
   * @param taxTransRecId Key property. See {@link BusinessDocumentTaxTransactions.taxTransRecId}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentTaxTransactions`.
   */
  delete(
    dataAreaId: string,
    taxTransRecId: BigNumber
  ): DeleteRequestBuilder<BusinessDocumentTaxTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessDocumentTaxTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessDocumentTaxTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessDocumentTaxTransactions<T>
  ): DeleteRequestBuilder<BusinessDocumentTaxTransactions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxTransRecId?: BigNumber
  ): DeleteRequestBuilder<BusinessDocumentTaxTransactions<T>, T> {
    return new DeleteRequestBuilder<BusinessDocumentTaxTransactions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BusinessDocumentTaxTransactions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxTransRecId: taxTransRecId!
          }
    );
  }
}
