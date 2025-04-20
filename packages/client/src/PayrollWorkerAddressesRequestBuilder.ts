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
import { PayrollWorkerAddresses } from './PayrollWorkerAddresses';

/**
 * Request builder class for operations supported on the {@link PayrollWorkerAddresses} entity.
 */
export class PayrollWorkerAddressesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayrollWorkerAddresses<T>, T> {
  /**
   * Returns a request builder for querying all `PayrollWorkerAddresses` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollWorkerAddresses` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollWorkerAddresses<T>, T> {
    return new GetAllRequestBuilder<PayrollWorkerAddresses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayrollWorkerAddresses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollWorkerAddresses`.
   */
  create(
    entity: PayrollWorkerAddresses<T>
  ): CreateRequestBuilder<PayrollWorkerAddresses<T>, T> {
    return new CreateRequestBuilder<PayrollWorkerAddresses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayrollWorkerAddresses` entity based on its keys.
   * @param personnelNumber Key property. See {@link PayrollWorkerAddresses.personnelNumber}.
   * @param locationId Key property. See {@link PayrollWorkerAddresses.locationId}.
   * @param postalAddressValidFrom Key property. See {@link PayrollWorkerAddresses.postalAddressValidFrom}.
   * @returns A request builder for creating requests to retrieve one `PayrollWorkerAddresses` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    locationId: DeserializedType<T, 'Edm.String'>,
    postalAddressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayrollWorkerAddresses<T>, T> {
    return new GetByKeyRequestBuilder<PayrollWorkerAddresses<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        LocationId: locationId,
        PostalAddressValidFrom: postalAddressValidFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollWorkerAddresses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollWorkerAddresses`.
   */
  update(
    entity: PayrollWorkerAddresses<T>
  ): UpdateRequestBuilder<PayrollWorkerAddresses<T>, T> {
    return new UpdateRequestBuilder<PayrollWorkerAddresses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollWorkerAddresses`.
   * @param personnelNumber Key property. See {@link PayrollWorkerAddresses.personnelNumber}.
   * @param locationId Key property. See {@link PayrollWorkerAddresses.locationId}.
   * @param postalAddressValidFrom Key property. See {@link PayrollWorkerAddresses.postalAddressValidFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PayrollWorkerAddresses`.
   */
  delete(
    personnelNumber: string,
    locationId: string,
    postalAddressValidFrom: Moment
  ): DeleteRequestBuilder<PayrollWorkerAddresses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollWorkerAddresses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollWorkerAddresses` by taking the entity as a parameter.
   */
  delete(
    entity: PayrollWorkerAddresses<T>
  ): DeleteRequestBuilder<PayrollWorkerAddresses<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    locationId?: string,
    postalAddressValidFrom?: Moment
  ): DeleteRequestBuilder<PayrollWorkerAddresses<T>, T> {
    return new DeleteRequestBuilder<PayrollWorkerAddresses<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof PayrollWorkerAddresses
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LocationId: locationId!,
            PostalAddressValidFrom: postalAddressValidFrom!
          }
    );
  }
}
