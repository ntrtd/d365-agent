/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { CustBalanceStats } from './CustBalanceStats';

/**
 * Request builder class for operations supported on the {@link CustBalanceStats} entity.
 */
export class CustBalanceStatsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustBalanceStats<T>, T> {
  /**
   * Returns a request builder for querying all `CustBalanceStats` entities.
   * @returns A request builder for creating requests to retrieve all `CustBalanceStats` entities.
   */
  getAll(): GetAllRequestBuilder<CustBalanceStats<T>, T> {
    return new GetAllRequestBuilder<CustBalanceStats<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustBalanceStats` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustBalanceStats`.
   */
  create(
    entity: CustBalanceStats<T>
  ): CreateRequestBuilder<CustBalanceStats<T>, T> {
    return new CreateRequestBuilder<CustBalanceStats<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustBalanceStats` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustBalanceStats.dataAreaId}.
   * @param custAccount Key property. See {@link CustBalanceStats.custAccount}.
   * @param balanceDate Key property. See {@link CustBalanceStats.balanceDate}.
   * @returns A request builder for creating requests to retrieve one `CustBalanceStats` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    custAccount: DeserializedType<T, 'Edm.String'>,
    balanceDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<CustBalanceStats<T>, T> {
    return new GetByKeyRequestBuilder<CustBalanceStats<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CustAccount: custAccount,
      BalanceDate: balanceDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustBalanceStats`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustBalanceStats`.
   */
  update(
    entity: CustBalanceStats<T>
  ): UpdateRequestBuilder<CustBalanceStats<T>, T> {
    return new UpdateRequestBuilder<CustBalanceStats<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustBalanceStats`.
   * @param dataAreaId Key property. See {@link CustBalanceStats.dataAreaId}.
   * @param custAccount Key property. See {@link CustBalanceStats.custAccount}.
   * @param balanceDate Key property. See {@link CustBalanceStats.balanceDate}.
   * @returns A request builder for creating requests that delete an entity of type `CustBalanceStats`.
   */
  delete(
    dataAreaId: string,
    custAccount: string,
    balanceDate: Moment
  ): DeleteRequestBuilder<CustBalanceStats<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustBalanceStats`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustBalanceStats` by taking the entity as a parameter.
   */
  delete(
    entity: CustBalanceStats<T>
  ): DeleteRequestBuilder<CustBalanceStats<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    custAccount?: string,
    balanceDate?: Moment
  ): DeleteRequestBuilder<CustBalanceStats<T>, T> {
    return new DeleteRequestBuilder<CustBalanceStats<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustBalanceStats
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustAccount: custAccount!,
            BalanceDate: balanceDate!
          }
    );
  }
}
