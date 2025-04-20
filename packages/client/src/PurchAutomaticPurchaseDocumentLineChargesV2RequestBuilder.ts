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
import { PurchAutomaticPurchaseDocumentLineChargesV2 } from './PurchAutomaticPurchaseDocumentLineChargesV2';

/**
 * Request builder class for operations supported on the {@link PurchAutomaticPurchaseDocumentLineChargesV2} entity.
 */
export class PurchAutomaticPurchaseDocumentLineChargesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchAutomaticPurchaseDocumentLineChargesV2<T>, T> {
  /**
   * Returns a request builder for querying all `PurchAutomaticPurchaseDocumentLineChargesV2` entities.
   * @returns A request builder for creating requests to retrieve all `PurchAutomaticPurchaseDocumentLineChargesV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    PurchAutomaticPurchaseDocumentLineChargesV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      PurchAutomaticPurchaseDocumentLineChargesV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchAutomaticPurchaseDocumentLineChargesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchAutomaticPurchaseDocumentLineChargesV2`.
   */
  create(
    entity: PurchAutomaticPurchaseDocumentLineChargesV2<T>
  ): CreateRequestBuilder<PurchAutomaticPurchaseDocumentLineChargesV2<T>, T> {
    return new CreateRequestBuilder<
      PurchAutomaticPurchaseDocumentLineChargesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PurchAutomaticPurchaseDocumentLineChargesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchAutomaticPurchaseDocumentLineChargesV2.dataAreaId}.
   * @param chargingVendorAccountNumber Key property. See {@link PurchAutomaticPurchaseDocumentLineChargesV2.chargingVendorAccountNumber}.
   * @param chargingChargeVendorGroupId Key property. See {@link PurchAutomaticPurchaseDocumentLineChargesV2.chargingChargeVendorGroupId}.
   * @param chargingItemNumber Key property. See {@link PurchAutomaticPurchaseDocumentLineChargesV2.chargingItemNumber}.
   * @param chargingChargeProductGroupId Key property. See {@link PurchAutomaticPurchaseDocumentLineChargesV2.chargingChargeProductGroupId}.
   * @param chargingDeliveryModeCode Key property. See {@link PurchAutomaticPurchaseDocumentLineChargesV2.chargingDeliveryModeCode}.
   * @param chargingChargeDeliveryGroupId Key property. See {@link PurchAutomaticPurchaseDocumentLineChargesV2.chargingChargeDeliveryGroupId}.
   * @param lineNumber Key property. See {@link PurchAutomaticPurchaseDocumentLineChargesV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchAutomaticPurchaseDocumentLineChargesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    chargingVendorAccountNumber: DeserializedType<T, 'Edm.String'>,
    chargingChargeVendorGroupId: DeserializedType<T, 'Edm.String'>,
    chargingItemNumber: DeserializedType<T, 'Edm.String'>,
    chargingChargeProductGroupId: DeserializedType<T, 'Edm.String'>,
    chargingDeliveryModeCode: DeserializedType<T, 'Edm.String'>,
    chargingChargeDeliveryGroupId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PurchAutomaticPurchaseDocumentLineChargesV2<T>, T> {
    return new GetByKeyRequestBuilder<
      PurchAutomaticPurchaseDocumentLineChargesV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ChargingVendorAccountNumber: chargingVendorAccountNumber,
      ChargingChargeVendorGroupId: chargingChargeVendorGroupId,
      ChargingItemNumber: chargingItemNumber,
      ChargingChargeProductGroupId: chargingChargeProductGroupId,
      ChargingDeliveryModeCode: chargingDeliveryModeCode,
      ChargingChargeDeliveryGroupId: chargingChargeDeliveryGroupId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PurchAutomaticPurchaseDocumentLineChargesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchAutomaticPurchaseDocumentLineChargesV2`.
   */
  update(
    entity: PurchAutomaticPurchaseDocumentLineChargesV2<T>
  ): UpdateRequestBuilder<PurchAutomaticPurchaseDocumentLineChargesV2<T>, T> {
    return new UpdateRequestBuilder<
      PurchAutomaticPurchaseDocumentLineChargesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchAutomaticPurchaseDocumentLineChargesV2`.
   * @param dataAreaId Key property. See {@link PurchAutomaticPurchaseDocumentLineChargesV2.dataAreaId}.
   * @param chargingVendorAccountNumber Key property. See {@link PurchAutomaticPurchaseDocumentLineChargesV2.chargingVendorAccountNumber}.
   * @param chargingChargeVendorGroupId Key property. See {@link PurchAutomaticPurchaseDocumentLineChargesV2.chargingChargeVendorGroupId}.
   * @param chargingItemNumber Key property. See {@link PurchAutomaticPurchaseDocumentLineChargesV2.chargingItemNumber}.
   * @param chargingChargeProductGroupId Key property. See {@link PurchAutomaticPurchaseDocumentLineChargesV2.chargingChargeProductGroupId}.
   * @param chargingDeliveryModeCode Key property. See {@link PurchAutomaticPurchaseDocumentLineChargesV2.chargingDeliveryModeCode}.
   * @param chargingChargeDeliveryGroupId Key property. See {@link PurchAutomaticPurchaseDocumentLineChargesV2.chargingChargeDeliveryGroupId}.
   * @param lineNumber Key property. See {@link PurchAutomaticPurchaseDocumentLineChargesV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchAutomaticPurchaseDocumentLineChargesV2`.
   */
  delete(
    dataAreaId: string,
    chargingVendorAccountNumber: string,
    chargingChargeVendorGroupId: string,
    chargingItemNumber: string,
    chargingChargeProductGroupId: string,
    chargingDeliveryModeCode: string,
    chargingChargeDeliveryGroupId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PurchAutomaticPurchaseDocumentLineChargesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchAutomaticPurchaseDocumentLineChargesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchAutomaticPurchaseDocumentLineChargesV2` by taking the entity as a parameter.
   */
  delete(
    entity: PurchAutomaticPurchaseDocumentLineChargesV2<T>
  ): DeleteRequestBuilder<PurchAutomaticPurchaseDocumentLineChargesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    chargingVendorAccountNumber?: string,
    chargingChargeVendorGroupId?: string,
    chargingItemNumber?: string,
    chargingChargeProductGroupId?: string,
    chargingDeliveryModeCode?: string,
    chargingChargeDeliveryGroupId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PurchAutomaticPurchaseDocumentLineChargesV2<T>, T> {
    return new DeleteRequestBuilder<
      PurchAutomaticPurchaseDocumentLineChargesV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchAutomaticPurchaseDocumentLineChargesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ChargingVendorAccountNumber: chargingVendorAccountNumber!,
            ChargingChargeVendorGroupId: chargingChargeVendorGroupId!,
            ChargingItemNumber: chargingItemNumber!,
            ChargingChargeProductGroupId: chargingChargeProductGroupId!,
            ChargingDeliveryModeCode: chargingDeliveryModeCode!,
            ChargingChargeDeliveryGroupId: chargingChargeDeliveryGroupId!,
            LineNumber: lineNumber!
          }
    );
  }
}
