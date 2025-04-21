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
import { WorkerPostalAddressesV2 } from './WorkerPostalAddressesV2';

/**
 * Request builder class for operations supported on the {@link WorkerPostalAddressesV2} entity.
 */
export class WorkerPostalAddressesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerPostalAddressesV2<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerPostalAddressesV2` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerPostalAddressesV2` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerPostalAddressesV2<T>, T> {
    return new GetAllRequestBuilder<WorkerPostalAddressesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerPostalAddressesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerPostalAddressesV2`.
   */
  create(
    entity: WorkerPostalAddressesV2<T>
  ): CreateRequestBuilder<WorkerPostalAddressesV2<T>, T> {
    return new CreateRequestBuilder<WorkerPostalAddressesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerPostalAddressesV2` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerPostalAddressesV2.personnelNumber}.
   * @param addressLocationId Key property. See {@link WorkerPostalAddressesV2.addressLocationId}.
   * @param effective Key property. See {@link WorkerPostalAddressesV2.effective}.
   * @returns A request builder for creating requests to retrieve one `WorkerPostalAddressesV2` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    addressLocationId: DeserializedType<T, 'Edm.String'>,
    effective: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WorkerPostalAddressesV2<T>, T> {
    return new GetByKeyRequestBuilder<WorkerPostalAddressesV2<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        AddressLocationId: addressLocationId,
        Effective: effective
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerPostalAddressesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerPostalAddressesV2`.
   */
  update(
    entity: WorkerPostalAddressesV2<T>
  ): UpdateRequestBuilder<WorkerPostalAddressesV2<T>, T> {
    return new UpdateRequestBuilder<WorkerPostalAddressesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerPostalAddressesV2`.
   * @param personnelNumber Key property. See {@link WorkerPostalAddressesV2.personnelNumber}.
   * @param addressLocationId Key property. See {@link WorkerPostalAddressesV2.addressLocationId}.
   * @param effective Key property. See {@link WorkerPostalAddressesV2.effective}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerPostalAddressesV2`.
   */
  delete(
    personnelNumber: string,
    addressLocationId: string,
    effective: Moment
  ): DeleteRequestBuilder<WorkerPostalAddressesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerPostalAddressesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerPostalAddressesV2` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerPostalAddressesV2<T>
  ): DeleteRequestBuilder<WorkerPostalAddressesV2<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    addressLocationId?: string,
    effective?: Moment
  ): DeleteRequestBuilder<WorkerPostalAddressesV2<T>, T> {
    return new DeleteRequestBuilder<WorkerPostalAddressesV2<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerPostalAddressesV2
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            AddressLocationId: addressLocationId!,
            Effective: effective!
          }
    );
  }
}
