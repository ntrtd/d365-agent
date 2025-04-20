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
import { PurchaseOrderHeaderCharges } from './PurchaseOrderHeaderCharges';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderHeaderCharges} entity.
 */
export class PurchaseOrderHeaderChargesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderHeaderCharges<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderHeaderCharges` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderHeaderCharges` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderHeaderCharges<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderHeaderCharges<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderHeaderCharges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderHeaderCharges`.
   */
  create(
    entity: PurchaseOrderHeaderCharges<T>
  ): CreateRequestBuilder<PurchaseOrderHeaderCharges<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderHeaderCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderHeaderCharges` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseOrderHeaderCharges.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderHeaderCharges.purchaseOrderNumber}.
   * @param chargeLineNumber Key property. See {@link PurchaseOrderHeaderCharges.chargeLineNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderHeaderCharges` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>,
    chargeLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PurchaseOrderHeaderCharges<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderHeaderCharges<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseOrderNumber: purchaseOrderNumber,
        ChargeLineNumber: chargeLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderHeaderCharges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderHeaderCharges`.
   */
  update(
    entity: PurchaseOrderHeaderCharges<T>
  ): UpdateRequestBuilder<PurchaseOrderHeaderCharges<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderHeaderCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderHeaderCharges`.
   * @param dataAreaId Key property. See {@link PurchaseOrderHeaderCharges.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderHeaderCharges.purchaseOrderNumber}.
   * @param chargeLineNumber Key property. See {@link PurchaseOrderHeaderCharges.chargeLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderHeaderCharges`.
   */
  delete(
    dataAreaId: string,
    purchaseOrderNumber: string,
    chargeLineNumber: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderHeaderCharges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderHeaderCharges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderHeaderCharges` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderHeaderCharges<T>
  ): DeleteRequestBuilder<PurchaseOrderHeaderCharges<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseOrderNumber?: string,
    chargeLineNumber?: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderHeaderCharges<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderHeaderCharges<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseOrderHeaderCharges
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseOrderNumber: purchaseOrderNumber!,
            ChargeLineNumber: chargeLineNumber!
          }
    );
  }
}
