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
import { WorkerPostalAddresses } from './WorkerPostalAddresses';

/**
 * Request builder class for operations supported on the {@link WorkerPostalAddresses} entity.
 */
export class WorkerPostalAddressesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerPostalAddresses<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerPostalAddresses` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerPostalAddresses` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerPostalAddresses<T>, T> {
    return new GetAllRequestBuilder<WorkerPostalAddresses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerPostalAddresses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerPostalAddresses`.
   */
  create(
    entity: WorkerPostalAddresses<T>
  ): CreateRequestBuilder<WorkerPostalAddresses<T>, T> {
    return new CreateRequestBuilder<WorkerPostalAddresses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerPostalAddresses` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerPostalAddresses.personnelNumber}.
   * @param addressLocationId Key property. See {@link WorkerPostalAddresses.addressLocationId}.
   * @param effective Key property. See {@link WorkerPostalAddresses.effective}.
   * @returns A request builder for creating requests to retrieve one `WorkerPostalAddresses` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    addressLocationId: DeserializedType<T, 'Edm.String'>,
    effective: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WorkerPostalAddresses<T>, T> {
    return new GetByKeyRequestBuilder<WorkerPostalAddresses<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        AddressLocationId: addressLocationId,
        Effective: effective
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerPostalAddresses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerPostalAddresses`.
   */
  update(
    entity: WorkerPostalAddresses<T>
  ): UpdateRequestBuilder<WorkerPostalAddresses<T>, T> {
    return new UpdateRequestBuilder<WorkerPostalAddresses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerPostalAddresses`.
   * @param personnelNumber Key property. See {@link WorkerPostalAddresses.personnelNumber}.
   * @param addressLocationId Key property. See {@link WorkerPostalAddresses.addressLocationId}.
   * @param effective Key property. See {@link WorkerPostalAddresses.effective}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerPostalAddresses`.
   */
  delete(
    personnelNumber: string,
    addressLocationId: string,
    effective: Moment
  ): DeleteRequestBuilder<WorkerPostalAddresses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerPostalAddresses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerPostalAddresses` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerPostalAddresses<T>
  ): DeleteRequestBuilder<WorkerPostalAddresses<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    addressLocationId?: string,
    effective?: Moment
  ): DeleteRequestBuilder<WorkerPostalAddresses<T>, T> {
    return new DeleteRequestBuilder<WorkerPostalAddresses<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerPostalAddresses
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            AddressLocationId: addressLocationId!,
            Effective: effective!
          }
    );
  }
}
