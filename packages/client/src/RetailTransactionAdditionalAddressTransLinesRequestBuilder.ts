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
import { RetailTransactionAdditionalAddressTransLines } from './RetailTransactionAdditionalAddressTransLines';
import { RetailAdditionalAddressType } from './RetailAdditionalAddressType';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAdditionalAddressTransLines} entity.
 */
export class RetailTransactionAdditionalAddressTransLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAdditionalAddressTransLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAdditionalAddressTransLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAdditionalAddressTransLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionAdditionalAddressTransLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionAdditionalAddressTransLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAdditionalAddressTransLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAdditionalAddressTransLines`.
   */
  create(
    entity: RetailTransactionAdditionalAddressTransLines<T>
  ): CreateRequestBuilder<RetailTransactionAdditionalAddressTransLines<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionAdditionalAddressTransLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAdditionalAddressTransLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAdditionalAddressTransLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAdditionalAddressTransLines.operatingUnitNumber}.
   * @param terminal Key property. See {@link RetailTransactionAdditionalAddressTransLines.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionAdditionalAddressTransLines.transactionId}.
   * @param addressType Key property. See {@link RetailTransactionAdditionalAddressTransLines.addressType}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAdditionalAddressTransLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    addressType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailAdditionalAddressType'
    >
  ): GetByKeyRequestBuilder<
    RetailTransactionAdditionalAddressTransLines<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailTransactionAdditionalAddressTransLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OperatingUnitNumber: operatingUnitNumber,
      Terminal: terminal,
      TransactionId: transactionId,
      AddressType: addressType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionAdditionalAddressTransLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAdditionalAddressTransLines`.
   */
  update(
    entity: RetailTransactionAdditionalAddressTransLines<T>
  ): UpdateRequestBuilder<RetailTransactionAdditionalAddressTransLines<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionAdditionalAddressTransLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAdditionalAddressTransLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionAdditionalAddressTransLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAdditionalAddressTransLines.operatingUnitNumber}.
   * @param terminal Key property. See {@link RetailTransactionAdditionalAddressTransLines.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionAdditionalAddressTransLines.transactionId}.
   * @param addressType Key property. See {@link RetailTransactionAdditionalAddressTransLines.addressType}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAdditionalAddressTransLines`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    terminal: string,
    transactionId: string,
    addressType: RetailAdditionalAddressType
  ): DeleteRequestBuilder<RetailTransactionAdditionalAddressTransLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAdditionalAddressTransLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAdditionalAddressTransLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAdditionalAddressTransLines<T>
  ): DeleteRequestBuilder<RetailTransactionAdditionalAddressTransLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    terminal?: string,
    transactionId?: string,
    addressType?: RetailAdditionalAddressType
  ): DeleteRequestBuilder<RetailTransactionAdditionalAddressTransLines<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionAdditionalAddressTransLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAdditionalAddressTransLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperatingUnitNumber: operatingUnitNumber!,
            Terminal: terminal!,
            TransactionId: transactionId!,
            AddressType: addressType!
          }
    );
  }
}
