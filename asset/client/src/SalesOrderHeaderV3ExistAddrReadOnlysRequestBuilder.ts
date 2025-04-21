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
import { SalesOrderHeaderV3ExistAddrReadOnlys } from './SalesOrderHeaderV3ExistAddrReadOnlys';

/**
 * Request builder class for operations supported on the {@link SalesOrderHeaderV3ExistAddrReadOnlys} entity.
 */
export class SalesOrderHeaderV3ExistAddrReadOnlysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderHeaderV3ExistAddrReadOnlys<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderHeaderV3ExistAddrReadOnlys` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderHeaderV3ExistAddrReadOnlys` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderHeaderV3ExistAddrReadOnlys<T>, T> {
    return new GetAllRequestBuilder<SalesOrderHeaderV3ExistAddrReadOnlys<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderHeaderV3ExistAddrReadOnlys` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderHeaderV3ExistAddrReadOnlys`.
   */
  create(
    entity: SalesOrderHeaderV3ExistAddrReadOnlys<T>
  ): CreateRequestBuilder<SalesOrderHeaderV3ExistAddrReadOnlys<T>, T> {
    return new CreateRequestBuilder<SalesOrderHeaderV3ExistAddrReadOnlys<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderHeaderV3ExistAddrReadOnlys` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesOrderHeaderV3ExistAddrReadOnlys.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SalesOrderHeaderV3ExistAddrReadOnlys.salesOrderNumber}.
   * @param deliveryAddressLocationId Key property. See {@link SalesOrderHeaderV3ExistAddrReadOnlys.deliveryAddressLocationId}.
   * @param deliveryValidFrom Key property. See {@link SalesOrderHeaderV3ExistAddrReadOnlys.deliveryValidFrom}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderHeaderV3ExistAddrReadOnlys` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>,
    deliveryAddressLocationId: DeserializedType<T, 'Edm.String'>,
    deliveryValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<SalesOrderHeaderV3ExistAddrReadOnlys<T>, T> {
    return new GetByKeyRequestBuilder<
      SalesOrderHeaderV3ExistAddrReadOnlys<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SalesOrderNumber: salesOrderNumber,
      DeliveryAddressLocationId: deliveryAddressLocationId,
      DeliveryValidFrom: deliveryValidFrom
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderHeaderV3ExistAddrReadOnlys`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderHeaderV3ExistAddrReadOnlys`.
   */
  update(
    entity: SalesOrderHeaderV3ExistAddrReadOnlys<T>
  ): UpdateRequestBuilder<SalesOrderHeaderV3ExistAddrReadOnlys<T>, T> {
    return new UpdateRequestBuilder<SalesOrderHeaderV3ExistAddrReadOnlys<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeaderV3ExistAddrReadOnlys`.
   * @param dataAreaId Key property. See {@link SalesOrderHeaderV3ExistAddrReadOnlys.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SalesOrderHeaderV3ExistAddrReadOnlys.salesOrderNumber}.
   * @param deliveryAddressLocationId Key property. See {@link SalesOrderHeaderV3ExistAddrReadOnlys.deliveryAddressLocationId}.
   * @param deliveryValidFrom Key property. See {@link SalesOrderHeaderV3ExistAddrReadOnlys.deliveryValidFrom}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeaderV3ExistAddrReadOnlys`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string,
    deliveryAddressLocationId: string,
    deliveryValidFrom: Moment
  ): DeleteRequestBuilder<SalesOrderHeaderV3ExistAddrReadOnlys<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderHeaderV3ExistAddrReadOnlys`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderHeaderV3ExistAddrReadOnlys` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderHeaderV3ExistAddrReadOnlys<T>
  ): DeleteRequestBuilder<SalesOrderHeaderV3ExistAddrReadOnlys<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string,
    deliveryAddressLocationId?: string,
    deliveryValidFrom?: Moment
  ): DeleteRequestBuilder<SalesOrderHeaderV3ExistAddrReadOnlys<T>, T> {
    return new DeleteRequestBuilder<SalesOrderHeaderV3ExistAddrReadOnlys<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesOrderHeaderV3ExistAddrReadOnlys
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!,
            DeliveryAddressLocationId: deliveryAddressLocationId!,
            DeliveryValidFrom: deliveryValidFrom!
          }
    );
  }
}
