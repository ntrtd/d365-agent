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
import { OverrideHistories } from './OverrideHistories';

/**
 * Request builder class for operations supported on the {@link OverrideHistories} entity.
 */
export class OverrideHistoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OverrideHistories<T>, T> {
  /**
   * Returns a request builder for querying all `OverrideHistories` entities.
   * @returns A request builder for creating requests to retrieve all `OverrideHistories` entities.
   */
  getAll(): GetAllRequestBuilder<OverrideHistories<T>, T> {
    return new GetAllRequestBuilder<OverrideHistories<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OverrideHistories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OverrideHistories`.
   */
  create(
    entity: OverrideHistories<T>
  ): CreateRequestBuilder<OverrideHistories<T>, T> {
    return new CreateRequestBuilder<OverrideHistories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OverrideHistories` entity based on its keys.
   * @param dataAreaId Key property. See {@link OverrideHistories.dataAreaId}.
   * @param salesOrderId Key property. See {@link OverrideHistories.salesOrderId}.
   * @param transactionId Key property. See {@link OverrideHistories.transactionId}.
   * @param chargeCode Key property. See {@link OverrideHistories.chargeCode}.
   * @param overrideTime Key property. See {@link OverrideHistories.overrideTime}.
   * @returns A request builder for creating requests to retrieve one `OverrideHistories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    chargeCode: DeserializedType<T, 'Edm.String'>,
    overrideTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<OverrideHistories<T>, T> {
    return new GetByKeyRequestBuilder<OverrideHistories<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SalesOrderId: salesOrderId,
      TransactionId: transactionId,
      ChargeCode: chargeCode,
      OverrideTime: overrideTime
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OverrideHistories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OverrideHistories`.
   */
  update(
    entity: OverrideHistories<T>
  ): UpdateRequestBuilder<OverrideHistories<T>, T> {
    return new UpdateRequestBuilder<OverrideHistories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OverrideHistories`.
   * @param dataAreaId Key property. See {@link OverrideHistories.dataAreaId}.
   * @param salesOrderId Key property. See {@link OverrideHistories.salesOrderId}.
   * @param transactionId Key property. See {@link OverrideHistories.transactionId}.
   * @param chargeCode Key property. See {@link OverrideHistories.chargeCode}.
   * @param overrideTime Key property. See {@link OverrideHistories.overrideTime}.
   * @returns A request builder for creating requests that delete an entity of type `OverrideHistories`.
   */
  delete(
    dataAreaId: string,
    salesOrderId: string,
    transactionId: string,
    chargeCode: string,
    overrideTime: Moment
  ): DeleteRequestBuilder<OverrideHistories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OverrideHistories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OverrideHistories` by taking the entity as a parameter.
   */
  delete(
    entity: OverrideHistories<T>
  ): DeleteRequestBuilder<OverrideHistories<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderId?: string,
    transactionId?: string,
    chargeCode?: string,
    overrideTime?: Moment
  ): DeleteRequestBuilder<OverrideHistories<T>, T> {
    return new DeleteRequestBuilder<OverrideHistories<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OverrideHistories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderId: salesOrderId!,
            TransactionId: transactionId!,
            ChargeCode: chargeCode!,
            OverrideTime: overrideTime!
          }
    );
  }
}
