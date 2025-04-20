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
import { PurchaseOrderLineChargesV2 } from './PurchaseOrderLineChargesV2';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderLineChargesV2} entity.
 */
export class PurchaseOrderLineChargesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderLineChargesV2<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderLineChargesV2` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderLineChargesV2` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderLineChargesV2<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderLineChargesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderLineChargesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderLineChargesV2`.
   */
  create(
    entity: PurchaseOrderLineChargesV2<T>
  ): CreateRequestBuilder<PurchaseOrderLineChargesV2<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderLineChargesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderLineChargesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseOrderLineChargesV2.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderLineChargesV2.purchaseOrderNumber}.
   * @param purchaseOrderLineNumber Key property. See {@link PurchaseOrderLineChargesV2.purchaseOrderLineNumber}.
   * @param chargeLineNumber Key property. See {@link PurchaseOrderLineChargesV2.chargeLineNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderLineChargesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>,
    purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>,
    chargeLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PurchaseOrderLineChargesV2<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderLineChargesV2<T>, T>(
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
   * Returns a request builder for updating an entity of type `PurchaseOrderLineChargesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderLineChargesV2`.
   */
  update(
    entity: PurchaseOrderLineChargesV2<T>
  ): UpdateRequestBuilder<PurchaseOrderLineChargesV2<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderLineChargesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderLineChargesV2`.
   * @param dataAreaId Key property. See {@link PurchaseOrderLineChargesV2.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderLineChargesV2.purchaseOrderNumber}.
   * @param purchaseOrderLineNumber Key property. See {@link PurchaseOrderLineChargesV2.purchaseOrderLineNumber}.
   * @param chargeLineNumber Key property. See {@link PurchaseOrderLineChargesV2.chargeLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderLineChargesV2`.
   */
  delete(
    dataAreaId: string,
    purchaseOrderNumber: string,
    purchaseOrderLineNumber: BigNumber,
    chargeLineNumber: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderLineChargesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderLineChargesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderLineChargesV2` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderLineChargesV2<T>
  ): DeleteRequestBuilder<PurchaseOrderLineChargesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseOrderNumber?: string,
    purchaseOrderLineNumber?: BigNumber,
    chargeLineNumber?: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderLineChargesV2<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderLineChargesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseOrderLineChargesV2
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
