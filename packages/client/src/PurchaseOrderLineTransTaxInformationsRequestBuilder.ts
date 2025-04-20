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
import { PurchaseOrderLineTransTaxInformations } from './PurchaseOrderLineTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderLineTransTaxInformations} entity.
 */
export class PurchaseOrderLineTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderLineTransTaxInformations<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderLineTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderLineTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderLineTransTaxInformations<T>, T> {
    return new GetAllRequestBuilder<
      PurchaseOrderLineTransTaxInformations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderLineTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderLineTransTaxInformations`.
   */
  create(
    entity: PurchaseOrderLineTransTaxInformations<T>
  ): CreateRequestBuilder<PurchaseOrderLineTransTaxInformations<T>, T> {
    return new CreateRequestBuilder<
      PurchaseOrderLineTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderLineTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseOrderLineTransTaxInformations.dataAreaId}.
   * @param purchaseOrderLineNumber Key property. See {@link PurchaseOrderLineTransTaxInformations.purchaseOrderLineNumber}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderLineTransTaxInformations.purchaseOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderLineTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseOrderLineTransTaxInformations<T>, T> {
    return new GetByKeyRequestBuilder<
      PurchaseOrderLineTransTaxInformations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      PurchaseOrderLineNumber: purchaseOrderLineNumber,
      PurchaseOrderNumber: purchaseOrderNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderLineTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderLineTransTaxInformations`.
   */
  update(
    entity: PurchaseOrderLineTransTaxInformations<T>
  ): UpdateRequestBuilder<PurchaseOrderLineTransTaxInformations<T>, T> {
    return new UpdateRequestBuilder<
      PurchaseOrderLineTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderLineTransTaxInformations`.
   * @param dataAreaId Key property. See {@link PurchaseOrderLineTransTaxInformations.dataAreaId}.
   * @param purchaseOrderLineNumber Key property. See {@link PurchaseOrderLineTransTaxInformations.purchaseOrderLineNumber}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderLineTransTaxInformations.purchaseOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderLineTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    purchaseOrderLineNumber: BigNumber,
    purchaseOrderNumber: string
  ): DeleteRequestBuilder<PurchaseOrderLineTransTaxInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderLineTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderLineTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderLineTransTaxInformations<T>
  ): DeleteRequestBuilder<PurchaseOrderLineTransTaxInformations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseOrderLineNumber?: BigNumber,
    purchaseOrderNumber?: string
  ): DeleteRequestBuilder<PurchaseOrderLineTransTaxInformations<T>, T> {
    return new DeleteRequestBuilder<
      PurchaseOrderLineTransTaxInformations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseOrderLineTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseOrderLineNumber: purchaseOrderLineNumber!,
            PurchaseOrderNumber: purchaseOrderNumber!
          }
    );
  }
}
