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
import { PayrollWorkerAddressesCurrent } from './PayrollWorkerAddressesCurrent';

/**
 * Request builder class for operations supported on the {@link PayrollWorkerAddressesCurrent} entity.
 */
export class PayrollWorkerAddressesCurrentRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayrollWorkerAddressesCurrent<T>, T> {
  /**
   * Returns a request builder for querying all `PayrollWorkerAddressesCurrent` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollWorkerAddressesCurrent` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollWorkerAddressesCurrent<T>, T> {
    return new GetAllRequestBuilder<PayrollWorkerAddressesCurrent<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayrollWorkerAddressesCurrent` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollWorkerAddressesCurrent`.
   */
  create(
    entity: PayrollWorkerAddressesCurrent<T>
  ): CreateRequestBuilder<PayrollWorkerAddressesCurrent<T>, T> {
    return new CreateRequestBuilder<PayrollWorkerAddressesCurrent<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayrollWorkerAddressesCurrent` entity based on its keys.
   * @param personnelNumber Key property. See {@link PayrollWorkerAddressesCurrent.personnelNumber}.
   * @param locationId Key property. See {@link PayrollWorkerAddressesCurrent.locationId}.
   * @returns A request builder for creating requests to retrieve one `PayrollWorkerAddressesCurrent` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    locationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayrollWorkerAddressesCurrent<T>, T> {
    return new GetByKeyRequestBuilder<PayrollWorkerAddressesCurrent<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        LocationId: locationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollWorkerAddressesCurrent`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollWorkerAddressesCurrent`.
   */
  update(
    entity: PayrollWorkerAddressesCurrent<T>
  ): UpdateRequestBuilder<PayrollWorkerAddressesCurrent<T>, T> {
    return new UpdateRequestBuilder<PayrollWorkerAddressesCurrent<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollWorkerAddressesCurrent`.
   * @param personnelNumber Key property. See {@link PayrollWorkerAddressesCurrent.personnelNumber}.
   * @param locationId Key property. See {@link PayrollWorkerAddressesCurrent.locationId}.
   * @returns A request builder for creating requests that delete an entity of type `PayrollWorkerAddressesCurrent`.
   */
  delete(
    personnelNumber: string,
    locationId: string
  ): DeleteRequestBuilder<PayrollWorkerAddressesCurrent<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollWorkerAddressesCurrent`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollWorkerAddressesCurrent` by taking the entity as a parameter.
   */
  delete(
    entity: PayrollWorkerAddressesCurrent<T>
  ): DeleteRequestBuilder<PayrollWorkerAddressesCurrent<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    locationId?: string
  ): DeleteRequestBuilder<PayrollWorkerAddressesCurrent<T>, T> {
    return new DeleteRequestBuilder<PayrollWorkerAddressesCurrent<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof PayrollWorkerAddressesCurrent
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LocationId: locationId!
          }
    );
  }
}
