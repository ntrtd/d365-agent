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
import { ProductionRouteTransactions } from './ProductionRouteTransactions';

/**
 * Request builder class for operations supported on the {@link ProductionRouteTransactions} entity.
 */
export class ProductionRouteTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductionRouteTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `ProductionRouteTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `ProductionRouteTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<ProductionRouteTransactions<T>, T> {
    return new GetAllRequestBuilder<ProductionRouteTransactions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductionRouteTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductionRouteTransactions`.
   */
  create(
    entity: ProductionRouteTransactions<T>
  ): CreateRequestBuilder<ProductionRouteTransactions<T>, T> {
    return new CreateRequestBuilder<ProductionRouteTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductionRouteTransactions` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductionRouteTransactions.dataAreaId}.
   * @param recordId Key property. See {@link ProductionRouteTransactions.recordId}.
   * @param operationNumber Key property. See {@link ProductionRouteTransactions.operationNumber}.
   * @param estimatedAccountingDate Key property. See {@link ProductionRouteTransactions.estimatedAccountingDate}.
   * @returns A request builder for creating requests to retrieve one `ProductionRouteTransactions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>,
    operationNumber: DeserializedType<T, 'Edm.Int32'>,
    estimatedAccountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ProductionRouteTransactions<T>, T> {
    return new GetByKeyRequestBuilder<ProductionRouteTransactions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecordId: recordId,
        OperationNumber: operationNumber,
        EstimatedAccountingDate: estimatedAccountingDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductionRouteTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductionRouteTransactions`.
   */
  update(
    entity: ProductionRouteTransactions<T>
  ): UpdateRequestBuilder<ProductionRouteTransactions<T>, T> {
    return new UpdateRequestBuilder<ProductionRouteTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductionRouteTransactions`.
   * @param dataAreaId Key property. See {@link ProductionRouteTransactions.dataAreaId}.
   * @param recordId Key property. See {@link ProductionRouteTransactions.recordId}.
   * @param operationNumber Key property. See {@link ProductionRouteTransactions.operationNumber}.
   * @param estimatedAccountingDate Key property. See {@link ProductionRouteTransactions.estimatedAccountingDate}.
   * @returns A request builder for creating requests that delete an entity of type `ProductionRouteTransactions`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber,
    operationNumber: number,
    estimatedAccountingDate: Moment
  ): DeleteRequestBuilder<ProductionRouteTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductionRouteTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductionRouteTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: ProductionRouteTransactions<T>
  ): DeleteRequestBuilder<ProductionRouteTransactions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber,
    operationNumber?: number,
    estimatedAccountingDate?: Moment
  ): DeleteRequestBuilder<ProductionRouteTransactions<T>, T> {
    return new DeleteRequestBuilder<ProductionRouteTransactions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductionRouteTransactions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!,
            OperationNumber: operationNumber!,
            EstimatedAccountingDate: estimatedAccountingDate!
          }
    );
  }
}
