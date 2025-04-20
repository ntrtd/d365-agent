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
import { TransactionChargeTaxMeasures } from './TransactionChargeTaxMeasures';

/**
 * Request builder class for operations supported on the {@link TransactionChargeTaxMeasures} entity.
 */
export class TransactionChargeTaxMeasuresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionChargeTaxMeasures<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionChargeTaxMeasures` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionChargeTaxMeasures` entities.
   */
  getAll(): GetAllRequestBuilder<TransactionChargeTaxMeasures<T>, T> {
    return new GetAllRequestBuilder<TransactionChargeTaxMeasures<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransactionChargeTaxMeasures` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionChargeTaxMeasures`.
   */
  create(
    entity: TransactionChargeTaxMeasures<T>
  ): CreateRequestBuilder<TransactionChargeTaxMeasures<T>, T> {
    return new CreateRequestBuilder<TransactionChargeTaxMeasures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransactionChargeTaxMeasures` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransactionChargeTaxMeasures.dataAreaId}.
   * @param terminal Key property. See {@link TransactionChargeTaxMeasures.terminal}.
   * @param transactionNumber Key property. See {@link TransactionChargeTaxMeasures.transactionNumber}.
   * @param saleLineNum Key property. See {@link TransactionChargeTaxMeasures.saleLineNum}.
   * @param markupLineNum Key property. See {@link TransactionChargeTaxMeasures.markupLineNum}.
   * @param path Key property. See {@link TransactionChargeTaxMeasures.path}.
   * @param operatingUnitNumber Key property. See {@link TransactionChargeTaxMeasures.operatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `TransactionChargeTaxMeasures` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    saleLineNum: DeserializedType<T, 'Edm.Decimal'>,
    markupLineNum: DeserializedType<T, 'Edm.Decimal'>,
    path: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransactionChargeTaxMeasures<T>, T> {
    return new GetByKeyRequestBuilder<TransactionChargeTaxMeasures<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Terminal: terminal,
        TransactionNumber: transactionNumber,
        SaleLineNum: saleLineNum,
        MarkupLineNum: markupLineNum,
        Path: path,
        OperatingUnitNumber: operatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionChargeTaxMeasures`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionChargeTaxMeasures`.
   */
  update(
    entity: TransactionChargeTaxMeasures<T>
  ): UpdateRequestBuilder<TransactionChargeTaxMeasures<T>, T> {
    return new UpdateRequestBuilder<TransactionChargeTaxMeasures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionChargeTaxMeasures`.
   * @param dataAreaId Key property. See {@link TransactionChargeTaxMeasures.dataAreaId}.
   * @param terminal Key property. See {@link TransactionChargeTaxMeasures.terminal}.
   * @param transactionNumber Key property. See {@link TransactionChargeTaxMeasures.transactionNumber}.
   * @param saleLineNum Key property. See {@link TransactionChargeTaxMeasures.saleLineNum}.
   * @param markupLineNum Key property. See {@link TransactionChargeTaxMeasures.markupLineNum}.
   * @param path Key property. See {@link TransactionChargeTaxMeasures.path}.
   * @param operatingUnitNumber Key property. See {@link TransactionChargeTaxMeasures.operatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionChargeTaxMeasures`.
   */
  delete(
    dataAreaId: string,
    terminal: string,
    transactionNumber: string,
    saleLineNum: BigNumber,
    markupLineNum: BigNumber,
    path: string,
    operatingUnitNumber: string
  ): DeleteRequestBuilder<TransactionChargeTaxMeasures<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionChargeTaxMeasures`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionChargeTaxMeasures` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionChargeTaxMeasures<T>
  ): DeleteRequestBuilder<TransactionChargeTaxMeasures<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    terminal?: string,
    transactionNumber?: string,
    saleLineNum?: BigNumber,
    markupLineNum?: BigNumber,
    path?: string,
    operatingUnitNumber?: string
  ): DeleteRequestBuilder<TransactionChargeTaxMeasures<T>, T> {
    return new DeleteRequestBuilder<TransactionChargeTaxMeasures<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransactionChargeTaxMeasures
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Terminal: terminal!,
            TransactionNumber: transactionNumber!,
            SaleLineNum: saleLineNum!,
            MarkupLineNum: markupLineNum!,
            Path: path!,
            OperatingUnitNumber: operatingUnitNumber!
          }
    );
  }
}
