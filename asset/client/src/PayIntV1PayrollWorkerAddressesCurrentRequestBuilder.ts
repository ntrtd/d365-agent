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
import { PayIntV1PayrollWorkerAddressesCurrent } from './PayIntV1PayrollWorkerAddressesCurrent';

/**
 * Request builder class for operations supported on the {@link PayIntV1PayrollWorkerAddressesCurrent} entity.
 */
export class PayIntV1PayrollWorkerAddressesCurrentRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1PayrollWorkerAddressesCurrent<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1PayrollWorkerAddressesCurrent` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1PayrollWorkerAddressesCurrent` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1PayrollWorkerAddressesCurrent<T>, T> {
    return new GetAllRequestBuilder<
      PayIntV1PayrollWorkerAddressesCurrent<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayIntV1PayrollWorkerAddressesCurrent` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1PayrollWorkerAddressesCurrent`.
   */
  create(
    entity: PayIntV1PayrollWorkerAddressesCurrent<T>
  ): CreateRequestBuilder<PayIntV1PayrollWorkerAddressesCurrent<T>, T> {
    return new CreateRequestBuilder<
      PayIntV1PayrollWorkerAddressesCurrent<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1PayrollWorkerAddressesCurrent` entity based on its keys.
   * @param personnelNumber Key property. See {@link PayIntV1PayrollWorkerAddressesCurrent.personnelNumber}.
   * @param locationId Key property. See {@link PayIntV1PayrollWorkerAddressesCurrent.locationId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1PayrollWorkerAddressesCurrent` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    locationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1PayrollWorkerAddressesCurrent<T>, T> {
    return new GetByKeyRequestBuilder<
      PayIntV1PayrollWorkerAddressesCurrent<T>,
      T
    >(this.entityApi, {
      PersonnelNumber: personnelNumber,
      LocationId: locationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1PayrollWorkerAddressesCurrent`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1PayrollWorkerAddressesCurrent`.
   */
  update(
    entity: PayIntV1PayrollWorkerAddressesCurrent<T>
  ): UpdateRequestBuilder<PayIntV1PayrollWorkerAddressesCurrent<T>, T> {
    return new UpdateRequestBuilder<
      PayIntV1PayrollWorkerAddressesCurrent<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PayrollWorkerAddressesCurrent`.
   * @param personnelNumber Key property. See {@link PayIntV1PayrollWorkerAddressesCurrent.personnelNumber}.
   * @param locationId Key property. See {@link PayIntV1PayrollWorkerAddressesCurrent.locationId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PayrollWorkerAddressesCurrent`.
   */
  delete(
    personnelNumber: string,
    locationId: string
  ): DeleteRequestBuilder<PayIntV1PayrollWorkerAddressesCurrent<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1PayrollWorkerAddressesCurrent`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1PayrollWorkerAddressesCurrent` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1PayrollWorkerAddressesCurrent<T>
  ): DeleteRequestBuilder<PayIntV1PayrollWorkerAddressesCurrent<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    locationId?: string
  ): DeleteRequestBuilder<PayIntV1PayrollWorkerAddressesCurrent<T>, T> {
    return new DeleteRequestBuilder<
      PayIntV1PayrollWorkerAddressesCurrent<T>,
      T
    >(
      this.entityApi,
      personnelNumberOrEntity instanceof PayIntV1PayrollWorkerAddressesCurrent
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LocationId: locationId!
          }
    );
  }
}
