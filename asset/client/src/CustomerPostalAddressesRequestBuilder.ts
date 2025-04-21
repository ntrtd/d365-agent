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
import { CustomerPostalAddresses } from './CustomerPostalAddresses';

/**
 * Request builder class for operations supported on the {@link CustomerPostalAddresses} entity.
 */
export class CustomerPostalAddressesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerPostalAddresses<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerPostalAddresses` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerPostalAddresses` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerPostalAddresses<T>, T> {
    return new GetAllRequestBuilder<CustomerPostalAddresses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerPostalAddresses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerPostalAddresses`.
   */
  create(
    entity: CustomerPostalAddresses<T>
  ): CreateRequestBuilder<CustomerPostalAddresses<T>, T> {
    return new CreateRequestBuilder<CustomerPostalAddresses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerPostalAddresses` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerPostalAddresses.dataAreaId}.
   * @param customerAccountNumber Key property. See {@link CustomerPostalAddresses.customerAccountNumber}.
   * @param customerLegalEntityId Key property. See {@link CustomerPostalAddresses.customerLegalEntityId}.
   * @param addressLocationId Key property. See {@link CustomerPostalAddresses.addressLocationId}.
   * @param effective Key property. See {@link CustomerPostalAddresses.effective}.
   * @returns A request builder for creating requests to retrieve one `CustomerPostalAddresses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    customerLegalEntityId: DeserializedType<T, 'Edm.String'>,
    addressLocationId: DeserializedType<T, 'Edm.String'>,
    effective: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<CustomerPostalAddresses<T>, T> {
    return new GetByKeyRequestBuilder<CustomerPostalAddresses<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CustomerAccountNumber: customerAccountNumber,
        CustomerLegalEntityId: customerLegalEntityId,
        AddressLocationId: addressLocationId,
        Effective: effective
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerPostalAddresses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerPostalAddresses`.
   */
  update(
    entity: CustomerPostalAddresses<T>
  ): UpdateRequestBuilder<CustomerPostalAddresses<T>, T> {
    return new UpdateRequestBuilder<CustomerPostalAddresses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerPostalAddresses`.
   * @param dataAreaId Key property. See {@link CustomerPostalAddresses.dataAreaId}.
   * @param customerAccountNumber Key property. See {@link CustomerPostalAddresses.customerAccountNumber}.
   * @param customerLegalEntityId Key property. See {@link CustomerPostalAddresses.customerLegalEntityId}.
   * @param addressLocationId Key property. See {@link CustomerPostalAddresses.addressLocationId}.
   * @param effective Key property. See {@link CustomerPostalAddresses.effective}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPostalAddresses`.
   */
  delete(
    dataAreaId: string,
    customerAccountNumber: string,
    customerLegalEntityId: string,
    addressLocationId: string,
    effective: Moment
  ): DeleteRequestBuilder<CustomerPostalAddresses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerPostalAddresses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPostalAddresses` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerPostalAddresses<T>
  ): DeleteRequestBuilder<CustomerPostalAddresses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customerAccountNumber?: string,
    customerLegalEntityId?: string,
    addressLocationId?: string,
    effective?: Moment
  ): DeleteRequestBuilder<CustomerPostalAddresses<T>, T> {
    return new DeleteRequestBuilder<CustomerPostalAddresses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerPostalAddresses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustomerAccountNumber: customerAccountNumber!,
            CustomerLegalEntityId: customerLegalEntityId!,
            AddressLocationId: addressLocationId!,
            Effective: effective!
          }
    );
  }
}
