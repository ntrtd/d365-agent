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
import { RetailTransactionAdditionalAddressTransBiEntities } from './RetailTransactionAdditionalAddressTransBiEntities';
import { RetailAdditionalAddressType } from './RetailAdditionalAddressType';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAdditionalAddressTransBiEntities} entity.
 */
export class RetailTransactionAdditionalAddressTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  RetailTransactionAdditionalAddressTransBiEntities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `RetailTransactionAdditionalAddressTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAdditionalAddressTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionAdditionalAddressTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionAdditionalAddressTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAdditionalAddressTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAdditionalAddressTransBiEntities`.
   */
  create(
    entity: RetailTransactionAdditionalAddressTransBiEntities<T>
  ): CreateRequestBuilder<
    RetailTransactionAdditionalAddressTransBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailTransactionAdditionalAddressTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAdditionalAddressTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAdditionalAddressTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionAdditionalAddressTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionAdditionalAddressTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionAdditionalAddressTransBiEntities.transactionId}.
   * @param addressType Key property. See {@link RetailTransactionAdditionalAddressTransBiEntities.addressType}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAdditionalAddressTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    addressType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailAdditionalAddressType'
    >
  ): GetByKeyRequestBuilder<
    RetailTransactionAdditionalAddressTransBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailTransactionAdditionalAddressTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Store: store,
      Terminal: terminal,
      TransactionId: transactionId,
      AddressType: addressType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionAdditionalAddressTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAdditionalAddressTransBiEntities`.
   */
  update(
    entity: RetailTransactionAdditionalAddressTransBiEntities<T>
  ): UpdateRequestBuilder<
    RetailTransactionAdditionalAddressTransBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailTransactionAdditionalAddressTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAdditionalAddressTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionAdditionalAddressTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionAdditionalAddressTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionAdditionalAddressTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionAdditionalAddressTransBiEntities.transactionId}.
   * @param addressType Key property. See {@link RetailTransactionAdditionalAddressTransBiEntities.addressType}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAdditionalAddressTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    addressType: RetailAdditionalAddressType
  ): DeleteRequestBuilder<
    RetailTransactionAdditionalAddressTransBiEntities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAdditionalAddressTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAdditionalAddressTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAdditionalAddressTransBiEntities<T>
  ): DeleteRequestBuilder<
    RetailTransactionAdditionalAddressTransBiEntities<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    addressType?: RetailAdditionalAddressType
  ): DeleteRequestBuilder<
    RetailTransactionAdditionalAddressTransBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailTransactionAdditionalAddressTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      RetailTransactionAdditionalAddressTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Store: store!,
            Terminal: terminal!,
            TransactionId: transactionId!,
            AddressType: addressType!
          }
    );
  }
}
