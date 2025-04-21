/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { TaxPurchaseTaxTables } from './TaxPurchaseTaxTables';

/**
 * Request builder class for operations supported on the {@link TaxPurchaseTaxTables} entity.
 */
export class TaxPurchaseTaxTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxPurchaseTaxTables<T>, T> {
  /**
   * Returns a request builder for querying all `TaxPurchaseTaxTables` entities.
   * @returns A request builder for creating requests to retrieve all `TaxPurchaseTaxTables` entities.
   */
  getAll(): GetAllRequestBuilder<TaxPurchaseTaxTables<T>, T> {
    return new GetAllRequestBuilder<TaxPurchaseTaxTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxPurchaseTaxTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxPurchaseTaxTables`.
   */
  create(
    entity: TaxPurchaseTaxTables<T>
  ): CreateRequestBuilder<TaxPurchaseTaxTables<T>, T> {
    return new CreateRequestBuilder<TaxPurchaseTaxTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxPurchaseTaxTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxPurchaseTaxTables.dataAreaId}.
   * @param purchaseDuty Key property. See {@link TaxPurchaseTaxTables.purchaseDuty}.
   * @param fromDate Key property. See {@link TaxPurchaseTaxTables.fromDate}.
   * @param toDate Key property. See {@link TaxPurchaseTaxTables.toDate}.
   * @param taxLimitMin Key property. See {@link TaxPurchaseTaxTables.taxLimitMin}.
   * @returns A request builder for creating requests to retrieve one `TaxPurchaseTaxTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseDuty: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    toDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    taxLimitMin: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<TaxPurchaseTaxTables<T>, T> {
    return new GetByKeyRequestBuilder<TaxPurchaseTaxTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseDuty: purchaseDuty,
        FromDate: fromDate,
        ToDate: toDate,
        TaxLimitMin: taxLimitMin
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxPurchaseTaxTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxPurchaseTaxTables`.
   */
  update(
    entity: TaxPurchaseTaxTables<T>
  ): UpdateRequestBuilder<TaxPurchaseTaxTables<T>, T> {
    return new UpdateRequestBuilder<TaxPurchaseTaxTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxPurchaseTaxTables`.
   * @param dataAreaId Key property. See {@link TaxPurchaseTaxTables.dataAreaId}.
   * @param purchaseDuty Key property. See {@link TaxPurchaseTaxTables.purchaseDuty}.
   * @param fromDate Key property. See {@link TaxPurchaseTaxTables.fromDate}.
   * @param toDate Key property. See {@link TaxPurchaseTaxTables.toDate}.
   * @param taxLimitMin Key property. See {@link TaxPurchaseTaxTables.taxLimitMin}.
   * @returns A request builder for creating requests that delete an entity of type `TaxPurchaseTaxTables`.
   */
  delete(
    dataAreaId: string,
    purchaseDuty: string,
    fromDate: Moment,
    toDate: Moment,
    taxLimitMin: BigNumber
  ): DeleteRequestBuilder<TaxPurchaseTaxTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxPurchaseTaxTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxPurchaseTaxTables` by taking the entity as a parameter.
   */
  delete(
    entity: TaxPurchaseTaxTables<T>
  ): DeleteRequestBuilder<TaxPurchaseTaxTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseDuty?: string,
    fromDate?: Moment,
    toDate?: Moment,
    taxLimitMin?: BigNumber
  ): DeleteRequestBuilder<TaxPurchaseTaxTables<T>, T> {
    return new DeleteRequestBuilder<TaxPurchaseTaxTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxPurchaseTaxTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseDuty: purchaseDuty!,
            FromDate: fromDate!,
            ToDate: toDate!,
            TaxLimitMin: taxLimitMin!
          }
    );
  }
}
