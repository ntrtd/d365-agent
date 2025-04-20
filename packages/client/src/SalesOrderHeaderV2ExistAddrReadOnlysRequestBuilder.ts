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
import { SalesOrderHeaderV2ExistAddrReadOnlys } from './SalesOrderHeaderV2ExistAddrReadOnlys';

/**
 * Request builder class for operations supported on the {@link SalesOrderHeaderV2ExistAddrReadOnlys} entity.
 */
export class SalesOrderHeaderV2ExistAddrReadOnlysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderHeaderV2ExistAddrReadOnlys<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderHeaderV2ExistAddrReadOnlys` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderHeaderV2ExistAddrReadOnlys` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderHeaderV2ExistAddrReadOnlys<T>, T> {
    return new GetAllRequestBuilder<SalesOrderHeaderV2ExistAddrReadOnlys<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderHeaderV2ExistAddrReadOnlys` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderHeaderV2ExistAddrReadOnlys`.
   */
  create(
    entity: SalesOrderHeaderV2ExistAddrReadOnlys<T>
  ): CreateRequestBuilder<SalesOrderHeaderV2ExistAddrReadOnlys<T>, T> {
    return new CreateRequestBuilder<SalesOrderHeaderV2ExistAddrReadOnlys<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderHeaderV2ExistAddrReadOnlys` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderHeaderV2ExistAddrReadOnlys.dataAreaId}.
   * @param deliveryAddressLocationId Key property. See {@link SalesOrderHeaderV2ExistAddrReadOnlys.deliveryAddressLocationId}.
   * @param deliveryValidFrom Key property. See {@link SalesOrderHeaderV2ExistAddrReadOnlys.deliveryValidFrom}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderHeaderV2ExistAddrReadOnlys` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    deliveryAddressLocationId: DeserializedType<T, 'Edm.String'>,
    deliveryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<SalesOrderHeaderV2ExistAddrReadOnlys<T>, T> {
    return new GetByKeyRequestBuilder<
      SalesOrderHeaderV2ExistAddrReadOnlys<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DeliveryAddressLocationId: deliveryAddressLocationId,
      DeliveryValidFrom: deliveryValidFrom
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderHeaderV2ExistAddrReadOnlys`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderHeaderV2ExistAddrReadOnlys`.
   */
  update(
    entity: SalesOrderHeaderV2ExistAddrReadOnlys<T>
  ): UpdateRequestBuilder<SalesOrderHeaderV2ExistAddrReadOnlys<T>, T> {
    return new UpdateRequestBuilder<SalesOrderHeaderV2ExistAddrReadOnlys<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeaderV2ExistAddrReadOnlys`.
   * @param dataAreaId Key property. See {@link SalesOrderHeaderV2ExistAddrReadOnlys.dataAreaId}.
   * @param deliveryAddressLocationId Key property. See {@link SalesOrderHeaderV2ExistAddrReadOnlys.deliveryAddressLocationId}.
   * @param deliveryValidFrom Key property. See {@link SalesOrderHeaderV2ExistAddrReadOnlys.deliveryValidFrom}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeaderV2ExistAddrReadOnlys`.
   */
  delete(
    dataAreaId: string,
    deliveryAddressLocationId: string,
    deliveryValidFrom: Moment
  ): DeleteRequestBuilder<SalesOrderHeaderV2ExistAddrReadOnlys<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeaderV2ExistAddrReadOnlys`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeaderV2ExistAddrReadOnlys` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderHeaderV2ExistAddrReadOnlys<T>
  ): DeleteRequestBuilder<SalesOrderHeaderV2ExistAddrReadOnlys<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    deliveryAddressLocationId?: string,
    deliveryValidFrom?: Moment
  ): DeleteRequestBuilder<SalesOrderHeaderV2ExistAddrReadOnlys<T>, T> {
    return new DeleteRequestBuilder<SalesOrderHeaderV2ExistAddrReadOnlys<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderHeaderV2ExistAddrReadOnlys
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DeliveryAddressLocationId: deliveryAddressLocationId!,
            DeliveryValidFrom: deliveryValidFrom!
          }
    );
  }
}
