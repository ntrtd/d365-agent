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
import { WorkerContactsV3 } from './WorkerContactsV3';

/**
 * Request builder class for operations supported on the {@link WorkerContactsV3} entity.
 */
export class WorkerContactsV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerContactsV3<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerContactsV3` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerContactsV3` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerContactsV3<T>, T> {
    return new GetAllRequestBuilder<WorkerContactsV3<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerContactsV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerContactsV3`.
   */
  create(
    entity: WorkerContactsV3<T>
  ): CreateRequestBuilder<WorkerContactsV3<T>, T> {
    return new CreateRequestBuilder<WorkerContactsV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerContactsV3` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerContactsV3.personnelNumber}.
   * @param electronicAddressId Key property. See {@link WorkerContactsV3.electronicAddressId}.
   * @returns A request builder for creating requests to retrieve one `WorkerContactsV3` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    electronicAddressId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerContactsV3<T>, T> {
    return new GetByKeyRequestBuilder<WorkerContactsV3<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      ElectronicAddressId: electronicAddressId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerContactsV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerContactsV3`.
   */
  update(
    entity: WorkerContactsV3<T>
  ): UpdateRequestBuilder<WorkerContactsV3<T>, T> {
    return new UpdateRequestBuilder<WorkerContactsV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerContactsV3`.
   * @param personnelNumber Key property. See {@link WorkerContactsV3.personnelNumber}.
   * @param electronicAddressId Key property. See {@link WorkerContactsV3.electronicAddressId}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerContactsV3`.
   */
  delete(
    personnelNumber: string,
    electronicAddressId: string
  ): DeleteRequestBuilder<WorkerContactsV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerContactsV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerContactsV3` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerContactsV3<T>
  ): DeleteRequestBuilder<WorkerContactsV3<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    electronicAddressId?: string
  ): DeleteRequestBuilder<WorkerContactsV3<T>, T> {
    return new DeleteRequestBuilder<WorkerContactsV3<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerContactsV3
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            ElectronicAddressId: electronicAddressId!
          }
    );
  }
}
