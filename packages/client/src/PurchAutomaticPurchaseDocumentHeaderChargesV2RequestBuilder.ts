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
import { PurchAutomaticPurchaseDocumentHeaderChargesV2 } from './PurchAutomaticPurchaseDocumentHeaderChargesV2';

/**
 * Request builder class for operations supported on the {@link PurchAutomaticPurchaseDocumentHeaderChargesV2} entity.
 */
export class PurchAutomaticPurchaseDocumentHeaderChargesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchAutomaticPurchaseDocumentHeaderChargesV2<T>, T> {
  /**
   * Returns a request builder for querying all `PurchAutomaticPurchaseDocumentHeaderChargesV2` entities.
   * @returns A request builder for creating requests to retrieve all `PurchAutomaticPurchaseDocumentHeaderChargesV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    PurchAutomaticPurchaseDocumentHeaderChargesV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchAutomaticPurchaseDocumentHeaderChargesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchAutomaticPurchaseDocumentHeaderChargesV2`.
   */
  create(
    entity: PurchAutomaticPurchaseDocumentHeaderChargesV2<T>
  ): CreateRequestBuilder<PurchAutomaticPurchaseDocumentHeaderChargesV2<T>, T> {
    return new CreateRequestBuilder<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PurchAutomaticPurchaseDocumentHeaderChargesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchAutomaticPurchaseDocumentHeaderChargesV2.dataAreaId}.
   * @param chargingVendorAccountNumber Key property. See {@link PurchAutomaticPurchaseDocumentHeaderChargesV2.chargingVendorAccountNumber}.
   * @param chargingChargeVendorGroupId Key property. See {@link PurchAutomaticPurchaseDocumentHeaderChargesV2.chargingChargeVendorGroupId}.
   * @param chargingDeliveryModeCode Key property. See {@link PurchAutomaticPurchaseDocumentHeaderChargesV2.chargingDeliveryModeCode}.
   * @param chargingChargeDeliveryGroupId Key property. See {@link PurchAutomaticPurchaseDocumentHeaderChargesV2.chargingChargeDeliveryGroupId}.
   * @param lineNumber Key property. See {@link PurchAutomaticPurchaseDocumentHeaderChargesV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchAutomaticPurchaseDocumentHeaderChargesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    chargingVendorAccountNumber: DeserializedType<T, 'Edm.String'>,
    chargingChargeVendorGroupId: DeserializedType<T, 'Edm.String'>,
    chargingDeliveryModeCode: DeserializedType<T, 'Edm.String'>,
    chargingChargeDeliveryGroupId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    PurchAutomaticPurchaseDocumentHeaderChargesV2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ChargingVendorAccountNumber: chargingVendorAccountNumber,
      ChargingChargeVendorGroupId: chargingChargeVendorGroupId,
      ChargingDeliveryModeCode: chargingDeliveryModeCode,
      ChargingChargeDeliveryGroupId: chargingChargeDeliveryGroupId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PurchAutomaticPurchaseDocumentHeaderChargesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchAutomaticPurchaseDocumentHeaderChargesV2`.
   */
  update(
    entity: PurchAutomaticPurchaseDocumentHeaderChargesV2<T>
  ): UpdateRequestBuilder<PurchAutomaticPurchaseDocumentHeaderChargesV2<T>, T> {
    return new UpdateRequestBuilder<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchAutomaticPurchaseDocumentHeaderChargesV2`.
   * @param dataAreaId Key property. See {@link PurchAutomaticPurchaseDocumentHeaderChargesV2.dataAreaId}.
   * @param chargingVendorAccountNumber Key property. See {@link PurchAutomaticPurchaseDocumentHeaderChargesV2.chargingVendorAccountNumber}.
   * @param chargingChargeVendorGroupId Key property. See {@link PurchAutomaticPurchaseDocumentHeaderChargesV2.chargingChargeVendorGroupId}.
   * @param chargingDeliveryModeCode Key property. See {@link PurchAutomaticPurchaseDocumentHeaderChargesV2.chargingDeliveryModeCode}.
   * @param chargingChargeDeliveryGroupId Key property. See {@link PurchAutomaticPurchaseDocumentHeaderChargesV2.chargingChargeDeliveryGroupId}.
   * @param lineNumber Key property. See {@link PurchAutomaticPurchaseDocumentHeaderChargesV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchAutomaticPurchaseDocumentHeaderChargesV2`.
   */
  delete(
    dataAreaId: string,
    chargingVendorAccountNumber: string,
    chargingChargeVendorGroupId: string,
    chargingDeliveryModeCode: string,
    chargingChargeDeliveryGroupId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PurchAutomaticPurchaseDocumentHeaderChargesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchAutomaticPurchaseDocumentHeaderChargesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchAutomaticPurchaseDocumentHeaderChargesV2` by taking the entity as a parameter.
   */
  delete(
    entity: PurchAutomaticPurchaseDocumentHeaderChargesV2<T>
  ): DeleteRequestBuilder<PurchAutomaticPurchaseDocumentHeaderChargesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    chargingVendorAccountNumber?: string,
    chargingChargeVendorGroupId?: string,
    chargingDeliveryModeCode?: string,
    chargingChargeDeliveryGroupId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PurchAutomaticPurchaseDocumentHeaderChargesV2<T>, T> {
    return new DeleteRequestBuilder<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      PurchAutomaticPurchaseDocumentHeaderChargesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ChargingVendorAccountNumber: chargingVendorAccountNumber!,
            ChargingChargeVendorGroupId: chargingChargeVendorGroupId!,
            ChargingDeliveryModeCode: chargingDeliveryModeCode!,
            ChargingChargeDeliveryGroupId: chargingChargeDeliveryGroupId!,
            LineNumber: lineNumber!
          }
    );
  }
}
