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
import { PurchaseOrderLineCharges } from './PurchaseOrderLineCharges';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderLineCharges} entity.
 */
export class PurchaseOrderLineChargesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderLineCharges<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderLineCharges` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderLineCharges` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderLineCharges<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderLineCharges<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderLineCharges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderLineCharges`.
   */
  create(
    entity: PurchaseOrderLineCharges<T>
  ): CreateRequestBuilder<PurchaseOrderLineCharges<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderLineCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderLineCharges` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseOrderLineCharges.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderLineCharges.purchaseOrderNumber}.
   * @param purchaseOrderLineNumber Key property. See {@link PurchaseOrderLineCharges.purchaseOrderLineNumber}.
   * @param chargeLineNumber Key property. See {@link PurchaseOrderLineCharges.chargeLineNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderLineCharges` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>,
    purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>,
    chargeLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PurchaseOrderLineCharges<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderLineCharges<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseOrderNumber: purchaseOrderNumber,
        PurchaseOrderLineNumber: purchaseOrderLineNumber,
        ChargeLineNumber: chargeLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderLineCharges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderLineCharges`.
   */
  update(
    entity: PurchaseOrderLineCharges<T>
  ): UpdateRequestBuilder<PurchaseOrderLineCharges<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderLineCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderLineCharges`.
   * @param dataAreaId Key property. See {@link PurchaseOrderLineCharges.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderLineCharges.purchaseOrderNumber}.
   * @param purchaseOrderLineNumber Key property. See {@link PurchaseOrderLineCharges.purchaseOrderLineNumber}.
   * @param chargeLineNumber Key property. See {@link PurchaseOrderLineCharges.chargeLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderLineCharges`.
   */
  delete(
    dataAreaId: string,
    purchaseOrderNumber: string,
    purchaseOrderLineNumber: BigNumber,
    chargeLineNumber: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderLineCharges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderLineCharges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderLineCharges` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderLineCharges<T>
  ): DeleteRequestBuilder<PurchaseOrderLineCharges<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseOrderNumber?: string,
    purchaseOrderLineNumber?: BigNumber,
    chargeLineNumber?: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderLineCharges<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderLineCharges<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseOrderLineCharges
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseOrderNumber: purchaseOrderNumber!,
            PurchaseOrderLineNumber: purchaseOrderLineNumber!,
            ChargeLineNumber: chargeLineNumber!
          }
    );
  }
}
