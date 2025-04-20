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
import { WorkerPostalAddressesDualWrite } from './WorkerPostalAddressesDualWrite';

/**
 * Request builder class for operations supported on the {@link WorkerPostalAddressesDualWrite} entity.
 */
export class WorkerPostalAddressesDualWriteRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerPostalAddressesDualWrite<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerPostalAddressesDualWrite` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerPostalAddressesDualWrite` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerPostalAddressesDualWrite<T>, T> {
    return new GetAllRequestBuilder<WorkerPostalAddressesDualWrite<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerPostalAddressesDualWrite` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerPostalAddressesDualWrite`.
   */
  create(
    entity: WorkerPostalAddressesDualWrite<T>
  ): CreateRequestBuilder<WorkerPostalAddressesDualWrite<T>, T> {
    return new CreateRequestBuilder<WorkerPostalAddressesDualWrite<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerPostalAddressesDualWrite` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerPostalAddressesDualWrite.personnelNumber}.
   * @param addressLocationId Key property. See {@link WorkerPostalAddressesDualWrite.addressLocationId}.
   * @param addressLocationRoles Key property. See {@link WorkerPostalAddressesDualWrite.addressLocationRoles}.
   * @returns A request builder for creating requests to retrieve one `WorkerPostalAddressesDualWrite` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    addressLocationId: DeserializedType<T, 'Edm.String'>,
    addressLocationRoles: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerPostalAddressesDualWrite<T>, T> {
    return new GetByKeyRequestBuilder<WorkerPostalAddressesDualWrite<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        AddressLocationId: addressLocationId,
        AddressLocationRoles: addressLocationRoles
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerPostalAddressesDualWrite`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerPostalAddressesDualWrite`.
   */
  update(
    entity: WorkerPostalAddressesDualWrite<T>
  ): UpdateRequestBuilder<WorkerPostalAddressesDualWrite<T>, T> {
    return new UpdateRequestBuilder<WorkerPostalAddressesDualWrite<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerPostalAddressesDualWrite`.
   * @param personnelNumber Key property. See {@link WorkerPostalAddressesDualWrite.personnelNumber}.
   * @param addressLocationId Key property. See {@link WorkerPostalAddressesDualWrite.addressLocationId}.
   * @param addressLocationRoles Key property. See {@link WorkerPostalAddressesDualWrite.addressLocationRoles}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerPostalAddressesDualWrite`.
   */
  delete(
    personnelNumber: string,
    addressLocationId: string,
    addressLocationRoles: string
  ): DeleteRequestBuilder<WorkerPostalAddressesDualWrite<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerPostalAddressesDualWrite`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerPostalAddressesDualWrite` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerPostalAddressesDualWrite<T>
  ): DeleteRequestBuilder<WorkerPostalAddressesDualWrite<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    addressLocationId?: string,
    addressLocationRoles?: string
  ): DeleteRequestBuilder<WorkerPostalAddressesDualWrite<T>, T> {
    return new DeleteRequestBuilder<WorkerPostalAddressesDualWrite<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerPostalAddressesDualWrite
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            AddressLocationId: addressLocationId!,
            AddressLocationRoles: addressLocationRoles!
          }
    );
  }
}
