/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { PurchaseOrderLineV2ExistAddrReadOnly } from './PurchaseOrderLineV2ExistAddrReadOnly';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderLineV2ExistAddrReadOnly} entity.
 */
export class PurchaseOrderLineV2ExistAddrReadOnlyRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderLineV2ExistAddrReadOnly<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderLineV2ExistAddrReadOnly` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderLineV2ExistAddrReadOnly` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderLineV2ExistAddrReadOnly<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderLineV2ExistAddrReadOnly<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderLineV2ExistAddrReadOnly` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderLineV2ExistAddrReadOnly`.
   */
  create(
    entity: PurchaseOrderLineV2ExistAddrReadOnly<T>
  ): CreateRequestBuilder<PurchaseOrderLineV2ExistAddrReadOnly<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderLineV2ExistAddrReadOnly<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderLineV2ExistAddrReadOnly` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseOrderLineV2ExistAddrReadOnly.dataAreaId}.
   * @param deliveryAddressLocationId Key property. See {@link PurchaseOrderLineV2ExistAddrReadOnly.deliveryAddressLocationId}.
   * @param deliveryValidFrom Key property. See {@link PurchaseOrderLineV2ExistAddrReadOnly.deliveryValidFrom}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderLineV2ExistAddrReadOnly` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    deliveryAddressLocationId: DeserializedType<T, 'Edm.String'>,
    deliveryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PurchaseOrderLineV2ExistAddrReadOnly<T>, T> {
    return new GetByKeyRequestBuilder<
      PurchaseOrderLineV2ExistAddrReadOnly<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DeliveryAddressLocationId: deliveryAddressLocationId,
      DeliveryValidFrom: deliveryValidFrom
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderLineV2ExistAddrReadOnly`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderLineV2ExistAddrReadOnly`.
   */
  update(
    entity: PurchaseOrderLineV2ExistAddrReadOnly<T>
  ): UpdateRequestBuilder<PurchaseOrderLineV2ExistAddrReadOnly<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderLineV2ExistAddrReadOnly<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderLineV2ExistAddrReadOnly`.
   * @param dataAreaId Key property. See {@link PurchaseOrderLineV2ExistAddrReadOnly.dataAreaId}.
   * @param deliveryAddressLocationId Key property. See {@link PurchaseOrderLineV2ExistAddrReadOnly.deliveryAddressLocationId}.
   * @param deliveryValidFrom Key property. See {@link PurchaseOrderLineV2ExistAddrReadOnly.deliveryValidFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderLineV2ExistAddrReadOnly`.
   */
  delete(
    dataAreaId: string,
    deliveryAddressLocationId: string,
    deliveryValidFrom: Moment
  ): DeleteRequestBuilder<PurchaseOrderLineV2ExistAddrReadOnly<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderLineV2ExistAddrReadOnly`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderLineV2ExistAddrReadOnly` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderLineV2ExistAddrReadOnly<T>
  ): DeleteRequestBuilder<PurchaseOrderLineV2ExistAddrReadOnly<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    deliveryAddressLocationId?: string,
    deliveryValidFrom?: Moment
  ): DeleteRequestBuilder<PurchaseOrderLineV2ExistAddrReadOnly<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderLineV2ExistAddrReadOnly<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseOrderLineV2ExistAddrReadOnly
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DeliveryAddressLocationId: deliveryAddressLocationId!,
            DeliveryValidFrom: deliveryValidFrom!
          }
    );
  }
}
