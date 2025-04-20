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
import { RetailTransactionLoyaltyLines } from './RetailTransactionLoyaltyLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionLoyaltyLines} entity.
 */
export class RetailTransactionLoyaltyLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionLoyaltyLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionLoyaltyLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionLoyaltyLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionLoyaltyLines<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionLoyaltyLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionLoyaltyLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionLoyaltyLines`.
   */
  create(
    entity: RetailTransactionLoyaltyLines<T>
  ): CreateRequestBuilder<RetailTransactionLoyaltyLines<T>, T> {
    return new CreateRequestBuilder<RetailTransactionLoyaltyLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionLoyaltyLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionLoyaltyLines.dataAreaId}.
   * @param transactionNumber Key property. See {@link RetailTransactionLoyaltyLines.transactionNumber}.
   * @param terminal Key property. See {@link RetailTransactionLoyaltyLines.terminal}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionLoyaltyLines.operatingUnitNumber}.
   * @param loyaltyName Key property. See {@link RetailTransactionLoyaltyLines.loyaltyName}.
   * @param loyaltyTierId Key property. See {@link RetailTransactionLoyaltyLines.loyaltyTierId}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionLoyaltyLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    loyaltyName: DeserializedType<T, 'Edm.String'>,
    loyaltyTierId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionLoyaltyLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionLoyaltyLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransactionNumber: transactionNumber,
        Terminal: terminal,
        OperatingUnitNumber: operatingUnitNumber,
        LoyaltyName: loyaltyName,
        LoyaltyTierId: loyaltyTierId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionLoyaltyLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionLoyaltyLines`.
   */
  update(
    entity: RetailTransactionLoyaltyLines<T>
  ): UpdateRequestBuilder<RetailTransactionLoyaltyLines<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionLoyaltyLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionLoyaltyLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionLoyaltyLines.dataAreaId}.
   * @param transactionNumber Key property. See {@link RetailTransactionLoyaltyLines.transactionNumber}.
   * @param terminal Key property. See {@link RetailTransactionLoyaltyLines.terminal}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionLoyaltyLines.operatingUnitNumber}.
   * @param loyaltyName Key property. See {@link RetailTransactionLoyaltyLines.loyaltyName}.
   * @param loyaltyTierId Key property. See {@link RetailTransactionLoyaltyLines.loyaltyTierId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionLoyaltyLines`.
   */
  delete(
    dataAreaId: string,
    transactionNumber: string,
    terminal: string,
    operatingUnitNumber: string,
    loyaltyName: string,
    loyaltyTierId: string
  ): DeleteRequestBuilder<RetailTransactionLoyaltyLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionLoyaltyLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionLoyaltyLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionLoyaltyLines<T>
  ): DeleteRequestBuilder<RetailTransactionLoyaltyLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionNumber?: string,
    terminal?: string,
    operatingUnitNumber?: string,
    loyaltyName?: string,
    loyaltyTierId?: string
  ): DeleteRequestBuilder<RetailTransactionLoyaltyLines<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionLoyaltyLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionLoyaltyLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionNumber: transactionNumber!,
            Terminal: terminal!,
            OperatingUnitNumber: operatingUnitNumber!,
            LoyaltyName: loyaltyName!,
            LoyaltyTierId: loyaltyTierId!
          }
    );
  }
}
