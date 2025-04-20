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
import { FreeItemDiscountTiers } from './FreeItemDiscountTiers';

/**
 * Request builder class for operations supported on the {@link FreeItemDiscountTiers} entity.
 */
export class FreeItemDiscountTiersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FreeItemDiscountTiers<T>, T> {
  /**
   * Returns a request builder for querying all `FreeItemDiscountTiers` entities.
   * @returns A request builder for creating requests to retrieve all `FreeItemDiscountTiers` entities.
   */
  getAll(): GetAllRequestBuilder<FreeItemDiscountTiers<T>, T> {
    return new GetAllRequestBuilder<FreeItemDiscountTiers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FreeItemDiscountTiers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FreeItemDiscountTiers`.
   */
  create(
    entity: FreeItemDiscountTiers<T>
  ): CreateRequestBuilder<FreeItemDiscountTiers<T>, T> {
    return new CreateRequestBuilder<FreeItemDiscountTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FreeItemDiscountTiers` entity based on its keys.
   * @param dataAreaId Key property. See {@link FreeItemDiscountTiers.dataAreaId}.
   * @param freeItemId Key property. See {@link FreeItemDiscountTiers.freeItemId}.
   * @param qtyOrAmountThreshold Key property. See {@link FreeItemDiscountTiers.qtyOrAmountThreshold}.
   * @returns A request builder for creating requests to retrieve one `FreeItemDiscountTiers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    freeItemId: DeserializedType<T, 'Edm.String'>,
    qtyOrAmountThreshold: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<FreeItemDiscountTiers<T>, T> {
    return new GetByKeyRequestBuilder<FreeItemDiscountTiers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FreeItemId: freeItemId,
        QtyOrAmountThreshold: qtyOrAmountThreshold
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FreeItemDiscountTiers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FreeItemDiscountTiers`.
   */
  update(
    entity: FreeItemDiscountTiers<T>
  ): UpdateRequestBuilder<FreeItemDiscountTiers<T>, T> {
    return new UpdateRequestBuilder<FreeItemDiscountTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FreeItemDiscountTiers`.
   * @param dataAreaId Key property. See {@link FreeItemDiscountTiers.dataAreaId}.
   * @param freeItemId Key property. See {@link FreeItemDiscountTiers.freeItemId}.
   * @param qtyOrAmountThreshold Key property. See {@link FreeItemDiscountTiers.qtyOrAmountThreshold}.
   * @returns A request builder for creating requests that delete an entity of type `FreeItemDiscountTiers`.
   */
  delete(
    dataAreaId: string,
    freeItemId: string,
    qtyOrAmountThreshold: BigNumber
  ): DeleteRequestBuilder<FreeItemDiscountTiers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FreeItemDiscountTiers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FreeItemDiscountTiers` by taking the entity as a parameter.
   */
  delete(
    entity: FreeItemDiscountTiers<T>
  ): DeleteRequestBuilder<FreeItemDiscountTiers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    freeItemId?: string,
    qtyOrAmountThreshold?: BigNumber
  ): DeleteRequestBuilder<FreeItemDiscountTiers<T>, T> {
    return new DeleteRequestBuilder<FreeItemDiscountTiers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FreeItemDiscountTiers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FreeItemId: freeItemId!,
            QtyOrAmountThreshold: qtyOrAmountThreshold!
          }
    );
  }
}
