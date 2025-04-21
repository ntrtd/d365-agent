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
import { RetailTransactionTaxMeasures } from './RetailTransactionTaxMeasures';

/**
 * Request builder class for operations supported on the {@link RetailTransactionTaxMeasures} entity.
 */
export class RetailTransactionTaxMeasuresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionTaxMeasures<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionTaxMeasures` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionTaxMeasures` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionTaxMeasures<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionTaxMeasures<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionTaxMeasures` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionTaxMeasures`.
   */
  create(
    entity: RetailTransactionTaxMeasures<T>
  ): CreateRequestBuilder<RetailTransactionTaxMeasures<T>, T> {
    return new CreateRequestBuilder<RetailTransactionTaxMeasures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionTaxMeasures` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionTaxMeasures.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionTaxMeasures.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionTaxMeasures.transactionNumber}.
   * @param saleLineNum Key property. See {@link RetailTransactionTaxMeasures.saleLineNum}.
   * @param path Key property. See {@link RetailTransactionTaxMeasures.path}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionTaxMeasures.operatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionTaxMeasures` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    saleLineNum: DeserializedType<T, 'Edm.Decimal'>,
    path: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionTaxMeasures<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionTaxMeasures<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Terminal: terminal,
        TransactionNumber: transactionNumber,
        SaleLineNum: saleLineNum,
        Path: path,
        OperatingUnitNumber: operatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionTaxMeasures`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionTaxMeasures`.
   */
  update(
    entity: RetailTransactionTaxMeasures<T>
  ): UpdateRequestBuilder<RetailTransactionTaxMeasures<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionTaxMeasures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionTaxMeasures`.
   * @param dataAreaId Key property. See {@link RetailTransactionTaxMeasures.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionTaxMeasures.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionTaxMeasures.transactionNumber}.
   * @param saleLineNum Key property. See {@link RetailTransactionTaxMeasures.saleLineNum}.
   * @param path Key property. See {@link RetailTransactionTaxMeasures.path}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionTaxMeasures.operatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionTaxMeasures`.
   */
  delete(
    dataAreaId: string,
    terminal: string,
    transactionNumber: string,
    saleLineNum: BigNumber,
    path: string,
    operatingUnitNumber: string
  ): DeleteRequestBuilder<RetailTransactionTaxMeasures<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionTaxMeasures`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionTaxMeasures` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionTaxMeasures<T>
  ): DeleteRequestBuilder<RetailTransactionTaxMeasures<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    terminal?: string,
    transactionNumber?: string,
    saleLineNum?: BigNumber,
    path?: string,
    operatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailTransactionTaxMeasures<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionTaxMeasures<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionTaxMeasures
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Terminal: terminal!,
            TransactionNumber: transactionNumber!,
            SaleLineNum: saleLineNum!,
            Path: path!,
            OperatingUnitNumber: operatingUnitNumber!
          }
    );
  }
}
