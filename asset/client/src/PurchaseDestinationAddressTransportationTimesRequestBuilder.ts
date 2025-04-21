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
import { PurchaseDestinationAddressTransportationTimes } from './PurchaseDestinationAddressTransportationTimes';

/**
 * Request builder class for operations supported on the {@link PurchaseDestinationAddressTransportationTimes} entity.
 */
export class PurchaseDestinationAddressTransportationTimesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseDestinationAddressTransportationTimes<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseDestinationAddressTransportationTimes` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseDestinationAddressTransportationTimes` entities.
   */
  getAll(): GetAllRequestBuilder<
    PurchaseDestinationAddressTransportationTimes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      PurchaseDestinationAddressTransportationTimes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseDestinationAddressTransportationTimes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseDestinationAddressTransportationTimes`.
   */
  create(
    entity: PurchaseDestinationAddressTransportationTimes<T>
  ): CreateRequestBuilder<PurchaseDestinationAddressTransportationTimes<T>, T> {
    return new CreateRequestBuilder<
      PurchaseDestinationAddressTransportationTimes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PurchaseDestinationAddressTransportationTimes` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseDestinationAddressTransportationTimes.dataAreaId}.
   * @param receivingAddressCountryRegionId Key property. See {@link PurchaseDestinationAddressTransportationTimes.receivingAddressCountryRegionId}.
   * @param receivingAddressStateId Key property. See {@link PurchaseDestinationAddressTransportationTimes.receivingAddressStateId}.
   * @param receivingAddressCountyId Key property. See {@link PurchaseDestinationAddressTransportationTimes.receivingAddressCountyId}.
   * @param receivingAddressZipCode Key property. See {@link PurchaseDestinationAddressTransportationTimes.receivingAddressZipCode}.
   * @param shippingAddressCountryRegionId Key property. See {@link PurchaseDestinationAddressTransportationTimes.shippingAddressCountryRegionId}.
   * @param shippingAddressStateId Key property. See {@link PurchaseDestinationAddressTransportationTimes.shippingAddressStateId}.
   * @param shippingAddressCountyId Key property. See {@link PurchaseDestinationAddressTransportationTimes.shippingAddressCountyId}.
   * @param shippingAddressZipCode Key property. See {@link PurchaseDestinationAddressTransportationTimes.shippingAddressZipCode}.
   * @returns A request builder for creating requests to retrieve one `PurchaseDestinationAddressTransportationTimes` entity based on its keys.
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
    shippingAddressZipCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    PurchaseDestinationAddressTransportationTimes<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      PurchaseDestinationAddressTransportationTimes<T>,
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
      ShippingAddressZipCode: shippingAddressZipCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseDestinationAddressTransportationTimes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseDestinationAddressTransportationTimes`.
   */
  update(
    entity: PurchaseDestinationAddressTransportationTimes<T>
  ): UpdateRequestBuilder<PurchaseDestinationAddressTransportationTimes<T>, T> {
    return new UpdateRequestBuilder<
      PurchaseDestinationAddressTransportationTimes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseDestinationAddressTransportationTimes`.
   * @param dataAreaId Key property. See {@link PurchaseDestinationAddressTransportationTimes.dataAreaId}.
   * @param receivingAddressCountryRegionId Key property. See {@link PurchaseDestinationAddressTransportationTimes.receivingAddressCountryRegionId}.
   * @param receivingAddressStateId Key property. See {@link PurchaseDestinationAddressTransportationTimes.receivingAddressStateId}.
   * @param receivingAddressCountyId Key property. See {@link PurchaseDestinationAddressTransportationTimes.receivingAddressCountyId}.
   * @param receivingAddressZipCode Key property. See {@link PurchaseDestinationAddressTransportationTimes.receivingAddressZipCode}.
   * @param shippingAddressCountryRegionId Key property. See {@link PurchaseDestinationAddressTransportationTimes.shippingAddressCountryRegionId}.
   * @param shippingAddressStateId Key property. See {@link PurchaseDestinationAddressTransportationTimes.shippingAddressStateId}.
   * @param shippingAddressCountyId Key property. See {@link PurchaseDestinationAddressTransportationTimes.shippingAddressCountyId}.
   * @param shippingAddressZipCode Key property. See {@link PurchaseDestinationAddressTransportationTimes.shippingAddressZipCode}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseDestinationAddressTransportationTimes`.
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
    shippingAddressZipCode: string
  ): DeleteRequestBuilder<PurchaseDestinationAddressTransportationTimes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseDestinationAddressTransportationTimes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseDestinationAddressTransportationTimes` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseDestinationAddressTransportationTimes<T>
  ): DeleteRequestBuilder<PurchaseDestinationAddressTransportationTimes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    receivingAddressCountryRegionId?: string,
    receivingAddressStateId?: string,
    receivingAddressCountyId?: string,
    receivingAddressZipCode?: string,
    shippingAddressCountryRegionId?: string,
    shippingAddressStateId?: string,
    shippingAddressCountyId?: string,
    shippingAddressZipCode?: string
  ): DeleteRequestBuilder<PurchaseDestinationAddressTransportationTimes<T>, T> {
    return new DeleteRequestBuilder<
      PurchaseDestinationAddressTransportationTimes<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      PurchaseDestinationAddressTransportationTimes
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
            ShippingAddressZipCode: shippingAddressZipCode!
          }
    );
  }
}
