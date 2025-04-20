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
import { RetailTransactionKitsDisassemblyTransBiEntities } from './RetailTransactionKitsDisassemblyTransBiEntities';

/**
 * Request builder class for operations supported on the {@link RetailTransactionKitsDisassemblyTransBiEntities} entity.
 */
export class RetailTransactionKitsDisassemblyTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  RetailTransactionKitsDisassemblyTransBiEntities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `RetailTransactionKitsDisassemblyTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionKitsDisassemblyTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionKitsDisassemblyTransBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionKitsDisassemblyTransBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionKitsDisassemblyTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionKitsDisassemblyTransBiEntities`.
   */
  create(
    entity: RetailTransactionKitsDisassemblyTransBiEntities<T>
  ): CreateRequestBuilder<
    RetailTransactionKitsDisassemblyTransBiEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      RetailTransactionKitsDisassemblyTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionKitsDisassemblyTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionKitsDisassemblyTransBiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionKitsDisassemblyTransBiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionKitsDisassemblyTransBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionKitsDisassemblyTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionKitsDisassemblyTransBiEntities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionKitsDisassemblyTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    RetailTransactionKitsDisassemblyTransBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailTransactionKitsDisassemblyTransBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      StoreId: storeId,
      TerminalId: terminalId,
      TransactionId: transactionId,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionKitsDisassemblyTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionKitsDisassemblyTransBiEntities`.
   */
  update(
    entity: RetailTransactionKitsDisassemblyTransBiEntities<T>
  ): UpdateRequestBuilder<
    RetailTransactionKitsDisassemblyTransBiEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      RetailTransactionKitsDisassemblyTransBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionKitsDisassemblyTransBiEntities`.
   * @param dataAreaId Key property. See {@link RetailTransactionKitsDisassemblyTransBiEntities.dataAreaId}.
   * @param storeId Key property. See {@link RetailTransactionKitsDisassemblyTransBiEntities.storeId}.
   * @param terminalId Key property. See {@link RetailTransactionKitsDisassemblyTransBiEntities.terminalId}.
   * @param transactionId Key property. See {@link RetailTransactionKitsDisassemblyTransBiEntities.transactionId}.
   * @param lineNum Key property. See {@link RetailTransactionKitsDisassemblyTransBiEntities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionKitsDisassemblyTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    storeId: string,
    terminalId: string,
    transactionId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<
    RetailTransactionKitsDisassemblyTransBiEntities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionKitsDisassemblyTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionKitsDisassemblyTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionKitsDisassemblyTransBiEntities<T>
  ): DeleteRequestBuilder<
    RetailTransactionKitsDisassemblyTransBiEntities<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    storeId?: string,
    terminalId?: string,
    transactionId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<
    RetailTransactionKitsDisassemblyTransBiEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      RetailTransactionKitsDisassemblyTransBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      RetailTransactionKitsDisassemblyTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StoreId: storeId!,
            TerminalId: terminalId!,
            TransactionId: transactionId!,
            LineNum: lineNum!
          }
    );
  }
}
