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
import { RetailTransactionAttributeTransBiEntities } from './RetailTransactionAttributeTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAttributeTransBiEntities} entity.
 */
export class RetailTransactionAttributeTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAttributeTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAttributeTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAttributeTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionAttributeTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionAttributeTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAttributeTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAttributeTransBiEntities`.
   */
  create(
    entity: RetailTransactionAttributeTransBiEntities<T>
  ): CreateRequestBuilder<RetailTransactionAttributeTransBiEntities<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionAttributeTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAttributeTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAttributeTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionAttributeTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionAttributeTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionAttributeTransBiEntities.transactionId}.
   * @param name Key property. See {@link RetailTransactionAttributeTransBiEntities.name}.
   * @param headerOrLineNum Key property. See {@link RetailTransactionAttributeTransBiEntities.headerOrLineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAttributeTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>,
    headerOrLineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionAttributeTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionAttributeTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      store: store,
      terminal: terminal,
      transactionId: transactionId,
      Name: name,
      HeaderOrLineNum: headerOrLineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionAttributeTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAttributeTransBiEntities`.
   */
  update(
    entity: RetailTransactionAttributeTransBiEntities<T>
  ): UpdateRequestBuilder<RetailTransactionAttributeTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionAttributeTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAttributeTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionAttributeTransBiEntities.dataAreaId}.
   * @param store Key property. See {@link RetailTransactionAttributeTransBiEntities.store}.
   * @param terminal Key property. See {@link RetailTransactionAttributeTransBiEntities.terminal}.
   * @param transactionId Key property. See {@link RetailTransactionAttributeTransBiEntities.transactionId}.
   * @param name Key property. See {@link RetailTransactionAttributeTransBiEntities.name}.
   * @param headerOrLineNum Key property. See {@link RetailTransactionAttributeTransBiEntities.headerOrLineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAttributeTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    name: string,
    headerOrLineNum: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAttributeTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAttributeTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAttributeTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAttributeTransBiEntities<T>
  ): DeleteRequestBuilder<RetailTransactionAttributeTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    name?: string,
    headerOrLineNum?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAttributeTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionAttributeTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAttributeTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            store: store!,
            terminal: terminal!,
            transactionId: transactionId!,
            Name: name!,
            HeaderOrLineNum: headerOrLineNum!
          }
    );
  }
}
