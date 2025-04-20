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
import { ItalianSalesTaxBookStatuses } from './ItalianSalesTaxBookStatuses';

/**
 * Request builder class for operations supported on the {@link ItalianSalesTaxBookStatuses} entity.
 */
export class ItalianSalesTaxBookStatusesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItalianSalesTaxBookStatuses<T>, T> {
  /**
   * Returns a request builder for querying all `ItalianSalesTaxBookStatuses` entities.
   * @returns A request builder for creating requests to retrieve all `ItalianSalesTaxBookStatuses` entities.
   */
  getAll(): GetAllRequestBuilder<ItalianSalesTaxBookStatuses<T>, T> {
    return new GetAllRequestBuilder<ItalianSalesTaxBookStatuses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItalianSalesTaxBookStatuses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItalianSalesTaxBookStatuses`.
   */
  create(
    entity: ItalianSalesTaxBookStatuses<T>
  ): CreateRequestBuilder<ItalianSalesTaxBookStatuses<T>, T> {
    return new CreateRequestBuilder<ItalianSalesTaxBookStatuses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItalianSalesTaxBookStatuses` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItalianSalesTaxBookStatuses.dataAreaId}.
   * @param settlementPeriod Key property. See {@link ItalianSalesTaxBookStatuses.settlementPeriod}.
   * @param validFrom Key property. See {@link ItalianSalesTaxBookStatuses.validFrom}.
   * @param validTo Key property. See {@link ItalianSalesTaxBookStatuses.validTo}.
   * @param salesTaxBook Key property. See {@link ItalianSalesTaxBookStatuses.salesTaxBook}.
   * @returns A request builder for creating requests to retrieve one `ItalianSalesTaxBookStatuses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    settlementPeriod: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    salesTaxBook: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItalianSalesTaxBookStatuses<T>, T> {
    return new GetByKeyRequestBuilder<ItalianSalesTaxBookStatuses<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SettlementPeriod: settlementPeriod,
        ValidFrom: validFrom,
        ValidTo: validTo,
        SalesTaxBook: salesTaxBook
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItalianSalesTaxBookStatuses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItalianSalesTaxBookStatuses`.
   */
  update(
    entity: ItalianSalesTaxBookStatuses<T>
  ): UpdateRequestBuilder<ItalianSalesTaxBookStatuses<T>, T> {
    return new UpdateRequestBuilder<ItalianSalesTaxBookStatuses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItalianSalesTaxBookStatuses`.
   * @param dataAreaId Key property. See {@link ItalianSalesTaxBookStatuses.dataAreaId}.
   * @param settlementPeriod Key property. See {@link ItalianSalesTaxBookStatuses.settlementPeriod}.
   * @param validFrom Key property. See {@link ItalianSalesTaxBookStatuses.validFrom}.
   * @param validTo Key property. See {@link ItalianSalesTaxBookStatuses.validTo}.
   * @param salesTaxBook Key property. See {@link ItalianSalesTaxBookStatuses.salesTaxBook}.
   * @returns A request builder for creating requests that delete an entity of type `ItalianSalesTaxBookStatuses`.
   */
  delete(
    dataAreaId: string,
    settlementPeriod: string,
    validFrom: Moment,
    validTo: Moment,
    salesTaxBook: string
  ): DeleteRequestBuilder<ItalianSalesTaxBookStatuses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItalianSalesTaxBookStatuses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItalianSalesTaxBookStatuses` by taking the entity as a parameter.
   */
  delete(
    entity: ItalianSalesTaxBookStatuses<T>
  ): DeleteRequestBuilder<ItalianSalesTaxBookStatuses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    settlementPeriod?: string,
    validFrom?: Moment,
    validTo?: Moment,
    salesTaxBook?: string
  ): DeleteRequestBuilder<ItalianSalesTaxBookStatuses<T>, T> {
    return new DeleteRequestBuilder<ItalianSalesTaxBookStatuses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItalianSalesTaxBookStatuses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SettlementPeriod: settlementPeriod!,
            ValidFrom: validFrom!,
            ValidTo: validTo!,
            SalesTaxBook: salesTaxBook!
          }
    );
  }
}
