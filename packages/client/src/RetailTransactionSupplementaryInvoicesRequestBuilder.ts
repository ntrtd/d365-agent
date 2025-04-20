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
import { RetailTransactionSupplementaryInvoices } from './RetailTransactionSupplementaryInvoices';

/**
 * Request builder class for operations supported on the {@link RetailTransactionSupplementaryInvoices} entity.
 */
export class RetailTransactionSupplementaryInvoicesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionSupplementaryInvoices<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionSupplementaryInvoices` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionSupplementaryInvoices` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionSupplementaryInvoices<T>, T> {
    return new GetAllRequestBuilder<
      RetailTransactionSupplementaryInvoices<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionSupplementaryInvoices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionSupplementaryInvoices`.
   */
  create(
    entity: RetailTransactionSupplementaryInvoices<T>
  ): CreateRequestBuilder<RetailTransactionSupplementaryInvoices<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionSupplementaryInvoices<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionSupplementaryInvoices` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionSupplementaryInvoices.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionSupplementaryInvoices.operatingUnitNumber}.
   * @param terminal Key property. See {@link RetailTransactionSupplementaryInvoices.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionSupplementaryInvoices.transactionNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionSupplementaryInvoices` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionSupplementaryInvoices<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionSupplementaryInvoices<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OperatingUnitNumber: operatingUnitNumber,
      Terminal: terminal,
      TransactionNumber: transactionNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionSupplementaryInvoices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionSupplementaryInvoices`.
   */
  update(
    entity: RetailTransactionSupplementaryInvoices<T>
  ): UpdateRequestBuilder<RetailTransactionSupplementaryInvoices<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionSupplementaryInvoices<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionSupplementaryInvoices`.
   * @param dataAreaId Key property. See {@link RetailTransactionSupplementaryInvoices.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionSupplementaryInvoices.operatingUnitNumber}.
   * @param terminal Key property. See {@link RetailTransactionSupplementaryInvoices.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionSupplementaryInvoices.transactionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionSupplementaryInvoices`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    terminal: string,
    transactionNumber: string
  ): DeleteRequestBuilder<RetailTransactionSupplementaryInvoices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionSupplementaryInvoices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionSupplementaryInvoices` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionSupplementaryInvoices<T>
  ): DeleteRequestBuilder<RetailTransactionSupplementaryInvoices<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    terminal?: string,
    transactionNumber?: string
  ): DeleteRequestBuilder<RetailTransactionSupplementaryInvoices<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionSupplementaryInvoices<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionSupplementaryInvoices
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperatingUnitNumber: operatingUnitNumber!,
            Terminal: terminal!,
            TransactionNumber: transactionNumber!
          }
    );
  }
}
