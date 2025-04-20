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
import { CustTransactions } from './CustTransactions';

/**
 * Request builder class for operations supported on the {@link CustTransactions} entity.
 */
export class CustTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `CustTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `CustTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<CustTransactions<T>, T> {
    return new GetAllRequestBuilder<CustTransactions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustTransactions`.
   */
  create(
    entity: CustTransactions<T>
  ): CreateRequestBuilder<CustTransactions<T>, T> {
    return new CreateRequestBuilder<CustTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustTransactions` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustTransactions.dataAreaId}.
   * @param sysRecId Key property. See {@link CustTransactions.sysRecId}.
   * @returns A request builder for creating requests to retrieve one `CustTransactions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sysRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<CustTransactions<T>, T> {
    return new GetByKeyRequestBuilder<CustTransactions<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SysRecId: sysRecId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustTransactions`.
   */
  update(
    entity: CustTransactions<T>
  ): UpdateRequestBuilder<CustTransactions<T>, T> {
    return new UpdateRequestBuilder<CustTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustTransactions`.
   * @param dataAreaId Key property. See {@link CustTransactions.dataAreaId}.
   * @param sysRecId Key property. See {@link CustTransactions.sysRecId}.
   * @returns A request builder for creating requests that delete an entity of type `CustTransactions`.
   */
  delete(
    dataAreaId: string,
    sysRecId: BigNumber
  ): DeleteRequestBuilder<CustTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: CustTransactions<T>
  ): DeleteRequestBuilder<CustTransactions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sysRecId?: BigNumber
  ): DeleteRequestBuilder<CustTransactions<T>, T> {
    return new DeleteRequestBuilder<CustTransactions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustTransactions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SysRecId: sysRecId!
          }
    );
  }
}
