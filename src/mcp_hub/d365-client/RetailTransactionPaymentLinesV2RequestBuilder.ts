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
import { RetailTransactionPaymentLinesV2 } from './RetailTransactionPaymentLinesV2';

/**
 * Request builder class for operations supported on the {@link RetailTransactionPaymentLinesV2} entity.
 */
export class RetailTransactionPaymentLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionPaymentLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionPaymentLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionPaymentLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionPaymentLinesV2<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionPaymentLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionPaymentLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionPaymentLinesV2`.
   */
  create(
    entity: RetailTransactionPaymentLinesV2<T>
  ): CreateRequestBuilder<RetailTransactionPaymentLinesV2<T>, T> {
    return new CreateRequestBuilder<RetailTransactionPaymentLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionPaymentLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionPaymentLinesV2.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionPaymentLinesV2.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionPaymentLinesV2.transactionNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionPaymentLinesV2.lineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionPaymentLinesV2.operatingUnitNumber}.
   * @param store Key property. See {@link RetailTransactionPaymentLinesV2.store}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionPaymentLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionPaymentLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionPaymentLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Terminal: terminal,
        TransactionNumber: transactionNumber,
        LineNumber: lineNumber,
        OperatingUnitNumber: operatingUnitNumber,
        Store: store
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionPaymentLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionPaymentLinesV2`.
   */
  update(
    entity: RetailTransactionPaymentLinesV2<T>
  ): UpdateRequestBuilder<RetailTransactionPaymentLinesV2<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionPaymentLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionPaymentLinesV2`.
   * @param dataAreaId Key property. See {@link RetailTransactionPaymentLinesV2.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionPaymentLinesV2.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionPaymentLinesV2.transactionNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionPaymentLinesV2.lineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionPaymentLinesV2.operatingUnitNumber}.
   * @param store Key property. See {@link RetailTransactionPaymentLinesV2.store}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionPaymentLinesV2`.
   */
  delete(
    dataAreaId: string,
    terminal: string,
    transactionNumber: string,
    lineNumber: BigNumber,
    operatingUnitNumber: string,
    store: string
  ): DeleteRequestBuilder<RetailTransactionPaymentLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionPaymentLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionPaymentLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionPaymentLinesV2<T>
  ): DeleteRequestBuilder<RetailTransactionPaymentLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    terminal?: string,
    transactionNumber?: string,
    lineNumber?: BigNumber,
    operatingUnitNumber?: string,
    store?: string
  ): DeleteRequestBuilder<RetailTransactionPaymentLinesV2<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionPaymentLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionPaymentLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Terminal: terminal!,
            TransactionNumber: transactionNumber!,
            LineNumber: lineNumber!,
            OperatingUnitNumber: operatingUnitNumber!,
            Store: store!
          }
    );
  }
}
