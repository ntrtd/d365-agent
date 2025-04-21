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
import { RetailMultibuyDiscountLines } from './RetailMultibuyDiscountLines';

/**
 * Request builder class for operations supported on the {@link RetailMultibuyDiscountLines} entity.
 */
export class RetailMultibuyDiscountLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailMultibuyDiscountLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailMultibuyDiscountLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailMultibuyDiscountLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailMultibuyDiscountLines<T>, T> {
    return new GetAllRequestBuilder<RetailMultibuyDiscountLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailMultibuyDiscountLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailMultibuyDiscountLines`.
   */
  create(
    entity: RetailMultibuyDiscountLines<T>
  ): CreateRequestBuilder<RetailMultibuyDiscountLines<T>, T> {
    return new CreateRequestBuilder<RetailMultibuyDiscountLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailMultibuyDiscountLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailMultibuyDiscountLines.dataAreaId}.
   * @param multibuyId Key property. See {@link RetailMultibuyDiscountLines.multibuyId}.
   * @param qtyLowest Key property. See {@link RetailMultibuyDiscountLines.qtyLowest}.
   * @returns A request builder for creating requests to retrieve one `RetailMultibuyDiscountLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    multibuyId: DeserializedType<T, 'Edm.String'>,
    qtyLowest: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailMultibuyDiscountLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailMultibuyDiscountLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MultibuyId: multibuyId,
        QtyLowest: qtyLowest
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailMultibuyDiscountLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailMultibuyDiscountLines`.
   */
  update(
    entity: RetailMultibuyDiscountLines<T>
  ): UpdateRequestBuilder<RetailMultibuyDiscountLines<T>, T> {
    return new UpdateRequestBuilder<RetailMultibuyDiscountLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailMultibuyDiscountLines`.
   * @param dataAreaId Key property. See {@link RetailMultibuyDiscountLines.dataAreaId}.
   * @param multibuyId Key property. See {@link RetailMultibuyDiscountLines.multibuyId}.
   * @param qtyLowest Key property. See {@link RetailMultibuyDiscountLines.qtyLowest}.
   * @returns A request builder for creating requests that delete an entity of type `RetailMultibuyDiscountLines`.
   */
  delete(
    dataAreaId: string,
    multibuyId: string,
    qtyLowest: BigNumber
  ): DeleteRequestBuilder<RetailMultibuyDiscountLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailMultibuyDiscountLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailMultibuyDiscountLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailMultibuyDiscountLines<T>
  ): DeleteRequestBuilder<RetailMultibuyDiscountLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    multibuyId?: string,
    qtyLowest?: BigNumber
  ): DeleteRequestBuilder<RetailMultibuyDiscountLines<T>, T> {
    return new DeleteRequestBuilder<RetailMultibuyDiscountLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailMultibuyDiscountLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MultibuyId: multibuyId!,
            QtyLowest: qtyLowest!
          }
    );
  }
}
