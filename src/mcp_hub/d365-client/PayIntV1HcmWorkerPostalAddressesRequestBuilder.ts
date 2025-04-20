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
import { PayIntV1HcmWorkerPostalAddresses } from './PayIntV1HcmWorkerPostalAddresses';

/**
 * Request builder class for operations supported on the {@link PayIntV1HcmWorkerPostalAddresses} entity.
 */
export class PayIntV1HcmWorkerPostalAddressesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1HcmWorkerPostalAddresses<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1HcmWorkerPostalAddresses` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1HcmWorkerPostalAddresses` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1HcmWorkerPostalAddresses<T>, T> {
    return new GetAllRequestBuilder<PayIntV1HcmWorkerPostalAddresses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1HcmWorkerPostalAddresses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1HcmWorkerPostalAddresses`.
   */
  create(
    entity: PayIntV1HcmWorkerPostalAddresses<T>
  ): CreateRequestBuilder<PayIntV1HcmWorkerPostalAddresses<T>, T> {
    return new CreateRequestBuilder<PayIntV1HcmWorkerPostalAddresses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1HcmWorkerPostalAddresses` entity based on its keys.
   * @param personnelNumber Key property. See {@link PayIntV1HcmWorkerPostalAddresses.personnelNumber}.
   * @param addressLocationId Key property. See {@link PayIntV1HcmWorkerPostalAddresses.addressLocationId}.
   * @param effective Key property. See {@link PayIntV1HcmWorkerPostalAddresses.effective}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1HcmWorkerPostalAddresses` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    addressLocationId: DeserializedType<T, 'Edm.String'>,
    effective: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayIntV1HcmWorkerPostalAddresses<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1HcmWorkerPostalAddresses<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        AddressLocationId: addressLocationId,
        Effective: effective
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1HcmWorkerPostalAddresses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1HcmWorkerPostalAddresses`.
   */
  update(
    entity: PayIntV1HcmWorkerPostalAddresses<T>
  ): UpdateRequestBuilder<PayIntV1HcmWorkerPostalAddresses<T>, T> {
    return new UpdateRequestBuilder<PayIntV1HcmWorkerPostalAddresses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1HcmWorkerPostalAddresses`.
   * @param personnelNumber Key property. See {@link PayIntV1HcmWorkerPostalAddresses.personnelNumber}.
   * @param addressLocationId Key property. See {@link PayIntV1HcmWorkerPostalAddresses.addressLocationId}.
   * @param effective Key property. See {@link PayIntV1HcmWorkerPostalAddresses.effective}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1HcmWorkerPostalAddresses`.
   */
  delete(
    personnelNumber: string,
    addressLocationId: string,
    effective: Moment
  ): DeleteRequestBuilder<PayIntV1HcmWorkerPostalAddresses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1HcmWorkerPostalAddresses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1HcmWorkerPostalAddresses` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1HcmWorkerPostalAddresses<T>
  ): DeleteRequestBuilder<PayIntV1HcmWorkerPostalAddresses<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    addressLocationId?: string,
    effective?: Moment
  ): DeleteRequestBuilder<PayIntV1HcmWorkerPostalAddresses<T>, T> {
    return new DeleteRequestBuilder<PayIntV1HcmWorkerPostalAddresses<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof PayIntV1HcmWorkerPostalAddresses
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            AddressLocationId: addressLocationId!,
            Effective: effective!
          }
    );
  }
}
