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
import { RetailTransactionSalesLinesV2 } from './RetailTransactionSalesLinesV2';

/**
 * Request builder class for operations supported on the {@link RetailTransactionSalesLinesV2} entity.
 */
export class RetailTransactionSalesLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionSalesLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionSalesLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionSalesLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionSalesLinesV2<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionSalesLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionSalesLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionSalesLinesV2`.
   */
  create(
    entity: RetailTransactionSalesLinesV2<T>
  ): CreateRequestBuilder<RetailTransactionSalesLinesV2<T>, T> {
    return new CreateRequestBuilder<RetailTransactionSalesLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionSalesLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionSalesLinesV2.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionSalesLinesV2.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionSalesLinesV2.transactionNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionSalesLinesV2.lineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionSalesLinesV2.operatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionSalesLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionSalesLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionSalesLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Terminal: terminal,
        TransactionNumber: transactionNumber,
        LineNumber: lineNumber,
        OperatingUnitNumber: operatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionSalesLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionSalesLinesV2`.
   */
  update(
    entity: RetailTransactionSalesLinesV2<T>
  ): UpdateRequestBuilder<RetailTransactionSalesLinesV2<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionSalesLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionSalesLinesV2`.
   * @param dataAreaId Key property. See {@link RetailTransactionSalesLinesV2.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionSalesLinesV2.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionSalesLinesV2.transactionNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionSalesLinesV2.lineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionSalesLinesV2.operatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionSalesLinesV2`.
   */
  delete(
    dataAreaId: string,
    terminal: string,
    transactionNumber: string,
    lineNumber: BigNumber,
    operatingUnitNumber: string
  ): DeleteRequestBuilder<RetailTransactionSalesLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionSalesLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionSalesLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionSalesLinesV2<T>
  ): DeleteRequestBuilder<RetailTransactionSalesLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    terminal?: string,
    transactionNumber?: string,
    lineNumber?: BigNumber,
    operatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailTransactionSalesLinesV2<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionSalesLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionSalesLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Terminal: terminal!,
            TransactionNumber: transactionNumber!,
            LineNumber: lineNumber!,
            OperatingUnitNumber: operatingUnitNumber!
          }
    );
  }
}
