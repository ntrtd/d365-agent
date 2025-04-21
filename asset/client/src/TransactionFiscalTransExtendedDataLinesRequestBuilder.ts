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
import { TransactionFiscalTransExtendedDataLines } from './TransactionFiscalTransExtendedDataLines';
import { RetailFiscalRegistrationExtendedDataType } from './RetailFiscalRegistrationExtendedDataType';

/**
 * Request builder class for operations supported on the {@link TransactionFiscalTransExtendedDataLines} entity.
 */
export class TransactionFiscalTransExtendedDataLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionFiscalTransExtendedDataLines<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionFiscalTransExtendedDataLines` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionFiscalTransExtendedDataLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    TransactionFiscalTransExtendedDataLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TransactionFiscalTransExtendedDataLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TransactionFiscalTransExtendedDataLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionFiscalTransExtendedDataLines`.
   */
  create(
    entity: TransactionFiscalTransExtendedDataLines<T>
  ): CreateRequestBuilder<TransactionFiscalTransExtendedDataLines<T>, T> {
    return new CreateRequestBuilder<
      TransactionFiscalTransExtendedDataLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TransactionFiscalTransExtendedDataLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransactionFiscalTransExtendedDataLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link TransactionFiscalTransExtendedDataLines.operatingUnitNumber}.
   * @param terminal Key property. See {@link TransactionFiscalTransExtendedDataLines.terminal}.
   * @param transactionId Key property. See {@link TransactionFiscalTransExtendedDataLines.transactionId}.
   * @param fiscalTransactionLineNumber Key property. See {@link TransactionFiscalTransExtendedDataLines.fiscalTransactionLineNumber}.
   * @param fiscalTransactionRecordGuid Key property. See {@link TransactionFiscalTransExtendedDataLines.fiscalTransactionRecordGuid}.
   * @param dataKey Key property. See {@link TransactionFiscalTransExtendedDataLines.dataKey}.
   * @returns A request builder for creating requests to retrieve one `TransactionFiscalTransExtendedDataLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    fiscalTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    fiscalTransactionRecordGuid: DeserializedType<T, 'Edm.Guid'>,
    dataKey: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailFiscalRegistrationExtendedDataType'
    >
  ): GetByKeyRequestBuilder<TransactionFiscalTransExtendedDataLines<T>, T> {
    return new GetByKeyRequestBuilder<
      TransactionFiscalTransExtendedDataLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OperatingUnitNumber: operatingUnitNumber,
      Terminal: terminal,
      TransactionId: transactionId,
      FiscalTransactionLineNumber: fiscalTransactionLineNumber,
      FiscalTransactionRecordGuid: fiscalTransactionRecordGuid,
      DataKey: dataKey
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionFiscalTransExtendedDataLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionFiscalTransExtendedDataLines`.
   */
  update(
    entity: TransactionFiscalTransExtendedDataLines<T>
  ): UpdateRequestBuilder<TransactionFiscalTransExtendedDataLines<T>, T> {
    return new UpdateRequestBuilder<
      TransactionFiscalTransExtendedDataLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionFiscalTransExtendedDataLines`.
   * @param dataAreaId Key property. See {@link TransactionFiscalTransExtendedDataLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link TransactionFiscalTransExtendedDataLines.operatingUnitNumber}.
   * @param terminal Key property. See {@link TransactionFiscalTransExtendedDataLines.terminal}.
   * @param transactionId Key property. See {@link TransactionFiscalTransExtendedDataLines.transactionId}.
   * @param fiscalTransactionLineNumber Key property. See {@link TransactionFiscalTransExtendedDataLines.fiscalTransactionLineNumber}.
   * @param fiscalTransactionRecordGuid Key property. See {@link TransactionFiscalTransExtendedDataLines.fiscalTransactionRecordGuid}.
   * @param dataKey Key property. See {@link TransactionFiscalTransExtendedDataLines.dataKey}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionFiscalTransExtendedDataLines`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    terminal: string,
    transactionId: string,
    fiscalTransactionLineNumber: BigNumber,
    fiscalTransactionRecordGuid: string,
    dataKey: RetailFiscalRegistrationExtendedDataType
  ): DeleteRequestBuilder<TransactionFiscalTransExtendedDataLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionFiscalTransExtendedDataLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionFiscalTransExtendedDataLines` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionFiscalTransExtendedDataLines<T>
  ): DeleteRequestBuilder<TransactionFiscalTransExtendedDataLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    terminal?: string,
    transactionId?: string,
    fiscalTransactionLineNumber?: BigNumber,
    fiscalTransactionRecordGuid?: string,
    dataKey?: RetailFiscalRegistrationExtendedDataType
  ): DeleteRequestBuilder<TransactionFiscalTransExtendedDataLines<T>, T> {
    return new DeleteRequestBuilder<
      TransactionFiscalTransExtendedDataLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransactionFiscalTransExtendedDataLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperatingUnitNumber: operatingUnitNumber!,
            Terminal: terminal!,
            TransactionId: transactionId!,
            FiscalTransactionLineNumber: fiscalTransactionLineNumber!,
            FiscalTransactionRecordGuid: fiscalTransactionRecordGuid!,
            DataKey: dataKey!
          }
    );
  }
}
