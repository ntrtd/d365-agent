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
import { RetailTransactionAddressLines } from './RetailTransactionAddressLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAddressLines} entity.
 */
export class RetailTransactionAddressLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAddressLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAddressLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAddressLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionAddressLines<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionAddressLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAddressLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAddressLines`.
   */
  create(
    entity: RetailTransactionAddressLines<T>
  ): CreateRequestBuilder<RetailTransactionAddressLines<T>, T> {
    return new CreateRequestBuilder<RetailTransactionAddressLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAddressLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAddressLines.dataAreaId}.
   * @param transactionNumber Key property. See {@link RetailTransactionAddressLines.transactionNumber}.
   * @param terminal Key property. See {@link RetailTransactionAddressLines.terminal}.
   * @param lineNumber Key property. See {@link RetailTransactionAddressLines.lineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAddressLines.operatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAddressLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionAddressLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionAddressLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransactionNumber: transactionNumber,
        Terminal: terminal,
        LineNumber: lineNumber,
        OperatingUnitNumber: operatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionAddressLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAddressLines`.
   */
  update(
    entity: RetailTransactionAddressLines<T>
  ): UpdateRequestBuilder<RetailTransactionAddressLines<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionAddressLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAddressLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionAddressLines.dataAreaId}.
   * @param transactionNumber Key property. See {@link RetailTransactionAddressLines.transactionNumber}.
   * @param terminal Key property. See {@link RetailTransactionAddressLines.terminal}.
   * @param lineNumber Key property. See {@link RetailTransactionAddressLines.lineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAddressLines.operatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAddressLines`.
   */
  delete(
    dataAreaId: string,
    transactionNumber: string,
    terminal: string,
    lineNumber: BigNumber,
    operatingUnitNumber: string
  ): DeleteRequestBuilder<RetailTransactionAddressLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAddressLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAddressLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAddressLines<T>
  ): DeleteRequestBuilder<RetailTransactionAddressLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionNumber?: string,
    terminal?: string,
    lineNumber?: BigNumber,
    operatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailTransactionAddressLines<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionAddressLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAddressLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionNumber: transactionNumber!,
            Terminal: terminal!,
            LineNumber: lineNumber!,
            OperatingUnitNumber: operatingUnitNumber!
          }
    );
  }
}
