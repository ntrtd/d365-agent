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
import { RevRecRevenuePrices } from './RevRecRevenuePrices';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link RevRecRevenuePrices} entity.
 */
export class RevRecRevenuePricesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RevRecRevenuePrices<T>, T> {
  /**
   * Returns a request builder for querying all `RevRecRevenuePrices` entities.
   * @returns A request builder for creating requests to retrieve all `RevRecRevenuePrices` entities.
   */
  getAll(): GetAllRequestBuilder<RevRecRevenuePrices<T>, T> {
    return new GetAllRequestBuilder<RevRecRevenuePrices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RevRecRevenuePrices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RevRecRevenuePrices`.
   */
  create(
    entity: RevRecRevenuePrices<T>
  ): CreateRequestBuilder<RevRecRevenuePrices<T>, T> {
    return new CreateRequestBuilder<RevRecRevenuePrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RevRecRevenuePrices` entity based on its keys.
   * @param dataAreaId Key property. See {@link RevRecRevenuePrices.dataAreaId}.
   * @param toDate Key property. See {@link RevRecRevenuePrices.toDate}.
   * @param fromDate Key property. See {@link RevRecRevenuePrices.fromDate}.
   * @param currency Key property. See {@link RevRecRevenuePrices.currency}.
   * @param accountRelation Key property. See {@link RevRecRevenuePrices.accountRelation}.
   * @param accountCode Key property. See {@link RevRecRevenuePrices.accountCode}.
   * @param itemRelation Key property. See {@link RevRecRevenuePrices.itemRelation}.
   * @param itemCode Key property. See {@link RevRecRevenuePrices.itemCode}.
   * @returns A request builder for creating requests to retrieve one `RevRecRevenuePrices` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    toDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    currency: DeserializedType<T, 'Edm.String'>,
    accountRelation: DeserializedType<T, 'Edm.String'>,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    itemRelation: DeserializedType<T, 'Edm.String'>,
    itemCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >
  ): GetByKeyRequestBuilder<RevRecRevenuePrices<T>, T> {
    return new GetByKeyRequestBuilder<RevRecRevenuePrices<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ToDate: toDate,
        FromDate: fromDate,
        Currency: currency,
        AccountRelation: accountRelation,
        AccountCode: accountCode,
        ItemRelation: itemRelation,
        ItemCode: itemCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RevRecRevenuePrices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RevRecRevenuePrices`.
   */
  update(
    entity: RevRecRevenuePrices<T>
  ): UpdateRequestBuilder<RevRecRevenuePrices<T>, T> {
    return new UpdateRequestBuilder<RevRecRevenuePrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RevRecRevenuePrices`.
   * @param dataAreaId Key property. See {@link RevRecRevenuePrices.dataAreaId}.
   * @param toDate Key property. See {@link RevRecRevenuePrices.toDate}.
   * @param fromDate Key property. See {@link RevRecRevenuePrices.fromDate}.
   * @param currency Key property. See {@link RevRecRevenuePrices.currency}.
   * @param accountRelation Key property. See {@link RevRecRevenuePrices.accountRelation}.
   * @param accountCode Key property. See {@link RevRecRevenuePrices.accountCode}.
   * @param itemRelation Key property. See {@link RevRecRevenuePrices.itemRelation}.
   * @param itemCode Key property. See {@link RevRecRevenuePrices.itemCode}.
   * @returns A request builder for creating requests that delete an entity of type `RevRecRevenuePrices`.
   */
  delete(
    dataAreaId: string,
    toDate: Moment,
    fromDate: Moment,
    currency: string,
    accountRelation: string,
    accountCode: TableGroupAll,
    itemRelation: string,
    itemCode: TableGroupAll
  ): DeleteRequestBuilder<RevRecRevenuePrices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RevRecRevenuePrices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RevRecRevenuePrices` by taking the entity as a parameter.
   */
  delete(
    entity: RevRecRevenuePrices<T>
  ): DeleteRequestBuilder<RevRecRevenuePrices<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    toDate?: Moment,
    fromDate?: Moment,
    currency?: string,
    accountRelation?: string,
    accountCode?: TableGroupAll,
    itemRelation?: string,
    itemCode?: TableGroupAll
  ): DeleteRequestBuilder<RevRecRevenuePrices<T>, T> {
    return new DeleteRequestBuilder<RevRecRevenuePrices<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RevRecRevenuePrices
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ToDate: toDate!,
            FromDate: fromDate!,
            Currency: currency!,
            AccountRelation: accountRelation!,
            AccountCode: accountCode!,
            ItemRelation: itemRelation!,
            ItemCode: itemCode!
          }
    );
  }
}
