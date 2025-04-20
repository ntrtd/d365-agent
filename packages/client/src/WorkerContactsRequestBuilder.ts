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
import { WorkerContacts } from './WorkerContacts';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';

/**
 * Request builder class for operations supported on the {@link WorkerContacts} entity.
 */
export class WorkerContactsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerContacts<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerContacts` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerContacts` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerContacts<T>, T> {
    return new GetAllRequestBuilder<WorkerContacts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerContacts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerContacts`.
   */
  create(
    entity: WorkerContacts<T>
  ): CreateRequestBuilder<WorkerContacts<T>, T> {
    return new CreateRequestBuilder<WorkerContacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerContacts` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerContacts.personnelNumber}.
   * @param type Key property. See {@link WorkerContacts.type}.
   * @param locator Key property. See {@link WorkerContacts.locator}.
   * @param description Key property. See {@link WorkerContacts.description}.
   * @returns A request builder for creating requests to retrieve one `WorkerContacts` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LogisticsElectronicAddressMethodType'
    >,
    locator: DeserializedType<T, 'Edm.String'>,
    description: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerContacts<T>, T> {
    return new GetByKeyRequestBuilder<WorkerContacts<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      Type: type,
      Locator: locator,
      Description: description
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerContacts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerContacts`.
   */
  update(
    entity: WorkerContacts<T>
  ): UpdateRequestBuilder<WorkerContacts<T>, T> {
    return new UpdateRequestBuilder<WorkerContacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerContacts`.
   * @param personnelNumber Key property. See {@link WorkerContacts.personnelNumber}.
   * @param type Key property. See {@link WorkerContacts.type}.
   * @param locator Key property. See {@link WorkerContacts.locator}.
   * @param description Key property. See {@link WorkerContacts.description}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerContacts`.
   */
  delete(
    personnelNumber: string,
    type: LogisticsElectronicAddressMethodType,
    locator: string,
    description: string
  ): DeleteRequestBuilder<WorkerContacts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerContacts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerContacts` by taking the entity as a parameter.
   */
  delete(entity: WorkerContacts<T>): DeleteRequestBuilder<WorkerContacts<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    type?: LogisticsElectronicAddressMethodType,
    locator?: string,
    description?: string
  ): DeleteRequestBuilder<WorkerContacts<T>, T> {
    return new DeleteRequestBuilder<WorkerContacts<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerContacts
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            Type: type!,
            Locator: locator!,
            Description: description!
          }
    );
  }
}
