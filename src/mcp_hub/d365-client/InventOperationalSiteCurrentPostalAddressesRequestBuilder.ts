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
import { InventOperationalSiteCurrentPostalAddresses } from './InventOperationalSiteCurrentPostalAddresses';

/**
 * Request builder class for operations supported on the {@link InventOperationalSiteCurrentPostalAddresses} entity.
 */
export class InventOperationalSiteCurrentPostalAddressesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventOperationalSiteCurrentPostalAddresses<T>, T> {
  /**
   * Returns a request builder for querying all `InventOperationalSiteCurrentPostalAddresses` entities.
   * @returns A request builder for creating requests to retrieve all `InventOperationalSiteCurrentPostalAddresses` entities.
   */
  getAll(): GetAllRequestBuilder<
    InventOperationalSiteCurrentPostalAddresses<T>,
    T
  > {
    return new GetAllRequestBuilder<
      InventOperationalSiteCurrentPostalAddresses<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventOperationalSiteCurrentPostalAddresses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventOperationalSiteCurrentPostalAddresses`.
   */
  create(
    entity: InventOperationalSiteCurrentPostalAddresses<T>
  ): CreateRequestBuilder<InventOperationalSiteCurrentPostalAddresses<T>, T> {
    return new CreateRequestBuilder<
      InventOperationalSiteCurrentPostalAddresses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `InventOperationalSiteCurrentPostalAddresses` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventOperationalSiteCurrentPostalAddresses.dataAreaId}.
   * @param operationalSiteLegalEntityId Key property. See {@link InventOperationalSiteCurrentPostalAddresses.operationalSiteLegalEntityId}.
   * @param operationalSiteId Key property. See {@link InventOperationalSiteCurrentPostalAddresses.operationalSiteId}.
   * @param addressLocationId Key property. See {@link InventOperationalSiteCurrentPostalAddresses.addressLocationId}.
   * @returns A request builder for creating requests to retrieve one `InventOperationalSiteCurrentPostalAddresses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operationalSiteLegalEntityId: DeserializedType<T, 'Edm.String'>,
    operationalSiteId: DeserializedType<T, 'Edm.String'>,
    addressLocationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventOperationalSiteCurrentPostalAddresses<T>, T> {
    return new GetByKeyRequestBuilder<
      InventOperationalSiteCurrentPostalAddresses<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OperationalSiteLegalEntityId: operationalSiteLegalEntityId,
      OperationalSiteId: operationalSiteId,
      AddressLocationId: addressLocationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InventOperationalSiteCurrentPostalAddresses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventOperationalSiteCurrentPostalAddresses`.
   */
  update(
    entity: InventOperationalSiteCurrentPostalAddresses<T>
  ): UpdateRequestBuilder<InventOperationalSiteCurrentPostalAddresses<T>, T> {
    return new UpdateRequestBuilder<
      InventOperationalSiteCurrentPostalAddresses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InventOperationalSiteCurrentPostalAddresses`.
   * @param dataAreaId Key property. See {@link InventOperationalSiteCurrentPostalAddresses.dataAreaId}.
   * @param operationalSiteLegalEntityId Key property. See {@link InventOperationalSiteCurrentPostalAddresses.operationalSiteLegalEntityId}.
   * @param operationalSiteId Key property. See {@link InventOperationalSiteCurrentPostalAddresses.operationalSiteId}.
   * @param addressLocationId Key property. See {@link InventOperationalSiteCurrentPostalAddresses.addressLocationId}.
   * @returns A request builder for creating requests that delete an entity of type `InventOperationalSiteCurrentPostalAddresses`.
   */
  delete(
    dataAreaId: string,
    operationalSiteLegalEntityId: string,
    operationalSiteId: string,
    addressLocationId: string
  ): DeleteRequestBuilder<InventOperationalSiteCurrentPostalAddresses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventOperationalSiteCurrentPostalAddresses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventOperationalSiteCurrentPostalAddresses` by taking the entity as a parameter.
   */
  delete(
    entity: InventOperationalSiteCurrentPostalAddresses<T>
  ): DeleteRequestBuilder<InventOperationalSiteCurrentPostalAddresses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operationalSiteLegalEntityId?: string,
    operationalSiteId?: string,
    addressLocationId?: string
  ): DeleteRequestBuilder<InventOperationalSiteCurrentPostalAddresses<T>, T> {
    return new DeleteRequestBuilder<
      InventOperationalSiteCurrentPostalAddresses<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventOperationalSiteCurrentPostalAddresses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperationalSiteLegalEntityId: operationalSiteLegalEntityId!,
            OperationalSiteId: operationalSiteId!,
            AddressLocationId: addressLocationId!
          }
    );
  }
}
