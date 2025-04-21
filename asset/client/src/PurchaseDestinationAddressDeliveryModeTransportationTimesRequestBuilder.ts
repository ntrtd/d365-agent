/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { PurchaseDestinationAddressDeliveryModeTransportationTimes } from './PurchaseDestinationAddressDeliveryModeTransportationTimes';

/**
 * Request builder class for operations supported on the {@link PurchaseDestinationAddressDeliveryModeTransportationTimes} entity.
 */
export class PurchaseDestinationAddressDeliveryModeTransportationTimesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  PurchaseDestinationAddressDeliveryModeTransportationTimes<T>,
  T
> {
  /**
   * Returns a request builder for querying all `PurchaseDestinationAddressDeliveryModeTransportationTimes` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseDestinationAddressDeliveryModeTransportationTimes` entities.
   */
  getAll(): GetAllRequestBuilder<
    PurchaseDestinationAddressDeliveryModeTransportationTimes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      PurchaseDestinationAddressDeliveryModeTransportationTimes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseDestinationAddressDeliveryModeTransportationTimes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseDestinationAddressDeliveryModeTransportationTimes`.
   */
  create(
    entity: PurchaseDestinationAddressDeliveryModeTransportationTimes<T>
  ): CreateRequestBuilder<
    PurchaseDestinationAddressDeliveryModeTransportationTimes<T>,
    T
  > {
    return new CreateRequestBuilder<
      PurchaseDestinationAddressDeliveryModeTransportationTimes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PurchaseDestinationAddressDeliveryModeTransportationTimes` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.dataAreaId}.
   * @param receivingAddressCountryRegionId Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.receivingAddressCountryRegionId}.
   * @param receivingAddressStateId Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.receivingAddressStateId}.
   * @param receivingAddressCountyId Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.receivingAddressCountyId}.
   * @param receivingAddressZipCode Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.receivingAddressZipCode}.
   * @param shippingAddressCountryRegionId Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.shippingAddressCountryRegionId}.
   * @param shippingAddressStateId Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.shippingAddressStateId}.
   * @param shippingAddressCountyId Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.shippingAddressCountyId}.
   * @param shippingAddressZipCode Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.shippingAddressZipCode}.
   * @param deliveryModeCode Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.deliveryModeCode}.
   * @returns A request builder for creating requests to retrieve one `PurchaseDestinationAddressDeliveryModeTransportationTimes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    receivingAddressCountryRegionId: DeserializedType<T, 'Edm.String'>,
    receivingAddressStateId: DeserializedType<T, 'Edm.String'>,
    receivingAddressCountyId: DeserializedType<T, 'Edm.String'>,
    receivingAddressZipCode: DeserializedType<T, 'Edm.String'>,
    shippingAddressCountryRegionId: DeserializedType<T, 'Edm.String'>,
    shippingAddressStateId: DeserializedType<T, 'Edm.String'>,
    shippingAddressCountyId: DeserializedType<T, 'Edm.String'>,
    shippingAddressZipCode: DeserializedType<T, 'Edm.String'>,
    deliveryModeCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    PurchaseDestinationAddressDeliveryModeTransportationTimes<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      PurchaseDestinationAddressDeliveryModeTransportationTimes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ReceivingAddressCountryRegionId: receivingAddressCountryRegionId,
      ReceivingAddressStateId: receivingAddressStateId,
      ReceivingAddressCountyId: receivingAddressCountyId,
      ReceivingAddressZipCode: receivingAddressZipCode,
      ShippingAddressCountryRegionId: shippingAddressCountryRegionId,
      ShippingAddressStateId: shippingAddressStateId,
      ShippingAddressCountyId: shippingAddressCountyId,
      ShippingAddressZipCode: shippingAddressZipCode,
      DeliveryModeCode: deliveryModeCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseDestinationAddressDeliveryModeTransportationTimes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseDestinationAddressDeliveryModeTransportationTimes`.
   */
  update(
    entity: PurchaseDestinationAddressDeliveryModeTransportationTimes<T>
  ): UpdateRequestBuilder<
    PurchaseDestinationAddressDeliveryModeTransportationTimes<T>,
    T
  > {
    return new UpdateRequestBuilder<
      PurchaseDestinationAddressDeliveryModeTransportationTimes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseDestinationAddressDeliveryModeTransportationTimes`.
   * @param dataAreaId Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.dataAreaId}.
   * @param receivingAddressCountryRegionId Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.receivingAddressCountryRegionId}.
   * @param receivingAddressStateId Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.receivingAddressStateId}.
   * @param receivingAddressCountyId Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.receivingAddressCountyId}.
   * @param receivingAddressZipCode Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.receivingAddressZipCode}.
   * @param shippingAddressCountryRegionId Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.shippingAddressCountryRegionId}.
   * @param shippingAddressStateId Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.shippingAddressStateId}.
   * @param shippingAddressCountyId Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.shippingAddressCountyId}.
   * @param shippingAddressZipCode Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.shippingAddressZipCode}.
   * @param deliveryModeCode Key property. See {@link PurchaseDestinationAddressDeliveryModeTransportationTimes.deliveryModeCode}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseDestinationAddressDeliveryModeTransportationTimes`.
   */
  delete(
    dataAreaId: string,
    receivingAddressCountryRegionId: string,
    receivingAddressStateId: string,
    receivingAddressCountyId: string,
    receivingAddressZipCode: string,
    shippingAddressCountryRegionId: string,
    shippingAddressStateId: string,
    shippingAddressCountyId: string,
    shippingAddressZipCode: string,
    deliveryModeCode: string
  ): DeleteRequestBuilder<
    PurchaseDestinationAddressDeliveryModeTransportationTimes<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseDestinationAddressDeliveryModeTransportationTimes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseDestinationAddressDeliveryModeTransportationTimes` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseDestinationAddressDeliveryModeTransportationTimes<T>
  ): DeleteRequestBuilder<
    PurchaseDestinationAddressDeliveryModeTransportationTimes<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    receivingAddressCountryRegionId?: string,
    receivingAddressStateId?: string,
    receivingAddressCountyId?: string,
    receivingAddressZipCode?: string,
    shippingAddressCountryRegionId?: string,
    shippingAddressStateId?: string,
    shippingAddressCountyId?: string,
    shippingAddressZipCode?: string,
    deliveryModeCode?: string
  ): DeleteRequestBuilder<
    PurchaseDestinationAddressDeliveryModeTransportationTimes<T>,
    T
  > {
    return new DeleteRequestBuilder<
      PurchaseDestinationAddressDeliveryModeTransportationTimes<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      PurchaseDestinationAddressDeliveryModeTransportationTimes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReceivingAddressCountryRegionId: receivingAddressCountryRegionId!,
            ReceivingAddressStateId: receivingAddressStateId!,
            ReceivingAddressCountyId: receivingAddressCountyId!,
            ReceivingAddressZipCode: receivingAddressZipCode!,
            ShippingAddressCountryRegionId: shippingAddressCountryRegionId!,
            ShippingAddressStateId: shippingAddressStateId!,
            ShippingAddressCountyId: shippingAddressCountyId!,
            ShippingAddressZipCode: shippingAddressZipCode!,
            DeliveryModeCode: deliveryModeCode!
          }
    );
  }
}
