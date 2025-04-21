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
import { RetailTransactionAttributes } from './RetailTransactionAttributes';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAttributes} entity.
 */
export class RetailTransactionAttributesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAttributes<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAttributes` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAttributes` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionAttributes<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionAttributes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAttributes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAttributes`.
   */
  create(
    entity: RetailTransactionAttributes<T>
  ): CreateRequestBuilder<RetailTransactionAttributes<T>, T> {
    return new CreateRequestBuilder<RetailTransactionAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAttributes` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAttributes.dataAreaId}.
   * @param attributeName Key property. See {@link RetailTransactionAttributes.attributeName}.
   * @param transactionNumber Key property. See {@link RetailTransactionAttributes.transactionNumber}.
   * @param terminal Key property. See {@link RetailTransactionAttributes.terminal}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAttributes.operatingUnitNumber}.
   * @param headerOrLineNum Key property. See {@link RetailTransactionAttributes.headerOrLineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAttributes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    headerOrLineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionAttributes<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionAttributes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AttributeName: attributeName,
        TransactionNumber: transactionNumber,
        Terminal: terminal,
        OperatingUnitNumber: operatingUnitNumber,
        HeaderOrLineNum: headerOrLineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionAttributes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAttributes`.
   */
  update(
    entity: RetailTransactionAttributes<T>
  ): UpdateRequestBuilder<RetailTransactionAttributes<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAttributes`.
   * @param dataAreaId Key property. See {@link RetailTransactionAttributes.dataAreaId}.
   * @param attributeName Key property. See {@link RetailTransactionAttributes.attributeName}.
   * @param transactionNumber Key property. See {@link RetailTransactionAttributes.transactionNumber}.
   * @param terminal Key property. See {@link RetailTransactionAttributes.terminal}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAttributes.operatingUnitNumber}.
   * @param headerOrLineNum Key property. See {@link RetailTransactionAttributes.headerOrLineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAttributes`.
   */
  delete(
    dataAreaId: string,
    attributeName: string,
    transactionNumber: string,
    terminal: string,
    operatingUnitNumber: string,
    headerOrLineNum: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAttributes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAttributes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAttributes` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAttributes<T>
  ): DeleteRequestBuilder<RetailTransactionAttributes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    attributeName?: string,
    transactionNumber?: string,
    terminal?: string,
    operatingUnitNumber?: string,
    headerOrLineNum?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAttributes<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionAttributes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAttributes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AttributeName: attributeName!,
            TransactionNumber: transactionNumber!,
            Terminal: terminal!,
            OperatingUnitNumber: operatingUnitNumber!,
            HeaderOrLineNum: headerOrLineNum!
          }
    );
  }
}
