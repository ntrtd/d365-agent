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
import { TransactionGteChargeTaxLines } from './TransactionGteChargeTaxLines';

/**
 * Request builder class for operations supported on the {@link TransactionGteChargeTaxLines} entity.
 */
export class TransactionGteChargeTaxLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionGteChargeTaxLines<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionGteChargeTaxLines` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionGteChargeTaxLines` entities.
   */
  getAll(): GetAllRequestBuilder<TransactionGteChargeTaxLines<T>, T> {
    return new GetAllRequestBuilder<TransactionGteChargeTaxLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransactionGteChargeTaxLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionGteChargeTaxLines`.
   */
  create(
    entity: TransactionGteChargeTaxLines<T>
  ): CreateRequestBuilder<TransactionGteChargeTaxLines<T>, T> {
    return new CreateRequestBuilder<TransactionGteChargeTaxLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransactionGteChargeTaxLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransactionGteChargeTaxLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link TransactionGteChargeTaxLines.operatingUnitNumber}.
   * @param terminalId Key property. See {@link TransactionGteChargeTaxLines.terminalId}.
   * @param transactionId Key property. See {@link TransactionGteChargeTaxLines.transactionId}.
   * @param saleLineNum Key property. See {@link TransactionGteChargeTaxLines.saleLineNum}.
   * @param markupLineNum Key property. See {@link TransactionGteChargeTaxLines.markupLineNum}.
   * @param taxComponent Key property. See {@link TransactionGteChargeTaxLines.taxComponent}.
   * @returns A request builder for creating requests to retrieve one `TransactionGteChargeTaxLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    saleLineNum: DeserializedType<T, 'Edm.Decimal'>,
    markupLineNum: DeserializedType<T, 'Edm.Decimal'>,
    taxComponent: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransactionGteChargeTaxLines<T>, T> {
    return new GetByKeyRequestBuilder<TransactionGteChargeTaxLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OperatingUnitNumber: operatingUnitNumber,
        TerminalId: terminalId,
        TransactionId: transactionId,
        SaleLineNum: saleLineNum,
        MarkupLineNum: markupLineNum,
        TaxComponent: taxComponent
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionGteChargeTaxLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionGteChargeTaxLines`.
   */
  update(
    entity: TransactionGteChargeTaxLines<T>
  ): UpdateRequestBuilder<TransactionGteChargeTaxLines<T>, T> {
    return new UpdateRequestBuilder<TransactionGteChargeTaxLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionGteChargeTaxLines`.
   * @param dataAreaId Key property. See {@link TransactionGteChargeTaxLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link TransactionGteChargeTaxLines.operatingUnitNumber}.
   * @param terminalId Key property. See {@link TransactionGteChargeTaxLines.terminalId}.
   * @param transactionId Key property. See {@link TransactionGteChargeTaxLines.transactionId}.
   * @param saleLineNum Key property. See {@link TransactionGteChargeTaxLines.saleLineNum}.
   * @param markupLineNum Key property. See {@link TransactionGteChargeTaxLines.markupLineNum}.
   * @param taxComponent Key property. See {@link TransactionGteChargeTaxLines.taxComponent}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionGteChargeTaxLines`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    terminalId: string,
    transactionId: string,
    saleLineNum: BigNumber,
    markupLineNum: BigNumber,
    taxComponent: string
  ): DeleteRequestBuilder<TransactionGteChargeTaxLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionGteChargeTaxLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionGteChargeTaxLines` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionGteChargeTaxLines<T>
  ): DeleteRequestBuilder<TransactionGteChargeTaxLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    terminalId?: string,
    transactionId?: string,
    saleLineNum?: BigNumber,
    markupLineNum?: BigNumber,
    taxComponent?: string
  ): DeleteRequestBuilder<TransactionGteChargeTaxLines<T>, T> {
    return new DeleteRequestBuilder<TransactionGteChargeTaxLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransactionGteChargeTaxLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperatingUnitNumber: operatingUnitNumber!,
            TerminalId: terminalId!,
            TransactionId: transactionId!,
            SaleLineNum: saleLineNum!,
            MarkupLineNum: markupLineNum!,
            TaxComponent: taxComponent!
          }
    );
  }
}
